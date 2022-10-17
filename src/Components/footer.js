import React from "react";
import "../Css/footer.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook,faTwitter,faDribbble,faLinkedin} from '@fortawesome/free-brands-svg-icons';


function footer() {
  return (
    <>
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li><a href="">Fruit</a></li>
              <li><a href="">Beverages</a></li>
              <li><a href="">Cleaning</a></li>
              <li><a href="">Household</a></li>
              <li><a href="">Diary</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="">About Us</a></li>
              <li><a href="">Contact Us</a></li>
              <li><a href="">Contribute</a></li>
              <li><a href="">Privacy Policy</a></li>
              <li><a href="">Return Policy</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved by 
         <a href="#">AQRE</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
              <li><a className="twitter" href="#"><FontAwesomeIcon icon={faTwitter}/> </a></li>
              <li><a className="dribbble" href="#"><FontAwesomeIcon icon={faDribbble} /></a></li>
              <li><a className="linkedin" href="#"><FontAwesomeIcon icon={faLinkedin}/></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
    </>
  
  );
}

export default footer;
