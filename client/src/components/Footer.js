import React from 'react'
import { Link } from 'react-router-dom';
const Footer = () =>{
    return(
        <footer className="footer">
  <div className="container">
    <div className="row">
      <div className="footer-col">
        <h4>company</h4>
        <ul>
          <li><Link to="/about">about us</Link></li>
          <li><Link to="/contact">contact us</Link></li>
          <li><Link to="/policy">privacy policy</Link></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>get help</h4>
        <ul>
          {/* <li><a to="#">FAQ</a></li> */}
          <li><Link to="!#">shipping</Link></li>
          <li><Link to="!#">returns</Link></li>
          <li><Link to="!#">order status</Link></li>
          <li><Link to="!#">payment options</Link></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>online training</h4>
        <ul>
          <li><Link to="!#">react</Link></li>
          <li><Link to="!#">java</Link></li>
          <li><Link to="!#">php</Link></li>
          <li><Link to="!#">aws</Link></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>follow us</h4>
        <div className="social-links">
          <Link to="!#"><i className="fab fa-facebook-f" /></Link>
          <Link to="!#"><i className="fab fa-twitter" /></Link>
          <Link to="!#"><i className="fab fa-instagram" /></Link>
          <Link to="!#"><i className="fab fa-linkedin-in" /></Link>
        </div>
      </div>
    </div>
  </div>
</footer>

    );
}
export default Footer