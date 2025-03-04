import React from 'react'
import ServiceCard from '../ui/service-card'
import Button from '../ui/button'

export default function Services() {
  return (
    <section className='bg-gray-50 rounded-lg xl:rounded-4xl max mt-10 py-10'>
        <div className='space-y-10 px-4 xl:px-10'>
            <div className='flex flex-col lg:items-center lg:flex-row gap-4'>
                <div className='lg:w-1/2 space-y-2'>
                    <span className='text-sm font-semibold'>OUR SERVICES</span>
                    <h4 className='text-3xl lg:text-4xl font-semibold'>Your business goals are our priority</h4>
                </div>
                <div className='lg:w-1/2'>
                    <p>
                        We are committed to meeting client needs and creating relevant solutions for your business pains. Our Firm places   remarkable emphasis on proffessional standards, confidently and the level of qualifications and experienced personnel.
                    </p>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8 px-4 xl:px-10'>
            <ServiceCard
                img='/assets/counter-img-1.jpg'
                label='TaxPlanning And Preparation'
                href='#'
            />
        </div>
        <div className='flex flex-col items-center'>
            <Button label='View All Services' href='/services' />
        </div>
    </section>
  )
}
