import React from 'react'
import { Outlet } from 'react-router-dom'

const GuestLayout = () => {
  return (
    <div>
        <Outlet />  {/* to render child routes */}
    </div>
  )
}

export default GuestLayout