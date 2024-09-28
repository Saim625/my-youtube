import React from 'react'
import SideBar from './SideBar'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'
import MiniSideIcons from './MiniSideIcons'

const Body = () => {
  return (
    <div className='flex'>
        <SideBar/>
        <MiniSideIcons/>
        <Outlet/>
    </div>
  )
}

export default Body