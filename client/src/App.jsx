import { React } from 'react'
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import { logo } from "./assets"

import { Home, CreatePost } from "./pages";
const App = () => {
  return (
    <BrowserRouter>

      <header className=' flex justify-between 
      items-center bg-slate-50  sm:px-8  m-2 px-4 py-4 '>
        <Link to="/">
          <img src={logo} alt='logo' className='w-28 object-contain' />
        </Link>
        <Link to="/create-post" className='font-inter font-medium bg-[#6469ff]/100 text-white rounded-md px-2 py-2'>
          Create
        </Link>
      </header>
      <main className='sm:p-8 px-4 py-8 m-2 bg-[#f9fafe] min-h-[calc(100vh-73px)]' >
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create-post" element={<CreatePost />}></Route>
        </Routes>
      </main>
    </BrowserRouter >
  )
}

export default App