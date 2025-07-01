import CustomModal from '@/components/custom-ui/Modal'
import Image from 'next/image'
import React from 'react'
import { FaCheck } from 'react-icons/fa'

const Menu = () => {
  return (
    <div className='h-screen'>
      <div className="grid grid-cols-3 py-28 gap-10">
        {/* Rencana Diet */}
        <div className="items-center justify-center flex flex-col gap-2">
          <div className="rounded-t-lg">
            <Image src="/diet.jpg" alt="diet" width={450} height={50} className='rounded-t-2xl' />
          </div>
          <div className="flex flex-col text-center gap-2">
            <p className='font-semibold text-3xl'>Rencana Diet</p>
            <p className='font-semibold text-2xl'>Rp30.000/makan</p>
            <p className='text-lg max-w-96'>Program diet seimbang untuk menurunkan berat badan tanpa kelaparan.</p>
            <div className="flex flex-col items-center">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <FaCheck size={25} className='text-primary' />
                  <p className='text-lg'>Rendah kalori</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck size={25} className='text-primary' />
                  <p className='text-lg'>Mengandung serat tinggi</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck size={25} className='text-primary' />
                  <p className='text-lg'>Cocok untuk penurunan berat badan</p>
                </div>
              </div>
            </div>
          </div>
          <CustomModal
            title="Rencana Diet"
            deskripsi="Program diet seimbang untuk menurunkan berat badan."
            gizi="Rendah kalori (±400 kcal), tinggi serat, rendah lemak jenuh."
            manfaat="Mendukung pembakaran lemak, menjaga kenyang lebih lama, menyehatkan pencernaan."
            cocokUntuk="Cocok bagi yang ingin menurunkan berat badan atau menjaga berat ideal."
          />
        </div>

        {/* Rencana Protein */}
        <div className="items-center justify-center flex flex-col gap-2">
          <div className="rounded-t-lg">
            <Image src="/diet.jpg" alt="protein" width={450} height={50} className='rounded-t-2xl' />
          </div>
          <div className="flex flex-col text-center gap-2">
            <p className='font-semibold text-3xl'>Rencana Protein</p>
            <p className='font-semibold text-2xl'>Rp40.000/makan</p>
            <p className='text-lg max-w-96'>Paket tinggi protein untuk membangun otot dan menjaga kekuatan tubuh.</p>
            <div className="flex flex-col items-center">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <FaCheck size={25} className='text-primary' />
                  <p className='text-lg'>Tinggi protein</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck size={25} className='text-primary' />
                  <p className='text-lg'>Membantu pembentukan otot</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck size={25} className='text-primary' />
                  <p className='text-lg'>Energi tahan lama</p>
                </div>
              </div>
            </div>
          </div>
          <CustomModal
            title="Rencana Protein"
            deskripsi="Paket ini dirancang untuk mendukung pembentukan otot dan pemulihan tubuh, sangat ideal bagi Anda yang aktif berolahraga atau ingin menambah massa otot."
            gizi="Tinggi protein (±30–40g per porsi), sedang kalori (±500–600 kcal), lemak sehat, rendah gula."
            manfaat="Membantu regenerasi otot, meningkatkan metabolisme, dan menjaga energi harian."
            cocokUntuk="Cocok untuk pelaku gym, atlet, atau siapa pun yang ingin meningkatkan asupan protein harian."
          />

        </div>

        {/* Rencana Royal */}
        <div className="items-center justify-center flex flex-col gap-2">
          <div className="rounded-t-lg">
            <Image src="/diet.jpg" alt="royal" width={450} height={50} className='rounded-t-2xl' />
          </div>
          <div className="flex flex-col text-center gap-2">
            <p className='font-semibold text-3xl'>Rencana Royal</p>
            <p className='font-semibold text-2xl'>Rp60.000/makan</p>
            <p className='text-lg max-w-96'>Paket eksklusif dengan bahan premium untuk gaya hidup sehat mewah.</p>
            <div className="flex flex-col items-center">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <FaCheck size={25} className='text-primary' />
                  <p className='text-lg'>Bahan organik premium</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck size={25} className='text-primary' />
                  <p className='text-lg'>Rasa istimewa</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck size={25} className='text-primary' />
                  <p className='text-lg'>Nutrisi lengkap seimbang</p>
                </div>
              </div>
            </div>
          </div>
          <CustomModal
            title="Rencana Royal"
            deskripsi="Paket eksklusif dengan bahan premium dan menu variatif. Memberikan pengalaman makan sehat yang mewah dan lengkap dari sisi gizi maupun rasa."
            gizi="Keseimbangan lengkap: protein tinggi, serat tinggi, vitamin & mineral optimal, ±700–800 kcal."
            manfaat="Memberi nutrisi harian secara menyeluruh, meningkatkan kualitas hidup, menjaga daya tahan tubuh dan vitalitas."
            cocokUntuk="Cocok untuk eksekutif sibuk, lansia aktif, atau siapa pun yang menginginkan makanan sehat tanpa kompromi."
          />
        </div>
      </div>
    </div>
  )
}

export default Menu
