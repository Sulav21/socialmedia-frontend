import React from 'react'
import { PostSide } from '../../components/PostSide/PostSide'
import { ProfileSide } from '../../components/profileSide/ProfileSide'
import './home.css'
export const Home = () => {
  return (
    <div className='home'>
        <ProfileSide />
        <PostSide />
        <div className='rightSide'>c</div>

    </div>
  )
}
