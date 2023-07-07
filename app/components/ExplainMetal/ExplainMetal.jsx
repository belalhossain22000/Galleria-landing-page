"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

import Image from 'next/image'
import roses from './images/roses.png'
import temple from './images/temple.png'
import building from './images/building.png'
import image1 from './images/image_1.png'
import image2 from './images/image_2.png'
import image3 from './images/image_3.png'
import Link from 'next/link';
import explainShape from './images/explain-shape.png'
import explainShadow from './images/explain-shadow.png'
import explainLine from './images/explain-line.png'


const ExplainMetal = () => {
    return (
        <section className="pb-[140px] relative z-10">
            <img className='absolute right-[28%] top-[-28%] -z-10' src={explainShape.src} alt="" />
            <img className='absolute right-0 top-0 -z-10' src={explainShadow.src} alt="" />
            <img className='absolute right-0 top-[80%] -z-10' src={explainLine.src} alt="" />
            <div className="container">
                <div className="lg:flex justify-between items-center lg:mb-[65px] mb-[30px] text-center lg:text-left">
                    <h1 className="section-title mb-[15px] lg:mb-0">
                        Explain what the metal prints
                    </h1>
                    <Link href='/' className="primary-btn">Explore All Collection</Link>
                </div>

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
                            768: {
                              slidesPerView: 2,
                            },
                            1024: {
                              slidesPerView: 3,
                            },
                        }}
                    >

                        {/* CARD ONE */}
                        <SwiperSlide>
                            <div className='bg-[#ffffff0d] p-[18px] rounded-2xl'>
                                <div className='mb-4 relative'>
                                    <img className='w-full' src={roses.src} alt="" />
                                    <p className='absolute top-5 right-5 bg-[#FFFFFF] text-black text-base px-4 py-[6px] rounded-full'>123 Collections</p>
                                </div>
                                <h2 className='capitalize mb-2 xl:text-[30px] text-[24]'>Red and blue roses</h2>
                                <div className='flex items-center gap-[6px]'>
                                    <Image
                                        src={image1.src}
                                        width={image1.width}
                                        height={image1.height}
                                    />
                                    <p>@minhaj.udding</p>
                                </div>
                            </div>
                        </SwiperSlide>


                        {/* CARD tWO */}
                        <SwiperSlide>
                            <div className='bg-[#ffffff0d] p-[18px] rounded-2xl'>
                                <div className='mb-4 relative'>
                                    <img className='w-full' src={temple.src} alt="" />
                                    <p className='absolute top-5 right-5 bg-[#FFFFFF] text-black text-base px-4 py-[6px] rounded-full'>56 Collections</p>
                                </div>
                                <h2 className='capitalize mb-2 xl:text-[30px] text-[24]'>People inside temple</h2>
                                <div className='flex items-center gap-[6px]'>
                                    <Image
                                        src={image2.src}
                                        width={image2.width}
                                        height={image2.height}
                                    />
                                    <p>@Galleria.456</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* CARD THREE */}
                        <SwiperSlide>
                            <div className='bg-[#ffffff0d] p-[18px] rounded-2xl'>
                                <div className='mb-4 relative'>
                                    <img className='w-full' src={building.src} alt="" />
                                    <p className='absolute top-5 right-5 bg-[#FFFFFF] text-black text-base px-4 py-[6px] rounded-full'>234 Collections</p>
                                </div>
                                <h2 className='capitalize mb-2 xl:text-[30px] text-[24]'>Ceiling of a building</h2>
                                <div className='flex items-center gap-[6px]'>
                                    <Image
                                        src={image3.src}
                                        width={image3.width}
                                        height={image3.height}
                                    />
                                    <p>@Farhad.udding</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* CARD FOUR */}
                        <SwiperSlide>
                            <div className='bg-[#ffffff0d] p-[18px] rounded-2xl'>
                                <div className='mb-4 relative'>
                                    <img className='w-full' src={roses.src} alt="" />
                                    <p className='absolute top-5 right-5 bg-[#FFFFFF] text-black text-base px-4 py-[6px] rounded-full'>123 Collections</p>
                                </div>
                                <h2 className='capitalize mb-2 xl:text-[30px] text-[24]'>Red and blue roses</h2>
                                <div className='flex items-center gap-[6px]'>
                                    <Image
                                        src={image1.src}
                                        width={image1.width}
                                        height={image1.height}
                                    />
                                    <p>@minhaj.udding</p>
                                </div>
                            </div>
                        </SwiperSlide>


                        {/* CARD FIVE */}
                        <SwiperSlide>
                            <div className='bg-[#ffffff0d] p-[18px] rounded-2xl'>
                                <div className='mb-4 relative'>
                                    <img className='w-full' src={temple.src} alt="" />
                                    <p className='absolute top-5 right-5 bg-[#FFFFFF] text-black text-base px-4 py-[6px] rounded-full'>56 Collections</p>
                                </div>
                                <h2 className='capitalize mb-2 xl:text-[30px] text-[24]'>People inside temple</h2>
                                <div className='flex items-center gap-[6px]'>
                                    <Image
                                        src={image2.src}
                                        width={image2.width}
                                        height={image2.height}
                                    />
                                    <p>@Galleria.456</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* CARD SIX */}
                        <SwiperSlide>
                            <div className='bg-[#ffffff0d] p-[18px] rounded-2xl'>
                                <div className='mb-4 relative'>
                                    <img className='w-full' src={building.src} alt="" />
                                    <p className='absolute top-5 right-5 bg-[#FFFFFF] text-black text-base px-4 py-[6px] rounded-full'>234 Collections</p>
                                </div>
                                <h2 className='capitalize mb-2 xl:text-[30px] text-[24]'>Ceiling of a building</h2>
                                <div className='flex items-center gap-[6px]'>
                                    <Image
                                        src={image3.src}
                                        width={image3.width}
                                        height={image3.height}
                                    />
                                    <p>@Farhad.udding</p>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>

        </section>
    );
};

export default ExplainMetal;