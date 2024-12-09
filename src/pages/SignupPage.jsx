import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signup } from '../store/authSlice'
import { Link, useNavigate } from 'react-router-dom'
import { KeyRound, Mail, User, UserCheck } from 'lucide-react'
import toast from 'react-hot-toast'

function SignupPage() {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSignup() {
    dispatch(signup({ username, email, password }));
    toast.success("signup succesfull")
    navigate("/login");
  }
  return (
    <div className='flex items-center flex-col items mt-[150px] '>

      
       
        <p className='flex flex-col items mt-3'>Already have an account?<Link to="/login" className='text-blue-700 hover:underline'>Login</Link></p>
        
      <div className='flex mt-[14px] border-2 px-2  rounded-md gap-2 h-11 w-[250px] '>
      <UserCheck className='h-10'/>
      <input className='border-none outline-none  ' type="text" placeholder='username' onChange={(e) => setUsername(e.target.value)} />
      
      </div>
      <div className='flex mt-[14px] border-2 px-2 h-11 rounded-md gap-2 w-[250px]'>
      <Mail className='h-10' />
      <input className='border-none outline-none ' type="email" placeholder='example@example.com' onChange={(e) => setEmail(e.target.value)} />
      
      </div>
      <div className='flex mt-[14px] border-2 px-2 h-11 rounded-md gap-2 w-[250px]'>
        <KeyRound className='h-10'/>
      <input className='border-none outline-none' type="password" placeholder='*******' onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleSignup} className='  mt-3 bg-black text-white text-[20px] w-[250px] h-[50px] rounded-md'>Signup</button>
    </div>
  )
}

export default SignupPage