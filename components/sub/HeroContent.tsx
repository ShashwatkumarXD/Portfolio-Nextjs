'use client'


import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'

const HeroContent = () => {
  return (
    <motion.div initial='hidden' animate='visible' className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'>
      <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
        <motion.div variants={slideInFromTop} className='welcome-box py-[8px] px-[7px] borber border-[#7042f88b] opacity-[0.9] flex flex-row'>
          <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5'></SparklesIcon>
          <h1 className='Welcome-text text-[13px]'>My Introduction</h1>
        </motion.div>
        <motion.div variants={slideInFromLeft(0.5)} className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'>
          <span>
            Hey, I'm
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> Shashwat </span>
            Software Developer
          </span>
        </motion.div>

        <motion.p variants={slideInFromLeft(0.8)} className='text-lg text-gray-400 my-5 max-w-[600px]'>
          I&apos;m a MERN Stack Software Engineer with Experience in Website and Software Development.
          Check out my projects and skills.
        </motion.p>

        <motion.a variants={slideInFromLeft(1)} className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'>
          Learn More!
        </motion.a>
      </div>

      <motion.div variants={slideInFromRight(0.8)} className='w-full h-full flex justify-center items-center'>
        <Image src='/assets/mainIconsdark.svg' alt='work icons' height={650} width={650} />
      </motion.div>
    </motion.div>
  )
}

export default HeroContent