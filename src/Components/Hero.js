import React from 'react'
import HeroImg from '../Assets/hero.jpg'
import { ButtonHero } from './Button'

const Hero = () => {
  
    return (
        <div style={{ backgroundImage: `url(${HeroImg})` }} className='md:h-[70vh] h-[60vh] flex bg-cover bg-center bg-no-repeat bg-white text-center justify-center repeat items-center font-semibold'>
            <div className='w-1/2'>
                <h1 className=' md:text-8xl text-6xl text-gray-900 font-header  md:font-medium  font-bold py-5'>Test Driller</h1>
                <p className=''> An Examination and Learning Software Application. </p>
                <div className="md:flex md:mt-5 mt-16">
                    <ButtonHero title=" Download (Android) " link={'https://play.google.com/store/apps/details?id=com.iafsawii.testdriller'} />
                    <ButtonHero title=" Download (iOS) " link={'https://apps.apple.com/ng/app/jamb-cbt-news-results/id1515034318'} />
                </div>

            </div>
        </div>
    )
}

export default Hero