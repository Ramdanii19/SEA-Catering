'use client'

import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import Rating from './Ratting'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

type ReviewBlock = {
  type: string
  children: { text: string; type?: string }[]
}

type Testimonial = {
  id: number
  review: ReviewBlock[]
  rating: number
}

export default function Ulasan({ refreshTrigger }: { refreshTrigger: number }) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/testimonials?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        /* eslint-disable @typescript-eslint/no-explicit-any */
        const mapped = (data.data || []).map((item: any) => ({
          id: item.id,
          review: item.review,
          rating: item.rating,
        }))
        setTestimonials(mapped)
      })
      .catch((err) => {
        console.error('Error fetching testimonials:', err)
      })
      .finally(() => setLoading(false))
  }, [refreshTrigger])

  return (
    <div className="relative w-full overflow-x-hidden">
      {/* Swiper + Buttons in one relative container */}
      {loading ? (
        <p className="text-gray-500 text-center w-full">Memuat testimoni...</p>
      ) : testimonials.length > 0 ? (
        <div className="relative">
          {/* Tombol Prev */}
          <button className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <FaChevronLeft className="text-gray-700" size={30} />
          </button>

          {/* Swiper */}
          <Swiper
            modules={[Navigation]}
            loop={true}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="px-10"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id} className="h-full min-w-0">
                <div className="flex flex-col items-center gap-3 p-4 rounded-lg h-full shadow-md bg-white">
                  <p className="font-semibold">User</p>
                  <Rating rating={item.rating} />
                  <p className="text-center text-sm text-gray-600">
                    {item.review?.[0]?.children?.[0]?.text || 'Tidak ada review'}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Tombol Next */}
          <button className="custom-next absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <FaChevronRight className="text-gray-700" size={30} />
          </button>
        </div>
      ) : (
        <p className="text-gray-500 text-center w-full">Belum ada testimoni</p>
      )}
    </div>
  )
}
