import React from 'react'
import { NavLink } from "react-router-dom";
const UserMenu = () => {
  return (
    <>
    <div className="text-center">
      <div className="list-group dashboard-menu">
        <h4>Student Panel</h4>
        {/* <NavLink
          to="/dashboard/user/profile"
          className="list-group-item list-group-item-action"
        >
          Profile
        </NavLink> */}
        <NavLink
          to="/dashboard/user/mycourses"
          className="list-group-item list-group-item-action"
        >
          My Courses
        </NavLink>
       
        </div>
    </div>
  </>
  )
}

export default UserMenu