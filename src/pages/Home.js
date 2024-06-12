import React from 'react'
import {Link} from 'react-router-dom'
import {FaArrowRight} from 'react-icons/fa'
import HighlightText from '../components/core/Homepage/HighlightText'
import CTAButton from '../components/core/Homepage/Button'
import Banner from '../assets/Images/banner.mp4'
import CodeBlocks from '../components/core/Homepage/CodeBlocks'
import LearningLanguageSection from  '../components/core/Homepage/LearningLanguageSection'
import TimelineSection from '../components/core/Homepage/TimelineSection'
import InstructorSection from '../components/core/Homepage/InstructorSection'
 import Footer from '../components/common/Footer'
import ExploreMore from '../components/core/Homepage/ExploreMore'

const Home = () => {
  return (
    <div>
{/* {section1} */}


<div className='relative mx-auto flex flex-col w-11/12 items-center
justify-between text-white '>

    <Link to={'/signup'}>

        <div className=' group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200
        transition-all duration-200 hover:scale-95 w-fit drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] hover:drop-shadow-none'>
            <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px]
            transition-all duration-200 group-hover:bg-richblack-900  '>
                <p>Become an Instructor</p>
                <FaArrowRight/>
            </div>
        </div>
    </Link>


    <div className='text-center text-4xl font-semibold mt-7'>
        Empower Your Future With
        <HighlightText text={'Coding Skills'} />
    </div>


   {/* Sub Heading */}
   <div className="mt-4 w-[90%] text-center text-lg font-bold text-richblack-300">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>


<div className='flex flex-row gap-7 mt-8'>

<CTAButton active={true} linkto={'/signup'}>Learn More </CTAButton>

<CTAButton  active={false} linkto={'/login'}>Book a Demo</CTAButton>
</div>

<div className='shadow-blue-200  mx-3 my-12  w-[70%] relative '>
<div className='grad2 -top-10 w-[800px]'></div>
    <video  muted loop autoPlay>
         <source src={Banner} type='video/mp4'/>
    </video>
</div>


{/* {code section 1} */}
<div className=''>

<CodeBlocks position={'lg:flex-row'} heading={<div className='text-4xl font-semibold'>
Unlock Your
<HighlightText text={'Coading potential'}/>
with our online Course
</div>}
subheading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}
ctabtn1={
    {
        btnText:"try it yourself",
        link:'/signup',
        active:true,
    }
}
ctabtn2={
    {
        btnText:"learn more",
        link:'/login',
        active:false,
    }
}
codeblock={`<<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n</nav>`}
codeColor={"text-yellow-25"}
backgroundGradient={<div className="codeblock1 absolute"></div>}
/>

</div>


{/* {code section2} */}

<div className=''>

<CodeBlocks position={'lg:flex-row-reverse'} heading={<div className='text-4xl font-semibold'>
Start
<HighlightText text={'Coading in seconds'}/>

</div>}
subheading={"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."}
ctabtn1={
    {
        btnText:"Continue Lesson",
        link:'/signup',
        active:true,
    }
}
ctabtn2={
    {
        btnText:"learn more",
        link:'/login',
        active:false,
    }
}
codeblock={`<import React from 'react';\nimport CTAButton from './Button';\nimport { TypeAnimation } from 'react-type-animation';\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="thre`}
codeColor={"white"}
backgroundGradient={<div className="codeblock2 absolute"></div>}
/>
</div>
<ExploreMore/>

</div>




{/* {section2} */}


<div className='bg-pure-greys-5 text-richblack-700'>

<div className='homepage_bg h-[310px]'>

    <div className='w-11/12 max-w-maxContent flex flex-col items-center gap-5 mx-auto justify-between
    '>
        <div className='h-[150px]'></div>
<div className='flex flex-row text-white gap-7'>
<CTAButton active={true} linkto={"/signup"}>
    <div className='flex items-center gap-3'>
        Explore Full Catlog
    <FaArrowRight/>
    </div>
</CTAButton>
<CTAButton  active={false} linkto={"/signup"}>
    <div>
Learn More
    </div>
</CTAButton>
</div>





    </div>

</div>

<div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between
gap-7
'>
<div className='flex flex-row gap-5 mt-[150px] mb-10'>
<div className='text-4xl font-semibold w-[45%] '>
Get the skills you need for a
<HighlightText text={'job that is in demand.'} />
</div>

<div className='flex flex-col gap-10 w-[40%] items-start'>
<div className='text-[16px]'>
The modern StudyNotion is the dictates its own terms. Today, to be 
a competitive specialist requires more than professional skills.
</div>
<CTAButton active={true} linkto={'/signup'}>
    <div>
        Learn More
    </div>
</CTAButton>
</div>

</div>


<TimelineSection/>


<LearningLanguageSection/>


</div>




</div>





{/* {section3} */}
<div className='w-11/12 mx-auto max-w-maxContent flex flex-col items-center
justify-between gap-8 first-letter bg-richblack-900 text-white'>

<InstructorSection/>

<h2 className='text-4xl text-center'>Reviews from other learners</h2>


</div>

{/* {section4} */}

{/* {footer} */}
<Footer/>

    </div>
  )
}

export default Home
