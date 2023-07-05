import Image from 'next/image'
import spider from './images/spider.png'
import prints from './images/prints.png'
import shipped from './images/shipped.png'
import worldwide from './images/worldwide.png'
import sizes from './images/sizes.png'

const MetalDescription = () => {
    return (
        <div className="mt-[140px] container">
            <h1 className="text-3xl md:text-[44px] text-center">Metal Prints Description here</h1>
            <div className='md:flex items-center gap-[115px] mt-[30px] md:mt-[65px]'>
                <div>
                    <div className='bg-[#ffffff0d] p-[18px] rounded-2xl md:w-[569px] md:h-[612px] relative'>
                        <Image
                            src={spider.src}
                            width={spider.width}
                            height={spider.height}
                        />
                        <div className='absolute bottom-10 left-10'>
                            <h3 className='text-[22px]'>Puerto Rico Spider</h3>
                            <h4 className='text-base'>Krishnaprasad.eth</h4>
                            <p className='text-sm'>NFT Address:</p>
                            <div className='md:flex justify-between items-center'>
                                <p className='text-xs'>oxb794f5ca0ba39494cc83961300ca742795268</p>
                                <p className='text-sm md:absolute -right-56'>Certified NFT | Galleria</p>
                            </div>
                            <div className='md:flex justify-between items-center'>
                                <p className='text-sm'>TokenID: 467</p>
                                <p className='text-xs md:absolute -right-56'>Thegalleria.io</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 gap-6 md:gap-[46px] text-center mt-5 md:mt-0 justify-center mx-auto'>
                    <div className='w-[296px] h-[283px] px-6 py-10 bg-[#ffffff0d] rounded-2xl grid items-center'>

                        <div className='bg-[#ffffff1a] w-[82px] h-[82px] rounded-full grid items-center mx-auto mb-5'>
                            <Image
                                src={prints.src}
                                width={prints.width}
                                height={prints.height}
                                className='mx-auto my-auto'
                            />
                        </div>
                        <h2 className='text-[22px] leading-[33px]'>Limited Edition <br /> High Quality Metal Prints</h2>
                    </div>
                    <div className='w-[296px] h-[283px] px-6 py-10 bg-[#ffffff0d] rounded-2xl'>
                        <div className='bg-[#ffffff1a] w-[82px] h-[82px] rounded-full grid items-center mx-auto mb-5'>
                            <Image
                                src={shipped.src}
                                width={shipped.width}
                                height={shipped.height}
                                className='my-auto mx-auto'
                            />
                        </div>
                        <h2 className='text-[22px] leading-[33px]'>Shipped <br /> To Collectors</h2>
                    </div>
                    <div className='w-[296px] h-[283px] px-6 py-10 bg-[#ffffff0d] rounded-2xl'>
                        <div className='bg-[#ffffff1a] w-[82px] h-[82px] rounded-full grid items-center mx-auto mb-5'>
                            <Image
                                src={worldwide.src}
                                width={worldwide.width}
                                height={worldwide.height}
                                className='my-auto mx-auto'
                            />
                        </div>
                        <h2 className='text-[22px] leading-[33px]'>Wolrdwide <br /> Shipping</h2>
                    </div>
                    <div className='w-[296px] h-[283px] px-6 py-10 bg-[#ffffff0d] rounded-2xl'>
                        <div className='bg-[#ffffff1a] w-[82px] h-[82px] rounded-full grid items-center mx-auto mb-5'>
                            <Image
                                src={sizes.src}
                                width={sizes.width}
                                height={sizes.height}
                                className='my-auto mx-auto'
                            />
                        </div>
                        <h2 className='text-[22px] leading-[33px]'>Different Sizes <br /> Available</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MetalDescription;