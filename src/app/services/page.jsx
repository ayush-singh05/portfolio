'use client'
import Link from "next/link";
import {BsArrowDownRight} from 'react-icons/bs'
import { motion } from 'framer-motion'


const services = [
    {
      num: '01',
      title: "Frontend Development",
      description: 'In the realm of frontend development, I specialize in crafting visually appealing and highly responsive user interfaces.,',
      href: '/contact',
    },
    {
      num: '02',
      title: "Backend Development",
      description: 'Backend development is the backbone of any application, and I specialize in creating robust, scalable, and secure server-side solutions.',
      href: '/contact',
    },
    {
      num: '03',
      title: "Full Stack Development",
      description: 'As a fullstack developer, I offer comprehensive solutions that cover both frontend and backend development. This allows for seamless integration and a unified development process, ensuring consistency and efficiency throughout the project.',
      href: '/contact',
    
    },
]

function Services() {
  return (
    <section className="min-h[80vh] flex flex-col justify-center py-12 xl:py-0 mt-10">
      <div className="container mx-auto">
        <motion.div 
        initial={{opacity: 0}} 
        animate={{opacity:1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service,idx) => (
            <div key={idx} className="flex-1 flex flex-col justify-center gap-6 group">
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                <Link 
                className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45 "
                href={service.href}>
                <BsArrowDownRight className="text-primary text-3xl"/>
                </Link>
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
              {/** Descriptino */}
              <p className=" text-white/60">{service.description}</p>
              {/** Border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services;