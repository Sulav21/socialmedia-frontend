import React from 'react'
import './logoSearch.css'
import logo from '../../img/logo.png'
import {UilSearch} from '@iconscout/react-unicons'
export const LogoSearch = () => {
  return (
    <div className='logoSearch'>
        <img src={logo} alt='' />
        <div className='search' >
            <input type='search' placeholder='#Explore' />
            <div className='s-icon'>
                <UilSearch />
            </div>

        </div>
    </div>
  )
}
