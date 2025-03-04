import React from 'react'
import { FaPlay } from 'react-icons/fa6'
import Image from 'next/image'
import Button from '../ui/button'

export default function Blog() {
  return (
    <section className='mt-10 max'>
        <div className='space-y-10'>
            <div className='flex flex-col lg:items-center lg:flex-row gap-4'>
                <div className='lg:w-1/2 space-y-2'>
                    <span className='text-sm font-semibold'>WHY CHOOSE US</span>
                    <h4 className='text-3xl lg:text-4xl font-semibold'>Uncover our latest posts and updates</h4>
                </div>
                <div className='lg:w-1/2'>
                    <p>
                        We are committed to meeting client needs and creating relevant solutions for your business pains. Our Firm places   remarkable emphasis on proffessional standards, confidently and the level of qualifications and experienced personnel.
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-8'>
                <div className='flex flex-col items-start space-y-4 bg-white rounded-4xl p-5'>
                    <div>
                        <div className='flex items-center justify-around relative overflow-hidden group rounded-2xl xl:rounded-3xl aspect-[16/11]'>
                            <Image 
                                src='/assets/about-us-img.jpg' 
                                alt='About Us Image' 
                                width={0} 
                                height={0}
                                sizes='100svw' 
                                className='object-cover w-full h-[25rem] group-hover:scale-125 transition-all duration-500 ease-in-out'
                            />
                            <div className='absolute inset-0 bg-white opacity-0 w-0 rotate-45 group-hover:w-[100%] scale-200 group-hover:opacity-20 transition-all duration-500 ease-in-out'/>
                        </div>
                    </div>
                    <h4 className='text-xl font-semibold'>
                        Understanding Tax Deductions for Small Businesses
                    </h4>
                    <p>
                        Quisque ligula quam, tempus non tempor sed, tempor in ligula. In sit amet orci elit. Donec egestas eros sit amet odio ultricies fermentum. Phasellus ullamcorper.
                    </p>
                    <div className='flex items-center min-w-xs'>
                        <Button label='Read More ' href='/contact' />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
