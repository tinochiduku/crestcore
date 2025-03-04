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
                    At Crestcore Consulting and Advisory, we combine industry expertise, innovative solutions, and a deep commitment to our clients' success. Our team of highly qualified professionals offers a comprehensive range of services, from accounting and tax advisory to business consulting and forensic accounting, all tailored to meet the unique needs of each client.
                </p>
                <p className='md:text-left'>
                    We prioritize integrity, empathy, and respect in every engagement, ensuring that our solutions are not only effective but also aligned with your business goals. With a focus on precision and professionalism, Crestcore is your trusted partner in navigating complex financial landscapes, driving growth, and achieving long-term success. Let us empower your business with the expertise and personalized attention it deserves.
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
