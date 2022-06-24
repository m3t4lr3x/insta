import React from 'react'
import Image from 'next/image'
import { SearchIcon } from '@heroicons/react/outline'

export default function Header() {
  return (
    <div className='flex items-center justify-between max-w-6xl'>

        {/* Left */}
        <div className='cursor-pointer h-24 w-24 relative hidden lg:inline-grid'>
            <Image
                src='/assets/Instagram_logo.png' 
                layout='fill' 
                className='object-contain'
                alt='logo'
            />
        </div>
        <div className='cursor-pointer h-24 w-10 relative lg:hidden'>
            <Image
                src='/assets/Instagram_icon.png'
                layout='fill'
                className='object-contain'
                alt='logo'
            />
        </div>

        {/* Middle */}
        <div className='relative'>
            <div className='absolute top-2 left-2'>
                <SearchIcon className='h-5 text-gray-500'/>
            </div>
            <input className='bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-sm' type='text' placeholder='Search'/>
        </div>

        {/* Right */}
        <div>
            Right
        </div>
    </div>
  )
}
