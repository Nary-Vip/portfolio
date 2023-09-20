"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'

type Props = {}

const About = (props: Props) => {
  return (
    <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40'
      initial={{opacity:0, y:100}}
      animate={{opacity:1, y:0}}
      transition={{delay: 0.175}}
    >
        <SectionHeading>
          <>About Me</>
        </SectionHeading>
        <p className='mb-3 '>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet sequi a debitis esse laborum veritatis aperiam, suscipit nihil minus ipsa, veniam alias in voluptates! Quas est consectetur quisquam. Impedit, odit!
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sit corrupti, sapiente eum fugiat delectus veniam iste, praesentium ipsam incidunt deserunt vel ipsa quos tenetur? Laboriosam ipsam possimus maiores optio!
        </p>
    </motion.section>
  )
}

export default About