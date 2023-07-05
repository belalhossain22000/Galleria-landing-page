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

const FeaturedNfts = () => {
    return (
        <div className='container mt-[144px]'>
            <div className="md:flex justify-between items-center mb-[30px] md:mb-[65px]">
                <h1 className="text-3xl md:text-[44px] mb-5 md:mb-0 text-center md:text-start">
                    Featured NFTs
                </h1>
                <div className='flex justify-center'>
                    <Link href='/' className="primary-btn">Explore All Collection</Link>
                </div>
            </div>
            <div>

                {/* DESKTOP DEVICE */}

                <div className='md:flex hidden'>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        loop={true}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >

                        {/* card ONE */}

                        <SwiperSlide>
                            <div className='bg-[#ffffff0d] p-[18px] rounded-2xl w-[410px]'>
                                <div className='mb-4 relative'>
                                    <Image
                                        src={image1.src}
                                        width={image1.width}
                                        height={image1.height}
                                    />
                                    <p className='absolute top-5 right-5 bg-[#FFFFFF] text-black text-base px-4 py-[6px] rounded-full flex items-center'><AiFillHeart className='text-[#CE2929]'></AiFillHeart> 120</p>
                                </div>
                                <h2 className='capitalize mb-2 text-[30px]'>Caucasian Beauty</h2>
                                <div className='flex items-center gap-[6px]'>
                                    <Image
                                        src={profile1.src}
                                        width={profile1.width}
                                        height={profile1.height}
                                    />
                                    <p>@minhaj.udding</p>
                                </div>
                                <div className='border border-[#ffffff1a] my-4'></div>
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <h3>250.0 Matic</h3>
                                        <p>209.50 Usd</p>
                                    </div>
                                    <button className='btn_sm'>Buy Now</button>
                                </div>
                            </div>
                        </SwiperSlide>


                        {/* card tWO */}

                        <SwiperSlide>
                            <div className='bg-[#ffffff0d] p-[18px] rounded-2xl w-[410px]'>
                                <div className='mb-4 relative'>
                                    <Image
                                        src={image2.src}
                                        width={image2.width}
                                        height={image2.height}
                                    />
                                    <p className='absolute top-5 right-5 bg-[#FFFFFF] text-black text-base px-4 py-[6px] rounded-full flex items-center'><AiFillHeart className='text-[#CE2929]'></AiFillHeart> 90</p>
                                </div>
                                <h2 className='capitalize mb-2 text-[30px]'>film element Con</h2>
                                <div className='flex items-center gap-[6px]'>
                                    <Image
                                        src={profile2.src}
                                        width={profile2.width}
                                        height={profile2.height}
                                    />
                                    <p>@Sajig.098</p>
                                </div>
                                <div className='border border-[#ffffff1a] my-4'></div>
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <h3>278.0 Matic</h3>
                                        <p>216.50 Usd</p>
                                    </div>
                                    <button className='btn_sm'>Buy Now</button>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* CARD THREE */}

                        <SwiperSlide>
                            <div className='bg-[#ffffff0d] p-[18px] rounded-2xl w-[410px]'>
                                <div className='mb-4 relative'>
                                    <Image
                                        src={image3.src}
                                        width={image3.width}
                                        height={image3.height}
                                    />
                                    <p className='absolute top-5 right-5 bg-[#FFFFFF] text-black text-base px-4 py-[6px] rounded-full flex items-center'><AiFillHeart className='text-[#CE2929]'></AiFillHeart> 145</p>
                                </div>
                                <h2 className='capitalize mb-2 text-[30px]'>film element Con</h2>
                                <div className='flex items-center gap-[6px]'>
                                    <Image
                                        src={profile3.src}
                                        width={profile3.width}
                                        height={profile3.height}
                                    />
                                    <p>@Saiful.34</p>
                                </div>
                                <div className='border border-[#ffffff1a] my-4'></div>
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <h3>278.0 Matic</h3>
                                        <p>216.50 Usd</p>
                                    </div>
                                    <button className='btn_sm'>Buy Now</button>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* card FOUR */}

                        <SwiperSlide>
                            <div className='bg-[#ffffff0d] p-[18px] rounded-2xl w-[410px]'>
                                <div className='mb-4 relative'>
                                    <Image
                                        src={image1.src}
                                        width={image1.width}
                                        height={image1.height}
                                    />
                                    <p className='absolute top-5 right-5 bg-[#FFFFFF] text-black text-base px-4 py-[6px] rounded-full flex items-center'><AiFillHeart className='text-[#CE2929]'></AiFillHeart> 120</p>
                                </div>
                                <h2 className='capitalize mb-2 text-[30px]'>Caucasian Beauty</h2>
                                <div className='flex items-center gap-[6px]'>
                                    <Image
                                        src={profile1.src}
                                        width={profile1.width}
                                        height={profile1.height}
                                    />
                                    <p>@minhaj.udding</p>
                                </div>
                                <div className='border border-[#ffffff1a] my-4'></div>
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <h3>250.0 Matic</h3>
                                        <p>209.50 Usd</p>
                                    </div>
                                    <button className='btn_sm'>Buy Now</button>
                                </div>
                            </div>
                        </SwiperSlide>


                        {/* card FIVE */}

                        <SwiperSlide>
                            <div className='bg-[#ffffff0d] p-[18px] rounded-2xl w-[410px]'>
                                <div className='mb-4 relative'>
                                    <Image
                                        src={image2.src}
                                        width={image2.width}
                                        height={image2.height}
                                    />
                                    <p className='absolute top-5 right-5 bg-[#FFFFFF] text-black text-base px-4 py-[6px] rounded-full flex items-center'><AiFillHeart className='text-[#CE2929]'></AiFillHeart> 90</p>
                                </div>
                                <h2 className='capitalize mb-2 text-[30px]'>film element Con</h2>
                                <div className='flex items-center gap-[6px]'>
                                    <Image
                                        src={profile2.src}
                                        width={profile2.width}
                                        height={profile2.height}
                                    />
                                    <p>@Sajig.098</p>
                                </div>
                                <div className='border border-[#ffffff1a] my-4'></div>
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <h3>278.0 Matic</h3>
                                        <p>216.50 Usd</p>
                                    </div>
                                    <button className='btn_sm'>Buy Now</button>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* CARD SIX */}

                        <SwiperSlide>
                            <div className='bg-[#ffffff0d] p-[18px] rounded-2xl w-[410px]'>
                                <div className='mb-4 relative'>
                                    <Image
                                        src={image3.src}
                                        width={image3.width}
                                        height={image3.height}
                                    />
                                    <p className='absolute top-5 right-5 bg-[#FFFFFF] text-black text-base px-4 py-[6px] rounded-full flex items-center'><AiFillHeart className='text-[#CE2929]'></AiFillHeart> 145</p>
                                </div>
                                <h2 className='capitalize mb-2 text-[30px]'>film element Con</h2>
                                <div className='flex items-center gap-[6px]'>
                                    <Image
                                        src={profile3.src}
                                        width={profile3.width}
                                        height={profile3.height}
                                    />
                                    <p>@Saiful.34</p>
                                </div>
                                <div className='border border-[#ffffff1a] my-4'></div>
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <h3>278.0 Matic</h3>
                                        <p>216.50 Usd</p>
                                    </div>
                                    <button className='btn_sm'>Buy Now</button>
                                </div>
                            </div>
                        </SwiperSlide>
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

                        {/* card ONE */}

                        <SwiperSlide>
                            <div className='bg-[#ffffff0d] p-[18px] rounded-2xl md:w-[410px]'>
                                <div className='mb-4 relative'>
                                    <Image
                                        src={image1.src}
                                        width={image1.width}
                                        height={image1.height}
                                    />
                                    <p className='absolute top-5 right-5 bg-[#FFFFFF] text-black text-base px-4 py-[6px] rounded-full flex items-center'><AiFillHeart className='text-[#CE2929]'></AiFillHeart> 120</p>
                                </div>
                                <h2 className='capitalize mb-2 text-xl md:text-[30px]'>Caucasian Beauty</h2>
                                <div className='flex items-center gap-[6px]'>
                                    <Image
                                        src={profile1.src}
                                        width={profile1.width}
                                        height={profile1.height}
                                    />
                                    <p className='text-base'>@minhaj.udding</p>
                                </div>
                                <div className='border border-[#ffffff1a] my-4'></div>
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <h3 className='text-base'>278.0 Matic</h3>
                                        <p className='text-base'>216.50 Usd</p>
                                    </div>
                                    <button className='btn_sm'>Buy Now</button>
                                </div>
                            </div>
                        </SwiperSlide>


                        {/* card tWO */}

                        <SwiperSlide>
                            <div className='bg-[#ffffff0d] p-[18px] rounded-2xl md:w-[410px]'>
                                <div className='mb-4 relative'>
                                    <Image
                                        src={image2.src}
                                        width={image2.width}
                                        height={image2.height}
                                    />
                                    <p className='absolute top-5 right-5 bg-[#FFFFFF] text-black text-base px-4 py-[6px] rounded-full flex items-center'><AiFillHeart className='text-[#CE2929]'></AiFillHeart> 90</p>
                                </div>
                                <h2 className='capitalize mb-2 text-xl md:text-[30px]'>film element Con</h2>
                                <div className='flex items-center gap-[6px]'>
                                    <Image
                                        src={profile2.src}
                                        width={profile2.width}
                                        height={profile2.height}
                                    />
                                    <p className='text-base'>@Sajig.098</p>
                                </div>
                                <div className='border border-[#ffffff1a] my-4'></div>
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <h3 className='text-base'>278.0 Matic</h3>
                                        <p className='text-base'>216.50 Usd</p>
                                    </div>
                                    <button className='btn_sm'>Buy Now</button>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* CARD THREE */}

                        <SwiperSlide>
                            <div className='bg-[#ffffff0d] p-[18px] rounded-2xl md:w-[410px]'>
                                <div className='mb-4 relative'>
                                    <Image
                                        src={image3.src}
                                        width={image3.width}
                                        height={image3.height}
                                    />
                                    <p className='absolute top-5 right-5 bg-[#FFFFFF] text-black text-base px-4 py-[6px] rounded-full flex items-center'><AiFillHeart className='text-[#CE2929]'></AiFillHeart> 145</p>
                                </div>
                                <h2 className='capitalize mb-2 text-xl md:text-[30px]'>film element Con</h2>
                                <div className='flex items-center gap-[6px]'>
                                    <Image
                                        src={profile3.src}
                                        width={profile3.width}
                                        height={profile3.height}
                                    />
                                    <p className='text-base'>@Saiful.34</p>
                                </div>
                                <div className='border border-[#ffffff1a] my-4'></div>
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <h3 className='text-base'>278.0 Matic</h3>
                                        <p className='text-base'>216.50 Usd</p>
                                    </div>
                                    <button className='btn_sm'>Buy Now</button>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* card FOUR */}

                        <SwiperSlide>
                            <div className='bg-[#ffffff0d] p-[18px] rounded-2xl md:w-[410px]'>
                                <div className='mb-4 relative'>
                                    <Image
                                        src={image1.src}
                                        width={image1.width}
                                        height={image1.height}
                                    />
                                    <p className='absolute top-5 right-5 bg-[#FFFFFF] text-black text-base px-4 py-[6px] rounded-full flex items-center'><AiFillHeart className='text-[#CE2929]'></AiFillHeart> 120</p>
                                </div>
                                <h2 className='capitalize mb-2 text-xl md:text-[30px]'>Caucasian Beauty</h2>
                                <div className='flex items-center gap-[6px]'>
                                    <Image
                                        src={profile1.src}
                                        width={profile1.width}
                                        height={profile1.height}
                                    />
                                    <p className='text-base'>@minhaj.udding</p>
                                </div>
                                <div className='border border-[#ffffff1a] my-4'></div>
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <h3 className='text-base'>250.0 Matic</h3>
                                        <p className='text-base'>209.50 Usd</p>
                                    </div>
                                    <button className='btn_sm'>Buy Now</button>
                                </div>
                            </div>
                        </SwiperSlide>


                        {/* card FIVE */}

                        <SwiperSlide>
                            <div className='bg-[#ffffff0d] p-[18px] rounded-2xl md:w-[410px]'>
                                <div className='mb-4 relative'>
                                    <Image
                                        src={image2.src}
                                        width={image2.width}
                                        height={image2.height}
                                    />
                                    <p className='absolute top-5 right-5 bg-[#FFFFFF] text-black text-base px-4 py-[6px] rounded-full flex items-center'><AiFillHeart className='text-[#CE2929]'></AiFillHeart> 90</p>
                                </div>
                                <h2 className='capitalize mb-2 text-xl md:text-[30px]'>film element Con</h2>
                                <div className='flex items-center gap-[6px]'>
                                    <Image
                                        src={profile2.src}
                                        width={profile2.width}
                                        height={profile2.height}
                                    />
                                    <p className='text-base'>@Sajig.098</p>
                                </div>
                                <div className='border border-[#ffffff1a] my-4'></div>
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <h3 className='text-base'>278.0 Matic</h3>
                                        <p className='text-base'>216.50 Usd</p>
                                    </div>
                                    <button className='btn_sm'>Buy Now</button>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* CARD SIX */}

                        <SwiperSlide>
                            <div className='bg-[#ffffff0d] p-[18px] rounded-2xl md:w-[410px]'>
                                <div className='mb-4 relative'>
                                    <Image
                                        src={image3.src}
                                        width={image3.width}
                                        height={image3.height}
                                    />
                                    <p className='absolute top-5 right-5 bg-[#FFFFFF] text-black text-base px-4 py-[6px] rounded-full flex items-center'><AiFillHeart className='text-[#CE2929]'></AiFillHeart> 145</p>
                                </div>
                                <h2 className='capitalize mb-2 text-xl md:text-[30px]'>film element Con</h2>
                                <div className='flex items-center gap-[6px]'>
                                    <Image
                                        src={profile3.src}
                                        width={profile3.width}
                                        height={profile3.height}
                                    />
                                    <p className='text-base'>@Saiful.34</p>
                                </div>
                                <div className='border border-[#ffffff1a] my-4'></div>
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <h3 className='text-base'>278.0 Matic</h3>
                                        <p className='text-base'>216.50 Usd</p>
                                    </div>
                                    <button className='btn_sm'>Buy Now</button>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default FeaturedNfts;