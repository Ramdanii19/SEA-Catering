import Card from '@/components/custom-ui/Card';
import InputIcons from '@/components/custom-ui/InputIcons';
import Title from '@/components/custom-ui/Title';
import { Ulasan } from '@/components/custom-ui/Ulasan';
import Image from 'next/image'
import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaRepeat, FaTruckFast } from "react-icons/fa6";
import { IoIosNutrition } from "react-icons/io";

const Dashboard = () => {
  return (
    <div className='w-full h-screen'>
      <div className="h-screen mb-10">
        <div className="absolute h-screen w-7/12 -z-50">
          <Image src="/Cover.png" fill alt='cover' />
        </div>
        <div className="absolute right-0 top-0 h-screen w-3/4 -z-40">
          <Image src="/BG-Hero.png" fill alt='bg-hero' />
        </div>
        <div className="flex justify-between h-full">
          <div className="flex flex-col gap-4 justify-center">
            <div className="">
              <p className='text-5xl font-extrabold text-[#0F75C8]'>Healthy Food, Anytime, Anywhere</p>
              {/* <p className='text-5xl font-extrabold text-[#0F75C8]'>Nutritious Meals for Every Day</p> */}
            </div>
            <div className="">
              <p className='text-lg  font-medium text-[#484848]'>No need to leave your home, healthy meals are ready to be delivered to your doorstep.</p>
              <p className='text-lg  font-medium text-[#484848]'>We are ready to deliver quickly throughout Indonesia.</p>
            </div>
            <div className="mt-4">
              <InputIcons type="string" placeholder="Find Food Here..." icon={<FaSearch />} />
            </div>
          </div>
          <div className="mt-56">
            <Image src="/makanan.png" alt='makanan' width={450} height={450} />
          </div>
        </div>
      </div>

      <div className="w-full mb-20">
        <Title title='Our Features' subtitle='Lets check our service below you will get best service' />
        <div className="grid grid-cols-3 gap-10 px-20">
          <Card icon={<FaTruckFast size={150} />} title='Fast delivery' deskripsi='You can fast order with delivery service, wait for minute then your food will come' />
          <Card icon={<IoIosNutrition size={150} />} title='nutritional information' deskripsi='Complete nutritional information based on the subscription package you choose.' />
          <Card icon={<FaRepeat size={150} />} title='Subscription' deskripsi='Subscription packages are available to suit your healthy lifestyle needs.' />
        </div>
      </div>

      {/* <div className="mb-20">
        <Title title='Berlangganan' subtitle='Healthy meals, one subscription away.' />
        <div className="grid grid-cols-4 gap-10">
          <div className="border-2 rounded-xl">
            <p className='font-bold text-center text-2xl'>Basic Plan</p>
            <p className='text-center text-[#0F75C8] font-bold text-xl'>Rp 150.000/minggu</p>
            <div className="">
              <div className="">
                <p>1x Makan Sehari</p>
                <p>Pagi Atau Siang</p>
              </div>
              <Button>Buy Now</Button>
            </div>
          </div>
          <div className="border rounded-xl">
            <p className='font-bold text-center text-2xl'>Basic Plan</p>
            <p className='text-center text-[#0F75C8] font-bold text-xl'>Rp 150.000/minggu</p>
            <div className="">
              <div className="">
                <p>1x Makan Sehari</p>
                <p>Pagi Atau Siang</p>
              </div>
              <Button>Buy Now</Button>
            </div>
          </div>
          <div className="border rounded-xl">
            <p className='font-bold text-center text-2xl'>Basic Plan</p>
            <p className='text-center text-[#0F75C8] font-bold text-xl'>Rp 150.000/minggu</p>
            <div className="">
              <div className="">
                <p>1x Makan Sehari</p>
                <p>Pagi Atau Siang</p>
              </div>
              <Button>Buy Now</Button>
            </div>
          </div>
          <div className="border rounded-xl">
            <p className='font-bold text-center text-2xl'>Basic Plan</p>
            <p className='text-center text-[#0F75C8] font-bold text-xl'>Rp 150.000/minggu</p>
            <div className="">
              <div className="">
                <p>1x Makan Sehari</p>
                <p>Pagi Atau Siang</p>
              </div>
              <Button>Buy Now</Button>
            </div>
          </div>
        </div>
      </div> */}

      <div className="w-full">
        <Title title='Customer Reviews' subtitle='Customer approved healthy meals' />
        <Ulasan />
      </div>

      <div className="bg-gray-100 text-center py-6 mt-10">
        <div className="text-sm text-gray-600">
          SEA Catering &copy; 2025 · Makanan Sehat, Kapan Saja, Di Mana Saja
        </div>
      </div>

    </div>
  )
}

export default Dashboard