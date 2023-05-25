import React from 'react'

export default function HeroSection() {
  return (
    <section className='powder hero_section d-flex justify-content-center align-items-center'>
        <article className='text-start w-75 mb-5'>
            <h1 className='roboto heading_large text-black'><span className='fst-italic'>A</span>NDREW <span className='fst-italic'>E</span>ARL</h1>
            <h2 className='raleway text-black'><span className='fst-italic'>f</span>ull stack web developer</h2>
            <div className='d-flex align-items-center gap-4 mt-5 raleway'>
                <button className='resume_btn text_powder fs-5 hero_text_spacing'>
                    <span className='fst-italic'>P</span>rojects
                </button>
                <a href="" className='text-black fs-5 hero_text_spacing'>
                    Resume
                </a>
            </div>
        </article>
    </section>
  )
}
