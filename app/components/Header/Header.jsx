"use client"
import {useState} from 'react';
import Link from 'next/link'
import { FaBars, FaMagnifyingGlass, FaRegBell } from "react-icons/fa6"
import { FaTimesCircle } from "react-icons/fa";
import HeaderLogo from './logo.png'

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = (e) => {
        // 👇️ toggle isActive state on click
        setIsActive(true);
    };

    const handleClose = (e) => {
        setIsActive(false);
    }
  return (
    <>
    <header className="py-5 absolute top-0 w-full z-50 bg-transparent">
        <div className="container flex items-center justify-between">
            <Link href="/">
                <img src={HeaderLogo.src} alt="" />
            </Link>
            <div className="relative xl:w-[270px] lg:w-[200px] xl:ml-[35px] lg:ml-[25px] lg:block hidden">
                <input type="text" className="bg-transparent pl-[20px] border border-white/20 xl:leading-[58px] lg:leading-[48px] w-full text-white/50 rounded-full focus:outline-none" placeholder="Search..." />
                <div className="absolute inset-y-0 right-0 flex items-center pr-[20px] text-white/50 ">
                    <FaMagnifyingGlass/>
                </div>
            </div>
            <ul className="ml-auto lg:flex xl:space-x-[50px] lg:space-x-[30px] xl:text-[18px] lg:text-[16px] font-medium text-white hidden">
                <li><Link href='/' className='transition hover:text-pink'>Apply Now</Link></li>
                <li><Link href='/' className='transition hover:text-pink'>Explore</Link></li>
                <li><Link href='/' className='transition hover:text-pink'>Market</Link></li>
                <li><Link href='/' className='transition hover:text-pink'>Profile</Link></li>
            </ul>
            <ul className='xl:ml-[30px] ml-auto space-x-[30px] lg:flex items-center'>
                <li className='hidden lg:block'><Link className='gradient-border xl:px-[35px] lg:px-[30px] xl:py-[17px] lg:py-[13px]' href='/'>Mint</Link></li>
                <li>
                    <div className='bg-[#271B5E] flex items-center xl:h-[59px] h-[50px] xl:w-[59px] w-[50px] rounded-full justify-center text-white text-[20px] cursor-pointer'>
                        <FaRegBell/>
                    </div>
                </li>
            </ul>
            <div className="text-2xl menu-trigger lg:hidden ml-[15px] text-white h-[50px] w-[50px] flex items-center justify-center bg-gradient-to-r from-[#9215C5] to-[#3116D2] rounded-full" onClick={handleClick}>
                <FaBars/>
            </div>
        </div>
   </header>

    <div className={`${isActive ? 'active' : 'closed'} offcanvas w-[250px] px-[15px] py-[20px] h-full fixed z-50 bg-black top-0 lg:hidden left-[-250px] transition-all`}>
        <FaTimesCircle className='absolute right-[15px] top-[25px] z-10 text-white text-[24px]' onClick={handleClose}></FaTimesCircle>
        <div className="logo mb-[30px]">
            <Link href="/">
                <img src={HeaderLogo.src} alt="" />
            </Link>
        </div>
        <ul className="space-y-[15px] text-[16px] font-medium text-white mb-[20px]">
            <li><Link href='/' className='transition hover:text-pink'>Apply Now</Link></li>
            <li><Link href='/' className='transition hover:text-pink'>Explore</Link></li>
            <li><Link href='/' className='transition hover:text-pink'>Market</Link></li>
            <li><Link href='/' className='transition hover:text-pink'>Profile</Link></li>
        </ul>
        <div className="relative mb-[20px]">
                <input type="text" className="bg-transparent pl-[20px] border border-white/20 leading-[48px] w-full text-white/50 rounded-full focus:outline-none" placeholder="Search..." />
                <div className="absolute inset-y-0 right-0 flex items-center pr-[20px] text-white/50 ">
                    <FaMagnifyingGlass/>
                    
                </div>
        </div>
        <ul>
            <li className=''><Link className='gradient-border px-[30px] py-[13px] w-full !block text-center' href='/'>Mint</Link></li>
        </ul>
    </div>

   </>
  )
}

export default Header