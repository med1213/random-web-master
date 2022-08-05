import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Sidebar = () => {
  return (
    <div className='sidebar-menu'>
        <Link to='/'>Dashboard</Link>
        <Link to='/period'>Period</Link>
        <Link to='/random-list'>Random List</Link>
        <Link to='/winner-list'>Winner</Link>
        <Link to='/prize'>Prize</Link>
        <Link to='/user'>User</Link>
    </div>
  )
}

export default Sidebar