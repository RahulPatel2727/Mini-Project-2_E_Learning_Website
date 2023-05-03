import React from 'react'
import UserMenu from '../../components/UserMenu'
import Layout from '../../components/Layout'
const Profile = () => {
  return (
    <Layout>
   
    <div className="row   dashboard">
      <div className="col-md-3">
        <UserMenu/>
      </div>
      <div className="col-md-9">
        <div className="card w-75 p-3">
        <div>Profile</div>
        </div>
      </div>
    </div>

</Layout>   
   
  )
}

export default Profile