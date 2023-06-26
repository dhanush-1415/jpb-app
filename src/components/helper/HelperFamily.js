import React,{useState,useEffect} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import QuickSearch from '../Quicksearch';
import { Link } from 'react-router-dom';



const HelperFamily = () => {
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
     
      
      <section className="fullcontainer dashboard helper-family-details hfd-page" data-aos="fade-up">
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
              <div className="dashboard-right-wrap hfd-wrap">
                    <div className="main-inner-box">
                      <div className="pageTitle title-fix sm">
                        <h2>Family Background</h2>
                      </div>
                     
                <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Father Occupation</label>
                              </div>
                              <div className="col-lg-7">
                                <input type="text" className="form-control" placeholder="Occupation"/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Mother Occupation</label>
                              </div>
                              <div className="col-lg-7">
                                <input type="text" className="form-control" placeholder="Occupation"/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Father Age</label>
                              </div>
                              <div className="col-lg-3">
                                <input type="text" className="form-control" placeholder="Age"/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Mother Age</label>
                              </div>
                              <div className="col-lg-3">
                                <input type="text" className="form-control" placeholder="Age"/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Siblings Position</label>
                              </div>
                              <div className="col-lg-3">
                                <input type="text" className="form-control" placeholder="Position"/> </div>
                            </div>
                            
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>No. of Brother</label>
                              </div>
                              <div className="col-lg-3">
                                <input type="text" className="form-control" placeholder="No."/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>No. of Sister</label>
                              </div>
                              <div className="col-lg-3">
                                <input type="text" className="form-control" placeholder="No."/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Brother Age</label>
                              </div>
                              <div className="col-lg-3">
                                <input type="text" className="form-control" placeholder="No."/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Sister Age</label>
                              </div>
                              <div className="col-lg-3">
                                <input type="text" className="form-control" placeholder="No."/> </div>
                            </div>
                           
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Husband Name</label>
                              </div>
                              <div className="col-lg-7">
                                <input type="text" className="form-control" placeholder="Husband Name"/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Husband Occupation</label>
                              </div>
                              <div className="col-lg-7">
                                <input type="text" className="form-control" placeholder="Husband Occupation"/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Husband Age</label>
                              </div>
                              <div className="col-lg-3">
                                <input type="text" className="form-control" placeholder="Age"/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>No. Of Children</label>
                              </div>
                              <div className="col-lg-3">
                                <input type="text" className="form-control" placeholder="No."/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Child Age</label>
                              </div>
                              <div className="col-lg-3">
                                <input type="text" className="form-control" placeholder="Age"/> </div>
                            </div> 
                        <div className="od-upload-section size-14">
                        <p>Upload Family List, ID, Birth Cert/Marriage Cert</p>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="upload-area">
                              <div className="file-upload">
                                <div id="start">
                                  <img src="images/upload-icon.png" alt=""/>
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

export default HelperFamily;