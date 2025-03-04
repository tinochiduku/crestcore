'use client'
import React from 'react'
import ServiceCard from '../ui/service-card'
import Button from '../ui/button'

export default function Contact() {
  return (
    <section className='bg-gray-50 rounded-lg xl:rounded-4xl max mt-10 py-10'>
        <div className='space-y-10 px-4 xl:px-10'>
            <div className='flex flex-col lg:items-center lg:flex-row gap-4'>
                <div className='lg:w-1/2 space-y-2'>
                    <span className='text-sm font-semibold'>GET IN TOUCH</span>
                    <h4 className='text-3xl lg:text-4xl font-semibold'>
                    Need help? let's get in touch
                    </h4>
                </div>
                <div className='lg:w-1/2'>
                    <p>
                        We are committed to meeting client needs and creating relevant solutions for your business pains. Our Firm places   remarkable emphasis on proffessional standards, confidently and the level of qualifications and experienced personnel.
                    </p>
                </div>
            </div>
        </div>
        <form className='grid grid-cols-1 md:grid-cols-2 gap-4 py-8 px-4 xl:px-10'>
            <div>
                <label htmlFor='firstName' className='block text-sm font-medium text-gray-700'>First Name</label>
                <input type='text' id='firstName' name='firstName' className='mt-1 px-4 py-2 bg-white block w-full rounded-lg border-gray-300 sm:text-sm' />
            </div>
            <div>
                <label htmlFor='lastName' className='block text-sm font-medium text-gray-700'>Last Name</label>
                <input type='text' id='lastName' name='lastName' className='mt-1 px-4 py-2 bg-white block w-full rounded-lg border-gray-300 sm:text-sm' />
            </div>
            <div>
                <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email Address</label>
                <input type='email' id='email' name='email' className='mt-1 px-4 py-2 bg-white block w-full rounded-lg border-gray-300 sm:text-sm' />
            </div>
            <div>
                <label htmlFor='phone' className='block text-sm font-medium text-gray-700'>Phone Number</label>
                <input type='tel' id='phone' name='phone' className='mt-1 px-4 py-2 bg-white block w-full rounded-lg border-gray-300 sm:text-sm' />
            </div>
            <div className='md:col-span-2'>
                <label htmlFor='message' className='block text-sm font-medium text-gray-700'>Write a Message</label>
                <textarea id='message' name='message' rows={4} className='mt-1 px-4 py-2 bg-white block w-full rounded-lg border-gray-300 sm:text-sm'></textarea>
            </div>
        </form>
        <div className='flex flex-col items-center'>
            <Button label='Submit Now' href='/services' />
        </div>
    </section>
  )
}
