"use client"

import Lenis from 'lenis'
import { useEffect } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import ErrorBoundary from "./ErrorBoundary";




export default function Home() {

  useEffect( () => {
    const lenis = new Lenis()
    
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
}, [])

  return (
   
    <div className="w-full h-screen border-green-800">
    <ErrorBoundary fallback="Error">
      <Navbar />
      <Hero />
     <Section1 />
     <Section2 />
     <Section3 />
    </ErrorBoundary>
    </div>
  );
}
