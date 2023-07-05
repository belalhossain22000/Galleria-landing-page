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

const ExplainMetal = () => {
    return (
        <div className="container mt-[60px] md:mt-[144px]">
            <div className="md:flex justify-between items-center mb-[30px] md:mb-[65px]">
                <h1 className="text-3xl md:text-[44px] mb-5 md:mb-0">
                    Explain what the metal prints
                </h1>
                <Link href='/' className="primary-btn">Explore All Collection</Link>
            </div>

            {/* DESKTOP DEVICE */}

            <div className='hidden md:flex'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper "
                >

                    <div className='hidden md:grid'>
                        {/* SLIDE ONE */}
                        <div>

                            {/* CARD ONE */}

                            <SwiperSlide>
                                <div className='bg-[#ffffff0d] p-[18px] rounded-2xl md:w-[410px] md:h-[468px]'>
                                    <div className='mb-4 relative'>
                                        <Image
                                            src={roses.src}
                                            width={roses.width}
                                            height={roses.height}
                                        />
                                        <p className='absolute top-5 right-5 bg-[#FFFFFF] text-black text-base px-4 py-[6px] rounded-full'>123 Collections</p>
                                    </div>
                                    <h2 className='capitalize mb-2 text-[30px]'>Red and blue roses</h2>
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
                                <div className='bg-[#ffffff0d] p-[18px] rounded-2xl w-[410px] h-[468px]'>
                                    <div className='mb-4 relative'>
                                        <Image
                                            src={temple.src}
                                            width={temple.width}
                                            height={temple.height}
                                        />
                                        <p className='absolute top-5 right-5 bg-[#FFFFFF] text-black text-base px-4 py-[6px] rounded-full'>56 Collections</p>
                                    </div>
                                    <h2 className='capitalize mb-2 text-[30px]'>People inside temple</h2>
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
                                <div className='bg-[#ffffff0d] p-[18px] rounded-2xl w-[410px] h-[468px]'>
                                    <div className='mb-4 relative'>
                                        <Image
                                            src={building.src}
                                            width={building.width}
                                            height={building.height}
                                        />
                                        <p className='absolute top-5 right-5 bg-[#FFFFFF] text-black text-base px-4 py-[6px] rounded-full'>234 Collections</p>
                                    </div>
                                    <h2 className='capitalize mb-2 text-[30px]'>Ceiling of a building</h2>
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
                        </div>

                        {/* SLIDE TWO */}

                        <div>

                            {/* CARD ONE */}

                            <SwiperSlide>
                                <div className='bg-[#ffffff0d] p-[18px] rounded-2xl w-[410px] h-[468px]'>
                                    <div className='mb-4 relative'>
                                        <Image
                                            src={roses.src}
                                            width={roses.width}
                                            height={roses.height}
                                        />
                                        <p className='absolute top-5 right-5 bg-[#FFFFFF] text-black text-base px-4 py-[6px] rounded-full'>123 Collections</p>
                                    </div>
                                    <h2 className='capitalize mb-2 text-[30px]'>Red and blue roses</h2>
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
                                <div className='bg-[#ffffff0d] p-[18px] rounded-2xl w-[410px] h-[468px]'>
                                    <div className='mb-4 relative'>
                                        <Image
                                            src={temple.src}
                                            width={temple.width}
                                            height={temple.height}
                                        />
                                        <p className='absolute top-5 right-5 bg-[#FFFFFF] text-black text-base px-4 py-[6px] rounded-full'>56 Collections</p>
                                    </div>
                                    <h2 className='capitalize mb-2 text-[30px]'>People inside temple</h2>
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
                                <div className='bg-[#ffffff0d] p-[18px] rounded-2xl w-[410px] h-[468px]'>
                                    <div className='mb-4 relative'>
                                        <Image
                                            src={building.src}
                                            width={building.width}
                                            height={building.height}
                                        />
                                        <p className='absolute top-5 right-5 bg-[#FFFFFF] text-black text-base px-4 py-[6px] rounded-full'>234 Collections</p>
                                    </div>
                                    <h2 className='capitalize mb-2 text-[30px]'>Ceiling of a building</h2>
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
                        </div>
                    </div>
                </Swiper>
            </div>

            {/* MOBILE DEVICE */}

            <div className='md:hidden'>
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

                    <div>
                        {/* SLIDE ONE */}
                        <div>

                            {/* CARD ONE */}

                            <SwiperSlide>
                                <div className='bg-[#ffffff0d] p-[18px] rounded-2xl md:w-[410px] md:h-[468px]'>
                                    <div className='mb-4 relative'>
                                        <Image
                                            src={roses.src}
                                            width={roses.width}
                                            height={roses.height}
                                        />
                                        <p className='absolute top-5 right-5 bg-[#FFFFFF] text-black text-base px-4 py-[6px] rounded-full'>123 Collections</p>
                                    </div>
                                    <h2 className='capitalize mb-2 text-xl md:text-[30px]'>Red and blue roses</h2>
                                    <div className='flex items-center gap-[6px]'>
                                        <Image
                                            src={image1.src}
                                            width={image1.width}
                                            height={image1.height}
                                        />
                                        <p className='text-base md:text-lg'>@minhaj.udding</p>
                                    </div>
                                </div>
                            </SwiperSlide>


                            {/* CARD tWO */}

                            <SwiperSlide>
                                <div className='bg-[#ffffff0d] p-[18px] rounded-2xl md:w-[410px] md:h-[468px]'>
                                    <div className='mb-4 relative'>
                                        <Image
                                            src={temple.src}
                                            width={temple.width}
                                            height={temple.height}
                                        />
                                        <p className='absolute top-5 right-5 bg-[#FFFFFF] text-black text-base px-4 py-[6px] rounded-full'>56 Collections</p>
                                    </div>
                                    <h2 className='capitalize mb-2 text-xl md:text-[30px]'>People inside temple</h2>
                                    <div className='flex items-center gap-[6px]'>
                                        <Image
                                            src={image2.src}
                                            width={image2.width}
                                            height={image2.height}
                                        />
                                        <p className='text-base md:text-lg'>@Galleria.456</p>
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* CARD THREE */}

                            <SwiperSlide>
                                <div className='bg-[#ffffff0d] p-[18px] rounded-2xl md:w-[410px] md:h-[468px]'>
                                    <div className='mb-4 relative'>
                                        <Image
                                            src={building.src}
                                            width={building.width}
                                            height={building.height}
                                        />
                                        <p className='absolute top-5 right-5 bg-[#FFFFFF] text-black text-base px-4 py-[6px] rounded-full'>234 Collections</p>
                                    </div>
                                    <h2 className='capitalize mb-2 text-xl md:text-[30px]'>Ceiling of a building</h2>
                                    <div className='flex items-center gap-[6px]'>
                                        <Image
                                            src={image3.src}
                                            width={image3.width}
                                            height={image3.height}
                                        />
                                        <p className='text-base md:text-lg'>@Farhad.udding</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>

                        {/* SLIDE TWO */}

                        <div>

                            {/* CARD ONE */}

                            <SwiperSlide>
                                <div className='bg-[#ffffff0d] p-[18px] rounded-2xl md:w-[410px] md:h-[468px]'>
                                    <div className='mb-4 relative'>
                                        <Image
                                            src={roses.src}
                                            width={roses.width}
                                            height={roses.height}
                                        />
                                        <p className='absolute top-5 right-5 bg-[#FFFFFF] text-black text-base px-4 py-[6px] rounded-full'>123 Collections</p>
                                    </div>
                                    <h2 className='capitalize mb-2 text-xl md:text-[30px]'>Red and blue roses</h2>
                                    <div className='flex items-center gap-[6px]'>
                                        <Image
                                            src={image1.src}
                                            width={image1.width}
                                            height={image1.height}
                                        />
                                        <p className='text-base md:text-lg'>@minhaj.udding</p>
                                    </div>
                                </div>
                            </SwiperSlide>


                            {/* CARD tWO */}

                            <SwiperSlide>
                                <div className='bg-[#ffffff0d] p-[18px] rounded-2xl md:w-[410px] md:h-[468px]'>
                                    <div className='mb-4 relative'>
                                        <Image
                                            src={temple.src}
                                            width={temple.width}
                                            height={temple.height}
                                        />
                                        <p className='absolute top-5 right-5 bg-[#FFFFFF] text-black text-base px-4 py-[6px] rounded-full'>56 Collections</p>
                                    </div>
                                    <h2 className='capitalize mb-2 text-xl md:text-[30px]'>People inside temple</h2>
                                    <div className='flex items-center gap-[6px]'>
                                        <Image
                                            src={image2.src}
                                            width={image2.width}
                                            height={image2.height}
                                        />
                                        <p className='text-base md:text-lg'>@Galleria.456</p>
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* CARD THREE */}

                            <SwiperSlide>
                                <div className='bg-[#ffffff0d] p-[18px] rounded-2xl md:w-[410px] md:h-[468px]'>
                                    <div className='mb-4 relative'>
                                        <Image
                                            src={building.src}
                                            width={building.width}
                                            height={building.height}
                                        />
                                        <p className='absolute top-5 right-5 bg-[#FFFFFF] text-black text-base px-4 py-[6px] rounded-full'>234 Collections</p>
                                    </div>
                                    <h2 className='capitalize mb-2 text-xl md:text-[30px]'>Ceiling of a building</h2>
                                    <div className='flex items-center gap-[6px]'>
                                        <Image
                                            src={image3.src}
                                            width={image3.width}
                                            height={image3.height}
                                        />
                                        <p className='text-base md:text-lg'>@Farhad.udding</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                    </div>
                </Swiper>
            </div>




        </div>
    );
};

export default ExplainMetal;