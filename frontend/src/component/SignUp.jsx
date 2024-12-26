import React, { useState } from 'react'
import { addUser } from '../Service/LoginService'
import { useNavigate } from 'react-router-dom'

function SignUp() {
    const [username,SetUsername] = useState()
    const [email,SetEmail] = useState()
    const [password,setPass] = useState()
    const nav = useNavigate();
    const handelSubmit = async (e) =>{
        e.preventDefault();
        const user = {"name":username,"email":email,"password":password};
        await addUser(user)
        nav('/login')
    }
  return (

        
   <div className='flex w-full h-screen'>
   <div className='w-full flex items-center justify-center lg:w-1/2 '>
   <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-100'>
    <h1 className='text-5xl font-semibold'>Hello there !!</h1>
    <p className='font-medium text-lg text-gray-500 mt-4'>Welcome ! Please enter your details</p>
    <div className='mt-8'>
        <form onSubmit={e=>handelSubmit(e)}>
    <div>
            <label className='text-lg font-medium'>Username </label>
            <input className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' onChange={(e)=> SetUsername(e.target.value)} type='text' placeholder='entre your name' />
        </div>
        <div>
            <label className='text-lg font-medium'>Email</label>
            <input className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' onChange={(e)=> SetEmail(e.target.value)} type='text' placeholder='entre your email' />
        </div>
        <div>
            <label>Password</label>
            <input  className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' onChange={(e)=> setPass(e.target.value)} type='password' placeholder='entre your password' />
        </div>
     

       
        <div className='mt-8 flex flex-col gap-y-4'>
            <button className='active:scale-[.98] active:duration-75 ease-in-out hover:scale-[1.01] transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold'>Sign Up</button>
          
        </div>
        </form>
    </div>
    </div>
   </div>
   <div className=' hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200'>
    <div className='w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-spin' />
    <div className='w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg' />
   </div>
 </div>
    
  )
}

export default SignUp