import React from 'react'
import Button from './button'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa6'

export default function Breadcrumb({page}) {
  return (
    <section className='bg-gray-100 w-full rounded-lg xl:rounded-4xl max mt-10'>
        <div className='flex w-full h-full items-center gap-5 p-4 py-10 xl:p-10 min-h-[20rem]'>
            <div className='flex flex-col items-center gap-4 w-full'>
                <h1 className='text-center md:text-left text-3xl lg:text-4xl font-semibold'>{page}</h1>
                <div className='flex flex-col sm:flex-row items-center gap-4'>
                    <span className='flex px-2 py-2 bg-[var(--secondary)] text-white rounded-md'>
                        <div className='flex items-center gap-2'>
                            <span className='font-semibold'>Home</span> /
                            <span className='font-semibold'>{page}</span>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    </section>
  )
}
