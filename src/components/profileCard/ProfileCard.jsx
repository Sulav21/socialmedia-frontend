import React from 'react'
import './profileCard.css'
import cover from '../../img/cover.jpg'
import profile from '../../img/profileImg.jpg'
export const ProfileCard = () => {
  return (
    <div className='profileCard'>
        <div className='profileImages'>
            <img src={cover} alt="" />
            <img src={profile} alt="" />
        </div>
        <div className='profileName' >
            <span>Kriti Scofield</span>
            <span>Senior UI/UX Designer</span>
        </div>
    </div>
  )
}
