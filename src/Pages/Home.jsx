import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div className='w-full h-screen sm:h-h92 bg-gray-700 flex'>
      <div className="leftcon p-3 sm:p-20 h-full w-full justify-start  flex flex-col gap-2 bg-whi text-white">
        <h1 className='text-2xl sm:text-3xl font-semibold font-mono'>Hey,</h1>
        <h1 className='text-2xl sm:text-3xl font-semibold font-mono'>Welcome to DDoS Buster: </h1>
        <h1 className='text-2xl sm:text-3xl  font-semibold font-mono  sm:pl-10'> -Advanced DDoS Detection & Classification Platform</h1>
        <p className=' text-lg pt-2  sm:text-xl font-medium font-mono'>DDoS Buster Empower Your Security: Detect DDoS Threats in Seconds. Upload Your Dataset for Automated Machine Learning Analysis, Unveil Instant Insights, and Safeguard Your Network.</p>
        <Link to="/model" className=' w-52 font-semibold h-14  sm:h-16 rounded-md text-xl flex justify-center items-center my-2 font-mono bg-red-700'>Try Our ML Model</Link>
        <div className='flex w-full pt-8 justify-between'>
          <img src="https://img.freepik.com/premium-photo/supercomputer-manager_236854-1307.jpg?w=740" alt="" className='w-5/12' />
          <img src="https://img.freepik.com/free-vector/flat-composition-with-male-female-system-administrators-server-computer-monitor_1284-58932.jpg?w=740&t=st=1700233362~exp=1700233962~hmac=33cc59d1ceb37c7d6034b4d511f5ea1b73946b44eb35f298fcce8b6461d9514e" alt="" className='w-5/12' />
        </div>
      </div>
    </div>
  )
}
