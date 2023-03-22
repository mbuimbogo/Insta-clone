import React from 'react'

export default function MiniProfile() {
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
      <img
      className='h-16 rounded-full border p-[2px]'
       src="https://pps.whatsapp.net/v/t61.24694-24/266085040_763312398451113_5669021778600555408_n.jpg?ccb=11-4&oh=01_AdQGgiBhMM9hcVyr4FAhFENGFQSe79pSq2a1sxZU33Loow&oe=6426B67A" alt="userImage" />
      <div className="flex-1 ml-4">
        <h2 className='font-bold'>munjiru</h2>
        <h3 className='text-sm text-gray-400'>Welcome to instagram</h3>
      </div>
      <button className='font-semibold text-blue-400 text-sm'>Sign Out</button>
    </div>
  )
}
