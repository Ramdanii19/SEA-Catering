// import Image from 'next/image'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="fixed max-w-screen w-full z-50 px-10 py-5 bg-transparent">
      <div className="flex justify-between items-center">
        <div className="">
          <Image src="/images/logo/logo.png" width={150} height={150} alt='logo' />
        </div>
        <div className="flex gap-5">
          <Link href="/dashboard" className='text-lg text-[#3EB489] font-semibold rounded-full px-3 py-1 bg-white'>Home</Link>
          <Link href="/dashboard" className='text-lg text-white font-semibold rounded-full px-3 py-1 hover:bg-white hover:text-[#3EB489]'>Menu</Link>
          <Link href="/dashboard" className='text-lg text-white font-semibold rounded-full px-3 py-1 hover:bg-white hover:text-[#3EB489]'>Berlangganan</Link>
          <Link href="/dashboard" className='text-lg text-white font-semibold rounded-full px-3 py-1 hover:bg-white hover:text-[#3EB489]'>Hubungi Kami</Link>
          <Link href="/dashboard" className='text-lg text-white font-semibold rounded-full px-3 py-1 hover:bg-white hover:text-[#3EB489]'>Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar