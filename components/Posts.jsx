import React from 'react'
import Post from './Post'

export default function Posts() {
     const posts = [
        {
        id: "1",
        username: "munjiru",
        userImg: "https://pps.whatsapp.net/v/t61.24694-24/266085040_763312398451113_5669021778600555408_n.jpg?ccb=11-4&oh=01_AdQGgiBhMM9hcVyr4FAhFENGFQSe79pSq2a1sxZU33Loow&oe=6426B67A",
        img:"https://images.unsplash.com/photo-1679392454750-a02b9753e683?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        caption: "Thanks for life"
     },
     {
        id: "1",
        username: "wanjiru",
        userImg: "https://pps.whatsapp.net/v/t61.24694-24/266085040_763312398451113_5669021778600555408_n.jpg?ccb=11-4&oh=01_AdQGgiBhMM9hcVyr4FAhFENGFQSe79pSq2a1sxZU33Loow&oe=6426B67A",
        img:"https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        caption: "Awesome"
     }
    ]
  return (
    <div>
      {posts.map(post=>(
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
