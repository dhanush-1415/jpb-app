import React,{useState,useEffect} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import QuickSearch from '../Quicksearch';
import { Link } from 'react-router-dom';



const HelperProfileDetail = () => {
  const [selectedLink, setSelectedLink] = useState('/');

  // const navigate = useNavigate();
  useEffect(() => {
    setSelectedLink(window.location.pathname);
  }, []);

  const handleLinkClick = (link) => {
    //navigate(link);
    window.location.href = link
    setSelectedLink(link);
  };
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
     
      <section className="fullcontainer dashboard helper-bio-profile hbp-page" data-aos="fade-up">
        <div className="inner-container-md">
        <div className="container">
          <div className="pageTitle md"><h2>Helper Dashboard</h2></div>
          <div className="row">
            <div className="col-lg-auto mb-991-30"> 
              <div className="sidebar">
              <div className="sidebar-title"><h5>Hi Samantha,</h5></div>
              <a className="btn-control-notext show-lg" href="#nav">Select</a>
              <ul id="nav" className="nav-1 hide-lg">
             
              <li className={selectedLink === '/helperaccount' ? 'active' : ''}><Link to="/helperaccount" onClick={() => { handleLinkClick('/helperaccount');}}>Account</Link></li>
              <li className={selectedLink === '/helperprofiledetail' ? 'active' : ''}><Link to="/helperprofiledetail" onClick={() => { handleLinkClick('/helperprofiledetail');}}>Bio Profile Details</Link></li>
                <li className={selectedLink === '/helpercontact' ? 'active' : ''}><Link to="/helpercontact" onClick={() => { handleLinkClick('/helpercontact');}}> Contact Details</Link></li>
                <li className={selectedLink === '/helperfamily' ? 'active' : ''}><Link to="/helperfamily" onClick={() => { handleLinkClick('/helperfamily');}}>Family Background</Link></li>
                <li className={selectedLink === '/helperbooking' ? 'active' : ''}><Link to="/helperbooking" onClick={() => { handleLinkClick('/helperbooking');}}> Booking Related Info</Link></li>
                <li className={selectedLink === '/helperinterview' ? 'active' : ''}><Link to="/helperinterview" onClick={() => { handleLinkClick('/helperinterview');}}> Interview Appointment Details</Link></li>
                <li className={selectedLink === '/helpereducation' ? 'active' : ''}><Link to="/helpereducation" onClick={() => { handleLinkClick('/helpereducation');}}>Education Details</Link></li>
                <li className={selectedLink === '/helperexperience' ? 'active' : ''}><Link to="/helperexperience" onClick={() => { handleLinkClick('/helperexperience');}}>Experience Details</Link></li>
                <li className={selectedLink === '/helperlanguage' ? 'active' : ''}><Link to="/helperlanguage" onClick={() => { handleLinkClick('/helperlanguage');}}>Language Details</Link></li>
                <li className={selectedLink === '/helpermedical' ? 'active' : ''}><Link to="/helpermedical" onClick={() => { handleLinkClick('/helpermedical');}}>Medical Details</Link></li>
                <li className={selectedLink === '/helperskill' ? 'active' : ''}><Link to="/helperskill" onClick={() => { handleLinkClick('/helperskill');}}>Skills Details</Link></li>
              </ul>
            </div>
            </div>
            <div className="col-lg-8">
              <div className="dashboard-right-wrap hbp-wrap">
                <div className="data-collapse-box">
                      <div className="card-header"> <a className="collapsed" data-toggle="collapse" href="#edf-1" role="button" aria-expanded="false" aria-controls="edf-1">1. Helper Bio Details</a> </div>
                      <div className="collapse" id="edf-1">
                        <div className="card card-body">
                         <div className="form-data-wrap">
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Profile Photo/Video</label>
                              </div>
                              <div className="col-lg-6">
                                <div className="upload-area">
                                  <div className="file-upload">
                                    <div id="start">
                                      <img src="images/upload-icon-highlight.png" alt=""/>
                                      <div className="upload-inner-info">Click here to upload Photo/Video</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Name</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="Name"/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>FIN No.</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="Your NRIC / FIN"/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Nationality</label>
                              </div>
                              <div className="col-lg-6">
                                <select>
                                  <option>Indonesian</option>
                                  <option>Select</option>
                                  <option>Select</option>
                                </select>
                              </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Passport No.</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="Passport No."/> </div>
                            </div>
                            

                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Passport Issue Place</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="Passport Issue Place"/> </div>
                            </div>

                            <div className="row form-group align-items-center">
                        <div className="col-lg-3">
                          <label>Passport Expiry Date</label>
                        </div>
                        <div className="col-lg-6">
                          <div className="inrow date-wrap datepicker-wrap">
                                  <input type="text" className="form-control datepicker" placeholder="DD/MM/YYYY" /> <i className="fas fa-calendar-alt"></i> 
                          </div> 
                        </div>
                      </div>

                      <div className="row form-group align-items-center">
                        <div className="col-lg-3">
                          <label>Passport Issue Date</label>
                        </div>
                        <div className="col-lg-6">
                          <div className="inrow date-wrap datepicker-wrap">
                                  <input type="text" className="form-control datepicker" placeholder="DD/MM/YYYY" /> <i className="fas fa-calendar-alt"></i> 
                          </div> 
                        </div>
                      </div>

                      <div className="row form-group align-items-center">
                        <div className="col-lg-3">
                          <label>Work Permit No.</label>
                        </div>
                        <div className="col-lg-6">
                          <input type="text" className="form-control" placeholder="Passport Issue Place"/> 
                        </div>
                      </div>

                      <div className="row form-group align-items-center">
                        <div className="col-lg-3">
                          <label>Work Permit Expiry</label>
                        </div>
                        <div className="col-lg-6">
                          <div className="inrow date-wrap datepicker-wrap">
                                  <input type="text" className="form-control datepicker" placeholder="Work Permit No." /> <i className="fas fa-calendar-alt"></i> 
                          </div> 
                        </div>
                      </div>

                      <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Religion</label>
                              </div>
                              <div className="col-lg-6">
                                <select>
                                  <option>Others</option>
                                  <option>option-2</option>
                                </select>
                              </div>
                            </div>

                            <div className="row form-group align-items-center">
                        <div className="col-lg-3">
                          <label>Date of Birth</label>
                        </div>
                        <div className="col-lg-6">
                          <div className="inrow date-wrap datepicker-wrap">
                                  <input type="text" className="form-control datepicker" placeholder="DD/MM/YYYY" /> <i className="fas fa-calendar-alt"></i> 
                          </div> 
                        </div>
                        
                      </div>

                      <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Martial Status</label>
                              </div>
                              <div className="col-lg-6">
                                <select>
                                  <option>Others</option>
                                  <option>option-2</option>
                                </select>
                              </div>
                            </div>


                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Birth Place</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="Passport Issue Place"/> </div>
                            </div>

                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Specialization/Preference</label>
                              </div>
                              <div className="col-lg-6">
                                <select>
                                  <option>Caregiver</option>
                                  <option>option-2</option>
                                </select>
                              </div>
                            </div>


                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Repatraite Airport</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder=""/> </div>
                            </div>

                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Status</label>
                              </div>
                              <div className="col-lg-6">
                                <select>
                                  <option>Incoming Only</option>
                                  <option>option-2</option>
                                </select>
                              </div>
                            </div>

                             <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Other Info</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder=""/> 
                              </div>
                            </div>

                             <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Direct Hire</label>
                              </div>
                              <div className="col-lg-6">
                                      <div className="radio-inline">
                                        <div className="radio">
                                          <label>
                                            <input type="radio" checked name="r1"/> <span>Yes</span></label>
                                        </div>
                                        <div className="radio">
                                          <label>
                                            <input type="radio" name="r1"/> <span>No</span></label>
                                        </div>
                                      </div>
                                    </div>
                            </div>

                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Training Center</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder=""/> </div>
                            </div>



                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="data-collapse-box">
                      <div className="card-header"> <a className="collapsed" data-toggle="collapse" href="#edf-2" role="button" aria-expanded="false" aria-controls="edf-2">2. Physical Attributes</a> </div>
                      <div className="collapse" id="edf-2">
                        <div className="card card-body">
                         <div className="form-data-wrap">
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Complexion</label>
                              </div>
                              <div className="col-lg-6">
                                <select>
                                  <option>Dark</option>
                                  <option>Select</option>
                                  <option>Select</option>
                                </select>
                              </div>
                            </div>
                            
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Height</label>
                              </div>
                              <div className="col-lg-6">
                                <div className="row inner-form-group">
                                  <div className="col-lg-6">
                                    <div className="row gutters-5 align-items-center">
                                      <div className="col-lg-8">
                                         <input type="text" className="form-control" placeholder="CM"/> 
                                      </div>
                                      <div className="col-lg-4">
                                        <label>CM</label>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                   <div className="row gutters-5 align-items-center">
                                      <div className="col-lg-8">
                                         <input type="text" className="form-control" placeholder="Feet"/> 
                                      </div>
                                      <div className="col-lg-4">
                                        <label>Feet</label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Weight</label>
                              </div>
                              <div className="col-lg-6">
                                <div className="row inner-form-group">
                                  <div className="col-lg-6">
                                    <div className="row gutters-5 align-items-center">
                                      <div className="col-lg-8">
                                         <input type="text" className="form-control" placeholder="KG"/> 
                                      </div>
                                      <div className="col-lg-4">
                                        <label>KG</label>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                   <div className="row gutters-5 align-items-center">
                                      <div className="col-lg-8">
                                         <input type="text" className="form-control" placeholder="Pound"/> 
                                      </div>
                                      <div className="col-lg-4">
                                        <label>Pounds</label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            

                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="main-inner-box">
                      <div className="pageTitle title-fix sm">
                        <h2>Other Details</h2></div>
                      <div className="od-upload-section size-14">
                        <p>Upload Passport/ Work Permit</p>
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

export default HelperProfileDetail;