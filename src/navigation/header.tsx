'use client'
import React, { useState } from 'react';
import { _nav } from '@/navigation/_nav';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MdArrowOutward } from 'react-icons/md'
import { HiBars3BottomRight } from "react-icons/hi2";
import {
    TbHome,
    TbUsersGroup,
    TbBrandAppgallery,
    TbListDetails,
} from 'react-icons/tb'
import { MdSupportAgent } from 'react-icons/md'
import { usePathname } from 'next/navigation';


const Header: React.FC = () => {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()

    const icons  = (path) => {
        switch(path) {
            case '/':
                return <TbHome className='size-5' />
            case '/about':
                return <TbUsersGroup className='size-5' />
            case '/services':
                return <TbBrandAppgallery className='size-5' />
            case '/blog':
                return <TbListDetails className='size-5' />
            case '/contact':
                return <MdSupportAgent className='size-5' />
        }
    }
    
    return (
        <header>
            <div className='flex items-center justify-between max py-4'>
                <Image
                    alt='crestcore logo'
                    className='w-auto h-10 lg:h-12'
                    src='/logo/logo.png'
                    width={0}
                    height={0}
                    sizes='100svw'
                />
                <nav className="hidden lg:flex items-center gap-5">
                    {_nav.map((route) => (
                        <motion.div
                            key={route.title}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Link href={route.path}>{route.title}</Link>
                        </motion.div>
                    ))}
                </nav>
                <button className='lg:hidden' onClick={() => setOpen(!open)}>
                    <HiBars3BottomRight className='size-7 hover:text-[var(--secondary)] transition-all duration-200 ease-in-out' />
                </button>
                <Link className='hidden lg:flex px-2 py-2 bg-[var(--secondary)] text-white rounded-md' href='#'>
                    <div className='flex items-center gap-2'>
                        <span>Free Consultation</span>
                        <span className='p-1.5 bg-white rounded-md'>
                            <MdArrowOutward className='size-5 text-[var(--accent)]' />
                        </span>
                    </div>
                </Link>
            </div>
            <div className='flex items-center justify-around lg:hidden'>
                <nav className={`fixed z-50 flex items-center text-xs gap-4 justify-between ${open ? 'left-[2.5%]' : '-left-[100%]' } bottom-4 px-4 bg-[var(--primary)] text-white transition-all duration-300 ease-in-out py-5 w-[95%] rounded-md shadow shadow-cyan-400/30`}>
                    {_nav.map((route) => (
                        <motion.div
                            key={route.title}
                            initial={{ y: 100 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Link className={`${pathname === route.path ? 'text-[var(--secondary)]' : ''} flex flex-col items-center gap-1 group`} href={route.path}>
                                <span>
                                    {icons(route.path)}
                                </span>
                                <span className='whitespace-nowrap text-xs group-hover:block'>{route.title}</span>
                            </Link>
                        </motion.div>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;