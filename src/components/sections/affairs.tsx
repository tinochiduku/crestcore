import React from 'react'
import Button from '../ui/button'
import Image from 'next/image'

export default function Affairs() {
  return (
    <section className='py-10'>
        <div className='flex flex-col lg:items-center lg:flex-row gap-10'>
            <div className='lg:w-2/5 space-y-10'>
                <span className='text-sm font-semibold'>STATE OF AFFAIRS</span>
                <h4 className='text-3xl lg:text-4xl font-semibold'>Keeping you informed on tax laws and financial trends</h4>
                <div className='flex flex-col items-start'>
                    <Button label='Contact Us' href='/contact' />
                </div>
            </div>
            <div className='lg:w-3/5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
                <div className='flex items-center justify-around bg-gray-50 rounded-4xl h-full w-full aspect-[16/9] md:aspect-auto'>
                    <div className='text-center'>
                        <h4 className='text-3xl font-bold'>980+</h4>
                        <p>Finacial Audits Conducted Annually</p>
                    </div>
                </div>
                <div className='flex items-center justify-around relative overflow-hidden group rounded-2xl xl:rounded-3xl aspect-[16/9] lg:col-span-2'>
                    <Image 
                        src='/assets/counter-img-1.jpg' 
                        alt='About Us Image' 
                        width={0} 
                        height={0}
                        sizes='100svw' 
                        className='object-cover w-full h-full'
                    />
                    <div className='absolute inset-0 bg-white opacity-0 w-0 rotate-45 group-hover:w-[100%] scale-200 group-hover:opacity-20 transition-all duration-300 ease-in-out'/>
                </div>
                <div className='flex items-center justify-around bg-gray-50 rounded-4xl h-full w-full aspect-[16/9] md:aspect-auto'>
                    <div className='text-center'>
                        <h4 className='text-3xl font-bold'>980+</h4>
                        <p>Finacial Audits Conducted Annually</p>
                    </div>
                </div>
                <div className='flex items-center justify-around relative overflow-hidden group rounded-2xl xl:rounded-3xl'>
                    <Image 
                        src='/assets/counter-img-2.jpg' 
                        alt='About Us Image' 
                        width={0} 
                        height={0}
                        sizes='100svw' 
                        className='object-cover w-full h-full'
                    />
                    <div className='absolute inset-0 bg-white opacity-0 w-0 rotate-45 group-hover:w-[100%] scale-200 group-hover:opacity-20 transition-all duration-300 ease-in-out'/>
                </div>
                <div className='flex items-center justify-around bg-gray-50 rounded-4xl h-full w-full aspect-[16/9] lg:col-span-2'>
                    <div className='text-center'>
                        <h4 className='text-3xl font-bold'>980+</h4>
                        <p>Finacial Audits Conducted Annually</p>
                    </div>
                </div>
                <div className='flex items-center justify-around relative overflow-hidden group rounded-2xl xl:rounded-3xl'>
                    <Image 
                        src='/assets/counter-img-3.jpg' 
                        alt='About Us Image' 
                        width={0} 
                        height={0}
                        sizes='100svw' 
                        className='object-cover w-full h-full'
                    />
                    <div className='absolute inset-0 bg-white opacity-0 w-0 rotate-45 group-hover:w-[100%] scale-200 group-hover:opacity-20 transition-all duration-300 ease-in-out'/>
                </div>
            </div>
        </div>
    </section>
  )
}
