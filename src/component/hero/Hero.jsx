import React from 'react'
import Wheel from '../../asset/image/1.png'
import Wheel1 from '../../asset/image/2.png'
import Interior from '../../asset/image/3.jpg'

import './Hero.css'
const Hero = () => {
  return (
 <section className="hero-wrapper">
    <div className="hero-container flex p-10">
      <div className="hero-left flex flex-col align-middle p-4 gap-8">
        <h1 className='text-[4rem] font-bold text-[--primary]'>Up to 30% off <br/> plus ad-ons</h1>
         <p className='text-[1.2rem] text-[--primary] w-[50%]'> Get up to 30% off on all base model Teslas 
            in june plus exclusive packs
         </p>
      
      <div className="hero-left-bottom p-0 flex align-middle  gap-6">
        <div className='flex flex-col mb-[0px] align-middle justify-center w-[30%]  relative m-0  bg-[--whitegray]'>
          <div className='p-4 bg-[--darkgray] w-[100%]'  > 
            <h4>Your Workstation</h4>
          </div>
          <div className=' zebra flex justify-between border-[.4px]  border-solid  border-[--gray] p-4 gap-6'>
            <h6>Color </h6>
            <div className='bg-black w-[20%]  p-2 py-3 h-[9%]'></div>
          </div>
          <div className='flex justify-between p-4 gap-6 border-[.4px]  border-solid  border-[--gray]'>
            <h6>wheels </h6>
            <img src={Wheel} alt="wheel"  width={40} />
          </div>
          <div className='flex justify-between p-4 gap-6 border-[.4px]  border-solid  border-[--gray]'>
            <h6>Trims </h6>
            <img src={Wheel1} alt="wheel"  width={45} />
          </div>
          <div className='flex p-4  justify-between gap-6 border-[.4px]  border-solid  border-[--gray]'>
            <h6>interior </h6>
            <img src={Interior} alt="wheel"  width={40} />
          </div>

        </div>
      

      <div className=' zebra bg-[#808080] p-4  mt-[8px]  flex-col flex align-middle gap-4'>
      <div className='bg-white w-[100%] mt-4 p-8 py-5 h-[9%]'></div>
      <div className='bg-[--gray] w-[100%]  p-8 py-5 h-[9%]'></div>
      <div className='bg-[#76453B] w-[100%] p-8 py-5 h-[9%]'></div>
      <div className='bg-[#43766C] w-[100%] p-8 py-5 h-[9%]'></div>
      <div className='bg-black w-[100%] p-8 py-5 h-[9%]'></div>
      </div>

       </div>
      
      </div>
    </div>
 </section>
  )
}

export default Hero