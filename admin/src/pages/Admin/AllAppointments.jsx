import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets_admin/assets'

const AllAppointments = () => {

  const { aToken, appointments, getAllAppointments, cancelAppointment } = useContext(AdminContext)
  const { calculateAge, slotDateFormat, currency } = useContext(AppContext)

  useEffect(() => {
    if (aToken) {
      getAllAppointments()
    }
  }, [aToken])

  return (
    <div className='w-full m-5'>
      <p className='mb-3 text-lg font-medium text-gray-700'>All Appointments</p>

      <div className='bg-white border text-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll rounded-xl shadow-lg scrollbar-hide'>

        {/* Table Header */}
        <div className='hidden sm:grid grid-cols-[0.5fr_2fr_1fr_2fr_2fr_1fr_1fr] py-4 px-6 bg-gradient-to-r from-[#5974b6] to-[#4c7abb] text-white font-semibold tracking-wide sticky top-0 sm:rounded-t-xl z-20'>
          <p>#</p>
          <p>Patient</p>
          <p className='text-center'>Age</p>
          <p>Date & Time</p>
          <p>Doctor</p>
          <p>Fees</p>
          <p className='text-center'>Actions</p>
        </div>

        {/* Table Rows */}
        {appointments.map((item, index) => (
          <div className='flex flex-wrap justify-between max-sm:gap-2 max-sm:text-base sm:grid sm:grid-cols-[0.5fr_2fr_1fr_2fr_2fr_1fr_1fr] items-center text-gray-600 py-4 px-6 border-b hover:bg-blue-50 transition-colors duration-200' key={index}>
            <p className='max-sm:hidden font-medium text-gray-500'>{index + 1}</p>

            {/* Patient Column */}
            <div className='flex items-center gap-2'>
              {/* Avatar with Fallback */}
              <div className='w-8 h-8 rounded-full overflow-hidden border border-gray-200 shrink-0 bg-indigo-100 flex items-center justify-center text-indigo-600 text-xs font-bold uppercase'>
                {
                  item.userData.image && item.userData.image !== 'default_image_url_here'
                    ? <img className='w-full h-full object-cover' src={item.userData.image} alt="" onError={(e) => e.target.style.display = 'none'} />
                    : item.userData.name.charAt(0)
                }
              </div>
              <p className='font-medium text-gray-800 capitalize text-sm'>{item.userData.name}</p>
            </div>

            <p className='max-sm:hidden text-center font-medium'>{calculateAge(item.userData.dob)}</p>
            <p className='text-gray-700'>{slotDateFormat(item.slotDate)}, <span className='text-xs text-gray-500 block sm:inline'>{item.slotTime}</span></p>

            <div className='flex items-center gap-2'>
              <img className='w-8 h-8 rounded-full bg-blue-50 border border-gray-200 object-cover' src={item.docData.image} alt="" />
              <p className='text-sm text-gray-800 capitalize truncate max-w-[100px]' title={item.docData.name}>{item.docData.name}</p>
            </div>

            <p className='font-medium text-gray-800'>{currency}{item.amount}</p>

            {
              item.cancelled
                ? <div className='flex justify-center'><span className='text-red-500 text-xs font-bold border border-red-500 px-2 py-0.5 rounded uppercase tracking-wider bg-red-50'>Cancelled</span></div>
                : <div className='flex justify-center'>
                  <div title='Cancel Appointment' onClick={() => cancelAppointment(item._id)} className='w-10 h-10 rounded-full hover:bg-red-50 flex items-center justify-center transition-all duration-300 cursor-pointer group'>
                    <img className='w-4 opacity-70 group-hover:scale-110 group-hover:opacity-100 transition-all' src={assets.cancel_icon} alt="Cancel" />
                  </div>
                </div>
            }

          </div>
        ))}

      </div>
    </div>
  )
}

export default AllAppointments