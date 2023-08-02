import React from 'react'
import Navbar from '../components/navbar'

const Hero = () => {
  return (
    <section className='h-[100dvh] bg-black snap-start relative overflow-hidden'>
        <Navbar/>
        <img 
            src="/assets/blast.png" 
            alt="Vector blast"
            className='w-[100dvw] h-[100dvh] object-cover absolute top-0 left-0' 
        />
        <div className=''>
            <div>CASH</div>
            <div>APP</div>
        </div>
    </section>
  )
}

export default Hero
