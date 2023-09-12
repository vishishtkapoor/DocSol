import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
const Container = () => {
  return (
    <>
  <div className='flex flex-col md:flex-row md:h-[100vh] h-auto w-full bg-[#E8FAF0]'>
  <Sidebar />
  <div className='flex-1  px-4 pb-4 md:p-4'>
  <div className='bg-white/95 rounded-xl flex flex-col gap-2 w-full p-4 h-full md:rounded-[20px]'>
  <Header />
  </div>
  </div>

  </div>
    </>

  )
}

export default Container