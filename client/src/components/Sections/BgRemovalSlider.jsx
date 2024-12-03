import { useState } from 'react'
import { assets } from '../../../public/assets/assets';

const BgRemovalSlider = () => {

    const [Progress, setProgress] = useState(50);

    const handleProgless = (e) => {
        setProgress(e.target.value)
    }

    return (
        <section className='BgRemovalSlider w-full relative'>
            <div className="main-bg-removal-container relative max-w-3xl overflow-hidden m-auto flex items-center justify-center">
                <div className="SlideImageOne relative ">
                    <img src={assets.image_w_bg} alt="img" className=' relative rounded-l-xl z-10' style={{ clipPath: `inset(0 ${100.2 - Progress}% 0 0)` }} />
                </div>
                <div className="SlideImageTwo absolute top-0 left-0 w-full h-full">
                    <img src={assets.image_wo_bg} alt="img" className=' relative rounded-r-xl z-10' style={{ clipPath: `inset(0 0 0 ${Progress}%)` }} />
                </div>
                <input type="range" min={0} max={100} value={Progress} onChange={(eventing) => { handleProgless(eventing) }} name="bg-removal-ranger" id="bg-slider-range" className=' absolute top-1/2 left-0 w-[101%] z-20' />
            </div>
        </section>
    )
}

export default BgRemovalSlider