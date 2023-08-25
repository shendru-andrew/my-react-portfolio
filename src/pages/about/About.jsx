import React from 'react'
import Myimage from '../../assets/myimage.jpg'

import Frontend from './frontend'
import Backend from './Backend'
import Gamedev from './Gamedev'


export default function About() {

  return (
    <section id='About' className='_pages  bg-[#000000] text-[#FFF]'>
        <div className='grid grid-cols-2 h-full'>
            <div className=''>
                <div className='pl-20'>
                    <p className='mt-28 mb-10 text-2xl text-[#6919FF] font-bold'>{'< A b o u t / >'}</p>
                    <div className='text-3xl mb-10'>
                        <p className='font-bold'>//A Web Developer</p>
                        <p className='font-bold'>//A Game Developer</p>
                    </div>
                    <p className='pr-20'><b>Started as a Game Developer at age 13</b>.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aut, voluptatem accusantium incidunt natus porro ratione in hic praesentium distinctio temporibus itaque tempora animi illo. Eius, nisi quibusdam obcaecati a distinctio ea ipsa laborum nemo tenetur similique, perferendis explicabo suscipit ducimus? Sed corporis tempore molestias, nulla repellendus dolores quo. Eaque?</p>
                </div>
                
                <p className='text-2xl text-center mt-10 mb-5 text-[#6919FF] font-bold'>{'< S k i l l s / >'}</p>
                <div>
                    <p className='text-center mb-3'><b>Front-End Web Development</b></p>
                    {/* <div className='flex gap-10 justify-center items-center'>
                        {frontend.map((x,i) => <figure className='text-center h-20' key={i}>{x}</figure>)}
                    </div> */}
                    <Frontend />

                    <p className='text-center my-3'><b>Back-End Web Development</b></p>
                    {/* <div className='flex gap-10 justify-center items-center'>
                        {backend.map((x,i) => <figure className='text-center h-20' key={i}>{x}</figure>)}
                    </div> */}
                    <Backend />

                    <p className='text-center my-3'><b>Game Development</b></p>
                    <Gamedev />

                </div>
            </div>
            <figure className='h-full'>
                <img className='object-cover w-full h-screen' src={Myimage} alt="" />
            </figure>
        </div>
    </section>
  )
}
