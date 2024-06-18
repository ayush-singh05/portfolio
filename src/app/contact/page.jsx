'use client'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 7303-4128-11"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "ayushsingh2442@gmail.com"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Ballia, Uttar Pradesh 277210"
  },
]

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_rg4buck','template_xup1x3q', form.current, {
        publicKey: 'aOmHevj6zJw5g91w2',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('You have Sucessfully send your message ')
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Error')
        },
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className='py-6'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          {/**forms */}
          <div className='xl:w-[54%] order-2 xl:order-none'>
            <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl' ref={form} onSubmit={sendEmail}  >
              <h3 className='text-4xl text-accent '>Let's work together</h3>
              <p className='text-white/60'>If you're interested in working together, let's start a conversation. Here's how you can reach out:</p>
              {/** input  */}
              <div className='grid grid-cols-1 md:grid-cols-2  gap-6 '>
                <Input type="text" name='firstname' placeholder='Firstname' />
                <Input type="text" name='lastname' placeholder='Lastname' />
                <Input type="email" name='email' placeholder='Eamil address' />
                <Input type="phone" name='phone' placeholder='Phone number' />
              </div>
              <Select>
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Select a service'/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Frontend Development</SelectItem>
                    <SelectItem value="dev">Backend Development</SelectItem>
                    <SelectItem value="fst">Full Stack Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/** Text area */}
              <Textarea 
                className='h-[200px]' 
                name="textvalue"
                placeholder="Type your message here." />
              {/** Button */}
              <Button type='submit' size='md'  className='max-w-40 '>Send message</Button>
            </form>
          </div>
          {/**Info */}
          <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
           <ul className='flex flex-col gap-10'>
            {info.map((item,idx) => (
              <li key={idx} className='flex items-center gap-6'>
                <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                  <div className='text-[28px]'>{item.icon}</div>
                </div>
                <div className='flex-1'>
                <p className='text-white/60 '>{item.title}</p>
                <h3 className='text-xl'>{item.description}</h3>
                </div>
              </li>
            ))}
           </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact