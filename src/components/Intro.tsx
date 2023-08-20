"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"

type Props = {}

const IntroComponent = (props: Props) => {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div 
                initial={{opacity:0 , scale: 0}}
                animate={{opacity:1 , scale: 1}}
                transition={{
                    type:"tween",
                    duration: 0.2
                }}
                >
                    <Image src={"/thalaivar.jpg"} alt='Profile Image' height={192} width={192} quality="95" priority={true} className='border-[0.35rem] rounded-full border-white object-cover shadow-xl'/>
                </motion.div>
                <motion.span
                initial={{opacity: 0 , scale: 0}}
                animate={{opacity:1 , scale: 1 }}
                transition={{
                    type:"spring",
                    stiffness: 125,
                    delay: 0.5,
                    duration: 0.7
                }}
                >
                    <Image src={"/raising_hand_emoji.png"} alt='Raising Hand Emoji' height={70} width={70} className='absolute bottom-0 right-0'/>
                </motion.span>
            </div>
        </div>
        <motion.p className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
        initial={{opacity: 0 , scale:0}}
        animate={{opacity: 1 , scale:1}}
        >
            <span className='font-bold'>Hello, I'm Naresh Kumar.</span> I'm a{" "}
            <span className='font-bold'>Software Developer</span>
            <span className=''>, have hands on experience in <span className='font-bold'>Full Stack Development and Mobile App Developement</span></span>
            {" "}My focus is on{" "}<span className='underline'>Next JS, Flutter, Node JS</span>
        </motion.p>

        <motion.div className='flex items-center gap-2 px-4 sm:flex-row justify-center font-medium text-lg'
        initial={{opacity: 0 , y: 100}}
        animate={{opacity: 1 , y: 0}}
        transition={{delay: 0.1 }}
        >
            <Link className='bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-105 hover:bg-gray-950 active:scale-100 transition group' href="#contact">Contact me <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" /></Link>
            <a href='/CV.pdf' download className='curson-pointer bg-white-900 text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-105 hover:bg-gray-100 active:scale-100 transition group border-black/10 border'>Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition"/></a>
            <a href='https://www.linkedin.com/in/naresh25/' target='block' className='bg-white text-gray-700 p-4 flex items-center rounded-full outline-none hover:scale-[1.15] hover:bg-gray-100 active:scale-100 transition group border-black/10 border'><BsLinkedin/></a>
            <a href='https://github.com/Nary-Vip/' target='block' className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full outline-none hover:scale-[1.15] hover:bg-gray-100 active:scale-100 transition group border-black/10 border'><BsGithub/></a>
        </motion.div>
    </section>
  )
}

export default IntroComponent