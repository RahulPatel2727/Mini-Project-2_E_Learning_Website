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
    // getTotal();
    popularProduct();
  }, []);
  

  //getTOtal COunt
  // const getTotal = async () => {
  //   try {
  //     const { data } = await axios.get("/api/v1/product/product-count");
  //     setTotal(data?.total);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   if (page === 1) return;
  //   loadMore();
  // }, [page]);
  // //load more
  // const loadMore = async () => {
  //   try {
  //     setLoading(true);
  //     const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
  //     setLoading(false);
  //     setProducts([...products, ...data?.products]);
  //   } catch (error) {
  //     console.log(error);
  //     setLoading(false);
  //   }
  // };

  // filter by cat
  // const handleFilter = (value, id) => {
  //   let all = [...checked];
  //   if (value) {
  //     all.push(id);
  //   } else {
  //     all = all.filter((c) => c !== id);
  //   }
  //   setChecked(all);
  // };
  // useEffect(() => {
  //   if (!checked.length || !radio.length) 
  //     getAllProducts();
  // }, [checked.length, radio.length]);

  // useEffect(() => {
  //   if (checked.length || radio.length) filterProduct();
  // }, [checked, radio]);

  //get filterd product
  // const filterProduct = async () => {
  //   try {
  //     const { data } = await axios.post("/api/v1/product/product-filters", {
  //       checked,
  //       radio,
  //     });
  //     setProducts(data?.products);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  //popular product

  const popularProduct = async () => {
    try {
      const { data } = await axios.post("/api/v1/product/product-popular");
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

    //getall products
    // const getAllProducts = async () => {
    //   try {
    //     const { data } = await axios.get("/api/v1/product/get-product");
    //     setProducts(data.products);
    //   } catch (error) {
    //     console.log(error);
    //     toast.error("Someething Went Wrong");
    //   }
    // };
  
    //lifecycle method
    useEffect(() => {
    //  getAllProducts();
        popularProduct();
    }, []);
  return (
    <Layout title={"E-Shiksha"}>

      <div className="slider">
        <ImageSlider slides={slides} />
      </div>

      <div>
          <h1 className="text-center text-sec">Discover. Learn. Excel. Browse our categories now!</h1>
          <p>Explore our wide range of categories and unlock a world of knowledge with our comprehensive e-learning courses.</p>
      </div>

     <section className="feature_section d-flex justify-content-center flex-wrap">

        
     
    
      
     
            <div className="card features-box catcard" onClick={() => navigate("/courses")}>
          <div className="text-center">
            <div className="features-icon-border">
              <div className="features-icon">
                <img src={require('../image/java.png')}  />
              </div>
            </div>
            <div className="features-text">
              <h3>Development</h3>
            </div>
          </div>
        </div>

        <div className="card features-box catcard" onClick={() => navigate("/courses")}>
          <div className="text-center">
            <div className="features-icon-border">
              <div className="features-icon">
                <img src={require('../image/java.png')}  />
              </div>
            </div>
            <div className="features-text">
              <h3>Marketing</h3>
            </div>
          </div>
        </div>

        <div className="card features-box catcard" onClick={() => navigate("/courses")}>
          <div className="text-center">
            <div className="features-icon-border">
              <div className="features-icon">
                <img src={require('../image/java.png')}  />
              </div>
            </div>
            <div className="features-text">
              <h3>Music</h3>
            </div>
          </div>
        </div>

        <div className="card features-box catcard" onClick={() => navigate("/courses")}>
          <div className="text-center">
            <div className="features-icon-border">
              <div className="features-icon">
                <img src={require('../image/java.png')}  />
              </div>
            </div>
            <div className="features-text">
              <h3>Personal Development</h3>
            </div>
          </div>
        </div>

        <div className="card features-box catcard" onClick={() => navigate("/courses")}>
          <div className="text-center">
            <div className="features-icon-border">
              <div className="features-icon">
                <img src={require('../image/java.png')}  />
              </div>
            </div>
            <div className="features-text">
              <h3>Photography</h3>
            </div>
          </div>
        </div>

        <div className="card features-box catcard" onClick={() => navigate("/courses")}>
          <div className="text-center">
            <div className="features-icon-border">
              <div className="features-icon">
                <img src={require('../image/java.png')}  />
              </div>
            </div>
            <div className="features-text">
              <h3>IT and Software</h3>
            </div>
          </div>
        </div>

        <div className="card features-box catcard" onClick={() => navigate("/courses")}>
          <div className="text-center">
            <div className="features-icon-border">
              <div className="features-icon">
                <img src={require('../image/java.png')}  />
              </div>
            </div>
            <div className="features-text">
              <h3>Design</h3>
            </div>
          </div>
        </div>


        <div className="card features-box catcard"  onClick={() => navigate("/courses")}>
          <div className="text-center">
            <div className="features-icon-border">
              <div className="features-icon">
                <img src={require('../image/java.png')}  />
              </div>
            </div>
            <div className="features-text">
              <h3>Business</h3>
            </div>
          </div>
        </div>
        
   
   
</section>


      <section className="feature_section d-flex justify-content-center flex-wrap">
        <h1 className="text-center text-sec">Our popular Courses</h1>
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
        
        
      </section>


    {/* section-3 about*/}
<section id="about">
  <div className="about-section wrapper">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-7 col-md-12 mb-lg-0 mb-5">
          <div className="card border-0">
                  <img src={require('../image/hp2.jpg')} />
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
          <div className="card border-0">
              <img src={require('../image/hp1.jpg')} />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* <!-- testimonial section --> */}
<section id="testimonial" className="testimonial_wrapper py-5">
{/* <div id="carouselExampleControls" className="carousel slide text-center carousel-dark" data-mdb-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="rounded-circle shadow-1-strong mb-4" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar" style={{width: 150}} />
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8">
          <h5 className="mb-3">Maria Kate</h5>
          <p>Photographer</p>
          <p className="text-muted">
            <i className="fas fa-quote-left pe-2" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
            nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia
            fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit
            doloremque.
          </p>
        </div>
      </div>
      <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
        <li><i className="fas fa-star fa-sm" /></li>
        <li><i className="fas fa-star fa-sm" /></li>
        <li><i className="fas fa-star fa-sm" /></li>
        <li><i className="fas fa-star fa-sm" /></li>
        <li><i className="far fa-star fa-sm" /></li>
      </ul>
    </div>
    <div className="carousel-item">
      <img className="rounded-circle shadow-1-strong mb-4" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="avatar" style={{width: 150}} />
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8">
          <h5 className="mb-3">John Doe</h5>
          <p>Web Developer</p>
          <p className="text-muted">
            <i className="fas fa-quote-left pe-2" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
            nesciunt sint eligendi reprehenderit reiciendis.
          </p>
        </div>
      </div>
      <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
        <li><i className="fas fa-star fa-sm" /></li>
        <li><i className="fas fa-star fa-sm" /></li>
        <li><i className="fas fa-star fa-sm" /></li>
        <li><i className="fas fa-star fa-sm" /></li>
        <li><i className="far fa-star fa-sm" /></li>
      </ul>
    </div>
    <div className="carousel-item">
      <img className="rounded-circle shadow-1-strong mb-4" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt="avatar" style={{width: 150}} />
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8">
          <h5 className="mb-3">Anna Deynah</h5>
          <p>UX Designer</p>
          <p className="text-muted">
            <i className="fas fa-quote-left pe-2" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
            nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia
            fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit
            doloremque.
          </p>
        </div>
      </div>
      <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
        <li><i className="fas fa-star fa-sm" /></li>
        <li><i className="fas fa-star fa-sm" /></li>
        <li><i className="fas fa-star fa-sm" /></li>
        <li><i className="fas fa-star fa-sm" /></li>
        <li><i className="far fa-star fa-sm" /></li>
      </ul>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-mdb-target="#carouselExampleControls" data-mdb-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-mdb-target="#carouselExampleControls" data-mdb-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div> */}
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" >
    <img className="rounded-circle shadow-1-strong mb-4" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar" style={{width: 150}} />
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8">
          <h5 className="mb-3">Maria Kate</h5>
          <p>Photographer</p>
          <p className="text-muted">
            <i className="fas fa-quote-left pe-2" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
            nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia
            fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit
            doloremque.
          </p>
        </div>
      </div>
      <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
        <li><i className="fas fa-star fa-sm" /></li>
        <li><i className="fas fa-star fa-sm" /></li>
        <li><i className="fas fa-star fa-sm" /></li>
        <li><i className="fas fa-star fa-sm" /></li>
        <li><i className="far fa-star fa-sm" /></li>
      </ul>
    </div>
    <div className="carousel-item">
    <img className="rounded-circle shadow-1-strong mb-4" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="avatar" style={{width: 150}} />
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8">
          <h5 className="mb-3">John Doe</h5>
          <p>Web Developer</p>
          <p className="text-muted">
            <i className="fas fa-quote-left pe-2" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
            nesciunt sint eligendi reprehenderit reiciendis.
          </p>
        </div>
      </div>
      <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
        <li><i className="fas fa-star fa-sm" /></li>
        <li><i className="fas fa-star fa-sm" /></li>
        <li><i className="fas fa-star fa-sm" /></li>
        <li><i className="fas fa-star fa-sm" /></li>
        <li><i className="far fa-star fa-sm" /></li>
      </ul>
    </div>
    <div className="carousel-item" >
    <img className="rounded-circle shadow-1-strong mb-4" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt="avatar" style={{width: 150}} />
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8">
          <h5 className="mb-3">Anna Deynah</h5>
          <p>UX Designer</p>
          <p className="text-muted">
            <i className="fas fa-quote-left pe-2" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
            nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia
            fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit
            doloremque.
          </p>
        </div>
      </div>
      <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
        <li><i className="fas fa-star fa-sm" /></li>
        <li><i className="fas fa-star fa-sm" /></li>
        <li><i className="fas fa-star fa-sm" /></li>
        <li><i className="fas fa-star fa-sm" /></li>
        <li><i className="far fa-star fa-sm" /></li>
      </ul>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"  />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

</section>

<section id="about">
    <div className="about-section wrapper">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-7 col-md-12 mb-lg-0 mb-5">
          <div className="card border-0">
                  <img src={require('../image/teacher.jpg')} />
          </div>
        </div>
        <div className="col-lg-5 col-md-12 text-sec">
          <h2>Become an instructor</h2>
          <p>Instructors from around the world teach millions of students on E-Shiksha. We provide the tools and skills to teach what you love.</p>
          <button class="main-btn mt-4">Start Teaching Today</button>
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

