import React, { useEffect, useState } from 'react'
import minifaker from 'minifaker'
import "minifaker/locales/en"
import Story from './Story'

export default function Stories() {
    const [storyUsers, setStoryUser]= useState([])
    useEffect(()=>{
        const storyUsers = minifaker.array(20,(i)=>(
        {
            username:minifaker.username({ locale:"en" }).toLowerCase(),
            img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
            id: i,
        })
        );
        setStoryUser(storyUsers);
        console.log(storyUsers)
    },[])
    //to remove scrollbar add a package from tailwindcssscrollbar and add the plugin to the tailwind config file
  return (
    <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border overflow-x-scroll rounded-sm scrollbar-none'>
      {storyUsers.map(user =>(
        <Story key={user.id} username={user.username} img={user.img}/>
      ))}
    </div>
  )
}
