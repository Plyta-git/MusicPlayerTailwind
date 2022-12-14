import React from 'react'

type BoxProps = {
  children?: React.ReactNode;
  setisPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  isPlaying: boolean
}

function ControlButtons({setisPlaying,isPlaying}: BoxProps) {
  return (
    <div className=' border-r-2 border-secondary col-span-1 flex justify-evenly items-center'>
    <svg className=' filter hover:fill-primary  hover:drop-shadow-glow transition cursor-pointer' width="32px" height="32px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#fff"> <title>Back</title>
          <path d="M4 4a.5.5 0 0 1 1 0v3.248l6.267-3.636c.54-.313 1.232.066 1.232.696v7.384c0 .63-.692 1.01-1.232.697L5 8.753V12a.5.5 0 0 1-1 0V4z"/>
    </svg>
    <div onClick={() =>setisPlaying(s => !s)}>
      {isPlaying?
      <svg  className='filter hover:fill-primary  hover:drop-shadow-glow transition cursor-pointer'  width="32px" height="32px" fill='#fff'viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M272 63.1l-32 0c-26.51 0-48 21.49-48 47.1v288c0 26.51 21.49 48 48 48L272 448c26.51 0 48-21.49 48-48v-288C320 85.49 298.5 63.1 272 63.1zM80 63.1l-32 0c-26.51 0-48 21.49-48 48v288C0 426.5 21.49 448 48 448l32 0c26.51 0 48-21.49 48-48v-288C128 85.49 106.5 63.1 80 63.1z"/></svg>
      :<svg  className='filter hover:fill-primary  hover:drop-shadow-glow transition cursor-pointer'  width="32px" height="32px" viewBox="0 0 512 512" fill='#fff' xmlns="http://www.w3.org/2000/svg"><title>Play</title><path d="M133,440a35.37,35.37,0,0,1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37,7.46-27.53,19.46-34.33a35.13,35.13,0,0,1,35.77.45L399.12,225.48a36,36,0,0,1,0,61L151.23,434.88A35.5,35.5,0,0,1,133,440Z"/></svg>
    }
    </div>
    <svg className=' filter hover:fill-primary  hover:drop-shadow-glow transition cursor-pointer' transform="scale(-1,1)" width="32px"  height="32px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#fff"> <title>Back</title>
          <path d="M4 4a.5.5 0 0 1 1 0v3.248l6.267-3.636c.54-.313 1.232.066 1.232.696v7.384c0 .63-.692 1.01-1.232.697L5 8.753V12a.5.5 0 0 1-1 0V4z"/>
          </svg>
    </div>
  )
}

export default ControlButtons