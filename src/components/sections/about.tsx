import React from 'react'
import { FaPlay } from 'react-icons/fa6'
import Image from 'next/image'

export default function About() {
  return (
    <section className='mt-10'>
        <div className='space-y-10'>
            <div className='flex flex-col lg:items-center lg:flex-row gap-4'>
                <div className='lg:w-1/2 space-y-2'>
                    <span className='text-sm font-semibold'>ABOUT US</span>
                    <h4 className='text-3xl lg:text-4xl font-semibold'>Your trusted partner in accounting solutions</h4>
                </div>
                <div className='lg:w-1/2'>
                    <p>
                        We are committed to meeting client needs and creating relevant solutions for your business pains. Our Firm places   remarkable emphasis on proffessional standards, confidently and the level of qualifications and experienced personnel.
                    </p>
                </div>
            </div>
            <div>
                <div className='flex items-center justify-around relative overflow-hidden group rounded-2xl xl:rounded-3xl'>
                    <Image 
                        src='/assets/about-us-img.jpg' 
                        alt='About Us Image' 
                        width={0} 
                        height={0}
                        sizes='100svw' 
                        className='object-cover w-full h-[25rem]'
                    />
                    <div className='absolute inset-0 bg-white opacity-0 w-0 rotate-45 group-hover:w-[100%] scale-200 group-hover:opacity-20 transition-all duration-300 ease-in-out'/>
                    <div className='absolute bottom-4 flex items-center justify-around w-full'>
                        <div className='flex items-center gap-2 bg-[var(--secondary)] rounded-full p-1.5 pr-4'>
                            <span className='bg-white text-[var(--secondary)] rounded-full p-3 flex items-center justify-around'>
                                <FaPlay />
                            </span>
                            <span className='text-white font-semibold'>Play Video</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-8'>
                <div className='flex flex-col items-start space-y-4'>
                    <span className='p-2 bg-[var(--secondary)] rounded-full flex items-center justify-around'>
                        <Image
                            alt='icon'
                            src='/assets/icon-about-company-1.svg'
                            className='size-10 object-contain'
                            width={0}
                            height={0}
                            sizes='100svw'
                        />
                    </span>
                    <p className='text-xl font-semibold'>
                        We prioritize building long-term relationships with our clients and always put their needs first.
                    </p>
                </div>
                <div className='flex flex-col items-start space-y-4'>
                    <span className='p-2.5 bg-[var(--secondary)] rounded-full flex items-center justify-around'>
                        <Image
                            alt='icon'
                            src='/assets/icon-about-company-2.svg'
                            className='size-8 object-contain'
                            width={0}
                            height={0}
                            sizes='100svw'
                        />
                    </span>
                    <p className='text-xl font-semibold'>
                        We prioritize building long-term relationships with our clients and always put their needs first.
                    </p>
                </div>
                <div className='flex flex-col items-start space-y-4'>
                    <span className='p-2.5 bg-[var(--secondary)] rounded-full flex items-center justify-around'>
                        <Image
                            alt='icon'
                            src='/assets/icon-about-company-3.svg'
                            className='size-8 object-contain'
                            width={0}
                            height={0}
                            sizes='100svw'
                        />
                    </span>
                    <p className='text-xl font-semibold'>
                        We prioritize building long-term relationships with our clients and always put their needs first.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}
