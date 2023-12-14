import React from 'react'
import { Link } from 'react-router-dom'
import ddosimage from  '../assets/ddosImage.png'
export default function Home() {
  return (
    <>
      <img src={ddosimage} alt="I" className=' absolute right-0 sm:w-auto  w-52' />
    <div className='w-full h-screen sm:h-h92 flex justify-center items-center bg-black_bg '>
     <div className='flex flex-col sm:mb-0 mb-20 sm:w-3/5 w-10/12 sm:px-16  sm:mr-80'>
      
     <h1 className=' font-font-2 font-bold leading-tight text-white text-3xl sm:text-6xl'>DETECT <span className=' text-lightred '>DDOS</span> ATTACK </h1>
      <p className='font-font-1 pt-5 text-white'>DDoS Buster Empower Your Security: Detect DDoS Threats in Seconds. Upload Your Dataset for Automated Machine Learning Analysis, Unveil Instant Insights, and Safeguard Your Network.</p>
      <Link to="/Model" className=' hover:translate-x-6 transition-all ease-in-out 0.5s font-mono text-lg font-medium text-white  pt-10'><span className='pr-5 ' >[</span><span className=' text-lightred'>CLICK</span> TO TRY <span className=' text-lightred'>ML MODEL</span><span className='px-5'>]</span></Link>
     </div>
    </div>
    </>
  )
}
