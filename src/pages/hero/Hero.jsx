import React from 'react'
import HeroBG from '../../assets/herobg.jpg'
import Laptop from '../../assets/laptop.png'

export default function Hero() {
  return (
    <section id='Hero' className='fixed w-full'>
        <div className='flex justify-center items-center h-full w-full'>
            <div className='text-center pb-9'> 
                <div className='relative'>
                  <h1 className='text-3xl mb-5 absolute'
                  style={{ top: '0px' }}
                  >{'print("Hello there!")'}</h1>
                  <img src={Laptop} alt="" className='w-96 h-72' />
                </div>
                <h1 className='text-9xl mb-5'>Welcome to my world</h1>
                <h1 className='text-5xl'>This is where you will see my passion in programming</h1>
                <a href="#Projects">Check my works</a>
            </div>
        </div>
    </section>
  )
}
