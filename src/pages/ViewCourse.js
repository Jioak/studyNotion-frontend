import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useParams } from 'react-router-dom';
import { getFullDetailsOfCourse } from '../services/operations/courseDetailsAPI';
import CourseReviewModal from "../components/core/ViewCourse/CourseReviewModal"
import { setCompletedLectures, setCourseSectionData, setEntireCourseData, setTotalNoOfLectures } from '../slices/viewCourseSlice';
import VideoDetailsSlider from '../components/core/ViewCourse/VideoDetailsSlider ';
export default function ViewCourse() {

    const [reviewModal,setReviewModal]=useState(false);
    const {courseId} =useParams();
    const {token} =useSelector((state)=>state.auth);
    const dispatch=useDispatch();


    
  useEffect(() => {
    ;(async () => {
      const courseData = await getFullDetailsOfCourse(courseId, token)
      // console.log("Course Data here... ", courseData.courseDetails)
      dispatch(setCourseSectionData(courseData.courseDetails.courseContent))
      dispatch(setEntireCourseData(courseData.courseDetails))
      dispatch(setCompletedLectures(courseData.completedVideos))
      let lectures = 0
      courseData?.courseDetails?.courseContent?.forEach((sec) => {
        lectures += sec.subSection.length
      })
      dispatch(setTotalNoOfLectures(lectures))
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  return (

    <>

    <div className="relative flex min-h-[calc(100vh-3.5rem)]">
<VideoDetailsSlider setReviewModal={setReviewModal}/>
<div  className="h-[calc(100vh-3.5rem)] flex-1 overflow-auto" >
<div className="mx-6">
    <Outlet/>
</div>
</div>
    </div>

    {reviewModal && <CourseReviewModal setReviewModal={setReviewModal}/>}
    </>
  )
}
