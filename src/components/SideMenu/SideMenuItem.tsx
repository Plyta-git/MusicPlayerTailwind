import React from 'react'


type BoxProps = {
    children?: React.ReactNode;
    className?: string;
    isActive?: boolean;
    clickHandler?: any;
    id: number;
  }

export default function SideMenuItem({children, isActive, clickHandler, id}: BoxProps) {
  if (isActive)
  return (
    <li onClick={() => clickHandler(id)} className=' transition-all ease-in-out bg-primary w-2/3 text-black hover:scale-110 fill-black text-base font-bold h-10 rounded-lg my-4 flex justify-left item-center pt-2 drop-shadow-glow'>{children}</li>
  ) 
  return (
    <li onClick={() => clickHandler(id)} title="text" className='transition-all ease-in-out duration-600 hover:scale-110	 hover:fill-white hover:bg-secondary hover:text-white w-2/3 text-secondary fill-secondary text-base font-bold h-10 rounded-lg my-4 flex justify-left item-center pt-2'>{children}</li>
  ) 

}
