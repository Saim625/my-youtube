import React from 'react'
import SideBar from './SideBar'
import MainContainer from './MainContainer'
<<<<<<< HEAD
import { Outlet } from 'react-router-dom'
import MiniSideIcons from './MiniSideIcons'
=======
>>>>>>> 91a84d1c483a1349bf7512de582a87094ee15c01

const Body = () => {
  return (
    <div className='flex'>
        <SideBar/>
<<<<<<< HEAD
        <MiniSideIcons/>
        <Outlet/>
=======
        <MainContainer/>
>>>>>>> 91a84d1c483a1349bf7512de582a87094ee15c01
    </div>
  )
}

export default Body