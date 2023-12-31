import { Book } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function CourseList({courses}) {
  return (
    <div className='mt-5 grid grid-cols-1
    sm:grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
    gap-5'>
        {courses.map((course,index)=>(
            <Link href={'/course-preview/'+course.id}>
            <div key={index}

            className='border round-lg p-5 cursor-pointer hover:border-orange-300'>
                <Image src={course.banner.url} 
                alt={course.name}
                width={1000}
                height={500}
                className='rounded-lg'
                />
                <div className='mt-2'>
                    <h2 className='text-[18px] md:text-[16px] font-bold'>{course.name}</h2>
                    <h2 className='text-orange-100 text-[13px]'>{course.authour}</h2>
                    <div className='flex items-center gap-2 mt-2'>
                        <Book className='h-6 w-6 text-orange-600 rounded-full bg-orange-100 p-1'/>
                        <h2 className='text[12px] text-orange-300'>{course.totalChapter} Chapter</h2>
                    </div>
                    <h2 className='mt-2 text-[14px]'>{course.free?'Free':'Paid'}</h2>
                </div>
            </div>
            </Link>
        ))}
    </div>
  )
}

export default CourseList 