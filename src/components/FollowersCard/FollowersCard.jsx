import React from 'react'
import { Followers } from '../Data/FollowersData'
import './followersCard.css'
export const FollowersCard = () => {
  return (
    <div className='followersCard'>
      <h3>Who is following you</h3>
      {Followers.map((followers,i)=>{
        return (
          <div className="follower">
           <div>
            <img src={followers.img} alt="" className='followersImg'/>
            <div className="name">
              <span>{followers.name}</span>
              <span>@{followers.username}</span>

            </div>
            </div>
            <button className='button-all fc-button'>Follow</button>
          </div>
          )
      })}
    </div>
  )
}
