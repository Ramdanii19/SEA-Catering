'use client'

import CustomModal from '@/components/custom-ui/Modal'
import Image from 'next/image'
import React from 'react'
import { FaCheck } from 'react-icons/fa'

const plans = [
  {
    title: 'Rencana Diet',
    price: 'Rp30.000/makan',
    image: '/diet.jpg',
    description: 'Program diet seimbang untuk menurunkan berat badan tanpa kelaparan.',
    benefits: [
      'Rendah kalori',
      'Mengandung serat tinggi',
      'Cocok untuk penurunan berat badan',
    ],
    modal: {
      deskripsi: 'Program diet seimbang untuk menurunkan berat badan.',
      gizi: 'Rendah kalori (±400 kcal), tinggi serat, rendah lemak jenuh.',
      manfaat:
        'Mendukung pembakaran lemak, menjaga kenyang lebih lama, menyehatkan pencernaan.',
      cocokUntuk:
        'Cocok bagi yang ingin menurunkan berat badan atau menjaga berat ideal.',
    },
  },
  {
    title: 'Rencana Protein',
    price: 'Rp40.000/makan',
    image: '/protein.png',
    description: 'Paket tinggi protein untuk membangun otot dan menjaga kekuatan tubuh.',
    benefits: [
      'Tinggi protein',
      'Membantu pembentukan otot',
      'Energi tahan lama',
    ],
    modal: {
      deskripsi:
        'Paket ini dirancang untuk mendukung pembentukan otot dan pemulihan tubuh, sangat ideal bagi Anda yang aktif berolahraga atau ingin menambah massa otot.',
      gizi:
        'Tinggi protein (±30–40g per porsi), sedang kalori (±500–600 kcal), lemak sehat, rendah gula.',
      manfaat:
        'Membantu regenerasi otot, meningkatkan metabolisme, dan menjaga energi harian.',
      cocokUntuk:
        'Cocok untuk pelaku gym, atlet, atau siapa pun yang ingin meningkatkan asupan protein harian.',
    },
  },
  {
    title: 'Rencana Royal',
    price: 'Rp60.000/makan',
    image: '/royal.png',
    description:
      'Paket eksklusif dengan bahan premium untuk gaya hidup sehat mewah.',
    benefits: [
      'Bahan organik premium',
      'Rasa istimewa',
      'Nutrisi lengkap seimbang',
    ],
    modal: {
      deskripsi:
        'Paket eksklusif dengan bahan premium dan menu variatif. Memberikan pengalaman makan sehat yang mewah dan lengkap dari sisi gizi maupun rasa.',
      gizi:
        'Keseimbangan lengkap: protein tinggi, serat tinggi, vitamin & mineral optimal, ±700–800 kcal.',
      manfaat:
        'Memberi nutrisi harian secara menyeluruh, meningkatkan kualitas hidup, menjaga daya tahan tubuh dan vitalitas.',
      cocokUntuk:
        'Cocok untuk eksekutif sibuk, lansia aktif, atau siapa pun yang menginginkan makanan sehat tanpa kompromi.',
    },
  },
]

const Menu = () => {
  return (
    <div className="min-h-screen py-28 px-6 bg-gray-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
          >
            <Image
              src={plan.image}
              alt={plan.title}
              width={600}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 flex flex-col items-center text-center gap-3">
              <h2 className="text-2xl font-bold text-primary">{plan.title}</h2>
              <p className="text-lg font-semibold text-gray-700">{plan.price}</p>
              <p className="text-gray-600 text-sm">{plan.description}</p>
              <div className="flex flex-col gap-2 mt-2">
                {plan.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <FaCheck className="text-primary" />
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <CustomModal
                  title={plan.title}
                  deskripsi={plan.modal.deskripsi}
                  gizi={plan.modal.gizi}
                  manfaat={plan.modal.manfaat}
                  cocokUntuk={plan.modal.cocokUntuk}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menu
