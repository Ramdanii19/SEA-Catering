import React from 'react'
import { Button } from '../ui/button'

interface CardProps {
  title: string
  deskripsi: string
  icon: React.ReactNode
}

const Card = (props: CardProps) => {
  const { title, deskripsi, icon } = props
  return (
    <div className="flex flex-col items-center text-center gap-5">
      <div className='text-[#0F75C8]'>{icon}</div>
      <p className='font-bold text-3xl'>{title}</p>
      <p className='font-semibold mb-3'>{deskripsi}</p>
      <Button>Check Out</Button>
    </div>
  )
}

export default Card