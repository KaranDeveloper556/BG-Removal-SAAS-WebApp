import { assets } from "../../../public/assets/assets"
import CustomButton from './../Utility/CustomButton'

const HeroSection = () => {
    return (
        <section className='Hero-section'>
            <div className="hero-inner-wapper py-[3rem]">
                <div className="hero-phase-1 uppercase font-Bebas_neue ">
                    <div className="hero-subtile-text subtitle-text-size tracking-wide">
                        <p>Erase Backgrounds Instantly with Our AI Technology</p>
                    </div>
                    <div className="hero-main-text relative font-extrabold lg:text-[10rem] text-[20vw] leading-none">
                        <h1>Remove</h1>
                        <h1>Background</h1>
                    </div>
                    <div className="hero-button py-2 w-full relative font-Ubuntu">
                        <CustomButton value="Upload Image" tailwindclass={'mx-auto lg:text-[2.5rem] text-[1.5rem]'} />
                    </div>
                </div>
                <div className="hero-phase-2">
                    <div className="numbers">
                        <div className="no-images-removed-bg">

                        </div>
                        <div className="no-satisied-users">

                        </div>
                    </div>
                    <div className="para">
                        <p>Unlock the power of professional-grade background removal, without the need for extensive editing skills. Our AI-powered tool makes it easy to erase backgrounds in seconds, giving you more time to focus on what matters most - creating stunning visuals that captivate your audience.</p>
                    </div>
                    <div className="hero-phase-3-remove-bg-silder">

                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection