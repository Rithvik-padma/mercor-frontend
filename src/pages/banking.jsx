import React from 'react'

const Banking = () => {
  return (
    <section className='h-[100dvh] bg-[#00D54B] snap-start relative'>
      <div className='absolute flex items-center smlap:flex-col-reverse revsmlap:w-[370px] top-[50%] right-[50%] -translate-y-[50%] -translate-x-[25%] smlap:w-[300px] smlap:translate-x-[50%] smlap:gap-10 mob:!w-[200px] z-20'>
        <div className='relative z-10 revsmlap:left-10 revsmlap:bottom-10'>
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
    </section>
  )
}

export default Banking
