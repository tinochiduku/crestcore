import Image from 'next/image'
import React from 'react'
import Button from './button'

export default function ServiceCard({img, label, href}: {img: string, label: string, href: string}) {
  return (
    <div className='relative w-full h-full overflow-hidden rounded-xl xl:rounded-4xl aspect-[14/16] group'>
        <Image 
            src={img} 
            alt={label} 
            width={0} 
            height={0}
            sizes='100svw' 
            className='absolute object-cover w-full h-full group-hover:scale-110 transition-all duration-500 ease-in-out'
        />
        <div className='absolute bg-gradient-to-t from-[var(--primary)] to-transparent w-full h-full' />
        <div className='relative flex items-end w-full h-full text-white p-4'>
            <div className='space-y-3 w-full'>
                <h4 className='text-3xl font-semibold text-center'>{label}</h4>
                <div className='flex lg:h-0 group-hover:h-16 flex-col sm:flex-row items-center justify-around gap-4 overflow-hidden transition-all duration-500 ease-in-out'>
                    <Button label='Read More' href={href} />
                </div>
            </div>
        </div>
    </div>
  )
}
