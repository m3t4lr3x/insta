import React from 'react'
import Image from 'next/image'
import { SearchIcon, PlusCircleIcon } from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
import { useSession, signIn, signOut  } from 'next-auth/react'
import { modalState } from '../atom/modalAtom'
import { useRecoilState } from 'recoil'
import { useRouter } from 'next/router'

export default function Header() {
    const { data: session } = useSession();
    // console.log(session)
    const [open, setOpen] = useRecoilState(modalState);
    const router = useRouter()

    return (
        <div className='shadow-sm border-b sticky top-0 bg-white z-30'>
            <div className='flex items-center justify-between max-w-6xl mx-4 xl:mx-auto'>

                {/* Left */}
                <div className='cursor-pointer h-24 w-24 relative hidden lg:inline-grid'>
                    <Image
                        src='/assets/Instagram_logo.png' 
                        layout='fill' 
                        className='object-contain'
                        alt='logo'
                        onClick={()=>router.push("/")}
                    />
                </div>
                <div className='cursor-pointer h-24 w-10 relative lg:hidden'>
                    <Image
                        src='/assets/Instagram_icon.png'
                        layout='fill'
                        className='object-contain'
                        alt='logo'
                        onClick={()=>router.push("/")}
                    />
                </div>

                {/* Middle */}
                <div className='relative'>
                    <div className='absolute top-2 left-2'>
                        <SearchIcon className='h-5 text-gray-500'/>
                    </div>
                    <input className='bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md' type='text' placeholder='Search'/>
                </div>

                {/* Right */}
                <div className='flex space-x-4 items-center justify-center'>
                    <HomeIcon 
                        className='h-6 cursor-pointer hidden lg:inline-flex hover:scale-125 transition-transform duration-200 easy-out'
                        onClick={()=>router.push("/")}
                    />
                    {session ? (
                        <>
                            <PlusCircleIcon 
                                onClick={()=>setOpen(true)}
                                className='h-6 mr-4 cursor-pointer hover:scale-125 transition-transform duration-200 easy-out'
                            />
                            <img 
                                onClick={signOut} 
                                className='h-10 rounded-full cursor-pointer' 
                                src={session.user.image} 
                                alt='user-image' 
                            />
                            {/* <Image 
                                onClick={signOut} 
                                className='h-10 rounded-full cursor-pointer' 
                                src={session.user.image} 
                                width={40}
                                height={40}
                                alt='user-image' 
                            /> */}
                        </>
                    ) : (
                        <button onClick={signIn}>Sign in</button>
                    )}
                </div>
            </div>
        </div>
    )
}
