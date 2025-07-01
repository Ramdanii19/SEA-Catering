import Image from 'next/image'
import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaUserTie } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="w-full bg-gradient-to-br from-white to-blue-50 justify-center items-center flex h-screen">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Info Section */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-700">
            Have any questions or want a free estimate? Reach out to us — we&apos;re always happy to help you!
          </p>

          <div className="bg-white p-6 rounded-2xl shadow-xl space-y-4">
            <div className="flex items-center gap-4">
              <FaUserTie className="text-primary text-xl" />
              <p className="text-gray-800 font-medium">Manager: Brian</p>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-primary text-xl" />
              <p className="text-gray-800">0812-3456-789</p>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-primary text-xl" />
              <p className="text-gray-800">contact@Brian.com</p>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-primary text-xl" />
              <p className="text-gray-800">2271 Bandung, Lilburn, GA 30047</p>
            </div>
            <div className="flex items-start gap-4">
              <FaClock className="text-primary text-xl mt-1" />
              <p className="text-gray-800">
                <span className="font-medium">Monday – Friday</span><br />
                8:00 am – 5:00 pm
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-[420px] rounded-2xl shadow-lg overflow-hidden">
            <Image
              src="/images/user/owner.jpg"
              alt="Manager Brian"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact
