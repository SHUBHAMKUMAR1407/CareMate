import React, { useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { assets } from '../../assets/assets_admin/assets'
import { AppContext } from '../../context/AppContext'

const DoctorDashboard = () => {

    const { dToken, dashData, getDashData, cancelAppointment, completeAppointment } = useContext(DoctorContext)
    const { slotDateFormat, currency } = useContext(AppContext)

    useEffect(() => {
        if (dToken) {
            getDashData()
        }
    }, [dToken])

    return dashData && (
        <div className='m-5'>

            {/* Welcome Section */}
            <div className='flex justify-between items-center mb-6 bg-blue-50 p-6 rounded-xl border border-blue-100'>
                <div>
                    <h1 className='text-2xl font-bold text-[#5974b6]'>Welcome, Doctor!</h1>
                    <p className='text-gray-600 mt-1'>Here's an overview of your practice today.</p>
                </div>
                <p className='text-gray-500 font-medium'>{new Date().toDateString()}</p>
            </div>

            <div className='flex flex-wrap gap-3'>

                <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded-lg border-l-4 border-green-500 shadow hover:shadow-lg transition-all'>
                    <img className='w-14' src={assets.earning_icon} alt="" />
                    <div>
                        <p className='text-xl font-bold text-gray-700'>{currency}{dashData.earnings}</p>
                        <p className='text-gray-500 font-medium'>Earnings</p>
                    </div>
                </div>

                <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded-lg border-l-4 border-blue-400 shadow hover:shadow-lg transition-all'>
                    <img className='w-14' src={assets.appointments_icon} alt="" />
                    <div>
                        <p className='text-xl font-bold text-gray-700'>{dashData.appointments}</p>
                        <p className='text-gray-500 font-medium'>Appointments</p>
                    </div>
                </div>

                <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded-lg border-l-4 border-[#5974b6] shadow hover:shadow-lg transition-all'>
                    <img className='w-14' src={assets.patients_icon} alt="" />
                    <div>
                        <p className='text-xl font-bold text-gray-700'>{dashData.patients}</p>
                        <p className='text-gray-500 font-medium'>Patients</p>
                    </div>
                </div>
            </div>

            <div className='bg-white rounded-lg border border-gray-200 shadow mt-8'>

                <div className='flex items-center gap-2.5 px-6 py-5 rounded-t-lg border-b bg-gray-50'>
                    <img src={assets.list_icon} alt="" />
                    <p className='font-bold text-lg text-primary'>Latest Bookings</p>
                </div>

                <div className=''>
                    {
                        dashData.latestAppointments.map((item, index) => (
                            <div className='flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors border-b last:border-b-0' key={index}>
                                <img className='rounded-full w-10 h-10 object-cover border' src={item.userData.image} alt="" />
                                <div className='flex-1'>
                                    <p className='text-gray-800 font-semibold'>{item.userData.name}</p>
                                    <p className='text-gray-500 text-sm'>{slotDateFormat(item.slotDate)}, {item.slotTime}</p>
                                </div>
                                {
                                    item.cancelled
                                        ? <span className='px-3 py-1 text-xs font-medium text-red-500 bg-red-50 border border-red-100 rounded-full'>Cancelled</span>
                                        : item.isCompleted
                                            ? <span className='px-3 py-1 text-xs font-medium text-green-500 bg-green-50 border border-green-100 rounded-full'>Completed</span>
                                            : <div className='flex gap-2'>
                                                <img onClick={() => cancelAppointment(item._id)} className='w-8 cursor-pointer hover:scale-110 transition-transform' src={assets.cancel_icon} alt="Cancel" title="Cancel" />
                                                <img onClick={() => completeAppointment(item._id)} className='w-8 cursor-pointer hover:scale-110 transition-transform' src={assets.tick_icon} alt="Complete" title="Mark Complete" />
                                            </div>
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default DoctorDashboard
