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
          <li><Link to="/about" >about us</Link></li>
          <li><Link to="/contact">contact us</Link></li>
        </ul>
      </div>

      <div className="footer-col">
        <h4>Get Help</h4>
        <ul>
          <li><Link to="!#">9014785477</Link></li>
          <li><Link to="!#">9033785477</Link></li>
          <li><Link to="!#">9054785477</Link></li>
          <li><Link to="!#">9090785477</Link></li>
        </ul>
      </div>
     
      <div className="footer-col">
        <h4>online training</h4>
        <ul>
          <li><Link to="https://react.dev/">react</Link></li>
          <li><Link to="https://docs.oracle.com/en/java/">java</Link></li>
          <li><Link to="https://www.php.net/docs.php">php</Link></li>
          <li><Link to="https://docs.aws.amazon.com/">aws</Link></li>
        </ul>
      </div>


      <div className="footer-col">
        <h4>follow us</h4>
        <div className="social-links">
          <Link to="https://www.facebook.com/"><i className="fab fa-facebook-f" /></Link>
          <Link to="https://www.twitter.com/"><i className="fab fa-twitter" /></Link>
          <Link to="https://www.instagram.com/"><i className="fab fa-instagram" /></Link>
          <Link to="https://www.linkedin.com/"><i className="fab fa-linkedin-in" /></Link>
        </div>
      </div>
    </div>
  </div>
</footer>

    );
}
export default Footer