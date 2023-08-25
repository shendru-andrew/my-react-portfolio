import React from 'react'
import Lua from '../../assets/lua.svg'
import Roblox from '../../assets/roblox.svg'
import CSharp from '../../assets/csharp.svg'
import Unity from '../../assets/unity.svg'
import Godot from '../../assets/godot.svg'

export default function Gamedev() {

    const gamedev = [
        <>
            <div className='h-3/5 flex items-center'>
                <img src={Lua} alt="Logo of Lua" className='w-10 mx-auto' />
            </div>
            <div className='flex items-end justify-center h-2/5'>
                <p>Lua</p>
            </div>
        </>,
        <>
            <div className='h-3/5 flex items-center'>
                <img src={Roblox} alt="Logo of Roblox" className='w-10 mx-auto' />
            </div>
            <div className='flex items-end justify-center h-2/5'>
                <p>Roblox</p>
            </div>
        </>,
        <>
            <div className='h-3/5 flex items-center'>
                <img src={CSharp} alt="Logo of C#" className='w-10 mx-auto' />
            </div>
            <div className='flex items-end justify-center h-2/5'>
                <p>C#</p>
            </div>
        </>,
        <>
            <div className='h-3/5 flex items-center'>
                <img src={Unity} alt="Logo of Unity" className='w-10 mx-auto bg-white' />
            </div>
            <div className='flex items-end justify-center h-2/5'>
                <p>Unity</p>
            </div>
        </>,
        <>
            <div className='h-3/5 flex items-center'>
                <img src={Godot} alt="Logo of Godot" className='w-10 mx-auto' />
            </div>
            <div className='flex items-end justify-center h-2/5'>
                <p>Godot</p>
            </div>
        </>,
    ]

  return (
    <div className='flex gap-10 justify-center items-center'>
        {gamedev.map((x,i) => <figure className='text-center h-20' key={i}>{x}</figure>)}
    </div>
  )
}
