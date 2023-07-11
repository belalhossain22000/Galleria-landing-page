
"use client"
import Image from 'next/image'
import macroPhotography from './images/photography.png'
import portrait from './images/portrait.png'
import architecture from './images/architecture.png'
import art from './images/art.png'
import nature from './images/nature.png'
import astrophotography from './images/astrophotography.png'
import streetphotography from './images/streetphotography.png'
import abstract from './images/abstract.png'
import aerial from './images/aerial.png'
import { FaArrowRight } from 'react-icons/fa6'
import Reveals from '@/app/utils/Reveals'


const Categories = () => {
    return (
        <section className='pb-[140px] relative z-10'>
            <div className='container text-center'>
                <div className='flex justify-center'>
                    <Reveals>
                        <h1 className='section-title lg:mb-[65px] mb-[30px]'>Categories</h1>
                    </Reveals>
                </div>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[40px] justify-center' data-aos='zoom-in' data-aos-delay="300">

                    <div className='bg-[#ffffff0d] py-[38px] rounded-2xl'>
                        <div className='flex justify-center'>
                            <Reveals>
                                <Image
                                    src={macroPhotography.src}
                                    width={macroPhotography.width}
                                    height={macroPhotography.height}
                                    className='mx-auto'
                                />
                                <h3 className='text-xl mt-5'>Macrophotography</h3>
                            </Reveals>
                        </div>
                    </div>
                    <div className='bg-[#ffffff0d] text-center px-4 py-[38px] rounded-2xl'>
                        <div className='flex justify-center'>
                            <Reveals>
                                <Image
                                    src={portrait.src}
                                    width={portrait.width}
                                    height={portrait.height}
                                    className='mx-auto'
                                />
                                <h3 className='text-xl mt-5 '>Portrait</h3>

                            </Reveals>
                        </div>
                    </div>

                    <div className='bg-[#ffffff0d] px-4 py-[38px] rounded-2xl'>

                        <div className='flex justify-center'>
                            <Reveals>
                                <Image
                                    src={architecture.src}
                                    width={architecture.width}
                                    height={architecture.height}
                                    className='mx-auto'
                                />
                                <h3 className='text-xl mt-5'>Architecture</h3>
                            </Reveals>
                        </div>
                    </div>
                    <div className='bg-[#ffffff0d] px-4 py-[38px] rounded-2xl'>
                        <div className='flex justify-center'>
                            <Reveals>
                                <Image
                                    src={art.src}
                                    width={art.width}
                                    height={art.height}
                                    className='mx-auto'
                                />
                                <h3 className='text-xl mt-5'>Art</h3>
                            </Reveals>
                        </div>
                    </div>
                    <div className='bg-[#ffffff0d] px-4 py-[38px] rounded-2xl'>
                        <div className='flex justify-center'>
                            <Reveals>
                                <Image
                                    src={nature.src}
                                    width={nature.width}
                                    height={nature.height}
                                    className='mx-auto'
                                />
                                <h3 className='text-xl mt-5'>Nature</h3>
                            </Reveals>
                        </div>
                    </div>
                    <div className='bg-[#ffffff0d] py-[38px] rounded-2xl'>
                        <div className='flex justify-center'>
                            <Reveals>
                                <Image
                                    src={astrophotography.src}
                                    width={astrophotography.width}
                                    height={astrophotography.height}
                                    className='mx-auto'
                                />
                                <h3 className='text-xl mt-5'>Astrophotography</h3>
                            </Reveals>
                        </div>
                    </div>
                    <div className='bg-[#ffffff0d] px-4 py-[38px] rounded-2xl'>
                        <div className='flex justify-center'>
                            <Reveals>
                                <Image
                                    src={streetphotography.src}
                                    width={streetphotography.width}
                                    height={streetphotography.height}
                                    className='mx-auto'
                                />
                                <h3 className='text-xl mt-5'>Street Photography</h3>
                            </Reveals>
                        </div>
                    </div>
                    <div className='bg-[#ffffff0d] px-4 py-[38px] rounded-2xl'>
                        <div className='flex justify-center'>
                            <Reveals>
                                <Image
                                    src={abstract.src}
                                    width={abstract.width}
                                    height={abstract.height}
                                    className='mx-auto'
                                />
                                <h3 className='text-xl mt-5'>Abstract</h3>
                            </Reveals>
                        </div>
                    </div>
                    <div className='bg-[#ffffff0d] px-4 py-[38px] rounded-2xl'>
                        <div className='flex justify-center'>
                            <Reveals>
                                <Image
                                    src={aerial.src}
                                    width={aerial.width}
                                    height={aerial.height}
                                    className='mx-auto'
                                />
                                <h3 className='text-xl mt-5'>Aerial</h3>
                            </Reveals>
                        </div>
                    </div>
                    <div className='bg-[#ffffff0d] px-4 py-[38px] rounded-2xl grid items-center'>
                        <div className='flex justify-center'>
                            <Reveals>
                                <h3 className='text-xl mt-5 flex items-center gap-[6px] mx-auto'>See more <FaArrowRight></FaArrowRight></h3>
                            </Reveals>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Categories;