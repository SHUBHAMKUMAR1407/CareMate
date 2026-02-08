import React, { useContext } from 'react'
import { assets } from '../assets/assets_admin/assets'
import { AdminContext } from '../context/AdminContext'
import { DoctorContext } from '../context/DoctorContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const { aToken, setAToken } = useContext(AdminContext)
  const { dToken, setDToken } = useContext(DoctorContext)

  const navigate = useNavigate()

  const logout = () => {
    navigate('/')
    if (aToken) {
      setAToken('')
      localStorage.removeItem('aToken')
    }
    if (dToken) {
      setDToken('')
      localStorage.removeItem('dToken')
    }
  }

  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 bg-white shadow-md'>

      <div className='flex items-center gap-1'>
        <p className='text-3xl font-bold text-[#5974b6] tracking-wide'>CareMate</p>
        <p className='text-xs font-medium text-gray-500 mb-[-10px]'>
          {aToken ? 'Admin Panel' : 'Doctor Panel'}
        </p>
      </div>

      <button onClick={logout} className='bg-[#5974b6] text-white text-sm px-10 py-2 rounded-full hover:bg-[#4c7abb] transition-colors'>Logout</button>
    </div>
  )
}

export default Navbar