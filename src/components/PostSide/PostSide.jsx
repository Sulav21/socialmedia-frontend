import React from 'react'
import { Posts } from '../Posts/Posts'
import { PostShare } from '../PostShare/PostShare'
import './postSide.css'
export const PostSide = () => {
  return (
    <div className='postSide'>
        <PostShare />
        <Posts />
    </div>
  )
}
