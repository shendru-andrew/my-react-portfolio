import {React, useState, useEffect} from 'react'
import './Navbar.css'

export default function Navbar() {

    const [navBlur, setNavBlur] = useState(false)
    const [page, setPage] = useState('')

    function scrolling() {
        if (window.scrollY < 900) {
            setPage('page1')
            setNavBlur(false)
        } else if (window.scrollY >= 900 && window.scrollY < 1832){
            setPage('page2')
            setNavBlur(true)
        } else if ((window.scrollY >= 1832 && window.scrollY < 2796)) {
            setPage('page3')
            setNavBlur(true)
        }
        return
    }

    useEffect(() => {
        window.addEventListener('scroll', scrolling, { passive: true })
        return () => {
            window.removeEventListener('scroll', scrolling)
        }
    },[])


    // window.addEventListener('scroll', scrolling)

  return (
    <header className={`fixed w-full top-0 z-50 text-[#FFFFF] _nav${navBlur}`}>
        <div className='absolute w-full h-full pointer-events-none'>
            <div className='grid grid-cols-2 h-full'>
                <div className={`h-full navBorder1_${page}`}>

                </div>
                <div className={`h-full navBorder2_${page}`}>

                </div>
            </div>
        </div>
        <section className=''>
            {/* <div className='w-50 h-full'>

            </div>
            <div className='w-50'>

            </div> */}

            <div className='flex mx-auto w-4/5 py-2'>
                <div className='w-full flex justify-start items-center'>
                    <a href='#MockPage'><h1 className={`_raleway text-3xl duration-500 navText_${page}`}><span><i>A</i></span>E</h1></a>
                </div>
                <div className='flex justify-center items-center  text-sm w-full'>
                    <a href="#About" className='w-full'><h1 className={`_raleway duration-500 navText_${page} text-end pr-2`}>{'<About/>'}</h1></a>
                    <a href="#Projects" className='w-full'><h1 className={`_raleway duration-500 text-start pl-2 ${page === 'page3' && `navText_${page}`}`}>
                        {'<Projects/>'}
                    </h1></a>
                </div>
                <div className='w-full flex justify-end items-center'>
                    <a href="" className={`px-5 py-3 border-2 border-[#000000] duration-500 _raleway text-sm ${page === 'page3' && `navBtn_${page}`}`}><h1>Contact Me</h1></a>
                </div>
            </div>
        </section>
    </header>
  )
}
