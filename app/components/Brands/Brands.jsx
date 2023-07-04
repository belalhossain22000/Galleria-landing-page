import Amazon from './images/amazon.png'
import YouTube from './images/youtube.png'
import Slack from './images/slack.png'
import Netflix from './images/netflix.png'
import Google from './images/google.png'
import Sony from './images/sony.png'

const Brands = () => {
  return (
    <section className='relative z-10'>
        <div className="container">
            <div className="relative bg-white/5 rounded-[16px] py-[60px] px-[50px]">
                <h6 className='text-center text-[20px] mb-[40px]'>we have partnered with top commpanies</h6>
                <div className="flex flex-wrap items-center justify-center gap-x-[50px]">
                    <div>
                        <img src={Amazon.src} alt="" />
                    </div>
                    <div>
                        <img src={YouTube.src} alt="" />
                    </div>
                    <div>
                        <img src={Slack.src} alt="" />
                    </div>
                    <div>
                        <img src={Netflix.src} alt="" />
                    </div>
                    <div>
                        <img src={Google.src} alt="" />
                    </div>
                    <div>
                        <img src={Sony.src} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Brands