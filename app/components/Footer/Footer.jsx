"use client"
import Link from 'next/link'
import FooterLogo from '../Header/logo.png'
import { FaPhone, FaEnvelope, FaLocationDot, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa6"
import FooterShadow from './footer-shadow.png'
import footerShape from './footer-shape.png'
import Reveals from '@/app/utils/Reveals'

const Footer = () => {
  return (
    <footer className='footer-bg relative z-10'>
        <img className='absolute bottom-0 left-1/2 translate-x-[-50%] -z-10' src={FooterShadow.src} alt="" />
        <img className='absolute left-0 md:top-[-30%] top-[-10%] -z-10' src={footerShape.src} alt="" />
        <div className="container">
            <div className="lg:grid grid-cols-2 items-center pt-[100px] pb-[80px] border-b border-[#660997]">
                <div className='mb-[30px] lg:mb-0'>
                    <Reveals>
                    <h3 className='xl:text-[36px] text-[32px] text-center lg:text-left'>Join Our Newsletter</h3>
                    </Reveals>
                </div>
                <Reveals>
                <form action="#">
                    <div className="mx-auto relative">
                        <input className="w-full rounded-full px-8 xl:leading-[78px] sm:leading-[66px] leading-[54px] bg-transparent border border-[#8C889B] text-[#767676] placeholder:text-[#767676]" type="email" placeholder="Enter your email address"/>
                        <button className="primary-btn relative sm:absolute xl:right-[12px] xl:top-[12px] w-full sm:w-auto sm:right-[7px] top-[7px] !pt-[14px] !pb-[14px] text-white" type="submit">Submit</button>
                    </div>
                </form>
                    </Reveals>
            </div>
            <div className="lg:grid grid-cols-[4fr_8fr] py-[100px] border-b border-[#660997]">
                <div className='lg:pr-[100px] leading-7 mb-[30px] lg:mb-0'>
                    <Link className='lg:mb-7 mb-5 block' href='/'>
                        <img src={FooterLogo.src} alt="" />
                    </Link>
                    <p className='text-[16px] text-[#E7E7E7]'>Discover how specific cryptocurrencies work — and get a bit of each crypto to try out for yourself.</p>
                </div>
                <div className='grid md:grid-cols-4 grid-cols-2'>
                    <div className='mb-[30px] md:mb-0'>
                        <h5 className='!font-poppins text-[20px] font-bold mb-6'>Marketplace</h5>
                        <ul className='text-[16px] text-[#E7E7E7] space-y-[15px]'>
                            <li><Link href='/' className='transition hover:text-pink'>Explore</Link></li>
                            <li><Link href='/' className='transition hover:text-pink'>Blog</Link></li>
                            <li><Link href='/' className='transition hover:text-pink'>How it works</Link></li>
                            <li><Link href='/' className='transition hover:text-pink'>Jobs</Link></li>
                            <li><Link href='/' className='transition hover:text-pink'>Help center</Link></li>
                        </ul>
                    </div>
                    <div className='mb-[30px] md:mb-0'>
                        <h5 className='!font-poppins text-[20px] font-bold mb-6'>My Account</h5>
                        <ul className='text-[16px] text-[#E7E7E7] space-y-[15px]'>
                            <li><Link href='/' className='transition hover:text-pink'>Profile</Link></li>
                            <li><Link href='/' className='transition hover:text-pink'>Favorites</Link></li>
                            <li><Link href='/' className='transition hover:text-pink'>Watchlist</Link></li>
                            <li><Link href='/' className='transition hover:text-pink'>My Collections</Link></li>
                        </ul>
                    </div>
                    <div className='mb-[30px] md:mb-0'>
                        <h5 className='!font-poppins text-[20px] font-bold mb-6'>Company</h5>
                        <ul className='text-[16px] text-[#E7E7E7] space-y-[15px]'>
                            <li><Link href='/' className='transition hover:text-pink'>About</Link></li>
                            <li><Link href='/' className='transition hover:text-pink'>Careers</Link></li>
                            <li><Link href='/' className='transition hover:text-pink'>Ventures</Link></li>
                            <li><Link href='/' className='transition hover:text-pink'>Grants</Link></li>
                        </ul>
                    </div>
                    <div className='mb-[30px] md:mb-0'>
                        <h5 className='!font-poppins text-[20px] font-bold mb-6'>Contact Us</h5>
                        <ul className='text-[16px] text-[#E7E7E7] space-y-[25px]'>
                            <li><Link href='tel:252555-0126' className='transition hover:text-pink flex items-center'><span className='h-[28px] w-[28px] min-w-[28px] bg-[#2F2749] rounded-full text-[12px] flex items-center justify-center mr-[10px]'><FaPhone/></span> (252) 555-0126</Link></li>
                            <li><Link href='mailto:Galleria.co' className='transition hover:text-pink flex items-center'><span className='h-[28px] w-[28px] min-w-[28px] bg-[#2F2749] rounded-full text-[12px] flex items-center justify-center mr-[10px]'><FaEnvelope/></span>Galleria.co</Link></li>
                            <li className='flex'><span className='h-[28px] w-[28px] min-w-[28px] bg-[#2F2749] rounded-full text-[12px] flex items-center justify-center mr-[10px]'><FaLocationDot/></span> 2972 Westheimer Rd. Santa Ana, Illinois 85486 </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='lg:grid grid-cols-3 py-[20px]'>
                <div className='mb-[15px] lg:mb-0'>
                    <ul className='text-[16px] text-[#E7E7E7] space-x-[15px] flex items-center justify-center lg:justify-start'>
                        <li><Link href='/' className='transition hover:text-pink'>Terms & Conditions</Link></li>
                        <li><Link href='/' className='transition hover:text-pink'>Privacy Policy</Link></li>
                    </ul>
                </div>
                <div className='text-center mb-[15px] lg:mb-0'>
                    <p className='text-[16px] text-[#E7E7E7]'>© 2023 <span className='text-blue'>Galleria.</span> All rights reserved.</p>
                </div>
                <div>
                    <ul className="flex lg:justify-end justify-center text-white font-medium space-x-[15px]">
                        <li><a href="#" className="h-[34px] w-[34px] flex items-center justify-center rounded-full bg-[#272842] text-[14px] hover:bg-gradient-to-r hover:from-[#9215C5] hover:to-[#3116D2]"><FaFacebookF/></a></li>
                        <li><a href="#" className="h-[34px] w-[34px] flex items-center justify-center rounded-full bg-[#272842] text-[14px] hover:bg-gradient-to-r hover:from-[#9215C5] hover:to-[#3116D2]"><FaTwitter/></a></li>
                        <li><a href="#" className="h-[34px] w-[34px] flex items-center justify-center rounded-full bg-[#272842] text-[14px] hover:bg-gradient-to-r hover:from-[#9215C5] hover:to-[#3116D2]"><FaInstagram/></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
