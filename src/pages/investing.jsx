import React from 'react'

const Investing = () => {
  return (
    <section className='h-[100dvh] bg-[#00D54B] snap-start relative'>
      <div className='absolute w-[100%] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[60%] flex flex-col gap-16 items-center z-50'>
        <h1 className='text-3xl mob:text-xl font-Agrandir text-white'>
          Investing
        </h1>
        <div className='flex flex-row gap-20 items-center mob:flex-col'>
          <div className='flex flex-row gap-8 justify-center items-center'>
            <div className='-translate-y-[50%]'>
              <h1 className='text-xl text-black font-Agrandir mob:text-lg'>
                Stocks
              </h1>
              <p className='revsmlap:w-[350px] mob:w-[86dvw] text-black font-Mulish mob:text-sm'>
                Whether you’re an expert or just getting started, Cash App is the fastest and most accessible way to invest in stocks. Start now with as little as $1.
              </p>
            </div>
            <img 
              src="/assets/investing-stocks.png" 
              alt="Investing Stocks" 
              className='block'
            />
          </div>
          <div className='flex flex-row gap-8 items-center mob:flex-col'>
            <img 
              src="/assets/investing-bitcoin.png" 
              alt="Investing Bitcoin" 
              className='block'
            />
            <div className='-translate-y-[50%]'>
              <h1 className='text-xl text-black font-Agrandir mob:text-lg'>
                Bitcoin
              </h1>
              <p className='revsmlap:w-[350px] mob:w-[86dvw] text-black font-Mulish mob:text-sm'>
                Cash App is the fastest way to convert dollars to bitcoin. From your home screen, six taps are all it takes to stack sats, buy an entire bitcoin, or just see what it’s all about.
              </p>
            </div>
          </div>
        </div>
      </div>
      <img 
        src="/assets/investing-rays.png" 
        alt="Investing Rays" 
        className='absolute h-full w-full'
      />
      <img 
        src="/assets/investing-floor.png" 
        alt="Investing Floor" 
        className='absolute bottom-0 w-full'
      />
      <img 
        src="/assets/investing-graph-1.png" 
        alt="Investing Graph 1" 
        className='absolute left-0 bottom-0'
      />
      <img 
        src="/assets/investing-graph-2.png" 
        alt="Investing Graph 2" 
        className='absolute right-0 bottom-[35%]'
      />
    </section>
  )
}

export default Investing
