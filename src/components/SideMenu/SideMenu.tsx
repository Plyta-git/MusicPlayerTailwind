import React, { useState, ReactElement } from 'react'
import { MenuButtons } from '../../constants/MenuButtons'
import SideMenuItem from './SideMenuItem'

type DescribableClickHandler = (id: number) => void;

type BoxProps = {
    children?: React.ReactNode;
    className: string;
  }

export default function SideMenu({className}: BoxProps) {
    const [activeElement, setActiveElement] = useState(1)
    const clickHandler: DescribableClickHandler = id => setActiveElement(id)

    
  return (
    <div className={className}>

        {activeElement < 5 ? <div className=' text-primary mb-1 mt-6 ml-4 transition'>App</div> : <div className=' text-secondary mb-1 mt-6 ml-4 transition'>App</div> }
        <ul className=' flex items-center flex-col'>
            {MenuButtons.App.map(({id, name, icon}:{id:number, name:string, icon: any})=>(
                <SideMenuItem clickHandler={clickHandler} key={id} id={id} isActive = {id===activeElement}>{icon} {name} </SideMenuItem>
            ))}
        </ul>
        {activeElement > 4 ? <div className=' text-primary mb-1 mt-6 ml-4 transition'>Personal</div> : <div className=' text-secondary mb-1 mt-6 ml-4 transition'>Personal</div> }
        <ul className=' flex items-center flex-col'>
            {MenuButtons.Personal.map(({id, name, icon}:{id:number, name:string, icon: ReactElement})=>(
                <SideMenuItem clickHandler={clickHandler} key={id} id={id} isActive = {id===activeElement}>{icon} {name} </SideMenuItem>
            ))}
        </ul>
    </div>
  )
}
