import React,{useState,useEffect} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import QuickSearch from '../Quicksearch';
import { Link } from 'react-router-dom';



const HelperSkill = () => {
  const [selectedLink, setSelectedLink] = useState('/');
  const [storedData, setstoreddata] = React.useState([]);
  const [helperName, setHelperName] = useState('');
  const [ishelperloggedin, setishelperloggedin] = React.useState(false);
  // const navigate = useNavigate();
  useEffect(() => {
    setSelectedLink(window.location.pathname);
    let token = localStorage.getItem("helpertoken");
    console.log(token);
    if (token) {
      console.log(token);
      setishelperloggedin(true);
      setstoreddata(JSON.parse(token));
      console.log(storedData);
    }
    console.log(ishelperloggedin);
    console.log(storedData);
   // setHelperName(storedData[0].HelperName);
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
     
      <section className="fullcontainer dashboard helper-skills-details hskd-page" data-aos="fade-up">
        <div className="inner-container-md">
        <div className="container">
          <div className="pageTitle md"><h2>Helper Dashboard</h2></div>
          <div className="row">
            <div className="col-lg-auto mb-991-30"> 
              <div className="sidebar">
              <div className="sidebar-title"><h5>Hi {helperName},</h5></div>
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
                  <div className="pageTitle title-fix sm"><h2>Skills Details</h2></div>
               
                  <div className="table-holder skd-table Scrollcontent" data-mcs-theme="dark">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>S/No</th>
                              <th>Areas Of Work</th>
                              <th>Willingness</th>
                              <th>Experience</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="tr-white">
                              <td className="valign-top number-td"> 1 </td>
                              <td><strong>Care of Infants/children</strong></td>
                              <td>  </td>
                              <td>  </td>
                            </tr>
                            <tr className="tr-white">
                              <td>  </td>
                              <td className="areaw-td">New-born Baby Care (0-2months)</td>
                              <td className="radio-td">
                                <div className="radio-inline">
                                        <div className="radio">
                                          <label>
                                            <input type="radio" name="a1"/> <span>Yes</span></label>
                                        </div>
                                        <div className="radio">
                                          <label>
                                            <input type="radio" name="a1"/> <span>No</span></label>
                                        </div>
                                      </div>
                              </td>
                              <td className="radio-td">
                                <div className="radio-inline">
                                        <div className="radio">
                                          <label>
                                            <input type="radio" name="a2"/> <span>Yes</span></label>
                                        </div>
                                        <div className="radio">
                                          <label>
                                            <input type="radio" name="a2"/> <span>No</span></label>
                                        </div>
                                      </div>
                              </td>
                            </tr>
                            <tr className="tr-white">
                              <td>  </td>
                              <td className="areaw-td">Infant Care (2-17 months)</td>
                              <td className="radio-td">
                                <div className="radio-inline">
                                        <div className="radio">
                                          <label>
                                            <input type="radio" name="a3"/> <span>Yes</span></label>
                                        </div>
                                        <div className="radio">
                                          <label>
                                            <input type="radio" name="a3"/> <span>No</span></label>
                                        </div>
                                      </div>
                              </td>
                              <td className="radio-td">
                                <div className="radio-inline">
                                        <div className="radio">
                                          <label>
                                            <input type="radio" name="a4"/> <span>Yes</span></label>
                                        </div>
                                        <div className="radio">
                                          <label>
                                            <input type="radio" name="a4"/> <span>No</span></label>
                                        </div>
                                      </div>
                              </td>
                            </tr>
                            <tr className="tr-white">
                              <td>  </td>
                              <td className="areaw-td">Toddlers Care (18-30 months)</td>
                              <td className="radio-td">
                                <div className="radio-inline">
                                        <div className="radio">
                                          <label>
                                            <input type="radio" name="a5"/> <span>Yes</span></label>
                                        </div>
                                        <div className="radio">
                                          <label>
                                            <input type="radio" name="a5"/> <span>No</span></label>
                                        </div>
                                      </div>
                              </td>
                              <td className="radio-td">
                                <div className="radio-inline">
                                        <div className="radio">
                                          <label>
                                            <input type="radio" name="a6"/> <span>Yes</span></label>
                                        </div>
                                        <div className="radio">
                                          <label>
                                            <input type="radio" name="a6"/> <span>No</span></label>
                                        </div>
                                      </div>
                              </td>
                            </tr>
                            <tr className="tr-white">
                              <td>  </td>
                              <td className="areaw-td">Child Care (3-10 years)</td>
                              <td className="radio-td">
                                <div className="radio-inline">
                                        <div className="radio">
                                          <label>
                                            <input type="radio" name="a7"/> <span>Yes</span></label>
                                        </div>
                                        <div className="radio">
                                          <label>
                                            <input type="radio" name="a7"/> <span>No</span></label>
                                        </div>
                                      </div>
                              </td>
                              <td className="radio-td">
                                <div className="radio-inline">
                                        <div className="radio">
                                          <label>
                                            <input type="radio" name="a8"/> <span>Yes</span></label>
                                        </div>
                                        <div className="radio">
                                          <label>
                                            <input type="radio" name="a8"/> <span>No</span></label>
                                        </div>
                                      </div>
                              </td>
                            </tr>

                            <tr className="tr-dark">
                              <td className="valign-top number-td"> 2 </td>
                              <td><strong>Care of Elderly</strong></td>
                              <td>  </td>
                              <td>  </td>
                            </tr>
                            <tr className="tr-dark">
                              <td>  </td>
                              <td className="areaw-td">Dementia Care</td>
                              <td className="radio-td">
                                <div className="radio-inline">
                                        <div className="radio">
                                          <label>
                                            <input type="radio" name="a9"/> <span>Yes</span></label>
                                        </div>
                                        <div className="radio">
                                          <label>
                                            <input type="radio" name="a9"/> <span>No</span></label>
                                        </div>
                                      </div>
                              </td>
                              <td className="radio-td tr-dark">
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
                            <tr className="tr-dark">
                              <td>  </td>
                              <td className="areaw-td">Mental Health Condition Care</td>
                              <td className="radio-td">
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
                              <td className="radio-td">
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
                            
                             <tr className="tr-white">
                              <td className="valign-top number-td"> 3 </td>
                              <td><strong>Care of Disabled</strong></td>
                              <td>  </td>
                              <td>  </td>
                            </tr>
                            <tr className="tr-white">
                              <td>  </td>
                              <td className="areaw-td">Stroke Care</td>
                              <td className="radio-td">
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
                              <td className="radio-td">
                                <div className="radio-inline">
                                        <div className="radio">
                                          <label>
                                            <input type="radio" name="a14"/> <span>Yes</span></label>
                                        </div>
                                        <div className="radio">
                                          <label>
                                            <input type="radio" name="a14"/> <span>No</span></label>
                                        </div>
                                      </div>
                              </td>
                            </tr>
                            <tr className="tr-white">
                              <td>  </td>
                              <td className="areaw-td">Postoperative Care</td>
                              <td className="radio-td">
                                <div className="radio-inline">
                                        <div className="radio">
                                          <label>
                                            <input type="radio" name="a15"/> <span>Yes</span></label>
                                        </div>
                                        <div className="radio">
                                          <label>
                                            <input type="radio" name="a15"/> <span>No</span></label>
                                        </div>
                                      </div>
                              </td>
                              <td className="radio-td">
                                <div className="radio-inline">
                                        <div className="radio">
                                          <label>
                                            <input type="radio" name="a16"/> <span>Yes</span></label>
                                        </div>
                                        <div className="radio">
                                          <label>
                                            <input type="radio" name="a16"/> <span>No</span></label>
                                        </div>
                                      </div>
                              </td>
                            </tr>
                            <tr className="tr-white">
                              <td>  </td>
                              <td className="areaw-td">Physical Disability Care</td>
                              <td className="radio-td">
                                <div className="radio-inline">
                                        <div className="radio">
                                          <label>
                                            <input type="radio" name="a17"/> <span>Yes</span></label>
                                        </div>
                                        <div className="radio">
                                          <label>
                                            <input type="radio" name="a17"/> <span>No</span></label>
                                        </div>
                                      </div>
                              </td>
                              <td className="radio-td">
                                <div className="radio-inline">
                                        <div className="radio">
                                          <label>
                                            <input type="radio" name="a18"/> <span>Yes</span></label>
                                        </div>
                                        <div className="radio">
                                          <label>
                                            <input type="radio" name="a18"/> <span>No</span></label>
                                        </div>
                                      </div>
                              </td>
                            </tr>
                            <tr className="tr-white">
                              <td>  </td>
                              <td className="areaw-td">Bedridden Care</td>
                              <td className="radio-td">
                                <div className="radio-inline">
                                        <div className="radio">
                                          <label>
                                            <input type="radio" name="a19"/> <span>Yes</span></label>
                                        </div>
                                        <div className="radio">
                                          <label>
                                            <input type="radio" name="a19"/> <span>No</span></label>
                                        </div>
                                      </div>
                              </td>
                              <td className="radio-td">
                                <div className="radio-inline">
                                        <div className="radio">
                                          <label>
                                            <input type="radio" name="a20"/> <span>Yes</span></label>
                                        </div>
                                        <div className="radio">
                                          <label>
                                            <input type="radio" name="a20"/> <span>No</span></label>
                                        </div>
                                      </div>
                              </td>
                            </tr>


                            <tr>
                              <td> 4 </td>
                              <td> General Housework</td>
                              <td> <div className="radio-inline">
                                  <div className="radio">
                                    <label>
                                      <input type="radio" name="a21"/> <span>Yes</span></label>
                                  </div>
                                  <div className="radio">
                                    <label>
                                      <input type="radio" name="a21"/> <span>No</span></label>
                                  </div>
                                </div></td>
                                <td> <div className="radio-inline">
                                  <div className="radio">
                                    <label>
                                      <input type="radio" name="a22"/> <span>Yes</span></label>
                                  </div>
                                  <div className="radio">
                                    <label>
                                      <input type="radio" name="a22"/> <span>No</span></label>
                                  </div>
                                </div></td>
                             
                            </tr>


                            <tr>
                              <td> 5 </td>
                              <td> Cooking</td>
                              <td> <div className="radio-inline">
                                  <div className="radio">
                                    <label>
                                      <input type="radio" name="a23"/> <span>Yes</span></label>
                                  </div>
                                  <div className="radio">
                                    <label>
                                      <input type="radio" name="a23"/> <span>No</span></label>
                                  </div>
                                </div></td>
                                <td> <div className="radio-inline">
                                  <div className="radio">
                                    <label>
                                      <input type="radio" name="a24"/> <span>Yes</span></label>
                                  </div>
                                  <div className="radio">
                                    <label>
                                      <input type="radio" name="a24"/> <span>No</span></label>
                                  </div>
                                </div></td>
                             
                            </tr>

                            <tr className="tr-white">
                              <td>  </td>
                              <td> Please specify cuisine</td>
                              <td>
                                 <div className="form-group col-lg-12 pl0"><input type="text" className="form-control"/></div>
                                  
                                </td>
                                <td> 
                                  <div className="form-group col-lg-12 pl0"><input type="text" className="form-control"/></div>
                                </td>
                             
                            </tr>

                            <tr className="tr-dark">
                              <td> 5 </td>
                              <td> Cooking</td>
                              <td> <div className="radio-inline">
                                  <div className="radio">
                                    <label>
                                      <input type="radio" name="a25"/> <span>Yes</span></label>
                                  </div>
                                  <div className="radio">
                                    <label>
                                      <input type="radio" name="a25"/> <span>No</span></label>
                                  </div>
                                </div></td>
                                <td> <div className="radio-inline">
                                  <div className="radio">
                                    <label>
                                      <input type="radio" name="a26"/> <span>Yes</span></label>
                                  </div>
                                  <div className="radio">
                                    <label>
                                      <input type="radio" name="a26"/> <span>No</span></label>
                                  </div>
                                </div></td>
                             
                            </tr>

                             <tr className="tr-dark">
                              <td>  </td>
                              <td> Please specify cuisine</td>
                              <td>
                                 <div className="form-group col-lg-12 pl0"><input type="text" className="form-control"/></div>
                                  
                                </td>
                                <td> 
                                  <div className="form-group col-lg-12 pl0"><input type="text" className="form-control"/></div>
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

export default HelperSkill;