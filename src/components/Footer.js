import React from 'react';
import { Link } from 'react-router-dom';
function Footer() {
return (
    <div>
<footer className="footer-wrapper">
        <div className="footer-bottom  bg-img-tc" style={{background: 'url(images/footer-bg.png)'}}>
          <div className="footer-container">
            <div className="inner-container" data-aos="fade-up">
              <div className="row justify-content-between">
                <div className="col-sm-6 col-lg-auto">
                  <div className="ftbox ftbox1">
                    <div className="footer-logo">
                      <Link to="/"><img src="images/logo-footer.png" alt="JPB" /></Link>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-auto">
                  <div className="ftbox ftbox2">
                    <h6>Contact Us</h6>
                    <ul className="contact-list">
                      <li><i className="fas fa-map-marker-alt" />865 Lorem Ipsum Dolor
                        <br /> #01-01, Singapore 12345</li>
                      <li><i className="fas fa-phone-alt" />+65 1234 5678 </li>
                      <li><i className="fas fa-envelope" /><a href="mailto:ebjo@email.com.sg">ebjo@email.com.sg</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-auto">
                  <div className="ftbox ftbox3">
                    <h6>Sitemap</h6>
                    <ul className="footer-nav">
                      <li className="selected"><Link to="/">Home</Link></li>
                      <li><Link to="/services">Services</Link></li>
                      <li><Link to="/about">About Us</Link></li>
                      <li><Link to="/news">News and Events</Link></li>
                      <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-auto">
                  <div className="ftbox ftbox4">
                    <h6>Helpful Links</h6>
                    <ul className="footer-nav">
                      <li><Link to="/" >My Account</Link></li>
                      <li><Link to="/" >Terms &amp; Conditions</Link></li>
                      <li><Link to="/" >Privacy Policy</Link></li>
                      <li><Link to="/" >Join Me</Link></li>
                      <li><Link to="/" >FAQs</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-auto">
                  <div className="ftbox ftbox5">
                    <h6>Newsletter Subscription</h6>
                    <div className="newsletter-holder">
                      <input type="text" className="form-control newsletter-input" placeholder="Enter Email Address" />
                      <button className="custom-button no-arrow newsletter-button btn-arrow">SUBSCRIBE <i className="show-lg fas fa-paper-plane" /></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-bar">
          <div className="home-container">
            <div className="row align-items-center grid-10 gutters-10 justify-content-between">
              <div className="col-md-auto">
                <div className="copyright white">Copyright ©
                  JPB Group. <span className="text-pre"> All rights reserved.</span> <Link to="/webagency" target="_blank"> Web Excellence by <strong>Verz</strong></Link></div>
              </div>
              <div className="col-lg-auto">
                <div className="footer-social"> <span>Follow Us:</span>
                  <ul className="social-icons">
                    <li><Link to="/" ><i className="fab fa-facebook-f" /></Link></li>
                    <li><Link to="/" ><i className="fab fa-instagram" /></Link></li>
                    <li><Link to="/" ><i className="fab fa-twitter" /></Link></li>
                    <li><Link to="/" ><i className="fab fa-tiktok" /></Link></li>
                    <li><Link to="/" ><i className="fab fa-youtube" /></Link></li>
                    <li><Link to="/" ><i className="fab fa-google" /></Link></li>
                    <li><Link to="/" ><i className="fab fa-whatsapp" /></Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </div>
);
}
export default Footer;