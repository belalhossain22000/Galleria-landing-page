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


const Categories = () => {
    return (
        <section className='pb-[140px] relative z-10'>
            <div className='container text-center'>
                <h1 className='section-title lg:mb-[65px] mb-[30px]' data-aos='zoom-in'>Categories</h1>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[40px] justify-center' data-aos='zoom-in' data-aos-delay="300">
                    <div className='bg-[#ffffff0d] py-[38px] rounded-2xl'>
                        <Image
                            src={macroPhotography.src}
                            width={macroPhotography.width}
                            height={macroPhotography.height}
                            className='mx-auto'
                        />
                        <h3 className='text-xl mt-5'>Macrophotography</h3>
                    </div>
                    <div className='bg-[#ffffff0d] px-4 py-[38px] rounded-2xl'>
                        <Image
                            src={portrait.src}
                            width={portrait.width}
                            height={portrait.height}
                            className='mx-auto'
                        />
                        <h3 className='text-xl mt-5'>Portrait</h3>
                    </div>
                    <div className='bg-[#ffffff0d] px-4 py-[38px] rounded-2xl'>
                        <Image
                            src={architecture.src}
                            width={architecture.width}
                            height={architecture.height}
                            className='mx-auto'
                        />
                        <h3 className='text-xl mt-5'>Architecture</h3>
                    </div>
                    <div className='bg-[#ffffff0d] px-4 py-[38px] rounded-2xl'>
                        <Image
                            src={art.src}
                            width={art.width}
                            height={art.height}
                            className='mx-auto'
                        />
                        <h3 className='text-xl mt-5'>Art</h3>
                    </div>
                    <div className='bg-[#ffffff0d] px-4 py-[38px] rounded-2xl'>
                        <Image
                            src={nature.src}
                            width={nature.width}
                            height={nature.height}
                            className='mx-auto'
                        />
                        <h3 className='text-xl mt-5'>Nature</h3>
                    </div>
                    <div className='bg-[#ffffff0d] py-[38px] rounded-2xl'>
                        <Image
                            src={astrophotography.src}
                            width={astrophotography.width}
                            height={astrophotography.height}
                            className='mx-auto'
                        />
                        <h3 className='text-xl mt-5'>Astrophotography</h3>
                    </div>
                    <div className='bg-[#ffffff0d] px-4 py-[38px] rounded-2xl'>
                        <Image
                            src={streetphotography.src}
                            width={streetphotography.width}
                            height={streetphotography.height}
                            className='mx-auto'
                        />
                        <h3 className='text-xl mt-5'>Street Photography</h3>
                    </div>
                    <div className='bg-[#ffffff0d] px-4 py-[38px] rounded-2xl'>
                        <Image
                            src={abstract.src}
                            width={abstract.width}
                            height={abstract.height}
                            className='mx-auto'
                        />
                        <h3 className='text-xl mt-5'>Abstract</h3>
                    </div>
                    <div className='bg-[#ffffff0d] px-4 py-[38px] rounded-2xl'>
                        <Image
                            src={aerial.src}
                            width={aerial.width}
                            height={aerial.height}
                            className='mx-auto'
                        />
                        <h3 className='text-xl mt-5'>Aerial</h3>
                    </div>
                    <div className='bg-[#ffffff0d] px-4 py-[38px] rounded-2xl grid items-center'>
                        <h3 className='text-xl mt-5 flex items-center gap-[6px] mx-auto'>See more <FaArrowRight></FaArrowRight></h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Categories;