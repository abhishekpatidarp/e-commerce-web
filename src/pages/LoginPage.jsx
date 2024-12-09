import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { login } from '../store/authSlice';
import { KeyRound,  UserCheck2 } from 'lucide-react';
import toast from 'react-hot-toast';

function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const user = JSON.parse(localStorage.getItem("user"));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handlelogin() {
    console.log(user);
    
    if (user.username !== username || user.password !== password) {
      return toast.error("Inavlid Credentials!")
    }
    dispatch(login({ username, password }));
    toast.success("Login Successfull")
    navigate("/");
  }
  return (
    <div className='flex items-center flex-col items mt-[150px]'>
      < Link to="/signup" className='text-blue-700 hover:underline'>Signup</Link>
      <div className='flex mt-[14px] border-2 px-2  rounded-md gap-2 h-11 w-[250px]'>
        <UserCheck2 className='h-10' />
        <input className='border-none outline-none' type="text" placeholder='username' onChange={(e) => setUsername(e.target.value)} />

      </div>
      <div className='flex mt-[14px] border-2 px-2  rounded-md gap-2 h-11 w-[250px]'>
        <KeyRound className='h-10' />
        <input className='' type="text" placeholder='********' onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handlelogin} className='  mt-3 bg-black text-white text-[20px] w-[250px] h-[50px] rounded-md'>Login</button>
    </div>
  )
}

export default LoginPage