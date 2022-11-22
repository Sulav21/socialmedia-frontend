import React from 'react'
import { FollowersCard } from '../FollowersCard/FollowersCard'
import { LogoSearch } from '../LogoSearch/LogoSearch'
import { ProfileCard } from '../profileCard/ProfileCard'
import './profileSide.css'
export const ProfileSide = () => {
  return (
    <div className='profileSide'>
        <LogoSearch />
        <ProfileCard />
        <FollowersCard />
    </div>
  )
}
