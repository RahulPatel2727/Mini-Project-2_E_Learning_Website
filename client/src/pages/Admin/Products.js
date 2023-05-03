import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/AdminMenu";
import Layout from "./../../components/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);

  //getall products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <Layout>
      <div className="row dashboard">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h1 className="text-center">All Courses</h1>
          {/* <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <Link
                key={p._id}
                to={`/dashboard/admin/product/${p.slug}`}
                className="product-link"
              >
                <div className="card m-2" style={{ width: "18rem" }}>
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div> */}
          <div className="d-flex justify-content-center  flex-wrap">
          {products?.map((p) => (
            <Link
            key={p._id}
            to={`/dashboard/admin/product/${p.slug}`}
            className="product-link"
          >
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
             
              </div>
            </div>
            </Link>
          ))}
        </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
