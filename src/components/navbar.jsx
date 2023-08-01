import React,{useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)

    const handleMenu = () => setShowMenu(!showMenu)

    return (
        <div className='flex w-[100dvw] justify-between items-center p-4 pl-6 pr-8 overflow-hidden'>
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
            <div className='revsmlap:hidden w-full flex justify-end items-center gap-6 pr-6'>
                <div className='text-white font-Agrandir text-[12px]'>
                    SIGN IN
                </div>
                <button onClick={handleMenu}>
                    <GiHamburgerMenu className='text-white w-7 h-7' /> 
                </button>
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
