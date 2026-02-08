import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { assets } from '../../assets/assets_admin/assets'
import { AppContext } from '../../context/AppContext'

const Dashboard = () => {

  const { aToken, cancelAppointment, dashData, getDashData } = useContext(AdminContext)
  const { slotDateFormat, currency } = useContext(AppContext)

  useEffect(() => {
    if (aToken) {
      getDashData()
    }
  }, [aToken])

  return dashData && (
    <div className='m-5'>

      {}
      <div className='flex justify-between items-center mb-6 bg-blue-50 p-6 rounded-xl border border-blue-100'>
        <div>
          <h1 className='text-2xl font-bold text-[#5974b6]'>Welcome, Admin!</h1>
          <p className='text-gray-600 mt-1'>Here's an overview of your practice today.</p>
        </div>
        <p className='text-gray-500 font-medium'>{new Date().toDateString()}</p>
      </div>

      <div className='flex flex-wrap gap-3'>

        <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded-lg border-l-4 border-[#5974b6] shadow hover:shadow-lg transition-all'>
          <img className='w-14' src={assets.doctor_icon} alt="" />
          <div>
            <p className='text-xl font-bold text-gray-700'>{dashData.doctors}</p>
            <p className='text-gray-500 font-medium'>Doctors</p>
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
            dashData.lastestAppointments.map((item, index) => (
              <div className='grid grid-cols-[1fr_2fr_1fr_1fr] items-center px-6 py-4 gap-4 hover:bg-gray-100 transition-colors border-b last:border-b-0' key={index}>
                <div className='flex items-center gap-3'>
                  <img className='rounded-full w-10 h-10 object-cover border' src={item.docData.image} alt="" />
                  <div>
                    <p className='text-gray-800 font-semibold'>{item.docData.name}</p>
                    <p className='text-gray-500 text-xs'>Doctor</p>
                  </div>
                </div>

                <div className='flex flex-col'>
                  <p className='text-gray-700 font-medium'>{slotDateFormat(item.slotDate)}</p>
                  <p className='text-gray-400 text-xs'>Date</p>
                </div>

                <div>
                  {item.cancelled && <span className='px-3 py-1 text-xs font-medium text-red-500 bg-red-50 border border-red-100 rounded-full'>Cancelled</span>}
                </div>

                <div className='flex justify-end'>
                  {
                    item.cancelled
                      ? <></>
                      : <img onClick={() => cancelAppointment(item._id)} className='w-8 cursor-pointer hover:scale-110 transition-transform' src={assets.cancel_icon} alt="Cancel" title="Cancel Appointment" />
                  }
                </div>

              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Dashboard