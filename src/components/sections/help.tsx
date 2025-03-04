import React from 'react'
import Button from '../ui/button'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa6'

export default function Help() {
  return (
    <section className='mt-10 max'>
         <div className='flex flex-col lg:items-center lg:flex-row gap-4'>
                <div className='lg:w-1/2 space-y-2'>
                    <span className='text-sm font-semibold'>WH0 WE HELP</span>
                    <h4 className='text-3xl lg:text-4xl font-semibold'>How our team accountants can help you</h4>
                </div>
                <div className='lg:w-1/2'>
                    <p>
                        Our expertise spans various industries, ensuring that every client receives personalized, effective solutions that foster growth, compliance, and long-term success.
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 py-8'>
                <div className='flex flex-col items-center space-y-4 bg-white rounded-4xl p-5'>
                    <span className='p-5 bg-[var(--secondary)] rounded-full flex items-center justify-around'>
                        <Image
                            alt='icon'
                            src='/assets/icon-help-1.svg'
                            className='size-16 object-contain'
                            width={0}
                            height={0}
                            sizes='100svw'
                        />
                    </span>
                    <h4 className='text-2xl text-center font-medium'>
                        Nonprofit Organisations
                    </h4>
                </div>
                <div className='flex flex-col items-center space-y-4 bg-white rounded-4xl p-5'>
                    <span className='p-5 bg-[var(--secondary)] rounded-full flex items-center justify-around'>
                        <Image
                            alt='icon'
                            src='/assets/icon-help-2.svg'
                            className='size-16 object-contain'
                            width={0}
                            height={0}
                            sizes='100svw'
                        />
                    </span>
                    <h4 className='text-2xl text-center font-medium'>
                        Freelancers And Contractors
                    </h4>
                </div>
                <div className='flex flex-col items-center space-y-4 bg-white rounded-4xl p-5'>
                    <span className='p-5 bg-[var(--secondary)] rounded-full flex items-center justify-around'>
                        <Image
                            alt='icon'
                            src='/assets/icon-help-3.svg'
                            className='size-16 object-contain'
                            width={0}
                            height={0}
                            sizes='100svw'
                        />
                    </span>
                    <h4 className='text-2xl text-center font-medium'>
                        Limited Companies 
                    </h4>
                </div>
                <div className='flex flex-col items-center space-y-4 bg-white rounded-4xl p-5'>
                    <span className='p-5 bg-[var(--secondary)] rounded-full flex items-center justify-around'>
                        <Image
                            alt='icon'
                            src='/assets/icon-help-4.svg'
                            className='size-16 object-contain'
                            width={0}
                            height={0}
                            sizes='100svw'
                        />
                    </span>
                    <h4 className='text-2xl text-center font-medium'>
                        Limited Liability Partnerships
                    </h4>
                </div>
                <div className='flex flex-col items-center space-y-4 bg-white rounded-4xl p-5'>
                    <span className='p-5 bg-[var(--secondary)] rounded-full flex items-center justify-around'>
                        <Image
                            alt='icon'
                            src='/assets/icon-help-5.svg'
                            className='size-16 object-contain'
                            width={0}
                            height={0}
                            sizes='100svw'
                        />
                    </span>
                    <h4 className='text-2xl text-center font-medium'>
                        Professional Service Firms
                    </h4>
                </div>
            </div>
    </section>
  )
}
