import React from 'react'

export default function Header({ left, center, right }) {
  return (
    <div className='Header flex items-center'>
      <div className='left flex justify-center items-center w-4 p-0.5'> {left}</div>
      <div className='center py-0.5 flex-1'>{center}</div>
      <div className='right flex justify-center items-center w-4 p-0.5'>{right}</div>
    </div>
  )
}
