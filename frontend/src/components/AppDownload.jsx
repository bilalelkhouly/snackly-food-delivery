import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
    <div className='m-auto mt-[100px] text-center font-medium text-app-download' id='app-download'>
      <p>For Better Experience Download <br />Snackly App</p>
      <div className='flex justify-center mt-10 gap-app-gap'>
        <img className='max-w-[180px] transition duration-[0.5s] cursor-pointer w-app-icon hover:transform hover:scale-[1.05]' src={assets.play_store} alt="" />
        <img className='max-w-[180px] transition duration-[0.5s] cursor-pointer w-app-icon hover:transform hover:scale-[1.05]' src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default AppDownload
