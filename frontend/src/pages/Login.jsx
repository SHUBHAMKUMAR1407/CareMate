import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {

  const { backendUrl, token, setToken } = useContext(AppContext)
  const navigate = useNavigate()

  const [state, setState] = useState('Sign Up')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('') // New
  const [dob, setDob] = useState('') // New
  const [address, setAddress] = useState('') // New
  const [gender, setGender] = useState('Not Selected') // New
  const [image, setImage] = useState(false) // New


  const [newPassword, setNewPassword] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault()

    try {

      if (state === 'Sign Up') {
        // Send all fields
        const formData = new FormData()
        formData.append('name', name)
        formData.append('email', email)
        formData.append('password', password)
        formData.append('phone', phone)
        formData.append('dob', dob)
        formData.append('address', JSON.stringify({ line1: address, line2: '' }))
        formData.append('gender', gender)

        if (image) {
          formData.append('image', image)
        }

        const { data } = await axios.post(backendUrl + '/api/user/register', formData)

        if (data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
          navigate('/') // Redirect to Home
        } else {
          toast.error(data.message)
        }
      } else if (state === 'Login') {
        const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })
        if (data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
          navigate('/') // Redirect to Home
        } else {
          toast.error(data.message)
        }
      } else if (state === 'Reset Password') {
        // ... 
        const { data } = await axios.post(backendUrl + '/api/user/reset-password', { email, newPassword })
        if (data.success) {
          toast.success(data.message)
          setState('Login')
          setPassword('')
          setNewPassword('')
        } else {
          toast.error(data.message)
        }
      }

    } catch (error) {
      console.error(error)
      toast.error(error.message)
    }
  }

  // useEffect(() => {
  //   if (token) {
  //     navigate('/')
  //   }
  // }, [token])

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>
          {state === 'Sign Up' ? 'Create Account' :
            state === 'Login' ? 'Login' :
              state === 'Reset Password' ? 'Reset Password' : 'Reset Password'}
        </p>
        <p>
          {state === 'Sign Up' ? 'Please sign up to book appointment' :
            state === 'Login' ? 'Please log in to book appointment' :
              'Enter details to reset password'}
        </p>

        {
          state === 'Sign Up' && (
            <>
              <div className='w-full'>
                <label htmlFor='name'>Full Name</label>
                <input id='name' className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e) => setName(e.target.value)} value={name} required />
              </div>

              <div className='w-full'>
                <label>Profile Photo</label>
                <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="file" onChange={(e) => setImage(e.target.files[0])} />
              </div>

              <div className='w-full'>
                <label>Gender</label>
                <select className='border border-zinc-300 rounded w-full p-2 mt-1' onChange={(e) => setGender(e.target.value)} value={gender}>
                  <option value="Not Selected">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className='w-full'>
                <label htmlFor='phone'>Mobile Number</label>
                <input id='phone' className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e) => setPhone(e.target.value)} value={phone} required placeholder="10-digit mobile number" />
              </div>

              <div className='w-full'>
                <label htmlFor='dob'>Date of Birth</label>
                <input id='dob' className='border border-zinc-300 rounded w-full p-2 mt-1' type="date" onChange={(e) => setDob(e.target.value)} value={dob} required />
              </div>

              <div className='w-full'>
                <label htmlFor='address'>Address</label>
                <textarea id='address' className='border border-zinc-300 rounded w-full p-2 mt-1 h-20 resize-none' onChange={(e) => setAddress(e.target.value)} value={address} required placeholder="Full Address" />
              </div>
            </>
          )
        }

        {
          (state === 'Sign Up' || state === 'Login' || state === 'Reset Password') && (
            <div className='w-full'>
              <p>Email</p>
              <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
            </div>
          )
        }

        {
          (state === 'Sign Up' || state === 'Login') && (
            <div className='w-full'>
              <p>Password</p>
              <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" onChange={(e) => setPassword(e.target.value)} value={password} required />
            </div>
          )
        }

        { }
        {
          state === 'Login' && (
            <p className='text-xs text-red-500 cursor-pointer hover:underline' onClick={() => setState('Reset Password')}>Forgot Password?</p>
          )
        }

        { }
        {
          state === 'Reset Password' && (
            <div className='w-full'>
              <p>New Password</p>
              <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" onChange={(e) => setNewPassword(e.target.value)} value={newPassword} required placeholder="At least 8 characters" />
            </div>
          )
        }

        <button type='submit' className='bg-gradient-to-r from-[#5974b6] to-[#4c7abb] text-white w-full py-2 rounded-md text-base shadow-md hover:scale-105 transition-all duration-300'>
          {state === 'Sign Up' ? 'Create Account' :
            state === 'Login' ? 'Login' :
              state === 'Reset Password' ? 'Reset Password' : 'Submit'}
        </button>

        {
          state === 'Sign Up'
            ? <p>Already have an account? <span onClick={() => setState('Login')} className='text-primary underline cursor-pointer'>Login here</span></p>
            : state === 'Login'
              ? <p>Create an new accout? <span onClick={() => setState('Sign Up')} className='text-primary underline cursor-pointer'>click here</span></p>
              : <p className='text-center w-full text-gray-400 text-xs cursor-pointer' onClick={() => setState('Login')}>Back to Login</p>
        }
      </div>
    </form>
  )
}

export default Login