import React,{useState,useEffect} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import QuickSearch from '../Quicksearch';
import { Link } from 'react-router-dom';



const HelperMedical = () => {
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
     
      <section className="fullcontainer dashboard helper-medical-details hmd-page" data-aos="fade-up">
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
              <div className="dashboard-right-wrap hiad-wrap">
                <div className="main-inner-box">
                  <div className="pageTitle title-fix sm"><h2>Medical Details</h2></div>
               
                  <div className="table-holder md-table Scrollcontent" data-mcs-theme="dark">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>S/No</th>
                              <th>Question</th>
                              <th>Answer</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td> 1 </td>
                              <td> Allergies (if any) </td>
                              <td> <div className="radio-inline">
                                  <div className="radio">
                                    <label>
                                      <input type="radio" name="a1"/> <span>Yes</span></label>
                                  </div>
                                  <div className="radio">
                                    <label>
                                      <input type="radio" name="a1"/> <span>No</span></label>
                                  </div>
                                </div></td>
                             
                            </tr>
                            <tr>
                              <td> 2 </td>
                              <td> Mental illness </td>
                              <td> <div className="radio-inline">
                                  <div className="radio">
                                    <label>
                                      <input type="radio" name="a2"/> <span>Yes</span></label>
                                  </div>
                                  <div className="radio">
                                    <label>
                                      <input type="radio" name="a2"/> <span>No</span></label>
                                  </div>
                                </div></td>
                             
                            </tr>
                            <tr>
                              <td> 3 </td>
                              <td> Epilepsy</td>
                              <td> <div className="radio-inline">
                                  <div className="radio">
                                    <label>
                                      <input type="radio" name="a3"/> <span>Yes</span></label>
                                  </div>
                                  <div className="radio">
                                    <label>
                                      <input type="radio" name="a3"/> <span>No</span></label>
                                  </div>
                                </div></td>
                             
                            </tr>
                            <tr>
                              <td> 4 </td>
                              <td> Asthma </td>
                              <td> <div className="radio-inline">
                                  <div className="radio">
                                    <label>
                                      <input type="radio" name="a4"/> <span>Yes</span></label>
                                  </div>
                                  <div className="radio">
                                    <label>
                                      <input type="radio" name="a4"/> <span>No</span></label>
                                  </div>
                                </div></td>
                             
                            </tr>
                            <tr>
                              <td> 5 </td>
                              <td> Diabetes </td>
                              <td> <div className="radio-inline">
                                  <div className="radio">
                                    <label>
                                      <input type="radio" name="a5"/> <span>Yes</span></label>
                                  </div>
                                  <div className="radio">
                                    <label>
                                      <input type="radio" name="a5"/> <span>No</span></label>
                                  </div>
                                </div></td>
                             
                            </tr>
                            <tr>
                              <td> 6 </td>
                              <td> Hypertension </td>
                              <td> <div className="radio-inline">
                                  <div className="radio">
                                    <label>
                                      <input type="radio" name="a6"/> <span>Yes</span></label>
                                  </div>
                                  <div className="radio">
                                    <label>
                                      <input type="radio" name="a6"/> <span>No</span></label>
                                  </div>
                                </div></td>
                             
                            </tr>
                            <tr>
                              <td> 7 </td>
                              <td> Tuberculosis </td>
                              <td> <div className="radio-inline">
                                  <div className="radio">
                                    <label>
                                      <input type="radio" name="a7"/> <span>Yes</span></label>
                                  </div>
                                  <div className="radio">
                                    <label>
                                      <input type="radio" name="a7"/> <span>No</span></label>
                                  </div>
                                </div></td>
                             
                            </tr>
                            <tr>
                              <td> 8 </td>
                              <td> Heart Disease </td>
                              <td> <div className="radio-inline">
                                  <div className="radio">
                                    <label>
                                      <input type="radio" name="a8"/> <span>Yes</span></label>
                                  </div>
                                  <div className="radio">
                                    <label>
                                      <input type="radio" name="a8"/> <span>No</span></label>
                                  </div>
                                </div></td>
                             
                            </tr>
                            <tr>
                              <td> 9 </td>
                              <td> Malaria </td>
                              <td> <div className="radio-inline">
                                  <div className="radio">
                                    <label>
                                      <input type="radio" name="a9"/> <span>Yes</span></label>
                                  </div>
                                  <div className="radio">
                                    <label>
                                      <input type="radio" name="a9"/> <span>No</span></label>
                                  </div>
                                </div></td>
                             
                            </tr>
                            <tr>
                              <td> 10 </td>
                              <td> Operations </td>
                              <td> 
                                <div className="radio-inline">
                                  <div className="radio">
                                    <label>
                                      <input type="radio" name="a10"/> <span>Yes</span></label>
                                  </div>
                                  <div className="radio">
                                    <label>
                                      <input type="radio" name="a10"/> <span>No</span></label>
                                  </div>
                                </div>
                              </td>
                             
                            </tr>
                            <tr>
                              <td> 11 </td>
                              <td> Others </td>
                              <td className="pl0"><div className="form-group col-lg-8"><input type="text" className="form-control" /></div></td>
                             
                            </tr>
                            <tr>
                              <td> 12 </td>
                              <td> Physcial Disabilities </td>
                              <td className="pl0"><div className="form-group col-lg-8"><input type="text" className="form-control" /></div></td>
                             
                            </tr>
                            <tr className="white-transparent">
                              <td className="valign-top"> 13 </td>
                              <td colSpan="2">  
                                <table className="sub-table">
                                  <tr><td className="pl0" style={{'minWidth': 110+'px'}}>Dietary Restrictions</td></tr>
                                  <tr>
                                    <td className="pl0 ">No Pork</td>
                                    <td>
                                      <div className="radio-inline">
                                        <div className="radio">
                                          <label>
                                            <input type="radio" name="a10"/> <span>Yes</span></label>
                                        </div>
                                        <div className="radio">
                                          <label>
                                            <input type="radio" name="a10"/> <span>No</span></label>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="pl0">No Beef</td>
                                    <td>
                                      <div className="radio-inline">
                                        <div className="radio">
                                          <label>
                                            <input type="radio" name="a11"/> <span>Yes</span></label>
                                        </div>
                                        <div className="radio">
                                          <label>
                                            <input type="radio" name="a11"/> <span>No</span></label>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="pl0">Others</td>
                                    <td className="pl0">
                                      <div className="form-group col-lg-8"><input type="text" className="form-control"/></div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                              
                            </tr>
                            <tr className="tr-dark">
                              <td className="valign-top"> 14 </td>
                              <td colSpan="2">  
                                <table className="sub-table">
                                  <tr className="tr-dark"><td className="pl0" style={{'minWidth': '110px'}}>Food Handing Preference</td></tr>
                                  <tr>
                                    <td className="pl0 ">Yes Pork</td>
                                    <td>
                                      <div className="radio-inline">
                                        <div className="radio">
                                          <label>
                                            <input type="radio" name="a12"/> <span>Yes</span></label>
                                        </div>
                                        <div className="radio">
                                          <label>
                                            <input type="radio" name="a12"/> <span>No</span></label>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr className="tr-dark">
                                    <td className="pl0">Yes Beef</td>
                                    <td>
                                      <div className="radio-inline">
                                        <div className="radio">
                                          <label>
                                            <input type="radio" name="a13"/> <span>Yes</span></label>
                                        </div>
                                        <div className="radio">
                                          <label>
                                            <input type="radio" name="a13"/> <span>No</span></label>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="pl0">Others</td>
                                    <td className="pl0">
                                      <div className="form-group col-lg-8"><input type="text" className="form-control"/></div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                              
                            </tr>
                          </tbody>
                        </table>
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

export default HelperMedical;