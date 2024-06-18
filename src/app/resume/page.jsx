"use client"
import React from 'react'
import { FaCss3, FaJs, FaReact, FaNodeJs, FaHtml5, FaBootstrap } from 'react-icons/fa'
import { FiFramer } from "react-icons/fi";
import { IoLogoFirebase } from "react-icons/io5";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiAppwrite, SiMui, SiShadcnui } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { TbBrandRedux } from "react-icons/tb";
import { RiFirebaseFill, RiNextjsFill } from "react-icons/ri";
import { SiMysql, SiSpring, SiTailwindcss } from "react-icons/si";
import { Tabs, TabsContent, TabList, TabsTrigger, TabsList } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area'
import { motion } from 'framer-motion'
import { cn } from '@radix-ui/react-tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { IoLogoJavascript } from "react-icons/io5";
const about = {
  title: 'About me',
  description: "I am a passionate web developer with a strong foundation in computer science and a keen interest in creating dynamic, user-friendly web applications. ",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Ayush Singh"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 7303 4128 11"
    },
    {
      fieldName: "Experiences",
      fieldValue: "4+ Months"
    },
    {
      fieldName: "Nationality",
      fieldValue: "India"
    },
    {
      fieldName: "Eamil",
      fieldValue: "ayushsingh2442@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Language",
      fieldValue: "English, Hindi"
    },
  ]
}
// Skils 

const skills = {
  title: "My Skills",
  description: "With a diverse skill set and a commitment to continuous learning, I am dedicated to delivering high-quality, efficient, and scalable web applications.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html5"
    },
    {
      icon: <FaCss3 />,
      name: "Css"
    },
    {
      icon: <IoLogoJavascript />,
      name: "javascript"
    },
    {
      icon: <FaReact />,
      name: "React"
    },
    {
      icon: <RiNextjsFill />,
      name: "Next.js"
    },
    {
      icon: <SiTailwindcss />,
      name: "TailwindCss"
    },
    {
      icon: <TbBrandRedux />,
      name: "Redux"
    },
    {
      icon: <SiShadcnui />,
      name: "shadcn UI"
    },
    {
      icon: <FaJava />,
      name: "java"
    },
    {
      icon: <BiLogoSpringBoot />,
      name: "springboot"
    },
    {
      icon: <SiMysql />,
      name: "mysql"
    },
    {
      icon: <SiAppwrite />,
      name: "Appwrite"
    },
    {
      icon: <RiFirebaseFill />,
      name: "firebase"
    },
    {
      icon: <SiMui />,
      name: "Material UI"
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap"
    },
    {
      icon: <FiFramer />,
      name: "Framer motion"
    },
  ]
}
//Education
const education = {
  title: "My Education",
  description: "My education has provided me with a robust understanding of both theoretical concepts and practical applications, empowering me to excel in the dynamic field of web development.",
  items: [
    {
      institution: "Jananayak Chandrasekar University",
      degree: "Bachelor of Computer Applications",
      duration: '2023-26'
    },
    {
      institution: "Acciojob",
      degree: "Full Satck Development",
      duration: '2022-23'
    },
    {
      institution: "Jananayak Chandrasekar University",
      degree: "Bachlor's in Arts",
      duration: '2018-21'
    },
    {
      institution: "SAMS Institute of Technology",
      degree: "Diploma in Electrical Engineering",
      duration: '2014-17'
    },
  ]
}

// Experience
const experience = {
  icon: '',
  title: "My experience",
  description: "",
  items: [
    {
      company: "DevSkillHub Training and Consultancy",
      position: "Frontend Developer Intern",
      duration: "Jun-2024 - Present"
    },
    {
      company: "Freelancing",
      position: "Freelance Web Developer",
      duration: "Feb-2024 - Present"
    },
  ]
}

function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' }
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0 mb-10'
    >
      <div className='container mx-auto'>
        <Tabs
          defaultValue="experience"
          className='flex flex-col xl:flex-row gap-[60px]'
        >
          <TabsList
            className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value="experience">Experiences</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/**Content */}

          <div className='min-h-[70vh] w-full'>
            {/** Experiences */}
            <TabsContent value="experience" className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold '>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-col-1 lg:grid-cols-2 gap-[30px] '>
                    {experience.items.map((item, idx) => (
                      <li key={idx} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1' >
                        <span className='text-accent'>{item.duration}</span>
                        <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                        <div className='flex items-center gap-3'>
                          {/**dot */}
                          <span className='w-[6px] h-[6px] rounded-full bg-accent '></span>
                          <p className='text-white/60'>{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/** Education */}
            <TabsContent value="education" className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold '>{education.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-col-1 lg:grid-cols-2 gap-[30px] '>
                    {education.items.map((item, idx) => (
                      <li key={idx} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1' >
                        <span className='text-accent'>{item.duration}</span>
                        <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                        <div className='flex items-center gap-3'>
                          {/**dot */}
                          <span className='w-[6px] h-[6px] rounded-full bg-accent '></span>
                          <p className='text-white/60'>{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/** Skills */}
            <TabsContent value="skills" className='w-full h-full'>
              <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                </div>
                <ScrollArea className='h-[400px] px-8'>
                  <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 '>
                    {skills.skillList.map((skill, idx) => (
                      <li key={idx}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                              <div className='text-6xl group-hover:text-accent transition-all duration-300 '>{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className='capitalize'>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/** about */}
            <TabsContent value="about" className='w-full text-center xl:text-left'>
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                <ul className='geid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {
                    about.info.map((item, idx) => (
                      <li key={idx} className='flex items-center justify-center xl:justify-start gap-4 '>
                        <span className='text-white/60'>{item.fieldName}</span>
                        <span className='text-xl'>{item.fieldValue}</span>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </TabsContent>

          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume