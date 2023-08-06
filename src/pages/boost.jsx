import React from 'react'

const Boost = () => {
  return (
    <section className='h-[100dvh] bg-black snap-start relative'>
      <div className='absolute flex items-center smlap:flex-col-reverse revsmlap:w-[370px] top-[50%] right-[50%] -translate-y-[50%] -translate-x-[25%] smlap:w-[300px] smlap:translate-x-[50%] smlap:gap-8 mob:!w-[200px] z-50'>
        <div className='relative z-10'>
          <h1 className='text-3xl mob:text-xl font-Agrandir text-[#00D54B]'>
            Cash Card & Boost
          </h1>
          <p className='revsmlap:w-[350px] mob:w-[86dvw] text-white font-Mulish mob:text-sm'>
            The Cash Card is a free, customizable debit card that lets you pay online and in stores. It’s the only way to get Boosts—instant discounts that work at places where you want to spend.
          </p>
        </div>
        <img
          src="/assets/boost-phone.png" 
          alt="Boost phone" 
          className='mob:w-[150px]'
        />
      </div>
    </section>
  )
}

export default Boost
