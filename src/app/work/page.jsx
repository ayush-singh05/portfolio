'use client'
import { BsArrowUpRight, BsGithub } from 'react-icons/bs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import Link from 'next/link'
import Image from 'next/image'
import { easeIn, motion } from 'framer-motion'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// import blinkit from '/assets/blinkit.png'
import 'swiper/css'
import WorkSliderBtn from '@/components/WorkSliderBtn'
const projects = [
  {
    num: '01',
    category: "frontend Project",
    title: "Crypto Currency Tracker",
    description: "Crypto Tracker is a web application built with ReactJS for tracking and comparing various cryptocurrencies. The application provides a dashboard displaying key metrics for multiple cryptocurrencies, including market cap, volume, and price changes. ",
    stack: [
      { name: "React.js" },
      { name: "Javascript" },
      { name: "Tailwind css" },
      { name: "Material UI" },
      { name: "Framer Motion" },
      { name: "Chart.js" },
      
      
    ],
    image: '/assets/crypto-tracker.png',
    live: 'https://crypto-tracker-ayush.vercel.app/',
    github: 'https://github.com/ayush-singh05/CryptoTracker',
  },
  {
    num: '02',
    category: "frontend Project",
    title: "Project 2",
    description: "The YouTube Clone project is a web application developed using HTML, CSS, and JavaScript that simulates the core functionalities of YouTube. This project aims to replicate the user interface and essential features of the popular video-sharing platform",
    stack: [
      { name: "html 5" },
      { name: "Css" },
      {name: "Javascript"},
    ],
    image: '/assets/youtube.png',
    live: 'https://ayush-singh05.github.io/youtube-clone/',
    github: 'https://github.com/ayush-singh05/youtube-clone',
  }
]
function Work() {
  const [project, setProject] = useState(projects[0])

  const handleSlide = (swiper) => {
      const currIdx = swiper.activeIndex ;
      setProject(projects[currIdx])
  }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1,transition:{delay:2.4, duration: 0.4, ease: "easeIn"} }}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px] '>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col h-[50%] gap-[30px]  '>
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline '>
                {project.num}
              </div>
              {/** Project category */}
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
                {project.category}
              </h2>
              {/* project description */}
              <p className='text-white/60'>{project.description}</p>
              {/** Satck */}

              <ul className='flex gap-4 flex-wrap'>
                {project.stack.map((item, idx) => (
                  <li key={idx} className='text-xl text-accent'>
                    {item.name}
                    {idx !== project.stack.length - 1 && ','}
                  </li>
                ))}
              </ul>
              {/**Border */}
              <div className='border border-white/20'></div>
              {/* button */}
              <div className='flex items-center gap-4 '>
              {/** Live project */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsGithub className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
              <Swiper
              spaceBetween={10}
              slidesPerView={1}
              className='xl:h-[520px] mb-12'
              onSlideChange={handleSlide}
              >
                {projects.map((project,idx) => (
                  <SwiperSlide key={idx} className='w-full'>
                    <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                      <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                      {/**Image */}
                      <div className='relative w-full h-full'>
                        <Image
                          src={project.image}
                          fill
                          className='object-contain '
                          alt=''
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                {/** Slider Button */}
                <WorkSliderBtn 
                containerStyle='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'
                btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all'
                 />
              </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work