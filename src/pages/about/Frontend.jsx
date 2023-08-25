import React from 'react'
import HTML5 from '../../assets/html.svg'
import CSS3 from '../../assets/css.svg'
import JS from '../../assets/javascript.svg'
import Bootstrap from '../../assets/bootstrap.svg'
import Tailwind from '../../assets/tailwind.svg'
import ReactJS from '../../assets/react.svg'

export default function Frontend() {

    const frontend = [
        <>
            <div className='h-3/5 flex items-center'>
                <img src={HTML5} alt="Logo of HTML5" className='w-10 mx-auto' />
            </div>
            <div className='flex items-end justify-center h-2/5'>
                <p>HTML</p>
            </div>
        </>,
        <>
            <div className='h-3/5 flex items-center'>
                <img src={CSS3} alt="Logo of CSS3" className='w-10 mx-auto' />
            </div>
            <div className='flex items-end justify-center h-2/5'>
                <p>CSS</p>
            </div>
        </>,
        <>
            <div className='h-3/5 pt-2 flex items-center'>
                <img src={JS} alt="Logo of JavaScript" className='w-10 mx-auto' />
            </div>
            <div className='flex items-end justify-center h-2/5'>
                <p>JavaScript</p>
            </div>
        </>,
        <>
            <div className='h-3/5 pt-1 flex items-center'>
                <img src={Bootstrap} alt="Logo of Bootstrap" className='w-12 mx-auto' />
            </div>
            <div className='flex items-end justify-center h-2/5'>
                <p>Bootstrap</p>
            </div>
        </>,
        <>
            <div className='h-3/5 flex items-center'>
                <img src={Tailwind} alt="Logo of Tailwind" className='w-12 mx-auto' />
            </div>
            <div className='flex items-end justify-center h-2/5'>
                <p>Tailwind</p>
            </div>
        </>,
        <>
            <div className='h-3/5 flex items-center'>
                <img src={ReactJS} alt="Logo of React" className='w-10 mx-auto' />
            </div>
            <div className='flex items-end justify-center h-2/5'>
                <p>React</p>
            </div>
        </>,
    ]

  return (
    <div className='flex gap-10 justify-center items-center'>
        {frontend.map((x,i) => <figure className='text-center h-20' key={i}>{x}</figure>)}
    </div>
  )
}
