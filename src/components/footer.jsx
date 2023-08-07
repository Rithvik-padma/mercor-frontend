import React from 'react'

const Footer = ({themeColor}) => {
  return (
    <footer className='absolute w-[100dvw] bottom-0 flex flex-row justify-between p-6 px-14'>
      <div className='flex flex-row items-center gap-5'>
        <button className='p-5 py-3 flex items-center justify-center gap-3 border-[1px] border-white rounded-md bg-black'>
          <img 
            src="/assets/apple-green.png" 
            alt="Apple icon"
            className='w-5'
          />
          <div className='text-white font-Agrandir text-[12px]'>
            APP STORE
          </div>
        </button>
        <button className='p-5 py-3 flex items-center justify-center gap-3 border-[1px] border-white rounded-md bg-black'>
          <img 
            src="/assets/playstore-green.png" 
            alt="PLay Store icon"
            className='w-5'
          />
          <div className='text-white font-Agrandir text-[12px]'>
            PLAY STORE
          </div>
        </button>
      </div>
      <div className='flex flex-row items-center gap-10'>
        <p className='text-[#B6B6B6] text-xs font-Mulish w-[600px]'>
          Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
          See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin trading offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.
        </p>
        <div className='flex flex-row items-center gap-8'>
          <button>
            <img 
              src="/assets/twitch-white.png" 
              alt="Twitch icon"
              className='w-5'
            />
          </button>
          <button>
            <img 
              src="/assets/twitter-white.png" 
              alt="Twitter icon"
            />
          </button>
          <button>
            <img 
              src="/assets/instagram-white.png" 
              alt="Instagram icon"
              className='w-5'
            />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
