import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import QuickSearch from '../Quicksearch';
import { Link } from 'react-router-dom';



const EmployerAccount = () => {
  return(
 <div>
  <div id="wrapper">
  <Header/>
    <div className="clear"></div>
 
    <div className="clear"></div>
 
    <div className="main-content-wrapper">
     
      <div className="bannerWrapper">
        <div className="banner inner-banner">
          <div className="inner-banner-img img-holder img-cover">
            <figure><img src="images/banner-employer-dashboard.jpg" alt="JPB"/></figure>
          </div>
        </div>
        <div className="home-banner-bottom-bg inner-banner-shape"> <img src="images/inner-banner-shape.png" alt=""/> </div>
      </div>
      <div className="clear"></div>
      
      <section className="fullcontainer dashboard ead-page" data-aos="fade-up">
        <div className="inner-container-md">
        <div className="container">
          <div className="pageTitle md"><h2>Employer Dashboard</h2></div>
          <div className="row">
            <div className="col-lg-auto mb-991-30"> 
              <div className="sidebar">
              <div className="sidebar-title"><h5>Hi Timothy,</h5></div>
              <a className="btn-control-notext show-lg" href="#nav">Select</a>
              <ul id="nav" className="nav-1 hide-lg">
              <li className="active"><Link to="/employeraccount">Account Details</Link></li>
                <li><Link to="/employerprofile">Personal Profile Details</Link></li>
                <li><Link to="/employercontact"> Contact Details</Link></li>
                <li><Link to="/employeraddress">Address</Link></li>
                <li><Link to="/employerfamily">Family Details & Job Scope</Link></li>
                <li><Link to="/employerInterview"> Interview Appointment Details</Link></li>
                <li><Link to="/employerbooking"> Booking & Payment Details</Link></li>
              </ul>
            </div>
            </div>
            <div className="col-lg-8">
              <div className="dashboard-right-wrap ead-wrap">
                    <div className="main-inner-box">
                   
                      <div className="pageTitle title-fix sm">
                        <h2>Account Details</h2></div>
                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Email Address</label>
                        </div>
                        <div className="col-lg-7">
                          <input type="text" className="form-control" placeholder="timothylim@gmail.com"/> </div>
                      </div>
                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Password </label>
                        </div>
                        <div className="col-lg-7">
                          <input type="Password" className="form-control" placeholder="Password"/> </div>
                      </div>
                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Confirm Password</label>
                        </div>
                        <div className="col-lg-7">
                          <input type="Password" className="form-control" placeholder="Confirm Password"/> </div>
                      </div>
                      
                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>SMS Contact Number</label>
                        </div>
                        <div className="col-lg-7">
                          <input type="text" className="form-control" placeholder="+65 9123 456789"/> </div>
                      </div>
                    <div className="row mt20 justify-content-end">
                      <div className="col-auto"><button type="button" className="custom-button">SAVE</button></div>
                    </div>
                    
                  
              </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
      
      <div className="footer-space"></div>
      <div className="clear"></div>
    </div>

    <div className="clear"></div>
    <div className="pushContainer"></div>
    <div className="clear"></div>
  </div>
<Footer/>
<QuickSearch/>
  </div>
  );
};

export default EmployerAccount;