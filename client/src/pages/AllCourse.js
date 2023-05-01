import React, { useState, useEffect } from "react";
import { useNavigate,Link } from "react-router-dom";
import { Checkbox, Radio } from "antd";
import { Prices } from "../components/Prices";
import { useCart } from "../context/cart";
import axios from "axios";
import toast from "react-hot-toast";
import Layout from "../components/Layout";
// import { AiOutlineReload } from "react-icons/ai";
import "../homepage.css";


const AllCourses = () => {

    const navigate = useNavigate();
    const [cart, setCart] = useCart();
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [checked, setChecked] = useState([]);
    const [radio, setRadio] = useState([]);
 
    const [page, setPage] = useState(1);
    

    const getAllCategory = async () => {
        try {
          const { data } = await axios.get("/api/v1/category/get-category");
          if (data?.success) {
            setCategories(data?.category);
          }
        } catch (error) {
          console.log(error);
        }
      };
    
      const Contains = (obj, list) => {
        var i;
        for (i = 0; i < list.length; i++) {
          if (list[i] === obj) {
            return true;
          }
        }
        return false;
      }
    
    useEffect(() => {
        getAllCategory();
        // getTotal();
        
      }, []);
      

    // filter by cat
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  useEffect(() => {
    if (!checked.length || !radio.length) 
      getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

//   get filterd product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post("/api/v1/product/product-filters", {
        checked,
        radio,
      });
    
        setProducts(data?.products);
     
    } catch (error) {
      console.log(error);
    }
  };

    // getall products
    const getAllProducts = async () => {
      try {
        const { data } = await axios.get("/api/v1/product/get-product");
        setProducts(data.products);
      } catch (error) {
        console.log(error);
        toast.error("Someething Went Wrong");
      }
    };

    useEffect(() => {
          getAllProducts();
        
        }, []);
  return (
    <Layout  title={"E-Shiksha Courses"}>
        <section>
               
      <div className="container-fluid row mt-3 home-page">
        <div className="col-md-3 filters">
          <h4 className="text-center">Category</h4>
          <div className="d-flex flex-column">
            {categories?.map((c) => (
              <Checkbox
                key={c._id}
                onChange={(e) => handleFilter(e.target.checked, c._id)}
              >
                {c.name}
              </Checkbox>
            ))}
          </div>
          {/* price filter */}
          <h4 className="text-center mt-4">Price</h4>
          <div className="d-flex  flex-column">
            <Radio.Group onChange={(e) => setRadio(e.target.value)}>
              {Prices?.map((p) => (
                <div key={p._id}>
                  <Radio value={p.array}>{p.name}</Radio>
                </div>
              ))}
            </Radio.Group>
          </div>
          <div className="d-flex flex-column">
            <button
              className="btn btn-danger"
              onClick={() => window.location.reload()}
            >
              RESET FILTERS
            </button>
          </div>
        </div>
        <div className="col-md-9 ">
          <h1 className="text-center">All Courses</h1>
          {/* <div className="d-flex justify-content-center  flex-wrap">
            {
              products.length==0 ? <>Opps! no result found</> : <>  {products?.map((p) => (
                <div className="card m-2" key={p._id}>
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                  <div className="card-body">
                    <div className="card-name-price">
                      <h5 className="card-title">{p.name}</h5>
                      <h5 className="card-title card-price">
                        {p.price.toLocaleString("en-US", {
                          style: "currency",
                          currency: "IND",
                        })}
                      </h5>
                    </div>
                    <p className="card-text ">
                      {p.description.substring(0, 60)}...
                    </p>
                    <div className="card-name-price">
                      <button
                        className="btn btn-info ms-1"
                        onClick={() => navigate(`/product/${p.slug}`)}
                      >
                        More Details
                      </button>
                      
                         <button
                        className="btn btn-dark ms-1"
                        onClick={() => {
                          if(!Contains(p,[...cart])){
                            setCart([...cart, p]);
                            localStorage.setItem(
                              "cart",
                              JSON.stringify([...cart, p])
                            );
                            toast.success("Item Added to cart");
                          }
                          else
                          {
                            toast.success("Item Already added to cart");
                          }
                          
                        }}
                      >
                        ADD TO CART
                      </button>  
                      
                    </div>
                  </div>
                </div>
              ))} </> 
            }
            
          </div> */}
         <div className="d-flex justify-content-center  flex-wrap">
          {products?.map((p) => (
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
                    onClick={() => navigate(`/product/${p.slug}`)}
                  >
                    More Details
                  </button>

                  <button
                    className="btn btn-dark ms-1"
                    onClick={() => {
                      if (!Contains(p, [...cart])) {
                        setCart([...cart, p]);
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, p])
                        );
                        toast.success("Item Added to cart");
                      }
                      else {
                        toast.success("Item Already added to cart");
                      }

                    }}
                  >
                    ADD TO CART
                  </button>
                  </div>
                </div>
              </div>
            </div>
          ))}


        </div>
        </div>
       
      </div>
        </section>
    </Layout>
  )
}

export default AllCourses