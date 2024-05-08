import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div id='footer' className='text-[#d9d9d9] flex bg-[#323232] flex-col items-center gap-5 pb-5 px-[8vw] pt-[80px] mt-[100px]'>
      <div className='w-full grid grid-cols-4 gap-[80px] max-md:flex max-md:flex-col max-md:gap-9'>
        <div className='flex flex-col items-start gap-5 col-span-2'>
            <img src={assets.logo} alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div className='flex'>
                <img className='w-10 mr-4' src={assets.facebook_icon} alt="" />
                <img className='w-10 mr-4' src={assets.twitter_icon} alt="" />
                <img className='w-10 mr-4' src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className='flex flex-col items-start gap-5 col-span-1'>
            <h2 className='text-white text-[1.5em] font-bold'>COMPANY</h2>
            <ul>
                <li className='list-none mb-2.5 cursor-pointer'>Home</li>
                <li className='list-none mb-2.5 cursor-pointer'>About Us</li>
                <li className='list-none mb-2.5 cursor-pointer'>Delivery</li>
                <li className='list-none mb-2.5 cursor-pointer'>Privay Policy</li>
            </ul>
        </div>
        <div className='flex flex-col items-start gap-5 col-span-1'>
            <h2 className='text-white text-[1.5em] font-bold'>GET IN TOUCH</h2>
            <ul>
                <li className='list-none mb-2.5 cursor-pointer'>+1-123-456-789</li>
                <li className='list-none mb-2.5 cursor-pointer'>contact@snackly.com</li>
            </ul>
        </div>
      </div>
      <hr className='w-full h-0.5 mt-5 bg-[#808080] border-none'/>
      <p>Copyright 2024 © Snackly.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer
