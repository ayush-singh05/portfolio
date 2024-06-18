"use client"

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
const links = [
    {
        name: 'home',
        path: '/'
    },
    {
        name: 'services',
        path: '/services'
    },
    {
        name: 'resume',
        path: '/resume'
    },
    {
        name: 'work',
        path: '/work'
    },
    {
        name: 'contact',
        path: '/contact'
    },
]
function Nav() {
    const pathName = usePathname();
    return (
        <nav className='flex gap-8'>
            {
                links.map((item, idx) => (
                    <Link
                        href={item.path}
                        key={idx}
                        className={`${item.path === pathName && 'text-accent border-b-2 border-accent'} capitalize font-medium hover:text-accent transition-all`}
                    >
                        {item.name}
                    </Link>
                ))
            }
        </nav>
    )
}

export default Nav