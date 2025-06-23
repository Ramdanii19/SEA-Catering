'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'

import Image from 'next/image'
import Rating from './Ratting'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'


const reviews = [
  {
    name: "Muhamad Ramdani",
    rating: 5,
    message: "Makanannya enak dan bergizi. Cocok untuk diet sehat harian saya.",
    image: "/images/user/owner.jpg"
  },
  {
    name: "Dewi Kartika",
    rating: 4,
    message: "Pengiriman cepat dan rasa makanannya sangat lezat. Akan pesan lagi!",
    image: "/images/user/user-01.jpg"
  },
  {
    name: "Andi Pratama",
    rating: 3,
    message: "Beberapa menu kurang sesuai selera saya, tapi secara keseluruhan oke.",
    image: "/images/user/user-02.jpg"
  },
  {
    name: "Siti Rahma",
    rating: 5,
    message: "Saya sangat suka variasi menu yang ditawarkan. Selalu fresh!",
    image: "/images/user/user-03.jpg"
  },
  {
    name: "Budi Santoso",
    rating: 4,
    message: "Porsinya pas dan pelayanan sangat ramah. Recomended untuk langganan!",
    image: "/images/user/user-04.jpg"
  }
]

export function Ulasan() {
  return (
    <div className="w-full flex">
      <button className="custom-prev ...">
        <FaChevronLeft className="text-gray-700" size={30} />
      </button>
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

      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center gap-3 p-4 rounded-lg h-full shadow-md bg-white'>
              <Image
                src={review.image}
                alt={review.name}
                width={80}
                height={80}
                className='rounded-full object-cover'
              />
              <p className="font-semibold">{review.name}</p>
              <Rating rating={review.rating} />
              <p className='text-center text-sm text-gray-600'>{review.message}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="custom-next ...">
        <FaChevronRight className="text-gray-700" size={30} />
      </button>
    </div>
  )
}


