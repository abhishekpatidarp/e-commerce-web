import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='flex w-full justify-center text-md'> <div className='w-[40%] bg-slate-900 py-2 px-11 mt-2 shadow-md shadow-slate-400 rounded-md text-white items-center flex justify-between'>
        <Link to="/">Home</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        <Link to="/productcreate">Productcreate</Link>
        </div>
    </div>

  )
}

export default Header