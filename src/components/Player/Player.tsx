import React, { useEffect, useState } from 'react'

type BoxProps = {
  children?: React.ReactNode;
  songPlaying: number;
  setSongPlaying: React.Dispatch<React.SetStateAction<number>>;
  isPlaying: boolean
}

export default function Player({children, isPlaying, songPlaying, setSongPlaying}: BoxProps) {
  const [isMuted, setIsMuted] = useState(false)
  useEffect(()=>{
    const newInterval = setInterval(()=>{
      if(isPlaying)
      setSongPlaying((p)=>(p < 100? p+1 : 0))
      
    },1000)
    return () => clearInterval(newInterval)
  },[isPlaying])
  
  return (
    <div className='flex justify-start items-center col-span-5'  >
      <div onClick={()=>setIsMuted(s => !s)}>
        {isMuted?
        <svg   className=' ml-20 mr-12 filter fill-white hover:fill-primary  hover:drop-shadow-glow transition cursor-pointer'  width="32px" height="32px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g data-name="3. Silence" id="_3._Silence"><path d="M21,8v8a5,5,0,0,0,0-8Z"/><path d="M17.43,23.82A.988.988,0,0,0,18,24a1.039,1.039,0,0,0,.46-.11A1.02,1.02,0,0,0,19,23V9.24L9.78,18.46Z"/><path d="M23.707.293a1,1,0,0,0-1.414,0L19,3.586V1a.761.761,0,0,0-.03-.21A.987.987,0,0,0,17.43.18L9,6.08v7.506l-2,2V7H3A2.006,2.006,0,0,0,1,9v6a2.006,2.006,0,0,0,2,2H5.586L.293,22.293a1,1,0,1,0,1.414,1.414l22-22A1,1,0,0,0,23.707.293Z"/></g></svg> 
        :<svg id="Icons" className=' ml-20 mr-12 filter fill-white hover:fill-primary  hover:drop-shadow-glow transition cursor-pointer'  width="32px" height="32px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3,8H4A0,0,0,0,1,4,8v8a0,0,0,0,1,0,0H3a2,2,0,0,1-2-2V10A2,2,0,0,1,3,8Z"/><path d="M14.8,22.6,6,16V8l8.8-6.6A2,2,0,0,1,18,3V21A2,2,0,0,1,14.8,22.6Z"/><path  d="M20,9h0a3,3,0,0,1,3,3v0a3,3,0,0,1-3,3h0a0,0,0,0,1,0,0V9A0,0,0,0,1,20,9Z"/></svg>
      }
      </div>
      <div className=' mx-20 flex justify-evenly items-center'>
        <img className=' shadow-[0_0px_50px_-20px_rgba(255,0,0,100)] hover:brightness-100 brightness-90 hover:shadow-[0_0px_50px_-15px_rgba(255,0,0,200)] mr-5 w-20 rounded-2xl hover:scale-110 transition ' src='https://cdn.flipsnack.com/template/4466/small/page_1?v=1626854126'></img>
        <div>
        <h1 className=' text-xl font-bold'>Title</h1>
        <h2 className=' text-secondary'>description</h2>
        </div>
      </div>

      <div className=' flex justify-between items-center  w-7/12 '>
        <div>0{Math.floor(songPlaying/60)}:{songPlaying%60 < 10 ? `0${songPlaying%60}` :songPlaying%60}</div>
        <div className=' bg-secondary w-10/12 h-2 rounded-full'>
          <div className={` ease-linear transition-width duration-1000 bg-primary drop-shadow-glow h-2 rounded-full`}  style={{width: `${songPlaying}%`}}></div>
        </div>
        <div>01:30</div>
      </div>
    </div>
  )
}