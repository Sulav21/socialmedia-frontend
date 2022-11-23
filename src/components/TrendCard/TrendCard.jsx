import React from 'react'
import { TrendData } from '../Data/TrendData'
import './trendCard.css'

export const TrendCard = () => {
  return (
    <div className="trendCard">
        <h3>Trends for you</h3>
       {TrendData.map((trend,i)=>{
        return (
            <div className="trend">
                <span>#{trend.name}</span>
                
            </div>
        )
       })}
    </div>
  )
}
