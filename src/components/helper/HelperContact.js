import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import QuickSearch from '../Quicksearch';
import { Link } from 'react-router-dom';



const HelperContact = () => {
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
            <figure><img src="images/banner-helper-dashboard.jpg" alt="JPB"/></figure>
          </div>
        </div>
        <div className="home-banner-bottom-bg inner-banner-shape"> <img src="images/inner-banner-shape.png" alt=""/> </div>
      </div>
      <div className="clear"></div>
      
      <section className="fullcontainer dashboard helper-contact-details hcd-page" data-aos="fade-up">
        <div className="inner-container-md">
        <div className="container">
          <div className="pageTitle md"><h2>Helper Dashboard</h2></div>
          <div className="row">
            <div className="col-lg-auto mb-991-30"> 
              <div className="sidebar">
              <div className="sidebar-title"><h5>Hi Samantha,</h5></div>
              <a className="btn-control-notext show-lg" href="#nav">Select</a>
              <ul id="nav" className="nav-1 hide-lg">
              <li><Link to="/helperprofile">Bio Profile Details</Link></li>
                <li className="active"><Link to="/helpercontact"> Contact Details</Link></li>
                <li><Link to="/helperfamily">Family Background</Link></li>
                <li><Link to="/helperbooking"> Booking Related Info</Link></li>
                <li><Link to="/helperinterview"> Interview Appointment Details</Link></li>
                <li><Link to="/helpereducation">Education Details</Link></li>
                <li><Link to="/helperexperience">Experience Details</Link></li>
                <li><Link to="/helperlanguage">Language Details</Link></li>
                <li ><Link to="/helpermedical">Medical Details</Link></li>
                <li><Link to="/helperskill">Skills Details</Link></li>
              </ul>
            </div>
            </div>
            <div className="col-lg-8">
              <div className="dashboard-right-wrap hct-wrap">
                    <div className="main-inner-box">
                      <div className="pageTitle title-fix sm">
                        <h2>Contact Details</h2>
                      </div>
                     <div className="row form-group">
                              <div className="col-lg-5">
                                <label>Home Address</label>
                              </div>
                              <div className="col-lg-7">
                                <textarea className="form-control" placeholder="Postal Code"></textarea>
                              </div>
                            </div>  
                             <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Home Telephone</label>
                        </div>
                        <div className="col-lg-7">
                           <input type="text" className="form-control" placeholder="Home Telephone" /> 
                        </div>
                      </div>   
                       <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Viber</label>
                        </div>
                        <div className="col-lg-7">
                           <input type="text" className="form-control" placeholder="Viber" /> 
                        </div>
                      </div> 
                       <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Facebook</label>
                        </div>
                        <div className="col-lg-7">
                           <input type="text" className="form-control" placeholder="Facebook" /> 
                        </div>
                      </div> 
                            <div className="row mb15 sub-title-row form-group align-items-center">
                        <div className="col-lg-12">
                          <h6>Other Contact</h6>
                        </div>
                      </div>
                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Type</label>
                        </div>
                        <div className="col-lg-7">
                          <input type="text" className="form-control" placeholder="WeChat"/> </div>
                      </div>
                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Contact No</label>
                        </div>
                        <div className="col-lg-7">
                          <input type="text" className="form-control" placeholder="WeChat Account ID/Name"/> </div>
                      </div>

                      <div className="row form-group align-items-center">
                        <div className="col-lg-12">
                          <button name="add-more" className="add-more"><i className="fas fa-plus"></i> Add More</button>
                        </div>
                      </div> 
                      <div className="row mb15 sub-title-row form-group align-items-center">
                              <div className="col-lg-12">
                                <h6>Next of Kin</h6>
                              </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Name</label>
                              </div>
                              <div className="col-lg-7">
                                <input type="text" className="form-control" placeholder="Name"/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Contact Number</label>
                              </div>
                              <div className="col-lg-7">
                                <input type="text" className="form-control" placeholder="Contact Number"/> </div>
                            </div>
                        
              </div>
              <div className="row mt20 justify-content-end">
                      <div className="col-auto"><button type="button" className="custom-button">SAVE</button></div>
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

export default HelperContact;