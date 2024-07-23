import React from 'react'

function Stripe({url, num}) {
  return (
    <div className='w-[16.66%] flex items-center justify-between px-4 py-5 border-t border-b border-r border-zinc-600'>
      <img src={url}/>
      <span className='font-semibold'>{num}</span>
    </div>
  )
}

export default Stripe
