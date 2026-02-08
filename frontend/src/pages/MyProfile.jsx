import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets_frontend/assets'
import { toast } from 'react-toastify'
import axios from 'axios'

const MyProfile = () => {

  const { userData, setUserData, token, backendUrl, loadUserProfileData } = useContext(AppContext)

  const [isEdit, setIsEdit] = useState(false)
  const [image, setImage] = useState(false)

  const updateUserProfileData = async () => {

    try {

      const formData = new FormData()

      formData.append('name', userData.name)
      formData.append('phone', userData.phone)
      formData.append('address', JSON.stringify(userData.address))
      formData.append('gender', userData.gender)
      formData.append('dob', userData.dob)

      image && formData.append('image', image)

      const { data } = await axios.post(backendUrl + '/api/user/update-profile', formData, { headers: { token } })

      if (data.success) {
        toast.success(data.message)
        await loadUserProfileData()
        setIsEdit(false)
        setImage(false)
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }

  }

  return userData && (
    <div className='max-w-2xl mx-auto mt-8 bg-white shadow-xl rounded-3xl overflow-hidden'>

      {/* --- Banner --- */}
      <div className='h-48 bg-gradient-to-r from-[#5974b6] via-[#4c7abb] to-[#5974b6] relative'>
        <div className='absolute -bottom-16 left-8'>
          {
            isEdit
              ? <label htmlFor="image">
                <div className='inline-block relative cursor-pointer group'>
                  <img className='w-36 h-36 rounded-full object-cover border-4 border-white shadow-xl opacity-80 group-hover:opacity-60 transition-all duration-300' src={image ? URL.createObjectURL(image) : userData.image} alt="" />
                  <img className='w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300' src={assets.upload_icon} alt="" />
                </div>
                <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden />
              </label>
              : <img className='w-36 h-36 rounded-full object-cover border-4 border-white shadow-xl' src={userData.image} alt="" />
          }
        </div>
      </div>

      {/* --- Rest of Content --- */}
      <div className='pt-24 px-8 pb-10'>

        {/* Name Input/Display */}
        {
          isEdit
            ? <input className='w-full bg-gray-50 text-3xl font-semibold text-gray-800 border-b-2 border-primary focus:outline-none focus:border-blue-600 transition-colors pb-1' type="text" value={userData.name} onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} />
            : <p className='font-bold text-3xl text-gray-800'>{userData.name}</p>
        }

        <hr className='bg-gray-200 h-[1px] border-none my-6' />

        {/* Contact Info */}
        <div className='bg-gradient-to-r from-blue-50 to-white p-5 rounded-2xl'>
          <p className='text-primary font-bold uppercase tracking-wider text-xs mb-4 flex items-center gap-2'>
            <span className='w-1 h-4 bg-primary rounded-full'></span>
            Contact Information
          </p>

          <div className='grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 text-sm'>

            {/* Email */}
            <div className='flex flex-col gap-1'>
              <p className='font-medium text-gray-600'>Email ID:</p>
              <p className='text-blue-600 font-medium break-all'>{userData.email}</p>
            </div>

            {/* Phone */}
            <div className='flex flex-col gap-1'>
              <p className='font-medium text-gray-600'>Phone:</p>
              {
                isEdit
                  ? <input className='bg-gray-50 border border-gray-300 rounded px-2 py-1 w-full max-w-xs focus:ring-2 focus:ring-blue-100 outline-none' type="text" value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} />
                  : <p className='text-gray-800'>{userData.phone}</p>
              }
            </div>

            {/* Address */}
            <div className='flex flex-col gap-1 md:col-span-2'>
              <p className='font-medium text-gray-600'>Address:</p>
              {
                isEdit
                  ? <div className='flex flex-col gap-2 w-full max-w-md'>
                    <input className='bg-gray-50 border border-gray-300 rounded px-2 py-1 focus:ring-2 focus:ring-blue-100 outline-none' onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={userData.address.line1} type="text" placeholder="Address Line 1" />
                    <input className='bg-gray-50 border border-gray-300 rounded px-2 py-1 focus:ring-2 focus:ring-blue-100 outline-none' onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={userData.address.line2} type="text" placeholder="Address Line 2" />
                  </div>
                  : <p className='text-gray-800 leading-relaxed'>
                    {userData.address.line1}
                    <br />
                    {userData.address.line2}
                  </p>
              }
            </div>

          </div>
        </div>

        <hr className='bg-gray-200 h-[1px] border-none my-6' />

        {/* Basic Info */}
        <div className='bg-gradient-to-r from-orange-50 to-white p-5 rounded-2xl'>
          <p className='text-secondary font-bold uppercase tracking-wider text-xs mb-4 flex items-center gap-2'>
            <span className='w-1 h-4 bg-secondary rounded-full'></span>
            Basic Information
          </p>

          <div className='grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 text-sm'>

            {/* Gender */}
            <div className='flex flex-col gap-1'>
              <p className='font-medium text-gray-600'>Gender:</p>
              {
                isEdit
                  ? <select className='bg-gray-50 border border-gray-300 rounded px-2 py-1 w-full max-w-[120px] focus:ring-2 focus:ring-blue-100 outline-none' onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  : <p className='text-gray-800'>{userData.gender}</p>
              }
            </div>

            {/* Birthday */}
            <div className='flex flex-col gap-1'>
              <p className='font-medium text-gray-600'>Birthday:</p>
              {
                isEdit
                  ? <input className='bg-gray-50 border border-gray-300 rounded px-2 py-1 w-full max-w-[150px] focus:ring-2 focus:ring-blue-100 outline-none' type='date' onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} value={userData.dob} />
                  : <p className='text-gray-800'>{userData.dob}</p>
              }
            </div>

          </div>
        </div>

        {/* Actions */}
        <div className='mt-10 flex justify-center gap-4'>
          {
            isEdit
              ? <>
                <button className='bg-gradient-to-r from-primary to-[#4c7abb] text-white px-10 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5' onClick={updateUserProfileData}>Save Changes</button>
                <button className='border-2 border-gray-300 text-gray-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all duration-300' onClick={() => { setIsEdit(false); setImage(false) }}>Cancel</button>
              </>
              : <button className='bg-gradient-to-r from-primary to-[#4c7abb] text-white px-10 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5' onClick={() => setIsEdit(true)}>Edit Profile</button>
          }
        </div>

      </div>

    </div>
  )
}

export default MyProfile