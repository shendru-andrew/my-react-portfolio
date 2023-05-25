import React, {useState} from 'react'
import MyImage from '../assets/myimage.jpg'
import DetailedAbout from '../components/DetailedAbout'
import { BsArrowLeftCircle } from 'react-icons/Bs'

export default function About() {

  const [aboutEvent, setAboutEvent] = useState("")

  return (
    <section className='bg-dark'>
      <div className='container py-5'>
      <h2 className='text-white roboto mb-5'>{'<'}<span className='fst-italic'>A</span>{"bout me />"}</h2>
        <div className="row d-flex align-items-center gap-5">
          <div className="col-12 text-center text-lg-start col-lg-5 text-white raleway about-text">
            {aboutEvent === "" && 
            <>
              <div className='text-center pointer py-3 about-btn about-btn-border' onClick={() => {setAboutEvent("Detailed")}}>
                Detailed Version
              </div>
              <div className='text-center pointer py-3 about-btn' onClick={() => {setAboutEvent("Summary")}}>
                Summarized Version
              </div>
              <div className='text-center pointer py-3 about-btn about-btn-border' onClick={() => {setAboutEvent("SkillSet")}}>
                My Skill Sets
              </div>
            </>
            }
            {aboutEvent === "Detailed" &&
            <>
              <div className='d-flex align-items-center mb-4 gap-2'>
                <BsArrowLeftCircle onClick={() => {setAboutEvent("")}} className='fs-1 pointer'/>
                <h3 className='m-0'>Return</h3>
              </div>
              <DetailedAbout />
            </>
            }
          </div>
          <div className="col-12 col-lg-6 text-white text-center">
            <figure>
              <img id='my-image' className='img-fluid' src={MyImage} alt="" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
