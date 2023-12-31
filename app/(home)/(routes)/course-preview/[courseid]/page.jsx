"use client"
import { getCourseById } from '../../../../_services'
import React, { useEffect, useState } from 'react'
import VideoPlayer from './_components/VideoPlayer';

function CoursePreview({params}) {
  const [courseDetail,setCourseDetails]=useState([]);

  useEffect(()=>{
   
    params.courseId?getCourse(params.courseId):null;
  },[])

  const getCourse=()=>{
    getCourseById(params.courseId).then(resp=>{
      console.log(resp);
      setCourseDetails(resp.courseList);
    })
  }
  return courseDetail?.name&&(
    <div>
      <div className='grid grid-cols-1 md:grid-cols-3'>
        <div className='col-span-2'>
         <VideoPlayer videoUrl={courseDetail?.chapter[0]?.video.Url}/>  
         <courseDetails courseDetail={courseDetail}/>
        </div>
        <div>
          Enroll Option
        </div>
      </div>
    </div>
  )
}

export default CoursePreview