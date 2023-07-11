"use client"
import Image from 'next/image'
import spider from './images/spider.png'
import prints from './images/prints.png'
import shipped from './images/shipped.png'
import worldwide from './images/worldwide.png'
import sizes from './images/sizes.png'
import ShadowRight from './images/shadow-shape-right.png'
import Reveals from '@/app/utils/Reveals'

const MetalDescription = () => {
    return (
        <section className="relative z-10 py-[140px]">
            <img className='absolute right-0 top-1/2 translate-y-[-50%] -z-10' src={ShadowRight.src} alt="" />
            <div className="container">
                <h2 className="section-title text-center lg:mb-[65px] mb-[30px]" data-aos='fade-up'>Metal Prints Description here</h2>
                <div className='lg:grid grid-cols-[6fr_6fr] items-center xl:gap-[115px] gap-[30px]'>
                    <div className='mb-[30px] lg:mb-0' data-aos='zoom-in'>
                        <div className='bg-white/5 p-[18px] rounded-2xl relative'>
                            <Reveals>
                                <img className='w-full' src={spider.src} alt="" />
                            </Reveals>
                            <div className='absolute bottom-0 left-0 w-full p-[40px] xl:flex justify-between items-end'>
                                <Reveals>

                                    <div>
                                        <Reveals>

                                            <h3 className='text-[22px]'>Puerto Rico Spider</h3>
                                        </Reveals>
                                        <Reveals>

                                            <h4 className='text-base'>Krishnaprasad.eth</h4>
                                        </Reveals>
                                        <Reveals>

                                            <p className='text-sm'>NFT Address:</p>
                                        </Reveals>
                                        <Reveals>

                                            <p className='text-xs'>oxb794f5ca0ba39494cc83961300ca742795268</p>
                                        </Reveals>
                                        <Reveals>

                                            <p className='text-sm'>TokenID: 467</p>
                                        </Reveals>
                                    </div>
                                </Reveals>
                                <Reveals>
                                    <div>
                                        <p className='text-sm'>Certified NFT | Galleria</p>
                                        <p className='text-xs'>Thegalleria.io</p>
                                    </div>
                                </Reveals>
                            </div>
                        </div>
                    </div>
                    <div className='grid sm:grid-cols-2 xl:gap-[45px] gap-[15px] text-center mt-5 md:mt-0' data-aos='zoom-in' data-aos-delay="300">

                        <div className='px-6 py-10 bg-white/5 rounded-2xl'>
                            <div className='bg-[#ffffff1a] w-[82px] h-[82px] rounded-full grid items-center mx-auto mb-5'>
                                <Image
                                    src={prints.src}
                                    width={prints.width}
                                    height={prints.height}
                                    className='mx-auto my-auto'
                                />
                            </div>
                            <div className='flex justify-center'>
                                <Reveals>
                                    
                            <h4 className='xl:text-[22px] text-[18px] leading-[33px]'>Limited Edition <br /> High Quality Metal Prints</h4>
                                </Reveals>
                            </div>
                        </div>
                        <div className='px-6 py-10 bg-white/5 rounded-2xl'>
                            <div className='bg-[#ffffff1a] w-[82px] h-[82px] rounded-full grid items-center mx-auto mb-5'>
                                <Image
                                    src={shipped.src}
                                    width={shipped.width}
                                    height={shipped.height}
                                    className='my-auto mx-auto'
                                />
                            </div>
                            <div className='flex justify-center'>
                                <Reveals>
                                    <h4 className='xl:text-[22px] text-[18px] leading-[33px]'>Shipped <br /> To Collectors</h4>
                                </Reveals>
                            </div>
                        </div>
                        <div className='px-6 py-10 bg-white/5 rounded-2xl'>
                            <div className='bg-[#ffffff1a] w-[82px] h-[82px] rounded-full grid items-center mx-auto mb-5'>
                                <Image
                                    src={worldwide.src}
                                    width={worldwide.width}
                                    height={worldwide.height}
                                    className='my-auto mx-auto'
                                />
                            </div>
                            <div className='flex justify-center'>
                                <Reveals>

                            <h4 className='xl:text-[22px] text-[18px] leading-[33px]'>Wolrdwide <br /> Shipping</h4>
                                </Reveals>
                            </div>
                        </div>
                        <div className='px-6 py-10 bg-white/5 rounded-2xl'>
                            <div className='bg-[#ffffff1a] w-[82px] h-[82px] rounded-full grid items-center mx-auto mb-5'>
                                <Image
                                    src={sizes.src}
                                    width={sizes.width}
                                    height={sizes.height}
                                    className='my-auto mx-auto'
                                />
                            </div>
                            <div className='flex justify-center'>
                                <Reveals>
                                    <h4 className='xl:text-[22px] text-[18px] leading-[33px]'>Different Sizes <br /> Available</h4>
                                </Reveals>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MetalDescription;