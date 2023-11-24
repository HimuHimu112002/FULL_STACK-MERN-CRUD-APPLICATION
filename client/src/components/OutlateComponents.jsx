import React from 'react'
import Navmenu from './Navmenu'
import { Outlet } from 'react-router-dom'

const OutlateComponents = () => {
  return (
    <div>
        <Navmenu/>
        <Outlet/>
    </div>
  )
}

export default OutlateComponents