import Link from 'next/link'
import BannerDotsBg from './images/dots-bg.png'
import BannerThumb from './images/banner-thumb.png'
import BannerShapeLeft from './images/banner-shape-left.png'
import BannerThumbDots from './images/thumb-dots.png'
import BannerShadow from './images/banner-shadow.png'

const Banner = () => {
  return (
    
    <section className="banner-bg relative z-10 pt-[160px] pb-[100px]">
        <img className='absolute -z-10 top-0' src={BannerDotsBg.src} alt="" />
        <img className='absolute -z-10 top-0 left-0' src={BannerShapeLeft.src} alt="" />
        <img className='absolute right-0 -z-10 top-0' src={BannerShadow.src} alt="" />
        <div className="container">
            <div className="grid xl:grid-cols-[7fr_5fr] md:grid-cols-2 block gap-4 items-center">
                <div className="relative p-[30px] md:order-2 w-[300px] sm:w-[50%] md:w-[100%] mb-[20px] md:mb-0">
                    <img className='absolute -z-20 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]' src={BannerThumbDots.src} alt="" />
                    <img src={BannerThumb.src} alt="" />
                </div>
                <div className="banner-content xl:pr-8 pr-0 md:order-1">
                    <h6 className='gradient-border bg-[#332092] py-[13px] px-[20px] md:mb-5 mb-3 lg:text-[18px] text-[16px]'>Curated On The Polygon & Ethereum Network</h6>
                    <h1 className="xl:text-[48px] lg:text-[38px] text-[32px] xl:leading-[55px] lg:leading-[50px] leading-[44px] lg:mb-[30px] mb-[15px]">The NFT Marketplace for talented & emerging photographers</h1>
                    <p className='lg:mb-[40px] mb-[20px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                    <Link href='/' className='primary-btn'>Explore The Market</Link>
                </div>
            </div>
        </div>
   </section>

  )
}

export default Banner