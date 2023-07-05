import Link from 'next/link'
import FooterLogo from '../Header/logo.png'
import { FaPhone, FaEnvelope, FaLocationDot, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa6"

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="grid grid-cols-2 items-center pt-[100px] pb-[80px] border-b border-[#660997]">
                <div>
                    <h3 className='text-[36px]'>Join Our Newsletter</h3>
                </div>
                <form action="#">
                    <div className="mx-auto relative">
                        <input className="w-full rounded-full px-8 leading-[78px] bg-transparent border border-[#8C889B] text-[#767676] placeholder:text-[#767676]" type="email" placeholder="Enter your email address"/>
                        <button className="primary-btn relative sm:absolute xl:right-[12px] xl:top-[12px] w-full sm:w-auto sm:right-[7px] top-[7px] !pt-[14px] !pb-[14px]" type="submit">Submit</button>
                    </div>
                </form>
            </div>
            <div className="grid grid-cols-[4fr_8fr] py-[100px] border-b border-[#660997]">
                <div className='pr-[100px] leading-7'>
                    <Link className='mb-7 block' href='/'>
                        <img src={FooterLogo.src} alt="" />
                    </Link>
                    <p className='text-[16px] text-[#E7E7E7]'>Discover how specific cryptocurrencies work — and get a bit of each crypto to try out for yourself.</p>
                </div>
                <div className='grid grid-cols-4'>
                    <div>
                        <h5 className='!font-poppins text-[20px] font-bold mb-6'>Marketplace</h5>
                        <ul className='text-[16px] text-[#E7E7E7] space-y-[15px]'>
                            <li><Link href='/' className='transition hover:text-pink'>Explore</Link></li>
                            <li><Link href='/' className='transition hover:text-pink'>Blog</Link></li>
                            <li><Link href='/' className='transition hover:text-pink'>How it works</Link></li>
                            <li><Link href='/' className='transition hover:text-pink'>Jobs</Link></li>
                            <li><Link href='/' className='transition hover:text-pink'>Help center</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className='!font-poppins text-[20px] font-bold mb-6'>My Account</h5>
                        <ul className='text-[16px] text-[#E7E7E7] space-y-[15px]'>
                            <li><Link href='/' className='transition hover:text-pink'>Profile</Link></li>
                            <li><Link href='/' className='transition hover:text-pink'>Favorites</Link></li>
                            <li><Link href='/' className='transition hover:text-pink'>Watchlist</Link></li>
                            <li><Link href='/' className='transition hover:text-pink'>My Collections</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className='!font-poppins text-[20px] font-bold mb-6'>Company</h5>
                        <ul className='text-[16px] text-[#E7E7E7] space-y-[15px]'>
                            <li><Link href='/' className='transition hover:text-pink'>About</Link></li>
                            <li><Link href='/' className='transition hover:text-pink'>Careers</Link></li>
                            <li><Link href='/' className='transition hover:text-pink'>Ventures</Link></li>
                            <li><Link href='/' className='transition hover:text-pink'>Grants</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className='!font-poppins text-[20px] font-bold mb-6'>Contact Us</h5>
                        <ul className='text-[16px] text-[#E7E7E7] space-y-[25px]'>
                            <li><Link href='tel:252555-0126' className='transition hover:text-pink flex items-center'><span className='h-[28px] w-[28px] min-w-[28px] bg-[#2F2749] rounded-full text-[12px] flex items-center justify-center mr-[10px]'><FaPhone/></span> (252) 555-0126</Link></li>
                            <li><Link href='mailto:Galleria.co' className='transition hover:text-pink flex items-center'><span className='h-[28px] w-[28px] min-w-[28px] bg-[#2F2749] rounded-full text-[12px] flex items-center justify-center mr-[10px]'><FaEnvelope/></span>Galleria.co</Link></li>
                            <li className='flex items-center'><span className='h-[28px] w-[28px] min-w-[28px] bg-[#2F2749] rounded-full text-[12px] flex items-center justify-center mr-[10px]'><FaLocationDot/></span> 2972 Westheimer Rd. Santa Ana, Illinois 85486 </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3 py-[20px]'>
                <div>
                    <ul className='text-[16px] text-[#E7E7E7] space-x-[15px] flex items-center'>
                        <li><Link href='/' className='transition hover:text-pink'>Terms & Conditions</Link></li>
                        <li><Link href='/' className='transition hover:text-pink'>Privacy Policy</Link></li>
                    </ul>
                </div>
                <div className='text-center'>
                    <p className='text-[16px] text-[#E7E7E7]'>© 2023 <span className='text-blue'>Galleria.</span> All rights reserved.</p>
                </div>
                <div>
                    <ul className="flex justify-end text-white font-medium space-x-[15px]">
                        <li><a href="#" class="h-[34px] w-[34px] flex items-center justify-center rounded-full bg-[#272842] text-[14px] hover:bg-gradient-to-r hover:from-[#9215C5] hover:to-[#3116D2]"><FaFacebookF/></a></li>
                        <li><a href="#" class="h-[34px] w-[34px] flex items-center justify-center rounded-full bg-[#272842] text-[14px] hover:bg-gradient-to-r hover:from-[#9215C5] hover:to-[#3116D2]"><FaTwitter/></a></li>
                        <li><a href="#" class="h-[34px] w-[34px] flex items-center justify-center rounded-full bg-[#272842] text-[14px] hover:bg-gradient-to-r hover:from-[#9215C5] hover:to-[#3116D2]"><FaInstagram/></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
