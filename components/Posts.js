import React, { useEffect, useState } from 'react'
import Post from './Post'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase'

export default function Posts() {
    // const posts = [
    //     {
    //         id:"1",
    //         username: "huahahaha",
    //         userImg:"https://i.pravatar.cc/150?img=1",
    //         img: "/assets/oppo1.jpg",
    //         caption: "Look at me",
    //     },
    //     {
    //         id:"2",
    //         username: "eragon",
    //         userImg:"https://i.pravatar.cc/150?img=2",
    //         img: "/assets/oppo2.jpg",
    //         caption: "I am Hungry",
    //     },
    //     {
    //         id:"3",
    //         username: "gororoo",
    //         userImg:"https://i.pravatar.cc/150?img=3",
    //         img: "/assets/tezos.jpg",
    //         caption: "Beautiful place",
    //     },
    // ]

    const [posts, setPosts] = useState([])
    useEffect(() => {
      const unsubscribe = onSnapshot(
        query(collection(db, 'posts'), orderBy(('timestamp'), 'desc')), (snapshot) =>{
            setPosts(snapshot.docs)
        }
      )
      return unsubscribe
    })
    

    return (
        <div>
            {posts.map(post => (
                <Post 
                    key={post.id}
                    id={post.id}
                    username={post.data().username}
                    userImg={post.data().profileImg}
                    img={post.data().image}
                    caption={post.data().caption}
                />
            ))}
        </div>
    )
}
