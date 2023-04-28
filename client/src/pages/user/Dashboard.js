import React from "react";
import Layout from "../../components/Layout";
import UserMenu from "../../components/UserMenu";
import { useAuth } from "../../context/auth";
const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"E-Shiksha Dashboard"}>
      <div className="container-flui m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3>user : {auth?.user?.name}</h3>
              <h3>user: {auth?.user?.email}</h3>
            </div>
          </div>
        </div>
      </div>
      User DashBoard
    </Layout>
  );
};

export default Dashboard;
