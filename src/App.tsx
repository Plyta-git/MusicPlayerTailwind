import React from 'react'
import SideMenu from './components/SideMenu/SideMenu';
import Main from './components/Main';
import Player from './components/Player/Player';
import ControlButtons from './components/Player/ControlButtons';

const App = () => {
  return (
   <div className=' bg-b_primary text-gray-100 w-screen h-screen grid grid-cols-6 grid-rows-6'>
      <SideMenu className=' bg-b_secondary border-r-2 border-secondary col-span-1 row-span-5'/>
      <Main className=' bg-b_primary col-span-5 row-span-5'/>
      <div className=' bg-b_black col-span-6 grid grid-cols-6' >
        <ControlButtons/>
        <Player/> 
      </div>
   </div>
  )
}

export default App