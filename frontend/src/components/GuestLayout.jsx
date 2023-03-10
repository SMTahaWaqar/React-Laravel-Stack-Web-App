import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider'

const GuestLayout = () => {
    const {token} = useStateContext();

    if (token) {
        return (
            <Navigate to='/' />
        )
    }


  return (
    <div className='login-signup-form animated fadeInDown'>
      <div className="form">
        <Outlet />  {/* to render child routes */}
      </div>
    </div>
  )
}

export default GuestLayout