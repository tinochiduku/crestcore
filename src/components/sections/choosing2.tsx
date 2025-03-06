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
                    <span className='text-sm font-semibold'>ABOUT US</span>
                    <h1 className='md:text-left text-3xl lg:text-4xl font-semibold'>Overview of our firm</h1>
                </div>
                <p className='md:text-left'>
                    Crestcore consultancy and advisory is a boutique tax accounting and advisory services firm. The partners are registered with the public accountants and auditors board (paab), institute of certified tax accountants zimbabwe (ictaz), and are members of institute of directors of zimbabwe (iodz) providing accounting,audit, tax advisory, tax planning, business consulting services, company formations and registrations, Forensic accounting and audit.
                </p>
                <p className='md:text-left'>
                We are committed to meeting our client's needs creating relevant solutions for your business pains. Our firm places remarkable emphasis on professional standards, confidentiality and the level of qualifications and experienced personnel. Drawing upon the skill and competence of our people and commitment of our stuff, we provide effective, innovative yet practical business solutions to your clients.
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
