import React, { useState, useEffect } from "react";
import { useNavigate,Link } from "react-router-dom";
import { Checkbox, Radio } from "antd";
import { Prices } from "../components/Prices";
import { useCart } from "../context/cart";
import axios from "axios";
import toast from "react-hot-toast";
import Layout from "./../components/Layout";
// import { AiOutlineReload } from "react-icons/ai";
import "../homepage.css";
import ImageSlider from "../components/ImageSlider";

const HomePage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const slides = [
    { url: "http://localhost:3000/image-1.png" },
    { url: "http://localhost:3000/image-2.png" },
    { url: "http://localhost:3000/image-3.png" },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  //get all cat
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
    getTotal();
  }, []);
  //get products
  // const getAllProducts = async () => {
  //   try {
  //     setLoading(true);
  //     const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
  //     setLoading(false);
  //     setProducts(data.products);
  //   } catch (error) {
  //     setLoading(false);
  //     console.log(error);
  //   }
  // };

  //getTOtal COunt
  const getTotal = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);
  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

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

  //get filterd product
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
    <Layout title={"E-Shiksha"}>

      <div className="slider">
        <ImageSlider slides={slides} />
      </div>

      <div className="box-1">
      <div className="c">
          <h1 className="text-center">All Courses</h1>
        

          <div className="d-flex justify-content-center flex-wrap">
          {categories?.map((c) => (
              <div className="card m-2" key={c._id}>
              
              <div className="card-body">
                <div className="card-name-price">
                  <h5 className="card-title">{c.name}</h5>
                </div> 
              </div>
            </div>
            ))}
          </div>
          
         
        </div>
      </div>

      <div className="box-1">
        
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
          <div className="d-flex justify-content-center  flex-wrap">
            {products?.map((p) => (
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
            ))}
           

          </div>
         
        </div>
       
      </div>

      </div>


      <div className="box2"></div>
      

    {/* section-3 about*/}
<section id="about">
  <div className="about-section wrapper">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-7 col-md-12 mb-lg-0 mb-5">
          <div className="card border-0 hp-card">
    
          </div>
        </div>
        <div className="col-lg-5 col-md-12 text-sec">
          <h2>The only thing we care as much as delivering delicious food is making people happy.</h2>
          <p>There's nothing we like more than bringing people together over good food.When you want something special without making a fuss, we’re here for you.</p>
          {/* <button class="main-btn mt-4">Learn More</button> */}
        </div>
      </div>
    </div>
    <div className="container food-type">
      <div className="row align-items-center">
        <div className="col-lg-5 col-md-12 text-sec mb-lg-0 mt-5 mb-5">
          <h2>Enjoy the taste of food made by the best chefs at home!</h2>
          <p>Your stomach is hungry but your heart is saying something else -Order Now!Food Should Be On Your Table, Just Order And It Will Be Delivered.Ensure all your meals are fresh, healthy and delicious with our meal delivery service.</p>
          <ul className="list-unstyled py-3">
            <li>Now Ordering Is So Easy</li>
            <li>Time is short - eat good food fast.</li>
            <li>Now that's love at first bite</li>
          </ul> 
          {/* <button class="main-btn mt-4">Learn More</button> */}
        </div>
        <div className="col-lg-7  aboutUs col-md-12 ">
          <div className="card border-0 hp2-card">
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* <!-- testimonial section --> */}
<section id="testimonial" className="testimonial_wrapper py-5">
  <div className="container bg-success">
    <div className="row ">
      <div className="col-sm-12">
        <div className="title-box text-center">
          <h1 className="text-red testtext">Testimonials
            <div className="seprator-img" />
          </h1>
        </div>
      </div>
    </div>
    <div id="carouselExampleNew" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleNew" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
        <button type="button" data-bs-target="#carouselExampleNew" data-bs-slide-to={1} aria-label="Slide 2" />
        <button type="button" data-bs-target="#carouselExampleNew" data-bs-slide-to={2} aria-label="Slide 3" /> 
      </div>
      <div className="carousel-inner py-5 text-center">
        <div className="carousel-item active">
          <figure className="col-md-6 offset-md-3 mt-4">
            <div className="testimonial-image">
            <div className="testi">
                </div>
            </div>
            <blockquote className="blockquote">
              <p className="text-black">It is best application I am using for ordering online cooked food. The quality will be absolutely good when you order food on based on raiting of resturant. It is very easy to use this application for ordering.</p>
            </blockquote>
            <figcaption className="blockquote-footer mt-2">Jonh Son</figcaption>
          </figure>
        </div>
        <div className="carousel-item">
          <figure className="col-md-6 offset-md-3 mt-4">
            <div className="testimonial-image">
              <div className="img-fluid rounded-circle border border-4 border-danger testi">
                </div>
            </div>
            <blockquote className="blockquote">
              <p className="text-black">Fast delivery , courteous delivery agent , minimum calling . Lots of offers and discount are just few of many things to mention. If we compare it to competitors Figaro Food offers more restaurants then other platforms</p>
            </blockquote>
            <figcaption className="blockquote-footer mt-2">Jonh Son</figcaption>
          </figure>
        </div> 
        <div className="carousel-item">
          <figure className="col-md-6 offset-md-3 mt-4">
            <div className="testimonial-image">
              <img src="./images/testi-avatar.jpg" className="img-fluid rounded-circle border border-4 border-danger" />
            </div>
            <blockquote className="blockquote">
              <p className="text-black">I like Figaro Food so much because it's so cheap regarding food delivery and gives so many discounts on so many food items. I love how good its website application is and how easy it is to use.</p>
            </blockquote>
            <figcaption className="blockquote-footer mt-2">Jonh Son</figcaption>
          </figure>
        </div>
      </div> 
    </div>
  </div>
</section>

{/* <!-- testimonial section exit --> */}

    </Layout>
  );
};

export default HomePage;


// const HomePage = () => {
//   const navigate = useNavigate();
//   const [cart, setCart] = useCart();
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [checked, setChecked] = useState([]);
//   const [radio, setRadio] = useState([]);
//   const [total, setTotal] = useState(0);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);

//   //get all cat
//   const getAllCategory = async () => {
//     try {
//       const { data } = await axios.get("/api/v1/category/get-category");
//       if (data?.success) {
//         setCategories(data?.category);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getAllCategory();
//     getTotal();
//   }, []);
//   const getAllProducts = async () => {
//     try {
//       const { data } = await axios.get("/api/v1/product/get-product");
//       setProducts(data.products);
//     } catch (error) {
//       console.log(error);
//       toast.error("Someething Went Wrong");
//     }
//   };

//   //lifecycle method
//   useEffect(() => {
//     getAllProducts();
//   }, []);

//   //getTOtal COunt
//   const getTotal = async () => {
//     try {
//       const { data } = await axios.get("/api/v1/product/product-count");
//       setTotal(data?.total);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     if (page === 1) return;
//     loadMore();
//   }, [page]);
//   //load more
//   const loadMore = async () => {
//     try {
//       setLoading(true);
//       const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
//       setLoading(false);
//       setProducts([...products, ...data?.products]);
//     } catch (error) {
//       console.log(error);
//       setLoading(false);
//     }
//   };

//   // filter by cat
//   const handleFilter = (value, id) => {
//     let all = [...checked];
//     if (value) {
//       all.push(id);
//     } else {
//       all = all.filter((c) => c !== id);
//     }
//     setChecked(all);
//   };
//   useEffect(() => {
//     if (!checked.length || !radio.length) getAllProducts();
//   }, [checked.length, radio.length]);

//   useEffect(() => {
//     if (checked.length || radio.length) filterProduct();
//   }, [checked, radio]);

//   //get filterd product
//   const filterProduct = async () => {
//     try {
//       const { data } = await axios.post("/api/v1/product/product-filters", {
//         checked,
//         radio,
//       });
//       setProducts(data?.products);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <Layout title={"ALl Products - Best offers "}>
    
//       <div className="container-fluid row mt-3 home-page">
        


//         <div className="col-md-9 ">
//           <h1 className="text-center">All Courses</h1>
//           <div className="d-flex flex-wrap">
//             {products?.map((p) => (
//               <Link
//                 key={p._id}
//                 to={`/dashboard/product/${p.slug}`}
//                 className="product-link"
//               >
//                 <div className="card m-2" style={{ width: "18rem" }}>
//                   <img
//                     src={`/api/v1/product/product-photo/${p._id}`}
//                     className="card-img-top"
//                     alt={p.name}
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title">{p.name}</h5>
//                     <p className="card-text">{p.description}</p>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </Layout>
        
  
//   );
// };

// export default HomePage;

