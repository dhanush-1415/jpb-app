import React,{useState,useEffect} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import QuickSearch from '../Quicksearch';
import { Link } from 'react-router-dom';



const HelperExperience = () => {
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
   
      <section className="fullcontainer dashboard helper-experience-details hexd-page" data-aos="fade-up">
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
              <div className="dashboard-right-wrap hexd-wrap">
                <div className="main-inner-box">
                  <div className="pageTitle title-fix sm"><h2>Experience Details</h2></div>
                   <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Country</label>
                              </div>
                              <div className="col-lg-7">
                                 <select>
                                  <option>Please Select</option>
                                  <option>Year</option>
                                </select>
                              </div>
                            </div>

                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Start Date</label>
                              </div>
                              <div className="col-lg-7">
                                <div className="inrow date-wrap datepicker-wrap">
                                  <input type="text" className="form-control datepicker" placeholder="DD/MM/YYYY"/> <i className="fas fa-calendar-alt"></i> 
                          </div>
                              </div>
                            </div>

                             <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>End Date</label>
                              </div>
                              <div className="col-lg-7">
                                <div className="inrow date-wrap datepicker-wrap">
                                  <input type="text" className="form-control datepicker" placeholder="DD/MM/YYYY"/> <i className="fas fa-calendar-alt"></i> 
                          </div>
                              </div>
                            </div>

                            <div className="row form-group ">
                              <div className="col-lg-5">
                                <label>Duty</label>
                              </div>
                              <div className="col-lg-7">
                                <textarea className="form-control" placeholder="Duty"></textarea>
                              </div>
                            </div>
                            <div className="row form-group">
                              <div className="col-lg-5">
                                <label>Reason of Leaving  </label>
                              </div>
                              <div className="col-lg-7">
                                <textarea className="form-control" placeholder="Reason of Leaving"></textarea>
                              </div>
                            </div>
                            <div className="row form-group">
                              <div className="col-lg-5">
                                <label>Testimonial</label>
                              </div>
                              <div className="col-lg-7">
                                <textarea className="form-control" placeholder="Testimonial"></textarea>
                              </div>
                            </div>
                            <div className="row form-group align-items-center">
                        <div className="col-lg-12">
                          <button name="add-more" className="add-more"><i className="fas fa-plus"></i> Add More</button>
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

export default HelperExperience;