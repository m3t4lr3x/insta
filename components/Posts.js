import React from 'react'
import Post from './Post'

export default function Posts() {
    const Posts = [
        {
            id:"1",
            username: "huahahaha",
            userImg:"https://i.pravatar.cc/150?img=1",
            img: "/assets/oppo1.jpg",
            caption: "Look at me",
        },
        {
            id:"2",
            username: "eragon",
            userImg:"https://i.pravatar.cc/150?img=2",
            img: "/assets/oppo2.jpg",
            caption: "I am Hungry",
        },
        {
            id:"3",
            username: "gororoo",
            userImg:"https://i.pravatar.cc/150?img=3",
            img: "/assets/tezos.jpg",
            caption: "Beautiful place",
        },
    ]

  return (
    <div>
        {Posts.map(post => (
            <Post 
                key={post.id}
                id={post.id}
                username={post.username}
                userImg={post.userImg}
                img={post.img}
                caption={post.caption}
            />
        ))}
    </div>
  )
}
