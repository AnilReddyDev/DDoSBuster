import React from 'react'
export default function Ds() {
  // const downloadCSV = () => {
  //   const csvURL = '../assets/dataset_sdn.csv'; // Replace with the path to your CSV file in the public folder

  //   const link = document.createElement('a');
  //   link.setAttribute('href', csvURL);
  //   link.setAttribute('download', 'dataset_sdn.csv');
  //   link.click();
  // };
  return (


    <div className='w-full flex justify-center items-center h-screen bg-whi'>
   
      <a className=' text-2xl rounded-md flex gap-4 justify-center items-center font-bold sm:font-semibold font-font-1 px-5 py-3 bg-orange-600' href='../assets/dataset_sdn.csv' download>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
        </svg>

        DataSet
      </a>
    </div>

  )
}
