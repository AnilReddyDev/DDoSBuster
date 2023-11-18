import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import Model from './Pages/Model'
import { Link } from 'react-router-dom'
import Result from './Pages/Result'
import Ds from './Pages/Ds'
function App() {

  return (

    <BrowserRouter>
      <div className='w-full h-h8 px-10 bg-violet-900 flex items-center  justify-between border-b-2 border-gray-600'>
       <Link to="/"> <img src="https://cdn-icons-png.flaticon.com/512/2665/2665280.png" alt="" className=' w-16 h-16 ' /></Link>
        <Link to="/model" className=' text-white font-semibold  hover:text-red-500'>ML Model</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Model" element={<Model/>}/>
        <Route path="/Result" element={<Result/>}/>
        <Route path="/ds" element={<Ds/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
