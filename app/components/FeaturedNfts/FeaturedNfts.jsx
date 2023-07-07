"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';

import Image from 'next/image'
import image1 from './images/image_1.png'
import image2 from './images/image_2.png'
import image3 from './images/image_3.png'
import profile1 from './images/profile_1.png'
import profile2 from './images/profile_2.png'
import profile3 from './images/profile_3.png'
import { AiFillHeart } from 'react-icons/ai';
import nftShadow from './images/nft-shadow.png'
import nftShadowRight from './images/nft-shadow-right.png'
import nftLine from './images/nft-line.png'

const FeaturedNfts = () => {
    return (
        <section className='py-[140px] relative z-10'>
            <img className='absolute left-0 top-[-50%] -z-10' src={nftShadow.src} alt="" />
            <img className='absolute right-0 top-0 -z-10' src={nftShadowRight.src} alt="" />
            <img className='absolute right-0 top-[60%] -z-10' src={nftLine.src} alt="" />
            <div className='container'>
                <div className="md:flex justify-between items-center mb-[30px] md:mb-[65px]">
                    <h1 className="text-3xl md:text-[44px] mb-5 md:mb-0 text-center md:text-start">
                        Featured NFTs
                    </h1>
                    <div className='flex justify-center'>
                        <Link href='/' className="primary-btn">Explore All Collection</Link>
                    </div>
                </div>
                <div>
                    <Swiper
                        spaceBetween={30}
                        loop={true}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                        breakpoints={{
                            // when window width is >= 640px
                            640: {
                              slidesPerView: 1,
                            },
                            // when window width is >= 768px
                            768: {
                              slidesPerView: 2,
                            },
                            1280: {
                              slidesPerView: 3,
                            },
                        }}
                    >

                        {/* card ONE */}
                        <SwiperSlide>
                            <div className='bg-[#ffffff0d] p-[18px] rounded-2xl'>
                                <div className='mb-4 relative'>
                                    <img className='w-full' src={image1.src} alt="" />
                                    <p className='absolute top-5 right-5 bg-[#FFFFFF] text-black text-base px-4 py-[6px] rounded-full flex items-center'><AiFillHeart className='text-[#CE2929]'></AiFillHeart> 120</p>
                                </div>
                                <h2 className='capitalize mb-2 xl:text-[30px] text-[24px]'>Caucasian Beauty</h2>
                                <div className='flex items-center gap-[6px]'>
                                    <Image
                                        src={profile1.src}
                                        width={profile1.width}
                                        height={profile1.height}
                                    />
                                    <p className='lg:text-[18px] text-[16px]'>@minhaj.udding</p>
                                </div>
                                <div className='border border-[#ffffff1a] my-4'></div>
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <h3 className='xl:text-[24px] text-[20px]'>250.0 Matic</h3>
                                        <p className='lg:text-[18px] text-[16px]'>209.50 Usd</p>
                                    </div>
                                    <button className='btn_sm'>Buy Now</button>
                                </div>
                            </div>
                        </SwiperSlide>


                        {/* card tWO */}
                        <SwiperSlide>
                            <div className='bg-[#ffffff0d] p-[18px] rounded-2xl'>
                                <div className='mb-4 relative'>
                                    <img className='w-full' src={image2.src} alt="" />
                                    <p className='absolute top-5 right-5 bg-[#FFFFFF] text-black text-base px-4 py-[6px] rounded-full flex items-center'><AiFillHeart className='text-[#CE2929]'></AiFillHeart> 90</p>
                                </div>
                                <h2 className='capitalize mb-2 xl:text-[30px] text-[24px]'>film element Con</h2>
                                <div className='flex items-center gap-[6px]'>
                                    <Image
                                        src={profile2.src}
                                        width={profile2.width}
                                        height={profile2.height}
                                    />
                                    <p className='lg:text-[18px] text-[16px]'>@Sajig.098</p>
                                </div>
                                <div className='border border-[#ffffff1a] my-4'></div>
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <h3 className='xl:text-[24px] text-[20px]'>278.0 Matic</h3>
                                        <p className='lg:text-[18px] text-[16px]'>216.50 Usd</p>
                                    </div>
                                    <button className='btn_sm'>Buy Now</button>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* CARD THREE */}
                        <SwiperSlide>
                            <div className='bg-[#ffffff0d] p-[18px] rounded-2xl'>
                                <div className='mb-4 relative'>
                                    <img className='w-full' src={image3.src} alt="" />
                                    <p className='absolute top-5 right-5 bg-[#FFFFFF] text-black text-base px-4 py-[6px] rounded-full flex items-center'><AiFillHeart className='text-[#CE2929]'></AiFillHeart> 145</p>
                                </div>
                                <h2 className='capitalize mb-2 xl:text-[30px] text-[24px]'>film element Con</h2>
                                <div className='flex items-center gap-[6px]'>
                                    <Image
                                        src={profile3.src}
                                        width={profile3.width}
                                        height={profile3.height}
                                    />
                                    <p className='lg:text-[18px] text-[16px]'>@Saiful.34</p>
                                </div>
                                <div className='border border-[#ffffff1a] my-4'></div>
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <h3 className='xl:text-[24px] text-[20px]'>278.0 Matic</h3>
                                        <p className='lg:text-[18px] text-[16px]'>216.50 Usd</p>
                                    </div>
                                    <button className='btn_sm'>Buy Now</button>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* card FOUR */}
                        <SwiperSlide>
                            <div className='bg-[#ffffff0d] p-[18px] rounded-2xl'>
                                <div className='mb-4 relative'>
                                    <img className='w-full' src={image2.src} alt="" />
                                    <p className='absolute top-5 right-5 bg-[#FFFFFF] text-black text-base px-4 py-[6px] rounded-full flex items-center'><AiFillHeart className='text-[#CE2929]'></AiFillHeart> 120</p>
                                </div>
                                <h2 className='capitalize mb-2 xl:text-[30px] text-[24px]'>Caucasian Beauty</h2>
                                <div className='flex items-center gap-[6px]'>
                                    <Image
                                        src={profile2.src}
                                        width={profile2.width}
                                        height={profile2.height}
                                    />
                                    <p className='lg:text-[18px] text-[16px]'>@minhaj.udding</p>
                                </div>
                                <div className='border border-[#ffffff1a] my-4'></div>
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <h3 className='xl:text-[24px] text-[20px]'>250.0 Matic</h3>
                                        <p className='lg:text-[18px] text-[16px]'>209.50 Usd</p>
                                    </div>
                                    <button className='btn_sm'>Buy Now</button>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default FeaturedNfts;