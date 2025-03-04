import React from 'react'
import { FaPlay } from 'react-icons/fa6'
import Image from 'next/image'

export default function Choosing() {
  return (
    <section className='mt-10 max'>
        <div className='space-y-10 p-4 lg:p-10 bg-gray-50 xl:rounded-4xl'>
            <div className='flex flex-col lg:items-center lg:flex-row gap-4'>
                <div className='lg:w-1/2 space-y-2'>
                    <span className='text-sm font-semibold'>WHY CHOOSE US</span>
                    <h4 className='text-3xl lg:text-4xl font-semibold'>Why choose us as your trusted financial partner?</h4>
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
                    <div className='absolute w-full h-full bg-gradient-to-t from-[var(--primary)] to-transparent'/>
                    <div className='flex flex-col lg:flex-row gap-4 absolute bottom-4 lg:items-center justify-around w-full text-white px-4 lg:px-10'>
                        <h4 className='text-3xl lg:text-4xl font-semibold'>Experience seamless, secure, and efficient account management</h4>
                        <div className=''>
                            <h4 className='text-3xl font-bold'>12 Years</h4>
                            <p>in accounting services</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-8'>
                <div className='flex flex-col items-start space-y-4 bg-white rounded-4xl p-5'>
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
                    <h4 className='text-xl font-semibold'>
                        Expertise You Can Trust
                    </h4>
                    <p>
                        Quisque ligula quam, tempus non tempor sed, tempor in ligula. In sit amet orci elit. Donec egestas eros sit amet odio ultricies fermentum. Phasellus ullamcorper.
                    </p>
                </div>
                <div className='flex flex-col items-start space-y-4 bg-white rounded-4xl p-5'>
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
                    <h4 className='text-xl font-semibold'>
                        Transparent Communication
                    </h4>
                    <p>
                        Quisque ligula quam, tempus non tempor sed, tempor in ligula. In sit amet orci elit. Donec egestas eros sit amet odio ultricies fermentum. Phasellus ullamcorper.
                    </p>
                </div>
                <div className='flex flex-col items-start space-y-4 bg-white rounded-4xl p-5'>
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
                    <h4 className='text-xl font-semibold'>
                        Client Satisfaction
                    </h4>
                    <p>
                        Quisque ligula quam, tempus non tempor sed, tempor in ligula. In sit amet orci elit. Donec egestas eros sit amet odio ultricies fermentum. Phasellus ullamcorper.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}
