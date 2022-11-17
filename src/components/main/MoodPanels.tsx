import React from 'react'

const Moods = ["relax", "rap", "classic", "focus"]

export default function MoodPanels() {
  return (
    <div className=' grid h-72 grid-cols-2 gap-4 '>
        {Moods.map((e)=>(
            <div className=' hover:scale-105 rounded-2xl hover:brightness-125 bg-b_front flex items-center justify-center transition'>{e}</div>
        ))}

    </div>
  )
}
