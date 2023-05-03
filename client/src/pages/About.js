import React from 'react'
import Layout from '../components/Layout';
import './about.css';
import { useNavigate} from "react-router-dom";
const About = () => {

  const navigate = useNavigate();
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
                <img src={require('../image/hp1.jpg')} />
                 
                </div>
                <div className="carousel-item" data-bs-interval={2000}>
                <img src={require('../image/hp2.jpg')} />
                </div>
                <div className="carousel-item">
                <img src={require('../image/hp1.jpg')} />
                </div>
              </div> 
            </div>
          </div>
          <div className="col-lg-7 col-md-7 text-sec position-relative px-lg-5">
            <div className="rectangle-shape small" />
            <div className="circle-shape large" />
            <h1 style={{fontSize:"50px"}}>E-Shiksha</h1>
            <p>Education is no longer restricted to the walls of a classroom, eLearning brings education to your fingertips.</p>
            <a href="javascript:void(0)" className="main-btn" onClick={() => navigate("/register")}>Learn Now</a>
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
            <h2>Trusted by students across the globe</h2>
          </div>
          <div className="col-sm-6 col-lg-3 text-center">
            <h2>500</h2>
            <p>Corses</p>
          </div>
          <div className="col-sm-6 col-lg-3 text-center">
            <h2>970</h2>
            <p>Students</p>
          </div>
          <div className="col-sm-6 col-lg-3 text-center">
            <h2>150</h2>
            <p>Instructors</p>
          </div>
          <div className="col-sm-6 col-lg-3 text-center">
            <h2>120</h2>
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
            <h4><span>~</span>How do I communicate with my instructor and other students in an e-learning course?</h4>
            <p> Communication in an e-learning course may take place through email, discussion forums, chat rooms, video conferencing, or other online tools provided by the course.
            </p>
          </div>
          <div className="col-sm-6 mb-4">
            <h4><span>~</span>How do I ensure the quality of an e-learning course?</h4>
            <p>To ensure the quality of an e-learning course, it is important to choose a reputable provider or institution, read reviews or ratings from other students, and check for accreditation or certification.
            </p>
          </div>
          <div className="col-sm-6 mb-4">
            <h4><span>~</span>How do I stay motivated in an e-learning course?</h4>
            <p>To stay motivated in an e-learning course, it is important to set goals, create a study schedule, stay organized, participate in discussions, and seek help when needed.
            </p>
          </div>
          <div className="col-sm-6 mb-4">
            <h4><span>~</span>What kind of equipment do I need for e-learning?</h4>
            <p>You will need a computer or mobile device with internet access, and possibly a headset or microphone if you plan to participate in online discussions or virtual meetings.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
 
  {/* About section exit */}
  {/* <section className="growing ">
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
  </section> */}
</div>


    </Layout>
  )
}

export default About