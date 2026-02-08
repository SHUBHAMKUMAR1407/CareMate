import React, { useContext, useEffect, useState } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'
import { toast } from 'react-toastify'
import axios from 'axios'

const DoctorProfile = () => {

    const { dToken, profileData, setProfileData, getProfileData, backendUrl } = useContext(DoctorContext)
    const { currency } = useContext(AppContext)
    const [isEdit, setIsEdit] = useState(false)

    const updateProfile = async () => {
        try {
            const updateData = {
                address: profileData.address,
                fees: profileData.fees,
                available: profileData.available
            }

            const { data } = await axios.post(backendUrl + '/api/doctor/update-profile', updateData, { headers: { dToken } })

            if (data.success) {
                toast.success(data.message)
                setIsEdit(false)
                getProfileData()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        if (dToken) {
            getProfileData()
        }
    }, [dToken])

    return profileData && (
        <div className='m-5'>

            <div className='flex flex-col gap-4 m-auto max-w-4xl'>

                {/* Profile Card */}
                <div className='bg-white rounded-xl shadow-lg overflow-hidden'>

                    {/* Header with Image */}
                    <div className='h-32 bg-gradient-to-r from-[#5974b6] to-[#4c7abb] relative'>
                        <img className='absolute -bottom-12 left-8 w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg' src={profileData.image} alt="" />
                    </div>

                    {/* Profile Info */}
                    <div className='pt-16 px-8 pb-8'>

                        <div className='flex items-center gap-3 mb-2'>
                            <p className='text-2xl font-bold text-gray-800'>{profileData.name}</p>
                            <span className='bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full'>{profileData.speciality}</span>
                        </div>

                        <p className='text-gray-500 mb-4'>{profileData.degree} - {profileData.experience}</p>

                        {/* About */}
                        <div className='mb-6'>
                            <p className='text-sm font-semibold text-gray-700 mb-2'>About:</p>
                            <p className='text-gray-600 text-sm leading-relaxed'>{profileData.about}</p>
                        </div>

                        {/* Fees */}
                        <div className='mb-4'>
                            <p className='text-sm font-semibold text-gray-700 mb-2'>Appointment Fee:</p>
                            {
                                isEdit
                                    ? <input className='border border-gray-300 rounded px-3 py-2 w-32' type="number" value={profileData.fees} onChange={(e) => setProfileData(prev => ({ ...prev, fees: e.target.value }))} />
                                    : <p className='text-xl font-bold text-green-600'>{currency}{profileData.fees}</p>
                            }
                        </div>

                        {/* Address */}
                        <div className='mb-4'>
                            <p className='text-sm font-semibold text-gray-700 mb-2'>Address:</p>
                            {
                                isEdit
                                    ? <div className='flex flex-col gap-2 max-w-md'>
                                        <input className='border border-gray-300 rounded px-3 py-2' type="text" value={profileData.address.line1} onChange={(e) => setProfileData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} />
                                        <input className='border border-gray-300 rounded px-3 py-2' type="text" value={profileData.address.line2} onChange={(e) => setProfileData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} />
                                    </div>
                                    : <p className='text-gray-600'>{profileData.address.line1}<br />{profileData.address.line2}</p>
                            }
                        </div>

                        {/* Availability */}
                        <div className='mb-6'>
                            <label className='flex items-center gap-2 cursor-pointer'>
                                <input
                                    type="checkbox"
                                    checked={profileData.available}
                                    onChange={() => isEdit && setProfileData(prev => ({ ...prev, available: !prev.available }))}
                                    className='w-4 h-4 accent-primary'
                                />
                                <span className='text-sm font-medium text-gray-700'>Available for Appointments</span>
                            </label>
                        </div>

                        {/* Actions */}
                        <div className='flex gap-3'>
                            {
                                isEdit
                                    ? <>
                                        <button onClick={updateProfile} className='bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-[#4c7abb] transition-all'>Save</button>
                                        <button onClick={() => { setIsEdit(false); getProfileData() }} className='border border-gray-300 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-all'>Cancel</button>
                                    </>
                                    : <button onClick={() => setIsEdit(true)} className='bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-[#4c7abb] transition-all'>Edit Profile</button>
                            }
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default DoctorProfile
