import React, { useState, useEffect } from "react";
import UserMenu from '../../components/UserMenu'
import Layout from '../../components/Layout'
import { useParams } from "react-router-dom";
import axios from "axios";


const View = () => {
    const params = useParams();
    const [product, setProduct] = useState({});

    
    //initalp details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);
  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
     
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
    <div className="container-fluid m-3 p-3 dashboard">
    <div className="row">
      <div className="col-md-3">
        <UserMenu/>
      </div>
      <div className="col-md-9">
      <div className="row container product-details">
        <div className="col-md-6">
          <img
            src={`/api/v1/product/product-photo/${product._id}`}
            className="card-img-top"
            alt={product.name}
            height="300"
            width={"350px"}
          />
        </div>
        <div className="col-md-6 product-details-info">
          <h1 className="text-center">Course Details</h1>
          <hr />
          <h6>Name : {product.name}</h6>
          <h6>Description : {product.description}</h6>
          <h6>
            Price :
            {product?.price?.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </h6>
          <h6>Category : {product?.category?.name} </h6>
          <div>
               
                    <ol className="list-group">
                            {product.video?.map((v) => (
                                 <a href={v} target="blank" class="list-group-item list-group-item-action">  <li>Lecture</li>
                               
                             </a>
                            ))}
                    </ol>
          </div>

            <div>
               
                      
            </div>
          </div>
          </div>
      </div>
    </div>
  </div>
</Layout>   
  )
}

export default View