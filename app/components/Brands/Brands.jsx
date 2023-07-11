"use client"
import Amazon from './images/amazon.png'
import YouTube from './images/youtube.png'
import Slack from './images/slack.png'
import Netflix from './images/netflix.png'
import Google from './images/google.png'
import Sony from './images/sony.png'
import wave from './images/metal-prints-wave.png'
import Reveals from '@/app/utils/Reveals'

const Brands = () => {
    return (
        <section className='relative z-10' data-aos='fade-up'>
            <img className='absolute top-[50%] -z-10' src={wave.src} alt="" />
            <div className="container">
                <div className="relative bg-white/5 rounded-[16px] py-[60px] px-[50px]">
                    <div className='text-center flex justify-center'>
                        <Reveals>
                            <h6 className='text-center text-[20px] mb-[40px]'>we have partnered with top commpanies</h6>
                        </Reveals>
                    </div>
                    <div className="md:flex flex-wrap items-center justify-center gap-[50px] grid grid-cols-2">
                        <Reveals>

                            <div>
                                <img src={Amazon.src} alt="" />
                            </div>
                        </Reveals>
                        <Reveals>

                            <div>
                                <img src={YouTube.src} alt="" />
                            </div>
                        </Reveals>
                        <Reveals>

                            <div>
                                <img src={Slack.src} alt="" />
                            </div>
                        </Reveals>
                        <Reveals>

                            <div>
                                <img src={Netflix.src} alt="" />
                            </div>
                        </Reveals>
                        <Reveals>

                            <div>
                                <img src={Google.src} alt="" />
                            </div>
                        </Reveals>
                        <Reveals>

                            <div>
                                <img src={Sony.src} alt="" />
                            </div>
                        </Reveals>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Brands