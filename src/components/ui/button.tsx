import Link from 'next/link'
import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

export default function Button({label, href}: {label: string, href: string}) {
  return (
    <Link className='flex px-2 py-2 bg-[var(--secondary)] text-white rounded-md' href={href}>
        <div className='flex items-center gap-2'>
            <span>{label}</span>
            <span className='p-1.5 bg-white rounded-md'>
                <MdArrowOutward className='size-5 text-[var(--accent)]' />
            </span>
        </div>
    </Link>
  )
}
