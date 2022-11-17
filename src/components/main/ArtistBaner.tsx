import React from 'react'
import { ArtistList } from '../../constants/ArtistList'

export default function ArtistBaner() {
  return (
    <>
    {ArtistList.map(({artist, title, id, color, cover})=>{
      const getStyle:any = {
        'boxShadow': `0px 5px 15px ${color}77`
      }
        return(
            <div key={id}  className=' hover:brightness-125 brightness-90 transition hover:scale-110 w-48 pr-40 m-8 mb-3'>
                <div>
                    <img style={getStyle} className= {'min-w-fit	 h-44 snap-center  rounded-2xl'} src={cover}/>
                    <div className='mt-4 w-48'>
                    <h1 className=' text-white'>{artist}</h1>
                    <h1  className=' text-secondary'>{title}</h1>
                    </div>
                </div>
            </div>
            )
    })}
    </>
  )
}
