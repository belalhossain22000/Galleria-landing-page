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

import { AiFillHeart } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";


const FeaturedCollection = () => {
    return (
        <div className="mt-[258px] container">
            <h1 className="text-[44px] text-center mb-[65px]">Featured Collections</h1>
            <div className=''>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >

                    {/* SLIDE ONE */}

                    <SwiperSlide>
                        <div className='flex justify-center gap-[44px]'>
                            <div className='bg-[#ffffff0d] p-[30px] rounded-[14px]'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex items-center gap-[14px]'>
                                        <div className='relative'>
                                            <Image
                                                src={profile1.src}
                                                width={profile1.width}
                                                height={profile1.height}
                                            />
                                            <BsCheck className='bg-[#2BC927] rounded-full absolute bottom-0 right-0'></BsCheck>
                                        </div>
                                        <div className='grid gap-[6px]'>
                                            <h2 className='text-[30px]'>Caucasian Beauty</h2>
                                            <p>@GAlleria.456</p>
                                        </div>
                                    </div>
                                    <p className='bg-white px-[17px] py-[6px] text-black rounded-full flex items-center'><AiFillHeart className='text-[#CE2929]'></AiFillHeart> 120</p>
                                </div>
                                <div className='grid gap-5 mt-6'>
                                    <div className='flex gap-[15px]'>
                                        <Image
                                            src={image1.src}
                                            width={image1.width}
                                            height={image1.height}
                                        />
                                        <Image
                                            src={image2.src}
                                            width={image2.width}
                                            height={image2.height}
                                        />
                                        <Image
                                            src={image3.src}
                                            width={image3.width}
                                            height={image3.height}
                                        />
                                    </div>
                                    <div className='flex gap-5'>
                                        <Image
                                            src={image4.src}
                                            width={image4.width}
                                            height={image4.height}
                                        />
                                        <Image
                                            src={image5.src}
                                            width={image5.width}
                                            height={image5.height}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='bg-[#ffffff0d] p-[30px] rounded-[14px]'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex items-center gap-[14px]'>
                                        <div className='relative'>
                                            <Image
                                                src={profile2.src}
                                                width={profile2.width}
                                                height={profile2.height}
                                            />
                                            <BsCheck className='bg-[#2BC927] rounded-full absolute bottom-0 right-0'></BsCheck>
                                        </div>
                                        <div className='grid gap-[6px]'>
                                            <h2 className='text-[30px]'>Caucasian Beauty</h2>
                                            <p>@GAlleria.456</p>
                                        </div>
                                    </div>
                                    <p className='bg-white px-[17px] py-[6px] text-black rounded-full flex items-center'><AiFillHeart className='text-[#CE2929]'></AiFillHeart> 120</p>
                                </div>
                                <div className='grid gap-5 mt-6'>
                                    <div className='flex gap-5'>
                                        <Image
                                            src={image6.src}
                                            width={image6.width}
                                            height={image6.height}
                                        />
                                        <Image
                                            src={image7.src}
                                            width={image7.width}
                                            height={image7.height}
                                        />
                                    </div>
                                    <div className='flex gap-[15px]'>
                                        <Image
                                            src={image8.src}
                                            width={image8.width}
                                            height={image8.height}
                                        />
                                        <Image
                                            src={image9.src}
                                            width={image9.width}
                                            height={image9.height}
                                        />
                                        <Image
                                            src={image10.src}
                                            width={image10.width}
                                            height={image10.height}
                                        />
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
                                    <div className='flex items-center gap-[14px]'>
                                        <div className='relative'>
                                            <Image
                                                src={profile1.src}
                                                width={profile1.width}
                                                height={profile1.height}
                                            />
                                            <BsCheck className='bg-[#2BC927] rounded-full absolute bottom-0 right-0'></BsCheck>
                                        </div>
                                        <div className='grid gap-[6px]'>
                                            <h2 className='text-[30px]'>Caucasian Beauty</h2>
                                            <p>@GAlleria.456</p>
                                        </div>
                                    </div>
                                    <p className='bg-white px-[17px] py-[6px] text-black rounded-full flex items-center'><AiFillHeart className='text-[#CE2929]'></AiFillHeart> 120</p>
                                </div>
                                <div className='grid gap-5 mt-6'>
                                    <div className='flex gap-[15px]'>
                                        <Image
                                            src={image1.src}
                                            width={image1.width}
                                            height={image1.height}
                                        />
                                        <Image
                                            src={image2.src}
                                            width={image2.width}
                                            height={image2.height}
                                        />
                                        <Image
                                            src={image3.src}
                                            width={image3.width}
                                            height={image3.height}
                                        />
                                    </div>
                                    <div className='flex gap-5'>
                                        <Image
                                            src={image4.src}
                                            width={image4.width}
                                            height={image4.height}
                                        />
                                        <Image
                                            src={image5.src}
                                            width={image5.width}
                                            height={image5.height}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='bg-[#ffffff0d] p-[30px] rounded-[14px]'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex items-center gap-[14px]'>
                                        <div className='relative'>
                                            <Image
                                                src={profile2.src}
                                                width={profile2.width}
                                                height={profile2.height}
                                            />
                                            <BsCheck className='bg-[#2BC927] rounded-full absolute bottom-0 right-0'></BsCheck>
                                        </div>
                                        <div className='grid gap-[6px]'>
                                            <h2 className='text-[30px]'>Caucasian Beauty</h2>
                                            <p>@GAlleria.456</p>
                                        </div>
                                    </div>
                                    <p className='bg-white px-[17px] py-[6px] text-black rounded-full flex items-center'><AiFillHeart className='text-[#CE2929]'></AiFillHeart> 120</p>
                                </div>
                                <div className='grid gap-5 mt-6'>
                                    <div className='flex gap-5'>
                                        <Image
                                            src={image6.src}
                                            width={image6.width}
                                            height={image6.height}
                                        />
                                        <Image
                                            src={image7.src}
                                            width={image7.width}
                                            height={image7.height}
                                        />
                                    </div>
                                    <div className='flex gap-[15px]'>
                                        <Image
                                            src={image8.src}
                                            width={image8.width}
                                            height={image8.height}
                                        />
                                        <Image
                                            src={image9.src}
                                            width={image9.width}
                                            height={image9.height}
                                        />
                                        <Image
                                            src={image10.src}
                                            width={image10.width}
                                            height={image10.height}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default FeaturedCollection;