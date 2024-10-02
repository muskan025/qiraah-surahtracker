import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <ul className='tail'>
      <li className='webname'>Qiraah</li>
      <li> 
        <Link to={'/playlist'} className='playlist-link'>Playlist</Link>
      </li>
    </ul>
  )
}

export default Header
