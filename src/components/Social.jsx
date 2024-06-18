import Link from 'next/link'
import React from 'react'
// import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
    {icon: <FaGithub />, path:'https://github.com/ayush-singh05'},
    {icon: <FaLinkedin />, path:'https://www.linkedin.com/in/ayush-singh05/'},
    {icon: <FaXTwitter />, path:'https://x.com/ayushsingh2442'},
   
]
function Social({containerStyle, iconStyle}) {
  return (
    <div className={containerStyle}>
     {
        socials.map((item,idx) => (
            <Link href={item.path} key={idx} className={iconStyle}>{item.icon}</Link>
        ))
     }
    </div>
  )
}

export default Social