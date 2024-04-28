"use client"

import { Poppins } from "next/font/google";
import Image from "next/image";
import Navbar from "./Navbar";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { motion, stagger } from "framer-motion";

function Hero() {
  useGSAP(() => {
       
    gsap.fromTo('.text', {
       opacity: 0,
       yPercent: -50,
    },{
      opacity: 1,
      yPercent: 0,
      stagger: 0.25,
      duration: 1,
    })

    gsap.fromTo('')
  }, [])

  return (
        
    <section className="h-screen w-full">
      <div className="mt-26 lg:-mt-16 pt-24 grid grid-cols-1 lg:grid-cols-12 p-8 space-y-6">
        
        <div
          className="screen col-span-7 place-safe-center lg:w-4/5 
          lg:mt-10 lg:ml-10 lg:space-y-4">
        <h1  className=" text text-4xl lg:text-7xl font-semibold">WELCOME TO THE SWEETEST DELIGHTS BAKERY</h1>
         <p className="text">Discover our mouthwatering selection of cakes, perfect for any occasion.</p>
          <button
           className=" lg:rounded-3xl lg:bg-rose-600 lg:w-80 lg:h-20 
           lg:text-rose-100 hover:bg-rose-500 
           hover:text-white hover:duration-700">Explore</button>
        </div>

        <div className="col-span-5 lg:-mt-20">
           <Image className="hell h-2/3 object-cover rounded-lg lg:-mt-10" src="/image1.jpg" alt="" width={500} height={300} />
        </div>
      </div>
    </section>
   
  )
}
export default Hero


//*<Image className="lg:w-2/5 lg:h-1/3 lg:visible lg:object-cover" src="/image1.jpg"  alt="myImage" width={500} height={350}/>