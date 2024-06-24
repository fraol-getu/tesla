// import React, { useState } from 'react'
// import Logo from '../../asset/image/logo.png'
// import { MdMenu } from "react-icons/md";
// import { IoCloseOutline } from "react-icons/io5";

// const Header = () => {
//     const [menuOpen, setMenOpen] = useState(false);
    
//     const GetMenuStyle = (menuOpen) => {
//   if(document.documentElement.clientWidth <= 800){
//     return {right: !menuOpen && "-500%"}
//   }
//   }       
//     return (
//     <section className="header-wrapper p-5">
//       <div className="header-container flex justify-between  p-5 py-5 ">
//          <div className="header-left">
//          <img src={Logo} alt="logo" width={100}  className=' p-0 m-0
//          ' />
//         </div>
//         <div  style={GetMenuStyle(menuOpen)} className="header-menu flex right-0 flex-col align-middle gap-4 bg-[--whitegray] p-12 px-20">
            
//              <h6>Home</h6>   
//              <h6>Shop</h6>   
//              <h6>Account</h6>   
//               <h6>About</h6>
//  </div>
//        <button className="flex md:hidden z-50 right-5 text-[var(--black)]"   onClick={() => setMenOpen((prev) => !prev)}>
//        <MdMenu
//               size={35}
//               className=" 
//           "
//             />
//        </button>
//        </div>  
//     </section>
//   )
// }

// export default Header

import React, { useEffect, useState } from 'react';
import Logo from '../../asset/image/logo.png';
import { MdMenu } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [clientWidth, setClientWidth] = useState(document.documentElement.clientWidth);

  useEffect(() => {
    const handleResize = () => setClientWidth(document.documentElement.clientWidth);
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const GetMenuStyle = (menuOpen, clientWidth) => {
    // const screenWidth = document.documentElement.clientWidth
    if (clientWidth <= 800) {
      return { visibility: menuOpen ? "visible" : "hidden" };
    } 
  };
  
  return (
    <section className="header-wrapper relative p-0">
      <div className="header-container flex justify-between  p-8  py-12  overflow-x-hidden">
        <div className="header-left w-[100%]">
          <img src={Logo} alt="logo" width={90} className="p-0 m-0" />
        </div>
        <div
          style={GetMenuStyle(menuOpen, clientWidth)}
          className="header-menu absolute hover:cursor-pointer flex right-0 md:right-10 md:flex-row flex-col ml-[50%] md:ml-0 md:p-5 md:bg-transparent align-middle gap-6 bg-[--whitegray]  py-[5rem] p-[7rem] transition duration-300 ease-in-out" // Add transition for smooth animation
        >
          <h6>Home</h6>
          <h6>Shop</h6>
          <h6>Account</h6>
          <h6>About</h6>
        </div>
        
        
        <button
          className="flex py-2  md:hidden z-50 right-0 text-[var(--black)]"
          onClick={() => setMenuOpen((prev) => !prev)}
          
        >
          {menuOpen ? (
            <IoCloseOutline size={35} className="text-[var(--black)]" />
          ) : (
            <MdMenu size={35} className="text-[var(--black)]" />
          )}
        </button>
      </div>
    </section>
  );
};

export default Header;
