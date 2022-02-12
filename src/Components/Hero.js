import React from 'react'
import HeroImg from '../Assets/hero.jpg'

const Hero = () => {
    return (
        <div style={{ backgroundImage: `url(${HeroImg})` }} className='h-screen flex bg-contain bg-top bg-no-repeat  bg-white justify-center repeat items-center text-orange-800 text-5xl font-semibold'>
            <div>
                <h1>Test Driller</h1>
            </div>
        </div>
    )
}

export default Hero