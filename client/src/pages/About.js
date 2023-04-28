import React from 'react'
import Layout from '../components/Layout';
import './about.css';
const About = () => {
  return (
    <Layout>
      
<div>
  {/* section-2 about*/}
  <section id="about">
    <div className="about-section wrapper">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-5 mb-lg-0 mb-5 about-slider">
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to={1} aria-label="Slide 2" />
                <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to={2} aria-label="Slide 3" />
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval={1000}>
                  {/* <img src="./image/ass1.png" className="d-block w-100" alt="..." /> */}
                </div>
                <div className="carousel-item" data-bs-interval={2000}>
                  {/* <img src="./image/ass2.png" className="d-block w-100" alt="..." /> */}
                </div>
                <div className="carousel-item">
                  {/* <img src="./image/ass4.png" className="d-block w-100" alt="..." /> */}
                </div>
              </div> 
            </div>
          </div>
          <div className="col-lg-7 col-md-7 text-sec position-relative px-lg-5">
            <div className="rectangle-shape small" />
            <div className="circle-shape large" />
            <h2>Loud &amp; Clear <br />Music</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit
              amet leo. Mauris feugiat erat tellus. Lorem ipsum dolor sit amet consectetur adipisicing elit. A quam
              similique, modi blanditiis, alias porro et dolore, corporis sit asperiores sed optio omnis autem officia
              exercitationem dolorem animi mollitia? Sapiente.</p>
            <a href="javascript:void(0)" className="main-btn">Buy Now</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  {/* number section */}
  <section className="about_wrapper">
    <div className="projects">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2>Trusted by clients across the globe</h2>
          </div>
          <div className="col-sm-6 col-lg-3 text-center">
            <h2>8,500</h2>
            <p>Completed Projects</p>
          </div>
          <div className="col-sm-6 col-lg-3 text-center">
            <h2>9,470</h2>
            <p>Happy Clients</p>
          </div>
          <div className="col-sm-6 col-lg-3 text-center">
            <h2>1,120</h2>
            <p>Ongoing Projects</p>
          </div>
          <div className="col-sm-6 col-lg-3 text-center">
            <h2>152</h2>
            <p>Awards Won</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* section-6 faq*/}
  <section id="faq">
    <div className="faq wrapper">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="text-center pb-4">
              <h2>Frequently Asked Questions</h2>
            </div>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-sm-6 mb-4">
            <h4><span>~</span>How long do you take to deliver?</h4>
            <p>Standard delivery times vary by the location selected and prevailing conditions. Once you select your location, an estimated delivery time is mentioned for each restaurant.
            </p>
          </div>
          <div className="col-sm-6 mb-4">
            <h4><span>~</span>What are your delivery hours?</h4>
            <p>Our delivery hours vary for different locations and depends on availability of supply from restaurant partners.
            </p>
          </div>
          <div className="col-sm-6 mb-4">
            <h4><span>~</span>Is there a minimum order value?</h4>
            <p>We have no minimum order value and you can order for any amount. 
            </p>
          </div>
          <div className="col-sm-6 mb-4">
            <h4><span>~</span>Do you support bulk orders?</h4>
            <p>In order to provide all customers with a great selection and to ensure on time delivery of your meal, we reserve the right to limit the quantities depending on supply.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
 
  {/* About section exit */}
  <section className="growing ">
    <div className="container-fluid ms-0">
      <div className="row ">
        <div className="col-12 text-center mt-1">
          <h1 className="mb-3 text-dark" style={{fontSize:"80px"}}>We just keep growing</h1>
          <p className='text-dark'>Our global community and our course catalog get bigger every day. Check out our latest numbers as of December 2022.</p>
        </div>
        <div className="col-12 d-flex justify-content-around">
          <span className="text-dark fs-1">222M+</span>
          <span className="text-dark fs-1">222M+</span>
          <span className="text-dark fs-1">222M+</span>
        </div>
        <div className="col-12 d-flex justify-content-around">
          <span className="text-dark fs-6">Learners</span>
          <span className="text-dark fs-6">Instructors</span>
          <span className="text-dark fs-6">Courses</span>
        </div>
        <div className="col-12 d-flex justify-content-around mt-3">
          <span className="text-dark fs-1 ms-5">222M+</span>
          <span className="text-dark fs-1 me-3">222M+</span>
        </div>
        <div className="col-12 d-flex justify-content-around">
          <span className="text-dark fs-6">Learners</span>
          <span className="text-dark fs-6">Instructors</span>
        </div>
      </div>
    </div>
  </section>
</div>


    </Layout>
  )
}

export default About