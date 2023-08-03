import React from 'react'

const Payments = () => {
  return (
    <section className='h-[100dvh] bg-[#F8F6F6] snap-start relative'>
      <div className='absolute flex items-center w-[650px] top-[50%] right-[50%] -translate-y-[50%] z-10'>
        <div className='relative z-10 left-52'>
          <h1 className='text-2xl font-Agrandir text-[#00D54B]'>
            Payments
          </h1>
          <p className='w-[350px]' >
          Send and receive money with anyone, donate  to an important cause, or tip professionals. 
          Just enter a $cashtag, phone number, or 
          scan their  QR code to pay.
          </p>
        </div>
        <img
          src="/assets/payments-phone-1.png" 
          alt="Payments Phone 1" 
        />
      </div>
    </section>
  )
}

export default Payments
