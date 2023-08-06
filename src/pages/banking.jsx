import React from 'react'

const Banking = () => {
  return (
    <section className='h-[100dvh] bg-[#00D54B] snap-start relative'>
      <div className='absolute flex items-center smlap:flex-col-reverse revsmlap:w-[370px] top-[50%] right-[50%] -translate-y-[50%] -translate-x-[25%] smlap:w-[300px] smlap:translate-x-[50%] smlap:gap-10 mob:!w-[200px] z-50'>
        <div className='relative z-10 revsmlap:left-10'>
          <h1 className='text-2xl mob:text-xl font-Agrandir text-white'>
            Banking
          </h1>
          <p className='revsmlap:w-[350px] mob:w-[86dvw] font-Mulish mob:text-sm'>
            Receive your paycheck, tax returns, and other direct deposits up to two days early using your Cash App routing 
            and account number.
          </p>
        </div>
        <img
          src="/assets/banking-phone.png" 
          alt="Banking phone" 
        />
      </div>
      <img
        src="/assets/banking-hole.png" 
        alt="Banking hole top"
        className='absolute top-0 left-0' 
      />
      <img
        src="/assets/banking-column.png" 
        alt="Banking column" 
        className='absolute top-[14%] left-[5%] z-10'
      />
      <img
        src="/assets/banking-stairs-2.png" 
        alt="Banking Stairs 2"
        className='absolute bottom-[13%] left-[4%] z-10' 
      />
    </section>
  )
}

export default Banking
