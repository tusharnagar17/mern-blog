import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='max-w-5xl mx-auto  py-4 flex justify-between items-center'>
        <div className='text-2xl font-semibold'>MyBlog</div>
        <div className='flex justify-between gap-6 items-center'>
          <div><Link to={`/login`} >Login</Link></div>
          <div><Link to={`/register`} >Register</Link></div>
        </div>
      </div>
  )
}

export default NavBar