import React, { useEffect, useState } from 'react'
import { DotsHorizontalIcon, HeartIcon, ChatIcon, BookmarkIcon, EmojiHappyIcon } from '@heroicons/react/outline'
import { useSession } from 'next-auth/react'
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'
import Moment from 'react-moment'

export default function Post({ id, username, userImg, img, caption }) {

    const {data:session} = useSession()
    const [comment, setComment] = useState('')
    const [comments, setComments] = useState([])
    useEffect(() => {
      const unsubscribe = onSnapshot(
        query(collection(db, 'posts', id, 'comments'), orderBy('timestamp', 'desc')), (snapshot) => {setComments(snapshot.docs)}
      )
    }, [db, id])
    

    async function sendComment(event){
        event.preventDefault()
        const commentToSend = comment
        setComment('')
        await addDoc(collection(db, 'posts', id, 'comments'), {
            comment: commentToSend,
            username:session.user.username,
            userImage: session.user.image,
            timestamp:serverTimestamp(),
        })
    }

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
            {comments.length > 0 && (
                <div className='mx-10 max-h-24 overflow-y-scroll scrollbar-none'>
                    {comments.map(comment => (
                        <div className='flex items-center space-x-2 mb-2'>
                            <img 
                                className='h-7 rounded-full object-cover'
                                src={comment.data().userImage} 
                                alt='user-image'/>
                            {/* <Image 
                                className='h-7 rounded-full object-cover'
                                src={comment.data().userImage} 
                                alt='user-image'
                                width={20}
                                height={20}
                            /> */}
                            <p className='font-semibold'>{comment.data().username}</p>
                            <p className='flex-1 truncate'>{comment.data().comment}</p>
                            <Moment fromNow>
                                {comment.data().timestamp?.toDate()}
                            </Moment>
                        </div>
                    ))}
                </div>
            )}

            {/* Post input Comment */}
            {session && (
                <form className='flex items-center p-4' action=''>
                    <EmojiHappyIcon 
                        className='h-7'
                    />
                    <input 
                        value={comment}
                        onChange={(event)=>setComment(event.target.value)}
                        className='border-none flex-1 focus:ring-0' 
                        type='text' 
                        placeholder='Enter your comment ...' />
                    <button 
                        onClick={sendComment}
                        hidden={!comment.trim()} 
                        type='submit'
                        className='text-blue-400 font-bold'>Post</button>
                </form>
            )}

        </div>
    )
}
