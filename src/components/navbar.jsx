import React,{useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {VscClose} from 'react-icons/vsc'
import { motion } from 'framer-motion'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)

    const handleMenu = () => setShowMenu(!showMenu)
    const container = {
        closed: { opacity: 0, width:'0vw' },
        open: {
          opacity: 1,
          width:'100vw',
        }
    }

    return (
        <div className='flex w-[100dvw] justify-between items-center p-4 pl-6 pr-8 overflow-hidden mob:px-4'>
            <img 
                src="/assets/logo.svg" 
                alt="CashApp Logo"
                className='w-6' 
            />
            <div className='smlap:hidden flex items-center justify-center gap-6 text-white font-Agrandir text-[12px]'>
                <div>SIGN IN</div>
                <div>LEGAL</div>
                <div>LICENSES</div>
                <div>SECURITY</div>
                <div>CAREERS</div>
                <div>PRESS</div>
                <div>SUPPORT</div>
                <div>STATUS</div>
                <div>CODEBLOG</div>
            </div>
            <div className='revsmlap:hidden w-full flex justify-end items-center gap-6 pr-6 mob:pr-4 mob:gap-4'>
                <div className='text-white font-Agrandir text-[12px]'>
                    SIGN IN
                </div>
                <button onClick={handleMenu}>
                    <GiHamburgerMenu className='text-white w-7 h-7' /> 
                </button>
                <motion.div
                    className='absolute top-0 left-0 h-[100dvh] bg-black z-50 flex justify-center items-center gap-6 text-white font-Agrandir text-[12px]'
                    animate={showMenu ? 'open' : 'closed'}
                    initial='closed'
                    variants={container}
                >   
                    <div className='flex flex-col gap-5 text-lg'>
                        <div>LEGAL</div>
                        <div>LICENSES</div>
                        <div>SECURITY</div>
                        <div>CAREERS</div>
                        <div>PRESS</div>
                        <div>SUPPORT</div>
                        <div>STATUS</div>
                        <div>CODEBLOG</div>
                        <div className='absolute top-3 right-2'>
                            <button onClick={handleMenu}>
                                <VscClose className='text-white w-10 h-10'/>
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
            <img 
                src="/assets/eye.png" 
                alt="eye"
                className='w-12' 
            />
        </div>
    )
    }

export default Navbar
