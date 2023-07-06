import Link from 'next/link'
import { FaBars, FaMagnifyingGlass, FaRegBell } from "react-icons/fa6"
import HeaderLogo from './logo.png'

const Header = () => {
  return (
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
            <div class="text-2xl menu-trigger lg:hidden ml-[15px] text-white h-[50px] w-[50px] flex items-center justify-center bg-gradient-to-r from-[#9215C5] to-[#3116D2] rounded-full">
                <FaBars/>
            </div>
        </div>
   </header>
  )
}

export default Header