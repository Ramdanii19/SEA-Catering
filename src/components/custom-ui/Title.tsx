import React from 'react'

interface TitleProps {
  title: string
  subtitle: string
}

const Title = (props: TitleProps) => {
  const { title, subtitle } = props
  return (
    <div className="flex justify-center mb-16">
      <div className="w-full flex flex-col items-center text-center gap-2">
        <p className='font-extrabold text-[#0F75C8] text-5xl'>{title}</p>
        <p className='max-w-72 text-xl font-semibold text-[#737373] text-center'>{subtitle}</p>
      </div>
    </div>
  )
}

export default Title