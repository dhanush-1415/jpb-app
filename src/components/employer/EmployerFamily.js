import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import QuickSearch from '../Quicksearch';

import { Link } from 'react-router-dom';



const EmployerFamily = () => {
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
      
      <section className="fullcontainer dashboard efml-page" data-aos="fade-up">
        <div className="inner-container-md">
        <div className="container">
          <div className="pageTitle md"><h2>Employer Dashboard</h2></div>
          <div className="row">
            <div className="col-lg-auto mb-991-30"> 
              <div className="sidebar">
              <div className="sidebar-title"><h5>Hi Timothy,</h5></div>
              <a className="btn-control-notext show-lg" href="#nav">Select</a>
              <ul id="nav" className="nav-1 hide-lg">
              <li><Link to="/employeraccount">Account Details</Link></li>
                <li><Link to="/employerprofile">Personal Profile Details</Link></li>
                <li><Link to="/employercontact"> Contact Details</Link></li>
                <li><Link to="/employeraddress">Address</Link></li>
                <li className="active"><Link to="/employerfamily">Family Details & Job Scope</Link></li>
                <li><Link to="/employerInterview"> Interview Appointment Details</Link></li>
                <li><Link to="/employerbooking"> Booking & Payment Details</Link></li>
              </ul>
            </div>
            </div>
            <div className="col-lg-8">
              <div className="dashboard-right-wrap efml-wrap">
                    <div className="main-inner-box">
                      <div className="pageTitle title-fix sm">
                        <h2>Family Details</h2></div>
                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Name</label>
                        </div>
                        <div className="col-lg-7">
                          <input type="text" className="form-control" placeholder="Name"/> </div>
                      </div>
                      <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Relationship</label>
                              </div>
                              <div className="col-lg-7">
                                <select>
                                  <option>Please Select</option>
                                  <option>Select</option>
                                  <option>Select</option>
                                </select>
                              </div>
                            </div>
                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>NRIC / FIN</label>
                        </div>
                        <div className="col-lg-7">
                          <input type="text" className="form-control" placeholder="NRIC / FIN"/> </div>
                      </div>
                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Date of Birth</label>
                        </div>
                        <div className="col-lg-7">
                          <div className="inrow date-wrap datepicker-wrap">
                                  <input type="text" className="form-control datepicker" placeholder="DD/MM/YYYY" /> <i className="fas fa-calendar-alt"></i> 
                          </div> 
                        </div>
                      </div>
                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Title</label>
                        </div>
                        <div className="col-lg-7">
                          <input type="text" className="form-control" placeholder="Title"/> </div>
                      </div>
                      <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Nationality</label>
                              </div>
                              <div className="col-lg-7">
                                <select>
                                  <option>Please Select</option>
                                  <option>Select</option>
                                  <option>Select</option>
                                </select>
                              </div>
                            </div>
                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Passport</label>
                        </div>
                        <div className="col-lg-7">
                          <input type="text" className="form-control" placeholder="Passport"/> </div>
                      </div>
                      
                      

                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Passport Expiry</label>
                        </div>
                        <div className="col-lg-7">
                          <div className="inrow date-wrap datepicker-wrap">
                                  <input type="text" className="form-control datepicker" placeholder="DD/MM/YYYY" /> <i className="fas fa-calendar-alt"></i> 
                          </div> 
                        </div>
                      </div>

                      <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Gender</label>
                              </div>
                              <div className="col-lg-7">
                                <select>
                                  <option>Male</option>
                                  <option>Female</option>
                                </select>
                              </div>
                            </div>
                           
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Residential Status</label>
                              </div>
                              <div className="col-lg-7">
                                <input type="text" className="form-control" placeholder="Residential Status"/> </div>
                              </div>

                              <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Occupation</label>
                              </div>
                              <div className="col-lg-7">
                                <select>
                                  <option>Please Select</option>
                                  <option>Occupation</option>
                                </select>
                              </div>
                            </div>
                           
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Employed</label>
                              </div>
                              <div className="col-lg-7">
                                <div className="radio-inline">
                                  <div className="radio">
                                    <label>
                                      <input type="radio" name="r1"/> <span>Yes</span></label>
                                  </div>
                                  <div className="radio">
                                    <label>
                                      <input type="radio" name="r1"/> <span>No</span></label>
                                  </div>
                                </div>
                              </div>
                            </div>
                           

                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Company Name</label>
                              </div>
                              <div className="col-lg-7">
                                <input type="text" className="form-control" placeholder="Company Name"/> </div>
                              </div>


                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Monthly Income ($)</label>
                              </div>
                              <div className="col-lg-7">
                                <select>
                                  <option>Please Select</option>
                                  <option>option-2</option>
                                </select>
                              </div>
                            </div>

                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Annual Income ($)</label>
                              </div>
                              <div className="col-lg-7">
                                <select>
                                  <option>Please Select</option>
                                  <option>option-2</option>
                                </select>
                              </div>
                            </div>

                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Year of Assessment</label>
                              </div>
                              <div className="col-lg-7">
                                <select>
                                  <option>Please Select</option>
                                  <option>option-2</option>
                                </select>
                              </div>
                            </div>

                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Mobile No.</label>
                              </div>
                              <div className="col-lg-7">
                                <input type="text" className="form-control" placeholder="Mobile No."/> </div>
                              </div>

                              <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Email</label>
                              </div>
                              <div className="col-lg-7">
                                <input type="text" className="form-control" placeholder="Email"/> </div>
                              </div>

                              <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Other No.</label>
                              </div>
                              <div className="col-lg-7">
                                <input type="text" className="form-control" placeholder="Other No."/> </div>
                              </div>

                              <div className="row form-group align-items-center">
                                <div className="col-lg-12">
                                  <button name="add-more" className="add-more"><i className="fas fa-plus"></i> Add More</button>
                                </div>
                              </div>


                            
              </div>
              <div className="main-inner-box">
                      <div className="pageTitle title-fix sm">
                        <h2>Job Scopes</h2></div>
                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Housing Type</label>
                        </div>
                        <div className="col-lg-7">
                          <select>
                                  <option>Landed Property</option>
                                  <option>Select</option>
                                </select>
                        </div>
                      </div>
                      <div className="row select-group form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Expected Job Scope</label>
                              </div>
                              <div className="col-lg-7">
                                <select multiple className="selectpicker form-control" id="number-multiple" data-virtual-scroll="true">
                                  <option>Household Chores</option>
                                  <option>Cooking</option>
                                  <option>Looking after age person in the household</option>
                                  <option>Constact attaention is required</option>
                                  <option>Babysitting</option>
                                  <option>Child - minding</option>
                                  <option>Others</option>
                                </select>
                              </div>
                            </div>
                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Number of Bedroom in the house</label>
                        </div>
                        <div className="col-lg-7">
                           <input type="text" className="form-control" placeholder="Number of Bedroom in the house" /> 
                        </div>
                      </div>

                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Helper Sleeping Area</label>
                        </div>
                        <div className="col-lg-7">
                           <input type="text" className="form-control" placeholder="Helper Sleeping Area" /> 
                        </div>
                      </div>
                   
                      <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Other Family Member staying in the house</label>
                              </div>
                              <div className="col-lg-7">
                                <textarea className="form-control" placeholder="Other Family Member staying in the house"></textarea>
                              </div>
                            </div>     
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Remarks</label>
                              </div>
                              <div className="col-lg-7">
                                <textarea className="form-control" placeholder="Remarks"></textarea>
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

export default EmployerFamily;