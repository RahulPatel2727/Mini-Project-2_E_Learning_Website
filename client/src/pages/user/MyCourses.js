import React, { useState, useEffect } from "react";
import UserMenu from "../../components/UserMenu";
import Layout from "./../../components/Layout";
import axios from "axios";
import { useAuth } from "../../context/auth";
import moment from "moment";
import { useNavigate } from "react-router-dom";
const MyCourses = () => {
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const getOrders = async () => {
    try {
      const { data } = await axios.get("/api/v1/auth/orders");
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);
  return (
    <Layout title={"Your Courses"}>
      <div className="container-flui p-3 m-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          {/* <div className="col-md-9">
            <p>{JSON.stringify(orders,null,4)}</p>
          </div> */}
          <div className="col-md-9">
            <h1 className="text-center">My Courses</h1>
            {orders?.map((o, i) => {
              return (
                
                  
                  <div className="d-flex justify-content-center  flex-wrap">
                    {o?.course?.map((p, i) => (
                    //   <div className="row mb-2 p-3 card flex-row" key={p._id}>
                    //     <div className="col-md-4">
                    //       <img
                    //         src={`/api/v1/product/product-photo/${p._id}`}
                    //         className="card-img-top"
                    //         alt={p.name}
                    //         width="100px"
                    //         height={"100px"}
                    //       />
                    //     </div>
                    //     <div className="col-md-8">
                    //       <p>{p.name}</p>
                    //       <p>{p.description.substring(0, 30)}</p>
                    //       <p>Price : {p.price}</p>
                    //     </div>

                    //     <button
                    //         className="btn btn-info ms-1"
                    //         onClick={() => navigate(`/dashboard/user/view/${p.slug}`)}
                    //       >
                    //         Study
                    // </button>
                    //   </div>
                   
         
                      <div className="ccard card m-2" key={p._id}>
                        <div className="main-content">
                          <img
                            src={`/api/v1/product/product-photo/${p._id}`}
                            className="card-img-top"
                            alt={p.name}
                          />
                          <div className="card-body">
                            <div className="card-name-price">
                              <h5 className="card-title">{p.name}</h5>
                              <ul className="list-unstyled d-flex  text-warning mb-0">
                                <li><i className="fas fa-star fa-sm" /></li>
                                <li><i className="fas fa-star fa-sm" /></li>
                                <li><i className="fas fa-star fa-sm" /></li>
                                <li><i className="fas fa-star fa-sm" /></li>
                                <li><i className="far fa-star fa-sm" /></li>
                              </ul>

                              <h5 className="card-title card-price">
                                ₹
                                {p.price.toLocaleString("en-US", {
                                  // style: "currency",
                                  // currency: "₹",
                                })}
                              </h5>
                            </div>
                            <p className="card-text ">
                              {p.description.substring(0, 60)}...
                            </p>
                          </div>
                          <div className="card-name-price  overlay-content">
                            <div className="cbtn">
                              <button
                                className="btn btn-info ms-1"
                                onClick={() => navigate(`/dashboard/user/view/${p.slug}`)}
                              >
                                Study
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>


        
                    ))}
                  </div>
           
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyCourses;
