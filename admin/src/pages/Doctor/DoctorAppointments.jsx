import React, { useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets_admin/assets'

const DoctorAppointments = () => {

    const { dToken, appointments, getAppointments, completeAppointment, cancelAppointment } = useContext(DoctorContext)
    const { calculateAge, slotDateFormat, currency } = useContext(AppContext)

    useEffect(() => {
        if (dToken) {
            getAppointments()
        }
    }, [dToken])

    return (
        <div className='w-full m-5'>
            <p className='mb-3 text-lg font-medium text-gray-700'>All Appointments</p>

            <div className='bg-white border text-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll rounded-xl shadow-lg'>

                {/* Table Header */}
                <div className='hidden sm:grid grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr_1fr] py-4 px-6 bg-gradient-to-r from-[#5974b6] to-[#4c7abb] text-white font-semibold tracking-wide sticky top-0 sm:rounded-t-xl z-20'>
                    <p>#</p>
                    <p>Patient</p>
                    <p className='text-center'>Age</p>
                    <p>Payment</p>
                    <p>Date & Time</p>
                    <p className='text-center'>Fees</p>
                    <p className='text-center'>Actions</p>
                </div>

                {/* Table Rows */}
                {appointments.map((item, index) => (
                    <div className='flex flex-wrap justify-between max-sm:gap-2 sm:grid sm:grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr_1fr] items-center text-gray-600 py-4 px-6 border-b hover:bg-blue-50 transition-colors duration-200' key={index}>
                        <p className='max-sm:hidden font-medium text-gray-500'>{index + 1}</p>

                        {/* Patient Column */}
                        <div className='flex items-center gap-2'>
                            <img className='w-8 h-8 rounded-full object-cover border border-gray-200' src={item.userData.image} alt="" />
                            <p className='font-medium text-gray-800 capitalize text-sm'>{item.userData.name}</p>
                        </div>

                        <p className='max-sm:hidden text-center font-medium'>{calculateAge(item.userData.dob)}</p>

                        <div>
                            <span className={`px-2 py-0.5 text-xs rounded-full ${item.payment ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`}>
                                {item.payment ? 'Paid' : 'Pending'}
                            </span>
                        </div>

                        <p className='text-gray-700'>{slotDateFormat(item.slotDate)}, <span className='text-xs text-gray-500'>{item.slotTime}</span></p>

                        <p className='font-medium text-gray-800 text-center'>{currency}{item.amount}</p>

                        {
                            item.cancelled
                                ? <div className='flex justify-center'><span className='text-red-500 text-xs font-bold border border-red-500 px-2 py-0.5 rounded uppercase bg-red-50'>Cancelled</span></div>
                                : item.isCompleted
                                    ? <div className='flex justify-center'><span className='text-green-500 text-xs font-bold border border-green-500 px-2 py-0.5 rounded uppercase bg-green-50'>Completed</span></div>
                                    : <div className='flex justify-center gap-2'>
                                        <img onClick={() => cancelAppointment(item._id)} className='w-8 cursor-pointer hover:scale-110 transition-transform' src={assets.cancel_icon} alt="Cancel" title="Cancel" />
                                        <img onClick={() => completeAppointment(item._id)} className='w-8 cursor-pointer hover:scale-110 transition-transform' src={assets.tick_icon} alt="Complete" title="Complete" />
                                    </div>
                        }

                    </div>
                ))}

            </div>
        </div>
    )
}

export default DoctorAppointments
