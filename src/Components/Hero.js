import React from 'react'
import HeroImg from '../Assets/hero.jpg'
import { ButtonHero } from './Button'

const Hero = () => {
    return (
        <div style={{ backgroundImage: `url(${HeroImg})` }} className='h-[70vh] flex bg-cover bg-center bg-no-repeat text-center bg-white justify-center repeat items-center font-semibold'>
            <div className='w-1/2'>
                <h1 className=' text-8xl text-gray-900 font-header font-bold p-5'>Test Driller</h1>
                <p> An Examination and Learning Software Application. </p>
                <ButtonHero title=" Contact Us" link={'#'}  />
                
            </div>
        </div>
    )
}

export default Hero