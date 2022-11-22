import React from 'react'
import './postShare.css'
import profileImage from '../../img/profileImg.jpg'
import {UilScenery} from '@iconscout/react-unicons'
import {UilPlayCircle} from '@iconscout/react-unicons'
import {UilLocationPoint} from '@iconscout/react-unicons'
import {UilSchedule} from '@iconscout/react-unicons'


export const PostShare = () => {
  return (
    <div className="postShare">
    <img src={profileImage} alt="" />
    <div>
      <input type='text' placeholder="What's happening" />
      <div className="postoptions">
    <div className="option">
    <UilScenery />
    Photo
    </div>
    <div className="option">
    <UilPlayCircle />
    Video
    </div>
    <div className="option">
    <UilLocationPoint />
    Location
    </div>
    <div className="option">
    <UilSchedule />
    Schedule
    </div>
    </div>
    </div>
 
    </div>
  )
}
