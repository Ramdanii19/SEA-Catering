import React from 'react'
import { Input } from '../ui/input'

interface InputIconsProps {
  type: string
  placeholder: string
  icon: React.ReactNode
}


const InputIcons = (props: InputIconsProps) => {
  const { type, placeholder, icon } = props
  return (
    <div className="relative w-full max-w-md">
      <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
        <div className='text-[#0F75C8]'>{icon}</div>
      </span>
      <Input
        type={type}
        placeholder={placeholder}
        className="pl-10 py-6 bg-white shadow-md placeholder:text-[#0F75C8] placeholder:font-medium"
      />
    </div>
  )
}

export default InputIcons