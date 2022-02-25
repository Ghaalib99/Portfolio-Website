import React from 'react'
import ecommerce from './ecommerce.jpg'
import farm from './farm.jpg'
import profile from './profile.jpg'

const Projects = () => {
  return (
    <div id='projects' className='bg-blue-50 mb-3 p-7 body-content' >
        <h1 className='text-3xl mb-4 py-2 font-bold border-b-4 border-sky-600 block-p'>Projects</h1>
        <div className='flex justify-bewteen block-p' data-aos="fade-up" data-aos-delay="50"  data-aos-duration="2000"   data-aos-easing="ease-in-out-cubic">
            <div className='flex-1 w-20 mr-3 block'>
              <div className='img-container'>
                <img src={ecommerce} alt="" />
              </div>
              <div className='project-overlay'>kaksdsokaks;lkak</div>
            </div>

            <div className='flex-1 w-20 mr-3 block'>
              <div className='img-container'>
                <img src={farm} alt="" />
              </div>
              <div className='project-overlay'>wrakl;las';</div>
            </div>
            
            <div className="flex-1 w-20  block">
              <img src={profile} alt="" />
              <div className='project-overlay'>lkpasll;sl</div>
            </div>
              
        </div>
    </div>
  )
}

export default Projects