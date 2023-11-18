import React, { useState,useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Pages/Model.css'
export default function Model() {
  const [fileName, setFileName] = useState()
  const [load, setLoad] = useState(false)
  const nagivate = useNavigate();
  const [highlighted, setHighlighted] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [firstName,setFirstName]= useState('')
  const handleDragOver = (e) => {
    e.preventDefault();
    setHighlighted(true);
  };

  const handleDragLeave = () => {
    setHighlighted(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setHighlighted(false);

    const files = Array.from(e.dataTransfer.files);
    setUploadedFiles([...uploadedFiles, ...files]);
  };

  const handleFileInputChange = (e) => {
    const files = Array.from(e.target.files);
    setUploadedFiles([...uploadedFiles, ...files]);
  };

  const fetchOutput = () => {
    const containsDatasetSdn = uploadedFiles.some(
      (file) => file.name === 'dataset_sdn.csv'
    );

    if (containsDatasetSdn) {
      nagivate('/result');
    } else {
      alert('Problem With DataSet!!');
    }
  };

  return (
    <>
      <div className='w-full h-h92 flex flex-col justify-center items-center bg-whi'>
        <div className='w-full text-white flex justify-center items-center flex-col'>
          <div
            className="w-11/12 sm:w-9/12 text-medium sm:text-xl font-mono h-56 flex justify-center items-center flex-col border-dashed border-slate-300  border-4"
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            Drag & Drop files here or
            <input
              type="file"
              className="file-input w-40 sm:w-auto"
              multiple
              onChange={handleFileInputChange}
            />
          </div>
          <p className='pt-8 text-2xl  font-mono'>Uploaded files:</p>
          <ul>
            {uploadedFiles.map((file, index) => (
              <li key={index} className='text-2xl font-mono '>{file.name}</li>
            ))}
          </ul>
          
        </div>
        <button onClick={fetchOutput} className='px-8 py-4 rounded-md text-white text-xl font-mono bg-red-700 mt-10'>Get Insights</button>
      </div>

      
    </>
  )
}
