import React from 'react'
import HeroContent from '../sub/HeroContent'

const Hero = () => {
  return (
    <div className='relative flex flex-col h-full w-full' id='about-me'>
      <video autoPlay muted loop className='rotate-180 absolute top-[-340px] left-0 z-[1] w-full h-full object-cover'>
        <source src='/assets/blackhole.webm' type='video/webm'></source>
      </video>
      <HeroContent />
    </div>
  )
}

export default Hero