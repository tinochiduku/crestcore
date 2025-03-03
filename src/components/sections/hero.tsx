import React from 'react'
import Button from '../ui/button'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa6'

export default function Hero() {
  return (
    <section className='bg-gray-50 rounded-lg xl:rounded-4xl max mt-10'>
        <div className='flex flex-col lg:flex-row lg:items-center gap-5 p-4 py-10 xl:p-10'>
            <div className='lg:w-1/2 space-y-4'>
                <div className='flex items-center'>
                    <div className='flex flex-col lg:items-center sm:flex-row bg-white rounded-lg sm:rounded-full px-4 py-2 text-sm font-medium gap-2 sm:gap-5 whitespace-nowrap'>
                        <span>Google Rating</span>
                        <div className='flex items-center gap-2'>
                            <span>5.0</span>
                            <ul className='flex items-center gap-1'>
                                {[1,2,3,4,5].map((star) => 
                                    <li key={star}>
                                        <FaStar className='size-3' />
                                    </li>
                                )}
                            </ul>
                        </div>
                        <span>
                            Based on 292 Reviews 
                        </span>
                    </div>
                </div>
                <h1 className='text-3xl lg:text-4xl font-semibold'>Your premier desitnation for expert accounting solutions</h1>
                <p>Our understanding of your industry and your individual circumstances allow us to contribute far more than accountancy advice. We believe in being more than an advisory firm but that the advice is relevant to your business</p>
                <div className='flex flex-col sm:flex-row items-start md:items-center gap-4'>
                    <Button label='Work With Us' href='#' />
                    <Button label='View Our Services' href='#' />
                </div>
            </div>
            <div className='lg:w-1/2'>
                <Image
                    alt="hero-image"
                    src='/assets/hero-img.png'
                    className='w-full h-full object-contain'
                    width={0}
                    height={0}
                    sizes='100svw'
                />
            </div>
        </div>
    </section>
  )
}
