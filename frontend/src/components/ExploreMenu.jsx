import React from 'react'
import { menu_list } from '../assets/assets'

const ExploreMenu = ({category, setCategory}) => {

  return (
    <div id='explore-menu' className='flex flex-col gap-5'>
      <h1 className='text-[#262626] text-[2em] font-semibold'>Explore our menu</h1>
      <p className='max-w-[60%] text-[#808080] max-lg:max-w-full max-lg:text-sm'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
      <div className='flex flex-wrap- justify-between items-center gap-[30px] text-center my-5 overflow-x-scroll'>
        {menu_list.map((item, index) => {
            return (
                <div onClick={() => setCategory(prev => prev===item.menu_name?"all":item.menu_name)} key={index}>
                    <img src={item.menu_image} alt="" className={`w-[7.5vw] min-w-[80px] cursor-pointer rounded-[50%] transition duration-[0.2s] ${category === item.menu_name?"active-menu":""}`}/>
                    <p className='mt-2.5 text-[#747474] text-explore-menu-items cursor-pointer'>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr className='my-2.5 h-[2px] bg-[#E2E2E2] border-none'/>
    </div>
  )
}

export default ExploreMenu
