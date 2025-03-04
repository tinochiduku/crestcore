import React from 'react'
import Button from '../ui/button'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa6'

export default function Choosing2() {
  return (
    <section className='mt-10 max'>
        <div className='flex flex-col lg:flex-row lg:items-center gap-5 py-10 xl:p-10'>
            <div className='lg:w-1/2'>
                <Image
                    alt="hero-image"
                    src='/assets/employee-img.png'
                    className='w-full h-full object-contain'
                    width={0}
                    height={0}
                    sizes='100svw'
                />
            </div>
            <div className='flex flex-col items-center md:items-start lg:w-1/2 gap-10'>
                <div>
                    <span className='text-sm font-semibold'>WHY CHOOSE US</span>
                    <h1 className='md:text-left text-3xl lg:text-4xl font-semibold'>Why choose us as your trusted financial partner?</h1>
                </div>
                <p className='md:text-left'>
                simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of.
                </p>
                <div className='flex items-center gap-4'>
                        <div className=''>
                            <h4 className='text-3xl font-bold'>500+</h4>
                            <p>successful audits </p>
                        </div>
                        <div className=''>
                            <h4 className='text-3xl font-bold'>98%</h4>
                            <p>on-time filing rate</p>
                        </div>
                </div>
            </div>
        </div>
    </section>
  )
}
