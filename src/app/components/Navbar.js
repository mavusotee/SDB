"use client"

import { useGSAP } from "@gsap/react";
import gsap from 'gsap';


const Navbar = () => {
   
  useGSAP(() => {
      
      gsap.fromTo('.nav', {
         opacity: 0,
      }, {
         opacity: 1,
         duration: 1,
         delay: 1,
      })

  }, [])

  return (
    <div className=" nav flex items-center justify-between p-6 lg:p-4">
        <div className=" cursor-pointer flex flex-col text-lg font-semibold leading-tight">
           <span>SWEETEST</span>
           <span>DELIGHTS</span>
           <span>BAKERY</span>
        </div>

        <div className="cursor-pointer text-xl font-semibold text-center">MENU</div>
    </div>

    
  );
};
export default Navbar;
