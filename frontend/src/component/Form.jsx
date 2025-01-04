import React, { useState  } from 'react'
import { logIn } from '../Service/LoginService'
import toast, { Toaster } from 'react-hot-toast'

import { Link, useNavigate } from 'react-router-dom';

function Form() {
  const [email , setEmail] = useState()
  const [password , setPassword] = useState()
  const navigate = useNavigate()
  
    const login= async (e)=>{
        e.preventDefault()
        
 
        try {
      const user = {"email":email,"password":password};

       const  response = await logIn(user)
       toast.success('Successfully login!')
       console.log("response =>" ,response);
       localStorage.setItem('user_data',JSON.stringify(response.data.user))
       localStorage.setItem('user_token',response.data.token)
       
       setEmail('')
       setPassword('')
       navigate('/home')
 
     } catch (error) {
           console.log(error);
       toast.error(error.response.data.message)
     }
    }
 
 
   
  return (
    <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-100'>
    <h1 className='text-5xl font-semibold'>Welcome Back</h1>
    <Toaster />
    
    <p className='font-medium text-lg text-gray-500 mt-4'>Welcome Back! Please enter your details</p>
    <div className='mt-8'>
        <form onSubmit={e=>login(e)}>
        <div>
            <label className='text-lg font-medium'>Email</label>
            <input className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' onChange={(e)=>setEmail(e.target.value)} type='text' placeholder='entre your email' />
        </div>
        <div>
            <label>Password</label>
            <input  className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' onChange={(e)=>setPassword(e.target.value)}  type='password' placeholder='entre your password' />
        </div>
     

        <div className='mt-8 flex justify-between items-center'>

        <div>
            
            <input className='' type='checkbox' id='remember' placeholder='entre your email' />
            <label className='ml-2 font-medium text-base'>Remembre for 30 days</label>
        </div>
        <button className='font-medium text-base text-blue-700'>Forgot password</button>
        </div>
        <div className='mt-8 flex flex-col gap-y-4'>
            <button className='active:scale-[.98] active:duration-75 ease-in-out hover:scale-[1.01] transition-all py-3 rounded-xl bg-blue-700 text-white text-lg font-bold'>Sign In</button>
          
        </div>
        <div className='mt-8 flex justify-center items-center'>
            <p className='font-medium text-base'>Don't have an account</p>
            <Link to="/sign"> <button className='text-blue-700 text-base font-medium ml-2' >Sign Up</button></Link>
        </div>
        </form>
    </div>
    
    </div>
  )
}

export default Form