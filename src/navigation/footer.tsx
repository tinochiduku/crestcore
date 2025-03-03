import Button from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    const links = {
        quick: [
            {
                title: 'Home',
                href: '#'
            },
            {
                title: 'About',
                href: '#'
            },{
                title: 'Services',
                href: '#'
            },{
                title: 'Blog',
                href: '#'
            },{
                title: 'Contact',
                href: '#'
            },
        ],
        socials: [
            {
                title: 'Facebook',
                href: '#'
            },
            {
                title: 'Instagram',
                href: '#'
            },{
                title: 'Twitter',
                href: '#'
            },{
                title: 'Linked',
                href: '#'
            },
        ]
    }
  return (
    <footer className='xl:mb-10'>
        <div className='bg-[var(--primary)] text-white xl:rounded-4xl max'>
        <div className='grid h-full lg:flex-row grid-cols-1 lg:grid-cols-12 gap-5 py-10 lg:p-10'>
            <div className='flex flex-col lg:col-span-5 h-full items-start gap-4 justify-between'>
                <Image
                    alt='crestcore logo'
                    src='/logo/logo-light.png'
                    className='w-auto h-12 object-contain'
                    width={0}
                    height={0}
                    sizes='100svw'
                />
                <div className='space-y-4 w-full'>
                    <h4 className='text-2xl font-semibold'>Newsletter Signup</h4>
                    <input className='outline-none bg-transparent border-b border-white/30 text-gray-400 px- py-2 w-full' placeholder='Enter Your Email' />
                    <div className='flex items-center'>
                        <Button label='Subscribe Now' href='#' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col lg:col-span-7 gap-4'>  
                <h4 className='text-2xl sm:text-4xl font-semibold'>Trusted by businesses and individuals across the country</h4>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    <div className='space-y-4'>
                        <h4 className='text-2xl font-semibold'>Quick Links</h4>
                        <ul className='flex flex-col gap-2'>
                            {links.quick.map(({title, href}) => 
                                <Link href={href}>
                                    {title}
                                </Link>
                            )}
                        </ul>
                    </div>
                    <div className='space-y-4'>
                        <h4 className='text-2xl font-semibold'>Socials</h4>
                        <ul className='flex flex-col gap-2'>
                            {links.socials.map(({title, href}) => 
                                <Link href={href}>
                                    {title}
                                </Link>
                            )}
                        </ul>
                    </div>
                    <div className='space-y-4'>
                        <h4 className='text-2xl font-semibold'>Say Hello</h4>
                        <div className='text-sm space-y-4'>
                            <p>info@crestcore.co.zw</p>
                            <p>+263 71 402 6872</p>
                            <p>+263 77 230 6399</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='py-8 border-t border-white/30'>
            <p className='text-center text-sm text-gray-400'>
            copyright © {new Date().getFullYear()} Crestcore Accounting. all rights reserved.
            </p>
        </div>
        </div>
    </footer>
  )
}
