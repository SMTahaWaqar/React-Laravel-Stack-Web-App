import React from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider'

const DefaultLayout = () => {
  const {user,token} = useStateContext()

  if (!token) {
    return (
      <Navigate to='/login' />
    )
  }

  const onLogout = (event) => {
    event.preventDefault();
  }

  return (
    <div id="defaultLayout">
        <aside>
          <Link to='/dashboard'>Dasboard</Link>
          <Link to='/users'>Users</Link>
        </aside>

        <div className='content'>
          <header>
            <div>Header</div>
            <div>
              {user.name}
              <a href="#" onClick={onLogout} className='btn-logout'>Logout</a>
            </div>
          </header>
          <main>
            <Outlet />
          </main>
        </div>
    </div>
  )
}

export default DefaultLayout