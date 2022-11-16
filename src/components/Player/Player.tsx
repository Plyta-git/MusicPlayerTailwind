import React from 'react'

type BoxProps = {
  children?: React.ReactNode;
}

export default function Player({children}: BoxProps) {
  return (
    <div className='flex justify-start items-center col-span-5'  >
      <svg id="Icons" className=' ml-20 mr-12 filter fill-white hover:fill-primary  hover:drop-shadow-glow transition cursor-pointer'  width="32px" height="32px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3,8H4A0,0,0,0,1,4,8v8a0,0,0,0,1,0,0H3a2,2,0,0,1-2-2V10A2,2,0,0,1,3,8Z"/><path d="M14.8,22.6,6,16V8l8.8-6.6A2,2,0,0,1,18,3V21A2,2,0,0,1,14.8,22.6Z"/><path  d="M20,9h0a3,3,0,0,1,3,3v0a3,3,0,0,1-3,3h0a0,0,0,0,1,0,0V9A0,0,0,0,1,20,9Z"/></svg>
      <div className=' mx-20 flex justify-evenly items-center'>
        <img className=' mr-5 w-20 rounded-2xl' src='https://cdn.flipsnack.com/template/4466/small/page_1?v=1626854126'></img>
        <div>
        <h1 className=' text-xl font-bold'>Title</h1>
        <h2 className=' text-secondary'>description</h2>
        </div>
      </div>

      <div className=' flex justify-between items-center  w-7/12 '>
        <div>00:21</div>
        <div className=' bg-secondary w-10/12 h-2 rounded-full'>
          <div className=' bg-primary drop-shadow-glow w-1/12 h-2 rounded-full'></div>
        </div>
        <div>03:07</div>
      </div>
    </div>
  )
}