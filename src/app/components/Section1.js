"use client"

import Image from "next/image";
import {motion} from "framer-motion";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Section1() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP( () => {
      gsap.fromTo('.words',{
        opacity: 0,
        yPercent: 80, 
      }, {
        opacity: 1,
        yPercent: 0,
        duration: .5,
        stagger: 0.25,

        scrollTrigger: {
          trigger: ".section1",
          toggleActions: "restart none none restart"
        }
      })
  }, [])

  return (
    <section className=" section1  w-full h-screen flex flex-col lg:flex items-center justify-center mt-auto">
   <div className="flex flex-col w-full -mt-[40vh] p-6 lg:flex lg:flex-none lg:mt-32 lg:w-full lg:flex-row">

  <div className="
   lg:grid h-20 lg:object-cover flex-grow card 
   bg-base-300 rounded-box place-items-center">
   
      <motion.div
       initial = {{x: -55, opacity: 0,}}
       whileInView = {{x: 0, opacity: 1,}}
       transition={{duration: 1.5}}
       exit={{x: -55, opacity: 0}}
      >   
    <Image 
    className=" h-[50vh] w-[40vh] mt-32 lg:h-[75vh] lg:w-[90vh] 
    object-cover lg:object-cover rounded-lg lg:-mt-60 clipPath 
    lg:scale-[20px] shadow-lg shadow-slate-600" 
    src="public/lady.jpg" alt="" width={500} height={300} />
    </motion.div>
  </div>

  <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center -mt-60 lg:w-20 lg:-mt-28 lg:mr-12">
    <div
     className=" hello lg:flex-col lg:flex lg:leading-tight 
     lg:text-pretty lg:text-lg">
     <span className="words">Experience pure indulgence with our artisanal cakes,</span>
     <span className="words">crafted with passion and precision</span>
     <span className="words">to offer a symphony of flavors in every bite. From classic</span>
     <span className="words">favorites to innovative delights, each creation</span>
     <span className="words">promises a moment of sheer bliss. Make every celebration</span>
     <span className="words">unforgettable with our heavenly treats. Discover the difference.</span>
    </div>
  </div>
</div>
    </section>
  )
}
export default Section1
