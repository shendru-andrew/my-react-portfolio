import React from 'react'
import PHP from '../../assets/php.svg'
import NodeJS from '../../assets/nodejs.svg'
import Laravel from '../../assets/laravel.svg'
import Laragon from '../../assets/laragon.svg'
import MySQL from '../../assets/mysql.svg'

export default function Backend() {

    const backend = [
        <>
            <div className='h-3/5 flex items-center'>
                <img src={PHP} alt="Logo of PHP" className='w-10 mx-auto' />
            </div>
            <div className='flex items-end justify-center h-2/5'>
                <p>PHP</p>
            </div>
        </>,
        <>
            <div className='h-3/5 flex items-center'>
                <img src={NodeJS} alt="Logo of NodeJS" className='w-10 mx-auto' />
            </div>
            <div className='flex items-end justify-center h-2/5'>
                <p>NodeJS</p>
            </div>
        </>,
        <>
            <div className='h-3/5 flex items-center'>
                <img src={Laravel} alt="Logo of Laravel" className='w-10 mx-auto' />
            </div>
            <div className='flex items-end justify-center h-2/5'>
                <p>Laravel</p>
            </div>
        </>,
        <>
            <div className='h-3/5 flex items-center'>
                <img src={Laragon} alt="Logo of Laragon" className='w-10 mx-auto' />
            </div>
            <div className='flex items-end justify-center h-2/5'>
                <p>Laragon</p>
            </div>
        </>,
        <>
            <div className='h-3/5 flex items-center'>
                <img src={MySQL} alt="Logo of MySQL" className='w-16 mx-auto' />
            </div>
            <div className='flex items-end justify-center h-2/5'>
                <p>MySQL</p>
            </div>
        </>,
    ]

  return (
    <div className='flex gap-10 justify-center items-center'>
        {backend.map((x,i) => <figure className='text-center h-20' key={i}>{x}</figure>)}
    </div>
  )
}
