import React from 'react'
import './infoCard.css'
import {UilPen} from '@iconscout/react-unicons'
export const InfoCard = () => {
  return (
    <div className="infoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
        <UilPen width='1.2rem'/>

        </div>
      </div>
      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>
          in Relationship
        </span>
      </div>
      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>
         Sydney
        </span>
      </div>
      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>
          Google
        </span>
      </div>
      <button className='button-all b-logout'>Logout</button>
    </div>
  )
}
