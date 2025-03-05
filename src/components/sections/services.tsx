import React from 'react'
import ServiceCard from '../ui/service-card'
import Button from '../ui/button'
import services from '@/lib/services'

export default function Services() {
  return (
    <section className='bg-gray-50 rounded-lg xl:rounded-4xl max mt-10 py-10'>
        <div className='space-y-10 px-4 xl:px-10'>
            <div className='flex flex-col lg:items-center lg:flex-row gap-4'>
                <div className='lg:w-1/2 space-y-2'>
                    <span className='text-sm font-semibold'>OUR SERVICES</span>
                    <h4 className='text-3xl lg:text-4xl font-semibold'>Your Business Goals, Our Priority</h4>
                </div>
                <div className='lg:w-1/2'>
                    <p>
                        At Crestcore Consulting and Advisory, we deliver expert accounting, tax, and advisory solutions tailored to your unique needs.</p>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8 px-4 xl:px-10'>
            {services.map(({label, description, img}, index) => 
                index >= 2 && 
                <ServiceCard
                    key={label}
                    img={img}
                    label={label}
                    href='/services'
                />
            )}
        </div>
        <div className='flex flex-col items-center'>
            <Button label='View All Services' href='/services' />
        </div>
    </section>
  )
}
