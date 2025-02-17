import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

function Button({title='Get Started'}) {
  return (
    <div className='min-w-40 px-4 py-2 rounded-full flex items-center justify-between text-black bg-[#faf5ff]'>
      <span className='text-sm font-medium'>{title}</span>
      <IoIosReturnRight />
    </div>
  )
}

export default Button
