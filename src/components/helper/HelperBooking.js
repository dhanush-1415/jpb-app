import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import QuickSearch from '../Quicksearch';
import { Link } from 'react-router-dom';



const HelperBooking = () => {
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
      
      <section className="fullcontainer dashboard helper-booking-details hbd-page" data-aos="fade-up">
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
                <li><Link to="/helpercontact"> Contact Details</Link></li>
                <li><Link to="/helperfamily">Family Background</Link></li>
                <li className="active"><Link to="/helperbooking"> Booking Related Info</Link></li>
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
              <div className="dashboard-right-wrap hbd-wrap">
                    <div className="main-inner-box">
                      <div className="pageTitle title-fix sm">
                        <h2>Booking Related Info</h2>
                      </div>
                     
                <div className="row form-group align-items-center justify-content-between">
                              <div className="col-lg-auto ml-auto">
                                  <div className="ehp-status row justify-content-between">
                                    <div className="col-lg-auto"><span>Status:</span></div>
                                    <div className="col-lg-auto">
                                    <div className="e-stts available">Available</div>
                                    </div>
                                  </div>
                              </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Placement Fees ($)</label>
                              </div>
                              <div className="col-lg-7">
                                <input type="text" className="form-control" placeholder="Placement Fees ($)" readonly/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Basic Salary ($)</label>
                              </div>
                              <div className="col-lg-7">
                                <input type="text" className="form-control" placeholder="Basic Salary ($)"/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Off Day Daily Rate ($)</label>
                              </div>
                              <div className="col-lg-7">
                                <input type="text" className="form-control" placeholder="Off Day Daily Rate ($)"/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Helper Fee ($)</label>
                              </div>
                              <div className="col-lg-7">
                                <input type="text" className="form-control" placeholder="Helper Fee ($)" readonly/> </div>
                            </div>
                            
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Pocket Money ($)</label>
                              </div>
                              <div className="col-lg-7">
                                <input type="text" className="form-control" placeholder="Pocket Money ($)" readonly/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Select Off Days</label>
                              </div>
                              <div className="col-lg-7">
                                 <select disabled>
                                  <option>Monthly</option>
                                  <option>Year</option>
                                </select>
                              </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Enter Off Days</label>
                              </div>
                              <div className="col-lg-7">
                                <input type="text" className="form-control" placeholder="Enter Off Days" readonly/> </div>
                            </div>
                           
                            <div className="row mb15 sub-title-row form-group align-items-center">
                              <div className="col-lg-12">
                                <h6>Availability of FDW to be Interview by Prospective Employer</h6>
                              </div>
                            </div>
                            
                       <div className="row form-group select-group select-slot-group align-items-center">
                        <div className="col-lg-5">
                          <label>Avaialable Time (SGT)</label>
                        </div>
                        <div className="col-lg-7">
                          <select multiple className="selectpicker form-control" id="number-multiple" data-virtual-scroll="true">
                          <option>Morning Slot 1 : 09 AM to 09:30 AM</option>
                          <option>Morning Slot 1 : 09:30 AM to 10:00 AM</option>
                                  <option>Morning Slot 1 : 10: AM to 10:30 AM</option>
                                  <option>Morning Slot 2 : 10:30 AM to 11 AM</option>
                                  <option>Morning Slot 3 : 11 AM to 11:30 AM</option>
                                  <option>Morning Slot 4 : 11:30 AM to 12 PM</option>
                                  <option>Afternoon Slot 1 : 12 PM to 12:30 PM</option>
                                  <option>Afternoon Slot 2 : 12:30 PM to 1 PM</option>
                                  <option>Afternoon Slot 3 : 1 PM to 1:30 PM</option>
                                  <option>Afternoon Slot 4 : 1:30 PM to 2 PM</option>
                                  <option>Afternoon Slot 5 : 2 PM to 2:30 PM</option>
                                  <option>Afternoon Slot 6 : 2:30 PM to 3 PM</option>
                                  <option>Afternoon Slot 7 : 3 PM to 3:30 PM</option>
                                  <option>Afternoon Slot 8 : 3 :30 PM to 4 PM</option>
                                  <option>Afternoon Slot 9 : 4 PM to 4:30 PM</option>
                                  <option>Afternoon Slot 10 : 4:30 PM to 5 PM</option>
                                  <option>Afternoon Slot 11 : 5 PM to 5:30 PM</option>
                                  <option>Afternoon Slot 12 : 5:30 PM to 6 PM</option>
                                </select>
                        </div>
                      </div>

                      <div className="row form-group align-items-center">
                        <div className="col-lg-12">
                          <button name="add-more" className="add-more"><i className="fas fa-plus"></i> Add More</button>
                        </div>
                      </div>
                      <div className="row form-group">
                              <div className="col-lg-5">
                                <label>Other Remarks</label>
                              </div>
                              <div className="col-lg-7">
                                <textarea className="form-control" placeholder="Other Remarks"></textarea>
                              </div>
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

export default HelperBooking;