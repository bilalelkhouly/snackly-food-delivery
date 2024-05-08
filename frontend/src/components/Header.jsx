import React from 'react'

const Header = () => {
  return (
    <div className='h-[34vw] my-[30px] mx-auto bg-[url("/header_img.png")] bg-no-repeat bg-contain relative'>
      <div className='absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] fadeIn max-lg:max-w-[45%] max-md:max-w-[65%]'>
        <h2 className='font-bold text-white text-responsive'>Order your favourite food here</h2>
        <p className='text-white text-[1vw] font-normal max-md:hidden'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <button className='view-menu-btn max-md:py-[2vw] max-md:px-[4vw]'>View Menu</button>
      </div>
    </div>
  )
}

export default Header
 