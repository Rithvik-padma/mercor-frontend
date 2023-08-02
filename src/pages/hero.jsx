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
        <div className='text-center text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-46%] text-[150px] mob:text-[75px] leading-[1] font-Agrandir py-10'>
            <div className='relative -z-10'>CASH</div>
            <div className='z-20'>APP</div>
            <img 
                src="/assets/intro-phone-1.png" 
                alt="Intro phone"
                className='h-full w-auto object-cover absolute z-[-10] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' 
            />
        </div>
    </section>
  )
}

export default Hero
