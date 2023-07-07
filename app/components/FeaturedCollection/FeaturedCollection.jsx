"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

import Image from 'next/image'
import profile1 from './images/caucasian/profile_1.png'
import profile2 from './images/blue_smoke/profile_2.png'
import image1 from './images/caucasian/image_1.png'
import image2 from './images/caucasian/image_2.png'
import image3 from './images/caucasian/image_3.png'
import image4 from './images/caucasian/image_4.png'
import image5 from './images/caucasian/image_5.png'

import image6 from './images/blue_smoke/image_1.png'
import image7 from './images/blue_smoke/image_2.png'
import image8 from './images/blue_smoke/image_3.png'
import image9 from './images/blue_smoke/image_4.png'
import image10 from './images/blue_smoke/image_5.png'
import featuredLine from './images/featured-line.png'

import { AiFillHeart } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";
import Link from 'next/link';


const FeaturedCollection = () => {
    return (
        <section className='featured-bg py-[120px] relative z-10'>
            <img className='absolute left-0 top-[70%] -z-10' src={featuredLine.src} alt="" />
            <div className="container">
                <h1 className="section-title text-center lg:mb-[65px] mb-[30px]">Featured Collections</h1>
                <div className='mb-[30px] md:mb-[65px]'>

                    {/* DESKTOP DEVICE */}

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
                                1024: {
                                  slidesPerView: 2,
                                },
                            }}
                        >

                            {/* SLIDE ONE */}

                            <SwiperSlide>
                                <div className='flex justify-center gap-[44px]'>
                                    <div className='bg-[#ffffff0d] p-[30px] rounded-[14px]'>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex sm:items-center items-start gap-[14px]'>
                                                <div className='relative'>
                                                    <Image
                                                        src={profile1.src}
                                                        width={profile1.width}
                                                        height={profile1.height}
                                                    />
                                                    <BsCheck className='bg-[#2BC927] rounded-full absolute bottom-0 right-0'></BsCheck>
                                                </div>
                                                <div className='grid gap-[6px]'>
                                                    <h2 className='lg:text-[30px] text-[24px]'>Caucasian Beauty</h2>
                                                    <p className='md:text-[18px] text-[16px]'>@GAlleria.456</p>
                                                </div>
                                            </div>
                                            <p className='bg-white px-[17px] py-[6px] text-black md:text-[18px] text-[12px] rounded-full flex items-center'><AiFillHeart className='text-[#CE2929]'></AiFillHeart> 120</p>
                                        </div>
                                        <div className='grid gap-5 mt-6'>
                                            <div className='grid grid-cols-3 gap-[15px]'>
                                                <img className='w-full sm:rounded-[14px] rounded-[8px] sm:h-[145px] h-[90px] object-cover' src={image1.src} alt="" />
                                                <img className='w-full sm:rounded-[14px] rounded-[8px] sm:h-[145px] h-[90px] object-cover' src={image2.src} alt="" />
                                                <img className='w-full sm:rounded-[14px] rounded-[8px] sm:h-[145px] h-[90px] object-cover' src={image3.src} alt="" />
                                            </div>
                                            <div className='grid grid-cols-2 gap-5'>
                                                <img className='w-full sm:rounded-[14px] rounded-[8px] sm:h-[205px] h-[130px] object-cover' src={image4.src} alt="" />
                                                <img className='w-full sm:rounded-[14px] rounded-[8px] sm:h-[205px] h-[130px] object-cover' src={image5.src} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>


                            {/* SLIDE tWO */}

                            <SwiperSlide>
                                <div className='flex justify-center gap-[44px]'>
                                    <div className='bg-[#ffffff0d] p-[30px] rounded-[14px]'>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex sm:items-center items-start gap-[14px]'>
                                                <div className='relative'>
                                                    <Image
                                                        src={profile2.src}
                                                        width={profile2.width}
                                                        height={profile2.height}
                                                    />
                                                    <BsCheck className='bg-[#2BC927] rounded-full absolute bottom-0 right-0'></BsCheck>
                                                </div>
                                                <div className='grid gap-[6px]'>
                                                    <h2 className='lg:text-[30px] text-[24px]'>Caucasian Beauty</h2>
                                                    <p className='md:text-[18px] text-[16px]'>@GAlleria.456</p>
                                                </div>
                                            </div>
                                            <p className='bg-white px-[17px] py-[6px] text-black md:text-[18px] text-[12px] rounded-full flex items-center'><AiFillHeart className='text-[#CE2929]'></AiFillHeart> 120</p>
                                        </div>
                                        <div className='grid gap-5 mt-6'>
                                            <div className='grid grid-cols-2 gap-5'>
                                                <img className='w-full sm:rounded-[14px] rounded-[8px] sm:h-[205px] h-[130px] object-cover' src={image6.src} alt="" />
                                                <img className='w-full sm:rounded-[14px] rounded-[8px] sm:h-[205px] h-[130px] object-cover' src={image7.src} alt="" />
                                            </div>
                                            <div className='grid grid-cols-3 gap-[15px]'>
                                                <img className='w-full sm:rounded-[14px] rounded-[8px] sm:h-[145px] h-[90px] object-cover' src={image8.src} alt="" />
                                                <img className='w-full sm:rounded-[14px] rounded-[8px] sm:h-[145px] h-[90px] object-cover' src={image9.src} alt="" />
                                                <img className='w-full sm:rounded-[14px] rounded-[8px] sm:h-[145px] h-[90px] object-cover' src={image10.src} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* SLIDE THREE */}

                            <SwiperSlide>
                                <div className='flex justify-center gap-[44px]'>
                                    <div className='bg-[#ffffff0d] p-[30px] rounded-[14px]'>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex sm:items-center items-start gap-[14px]'>
                                                <div className='relative'>
                                                    <Image
                                                        src={profile1.src}
                                                        width={profile1.width}
                                                        height={profile1.height}
                                                    />
                                                    <BsCheck className='bg-[#2BC927] rounded-full absolute bottom-0 right-0'></BsCheck>
                                                </div>
                                                <div className='grid gap-[6px]'>
                                                    <h2 className='lg:text-[30px] text-[24px]'>Caucasian Beauty</h2>
                                                    <p className='md:text-[18px] text-[16px]'>@GAlleria.456</p>
                                                </div>
                                            </div>
                                            <p className='bg-white px-[17px] py-[6px] text-black md:text-[18px] text-[12px] rounded-full flex items-center'><AiFillHeart className='text-[#CE2929]'></AiFillHeart> 120</p>
                                        </div>
                                        <div className='grid gap-5 mt-6'>
                                            <div className='grid grid-cols-3 gap-[15px]'>
                                                <img className='w-full sm:rounded-[14px] rounded-[8px] sm:h-[145px] h-[90px] object-cover' src={image1.src} alt="" />
                                                <img className='w-full sm:rounded-[14px] rounded-[8px] sm:h-[145px] h-[90px] object-cover' src={image2.src} alt="" />
                                                <img className='w-full sm:rounded-[14px] rounded-[8px] sm:h-[145px] h-[90px] object-cover' src={image3.src} alt="" />
                                            </div>
                                            <div className='grid grid-cols-2 gap-5'>
                                                <img className='w-full sm:rounded-[14px] rounded-[8px] sm:h-[205px] h-[130px] object-cover' src={image4.src} alt="" />
                                                <img className='w-full sm:rounded-[14px] rounded-[8px] sm:h-[205px] h-[130px] object-cover' src={image5.src} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* SLIDE FOUR */}

                            <SwiperSlide>
                                <div className='flex justify-center gap-[44px]'>
                                    <div className='bg-[#ffffff0d] p-[30px] rounded-[14px]'>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex sm:items-center items-start gap-[14px]'>
                                                <div className='relative'>
                                                    <Image
                                                        src={profile2.src}
                                                        width={profile2.width}
                                                        height={profile2.height}
                                                    />
                                                    <BsCheck className='bg-[#2BC927] rounded-full absolute bottom-0 right-0'></BsCheck>
                                                </div>
                                                <div className='grid gap-[6px]'>
                                                    <h2 className='lg:text-[30px] text-[24px]'>Caucasian Beauty</h2>
                                                    <p className='md:text-[18px] text-[16px]'>@GAlleria.456</p>
                                                </div>
                                            </div>
                                            <p className='bg-white px-[17px] py-[6px] text-black md:text-[18px] text-[12px] rounded-full flex items-center'><AiFillHeart className='text-[#CE2929]'></AiFillHeart> 120</p>
                                        </div>
                                        <div className='grid gap-5 mt-6'>
                                            <div className='grid grid-cols-2 gap-5'>
                                                <img className='w-full sm:rounded-[14px] rounded-[8px] sm:h-[205px] h-[130px] object-cover' src={image6.src} alt="" />
                                                <img className='w-full sm:rounded-[14px] rounded-[8px] sm:h-[205px] h-[130px] object-cover' src={image7.src} alt="" />
                                            </div>
                                            <div className='grid grid-cols-3 gap-[15px]'>
                                                <img className='w-full sm:rounded-[14px] rounded-[8px] sm:h-[145px] h-[90px] object-cover' src={image8.src} alt="" />
                                                <img className='w-full sm:rounded-[14px] rounded-[8px] sm:h-[145px] h-[90px] object-cover' src={image9.src} alt="" />
                                                <img className='w-full sm:rounded-[14px] rounded-[8px] sm:h-[145px] h-[90px] object-cover' src={image10.src} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <Link href='/' className="primary-btn">Explore All Collection</Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedCollection;