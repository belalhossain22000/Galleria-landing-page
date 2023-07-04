import Image from 'next/image'
import spider from './images/spider.png'
import prints from './images/prints.png'
import shipped from './images/shipped.png'
import worldwide from './images/worldwide.png'
import sizes from './images/sizes.png'

const MetalDescription = () => {
    return (
        <div className="mt-[140px] container text-center">
            <h1 className="text-[44px]">Metal Prints Description here</h1>
            <div className='flex items-center gap-[115px] mt-[65px]'>
                <div>
                    <div className='bg-[#ffffff0d] p-[18px] rounded-2xl w-[569px] h-[612px]'>
                        <Image
                            src={spider.src}
                            width={spider.width}
                            height={spider.height}
                        />
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-[46px]'>
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