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
            <div className="relative w-[270px] ml-[35px]">
                <input type="text" className="bg-transparent pl-[20px] border border-white/20 leading-[58px] w-full text-white/50 rounded-full focus:outline-none" placeholder="Search..." />
                <div className="absolute inset-y-0 right-0 flex items-center pr-[20px] text-white/50 ">
                    <FaMagnifyingGlass/>
                </div>
            </div>
            <ul className="ml-auto lg:flex space-x-[50px] text-[18px] font-medium text-white hidden">
                <li><Link href='/' className='transition hover:text-pink'>Apply Now</Link></li>
                <li><Link href='/' className='transition hover:text-pink'>Explore</Link></li>
                <li><Link href='/' className='transition hover:text-pink'>Market</Link></li>
                <li><Link href='/' className='transition hover:text-pink'>Profile</Link></li>
            </ul>
            <ul className='ml-[30px] space-x-[30px] lg:flex items-center'>
                <li><Link className='gradient-border px-[35px] py-[17px]' href='/'>Mint</Link></li>
                <li>
                    <div className='bg-[#271B5E] flex items-center h-[59px] w-[59px] rounded-full justify-center text-white text-[20px] cursor-pointer'>
                        <FaRegBell/>
                    </div>
                </li>
            </ul>
            <div class="ml-auto text-2xl menu-trigger lg:hidden">
                <FaBars/>
            </div>
        </div>
   </header>
  )
}

export default Header