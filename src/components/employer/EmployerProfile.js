import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import QuickSearch from '../Quicksearch';
import { Link } from 'react-router-dom';



const EmployerProfile = () => {
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
     
      <section className="fullcontainer dashboard eppd-page" data-aos="fade-up">
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
                <li className="active"><Link to="/employerprofile">Personal Profile Details</Link></li>
                <li><Link to="/employercontact"> Contact Details</Link></li>
                <li><Link to="/employeraddress">Address</Link></li>
                <li><Link to="/employerfamily">Family Details & Job Scope</Link></li>
                <li><Link to="/employerInterview"> Interview Appointment Details</Link></li>
                <li><Link to="/employerbooking"> Booking & Payment Details</Link></li>
              </ul>
            </div>
            </div>
            <div className="col-lg-8">
              <div className="dashboard-right-wrap eppd-wrap">
                    <div className="main-inner-box">
                      <div className="pageTitle title-fix sm">
                        <h2>Personal Profile Details</h2></div>
                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Employer Name</label>
                        </div>
                        <div className="col-lg-7">
                          <input type="text" className="form-control" placeholder="Employer Name"/> </div>
                      </div>
                      <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Nationality</label>
                              </div>
                              <div className="col-lg-7">
                                <select>
                                  <option>Singaporean</option>
                                  <option>Indian</option>
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
                          <label>Passport</label>
                        </div>
                        <div className="col-lg-7">
                          <input type="text" className="form-control" placeholder="Passport"/> </div>
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
                          <label>IC Issue Date</label>
                        </div>
                        <div className="col-lg-7">
                          <div className="inrow date-wrap datepicker-wrap">
                                  <input type="text" className="form-control datepicker" placeholder="DD/MM/YYYY" /> <i className="fas fa-calendar-alt"></i> 
                          </div> 
                        </div>
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
                                <label>Race</label>
                              </div>
                              <div className="col-lg-7">
                                <select>
                                  <option>Chinese</option>
                                  <option>option-2</option>
                                </select>
                              </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Residential Status</label>
                              </div>
                              <div className="col-lg-7">
                                <select>
                                  <option>Singaporean Citizen</option>
                                  <option>option-2</option>
                                </select>
                              </div>
                            </div>
                            
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Marital Status</label>
                              </div>
                              <div className="col-lg-7">
                                <select>
                                  <option>Married</option>
                                  <option>option-2</option>
                                </select>
                              </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Religion</label>
                              </div>
                              <div className="col-lg-7">
                                <select>
                                  <option>Buddhist</option>
                                  <option>option-2</option>
                                </select>
                              </div>
                            </div>
                            
              </div>
              <div className="main-inner-box">
                      <div className="pageTitle title-fix sm">
                        <h2>Other Details</h2></div>
                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Occupation</label>
                        </div>
                        <div className="col-lg-7">
                          <select>
                                  <option>Professional</option>
                                  <option>Select</option>
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
                                <label>Refferal Method</label>
                              </div>
                              <div className="col-lg-7">
                                <select>
                                  <option>Walk In</option>
                                  <option>Select</option>
                                </select>
                              </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Combined Income ($)</label>
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
                                <label>Monthly Income</label>
                              </div>
                              <div className="col-lg-7">
                                <select>
                                  <option>Above $25,000</option>
                                  <option>Select</option>
                                </select>
                              </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Year of Assesment</label>
                              </div>
                              <div className="col-lg-7">
                                <select>
                                  <option>2005</option>
                                  <option>2003</option>
                                </select>
                              </div>
                            </div>
                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>No of Bedroom</label>
                        </div>
                        <div className="col-lg-4">
                          <input type="text" className="form-control" placeholder="No of Bedroom"/> </div>
                      </div>
                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>No. of Toilet</label>
                        </div>
                        <div className="col-lg-4">
                          <input type="text" className="form-control" placeholder="No. of Toilet"/> </div>
                      </div>

                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Clean Window Exterior</label>
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
                           <input type="text" className="form-control" placeholder="Company Name" /> 
                        </div>
                      </div>

                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Marriage Registered in SG</label>
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
                          <label>Annual Income ($)</label>
                        </div>
                        <div className="col-lg-7">
                           <input type="text" className="form-control" placeholder="Annual Income ($)" /> 
                        </div>
                      </div>
                      <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Type of Residence</label>
                              </div>
                              <div className="col-lg-7">
                                <select>
                                  <option>Married</option>
                                  <option>option-2</option>
                                </select>
                              </div>
                            </div>      
                        
              </div>
              <div className="main-inner-box">
                      <div className="pageTitle title-fix sm">
                        <h2>Other Details</h2></div>
                      <div className="od-upload-section size-14">
                        <p>Upload NRIC/Passport/Tentancy Agreement (for foreigner)</p>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="upload-area">
                              <div className="file-upload">
                                <div id="start">
                                  <img src="images/upload-icon.png" alt="" />
                                  <div className="upload-inner-info">Click here to upload Photo/Video</div>
                                </div>
                              </div>
                              <div className="upload-inner-info">File Type: PDF/JPEG/DOC</div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="file-status-row">
                              <a href="#" className="file-close"><i className="far fa-times-circle"></i></a>
                              <div className="upload-file-name">Passport.PDF</div>
                              <div className="progress">
  <div className="progress-bar" role="progressbar" style={{'width': '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
                              <div className="upload-file-status">uploading...</div>
                            </div>
                            <div className="file-status-row">
                              <a href="#" className="file-close"><i className="fas fa-times-circle"></i></a>
                              <div className="upload-file-name">Passport.PDF</div>
                              <div className="progress">
  <div className="progress-bar" role="progressbar" style={{'width': '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
                              <div className="upload-file-status">upload complete</div>
                            </div>
                            <div className="file-status-row">
                              <a href="#" className="file-close"><i className="far fa-times-circle"></i></a>
                              <div className="upload-file-name">ID.docx</div>
                              <div className="progress">
  <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>
                              <div className="upload-file-status">uploading</div>
                            </div>
                            <div className="file-status-row">
                              <a href="#" className="file-close"><i className="fas fa-times-circle"></i></a>
                              <div className="upload-file-name">ID.docx</div>
                              <div className="progress">
  <div className="progress-bar" role="progressbar" style={{'width': '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
                              <div className="upload-file-status">uploaded</div>
                            </div>
                          </div>
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

export default EmployerProfile;