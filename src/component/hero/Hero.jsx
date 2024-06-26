import React from 'react'
import Wheel from '../../asset/image/1.png'
import Wheel1 from '../../asset/image/2.png'
import Interior from '../../asset/image/3.jpg'
import Suspension from '../../asset/image/4.png'
import Car from '../../asset/image/6.png'
import Car1 from '../../asset/image/5.png'
import Car2 from '../../asset/image/7.png'
import Car3 from '../../asset/image/8.png'
import Car4 from '../../asset/image/9.png'

import { IoCamera } from "react-icons/io5";

import { RiMessage2Line } from "react-icons/ri";

import './Hero.css'
const Hero = () => {
  return (
 <section className="hero-wrapper">
    <div className="hero-container justify-between align-middle flex p-10 ">
      <div className="hero-left mb-[10%]  flex flex-col justify-center w-[100%] align-middle p-4 gap-8">
        <h1 className='text-[4rem] font-bold text-[--primary]'>Up to 30% off <br/> plus ad-ons</h1>
         <p className='text-[1.2rem] text-[--primary] w-[50%]'> Get up to 30% off on all base model Teslas 
            in june plus exclusive packs
         </p>
      
      <div className="hero-left-bottom p-0 flex align-middle  gap-6">
        <div className='flex flex-col mb-[0px] align-middle justify-between w-[150%]   relative m-0  bg-[--whitegray]'>
          <div className='p-4 px-10 bg-[--lealagray] w-[100%]'  > 
            <h2>Your Workstation</h2>
          </div>
          <div className=' zebra flex justify-between border-[.4px]  border-solid  border-[--gray] py-4 px-12
           gap-6'>
            <h6>Color </h6>
            <div className='bg-black w-[20%]  px-1 py-3 h-[9%]'></div>
          </div>
          <div className='flex justify-between px-10 py-4 gap-6 border-[.4px]  border-solid  border-[--gray]'>
            <h6>wheels </h6>
            <img src={Wheel} alt="wheel"  width={40} />
          </div>
          <div className='flex justify-between px-10 py-4 gap-6 border-[.4px]  border-solid  border-[--gray]'>
            <h6>Trims </h6>
            <img src={Wheel1} alt="wheel"  width={45} />
          </div>
          <div className='flex px-10 py-4  justify-between gap-6 border-[.4px]  border-solid  border-[--gray]'>
            <h6>interior </h6>
            <img src={Interior} alt="wheel"  width={40}   />
          </div>
          
          <div className='flex px-10 py-4  justify-between gap-6 border-[.4px]  border-solid  border-[--gray]'>
            <h6>interior </h6>
            <img src={Interior} alt="wheel"  width={40} />
          </div>
          

        </div>
      

      <div className=' zebra bg-[#808080] p-4 mt-[100px] h-[75%]  flex-col flex align-middle gap-4'>
      <div className='bg-white w-[100%] mt-2 p-8 py-5 h-[9%]'></div>
      <div className='bg-[--gray] w-[100%]  p-8 py-5 h-[9%]'></div>
      <div className='bg-[#76453B] w-[100%] p-8 py-5 h-[9%]'></div>
      <div className='bg-[#43766C] w-[100%] p-8 py-5 h-[9%]'></div>
      <div className='bg-black w-[100%] p-8 py-5 h-[9%]'></div>
      </div>

       </div>
      
      </div>
      <div className="hero-right mt-[10%] flex overflow-x-hidden  justify-between m-0 p-0 align-middle ">
        <div className="hero-right-left mb-[35%] ml-[20%]  flex-col gap-16 flex justify-center align-middle ">
         <div className='flex-col flex justify-center mt-6 pt-4 px-4 align-middle '>
         <IoCamera className='text-[--darkgray]' size={40}/>
          <p className='text-[--darkgray]'>view</p>
         </div>
         <div className='w-[70%] rounded-[9%] p-2 h-[2.7rem] bg-[--darkgray]'>
          <img className='w-[100%]' src={Car1} alt="car" width={100} height={100} />
        </div>
        
          <div className='w-[70%] rounded-[9%] p-2 h-[2.7rem] bg-[--darkgray]'>
          <img className='w-[100%]' src={Car2} alt="car" width={100} height={100} />
        </div>

          <div className='w-[70%] rounded-[9%] p-2 h-[2.7rem] bg-[--darkgray]'>
          <img className='w-[100%]' src={Car3} alt="car" width={100} height={100} />
        </div>
       
        <div className='w-[70%] rounded-[9%] p-2 h-[2.7rem]] bg-[--darkgray]'>
          <img className='w-[100%]' src={Car4} alt="car" width={100} height={100} />
        </div>
        </div>
        <div className="hero-right-right relative  m-0  flex-col">
           <div className='flex-col flex justify-center align-middle mt-[5%] ml-[30%]'>
          <h1 className='text-[4rem] font-[500]  text-[--primary]'>Model X</h1>
          <h3 className='text-[2rem] ml-[18%] text-[--primary]'>Plaid</h3>
          </div>
         <div>
        <img className='h-[70%] w-[90%]   mt-[5%]' height={400} width={500}  src={Car} alt="car" />
        </div>
           <div className='flex py-16 ml-[10%] gap-16'>
           <div className='flex-col text-white'>
            <h3 className='text-[2rem] font-[500]'>333mi</h3>
             <h5>Range</h5>
             <h5>(Epaest.)</h5>
            </div>
              <div className='flex-col text-[--whitegray]'>
            <h3 className='text-[2rem] font-[500]'>2.5s</h3>
             <h5>0-60 mph*</h5>
            </div>

             <div className='flex-col  text-[--whitegray]'>
            <h3 className='text-[2rem] font-[500]'>9.9s</h3>
             <h5>1/4 mile</h5>
            </div>

             <div className='flex-col text-[--whitegray]'>
            <h3 className='text-[2rem] font-[500]'>1,020hp</h3>
             <h5>peak power</h5>
            </div>
                </div> 
                
             <div className='flex  mt-4  gap-8'> 
              <button className='bg-transparent w-[40%] mb-8 text-[--whitegray] justify-end ml-[40%] font-bold rounded-[.5rem] text-[1.3rem] h-[4rem] border-[4px] border-solid border-white'>Order Now</button>
             <div className='   bg-[--whitegray] p-4 w-[4.5rem] h-[50%] rounded-[50%]'>
             <RiMessage2Line className='hover:cursor-pointer  ' size={35}   />

             </div>
            </div>
        
        </div>
      </div>
    </div>
 </section>
  )
}

export default Hero