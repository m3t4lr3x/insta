import React from 'react'
import { DotsHorizontalIcon, HeartIcon, ChatIcon, BookmarkIcon, EmojiHappyIcon } from '@heroicons/react/outline'
import { useSession } from 'next-auth/react'

export default function Post({ id, username, userImg, img, caption }) {

    const {data:session} = useSession()

    return (
        <div className='bg-white my-7 border rounded-md'>
            {/* Post Header */}
            <div className='flex items-center justify-between p-5'>
                <div className='flex items-center'>
                    <img className='h-12 rounded-full object-cover border p-1 mr-3' src={userImg} alt={username} />
                    <h1 className='font-bold'>{username}</h1>
                </div>
                <DotsHorizontalIcon 
                    className='h-5'
                />
            </div>

            {/* Post Image */}
            <img className='object-cover w-full' src={img} alt='' />

            {/* Post Button */}
            {session && (
                <div className='flex justify-between items-center px-4 pt-4'>
                    <div className='flex items-center space-x-4'>
                        <HeartIcon 
                            className='btn'
                        />
                        <ChatIcon 
                            className='btn'
                        />
                    </div>
                    <BookmarkIcon 
                        className='btn'
                    />
                </div>
            )}

            {/* Post Comments */}
            <p className='p-5 truncate'>
                <span className='font-bold mr-2'>
                    {username}
                </span>
                {caption}
            </p>

            {/* Post input Comment */}
            {session && (
                <form className='flex items-center p-4' action=''>
                    <EmojiHappyIcon 
                        className='h-7'
                    />
                    <input className='border-none flex-1 focus:ring-0' type='text' placeholder='Enter your comment ...' />
                    <button className='text-blue-400 font-bold'>Post</button>
                </form>
            )}

        </div>
    )
}
