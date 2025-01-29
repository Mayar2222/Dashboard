import React from 'react'
import { HiOutlineSearch } from 'react-icons/hi'

export default function Header() {
  return (
    <div className='bg-white h-16 px-4 flex justify-between items-center border-b border-gray-200'>  
    <div className='relative'>
        <HiOutlineSearch fontSize={20} className='text-gray-400 absolute top-1/2 -translate-y-1/2 lef-3'/>
        <input type="text" placeholder='Search...' className='text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-sm pl-l pr-4' ></input></div>
    <div>side buttons</div>
    </div>

  )
}
