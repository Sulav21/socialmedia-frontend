import React from 'react'
import { PostsData } from '../Data/PostsData'
import { Post } from '../Post/Post'
import './posts.css'


export const Posts = () => {
  return (
<div className="posts">
    {PostsData.map((post,i)=>{
        return <Post data={post} id={i}/>
    })}
</div>
  )
}
