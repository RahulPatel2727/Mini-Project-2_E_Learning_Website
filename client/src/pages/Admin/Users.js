import React from 'react'
import Layout from '../../components/Layout'
import AdminMenu from '../../components/AdminMenu'
const Purchased = () => {
  return (
    <Layout>
        <div className="container-fluid  dashboard">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
            <div>Purchased</div>
            </div>
          </div>
        </div>
      </div>
      
    </Layout>
    
  )
}

export default Purchased