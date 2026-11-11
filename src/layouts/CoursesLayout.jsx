import { NavLink, Outlet } from 'react-router';
import React from 'react'

export default function CoursesLayout() {
  return (
   <div>
        <h1>Courses</h1>
        <nav className='courses-nav'>
          <NavLink to="/courses" end>All Courses</NavLink>
          <NavLink to="/courses/react">React</NavLink>
          <NavLink to="/courses/javaScript">JavaScript</NavLink>
          <NavLink to="/courses/html">HTML</NavLink>
        </nav>
        <div className='course-content'>
            <Outlet />
        </div>
   </div>
  )
}

