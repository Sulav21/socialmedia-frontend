import React from 'react'
import { InfoCard } from '../InfoCard/InfoCard'
import {LogoSearch} from '../LogoSearch/LogoSearch'
import {FollowersCard} from '../FollowersCard/FollowersCard'

export const ProfileLeft = () => {
  return (
    <div className="profileSide">
     <LogoSearch />
        <InfoCard />
        <FollowersCard />
    </div>
  )
}
