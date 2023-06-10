import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import QuickSearch from '../Quicksearch';
import { Link } from 'react-router-dom';


const HelperInterview1 = () => {
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
              <li><Link to="/helperaccount">Account Details</Link></li>
                <li><Link to="/helperprofile">Bio Profile Details</Link></li>
                <li><Link to="/helpercontact"> Contact Details</Link></li>
                <li><Link to="/helperfamily">Family Background</Link></li>
                <li><Link to="/helperbooking"> Booking Related Info</Link></li>
                <li className="active"><Link to="/helperinterview"> Interview Appointment Details</Link></li>
                <li><Link to="/helpereducation">Education Details</Link></li>
                <li><Link to="/helperexperience">Experience Details</Link></li>
                <li><Link to="/helperlanguage">Language Details</Link></li>
                <li ><Link to="/helpermedical">Medical Details</Link></li>
                <li><Link to="/helperskill">Skills Details</Link></li>
              </ul>
            </div>
            </div>
            <div className="col-lg-8">
              <div className="dashboard-right-wrap hiad-wrap">
                <div className="main-inner-box">
                  <div className="pageTitle title-fix sm"><h2>Interview Appointment Details</h2></div>
               
                  <ul className="nav nav-tabs justify-content-center">
                    <li className="nav-item">
                      <a className="nav-link active" data-toggle="tab" href="#home">Past Interview</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#menu1">Current Interview</a>
                    </li>
                  </ul>

                  
                  <div className="tab-content">
                    <div className="tab-pane active" id="home">
                      <div className="table-holder Scrollcontent" data-mcs-theme="dark">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Meeting ID</th>
                              <th>Meeting Link</th>
                              <th>Helper Name</th>
                              <th>Meeting Date/Time</th>
                              <th>Meeting Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td><Link to="helperinterview2" className="text-underline"> ABC1234 </Link></td>
                              <td> ABCD12345 </td>
                              <td> Samantha </td>
                              <td> 25 Feb 2022
                                <br/> 2:00 PM </td>
                              <td>
                                <div className="m-status completed"><Link to="helperinterview2" className="text-underline">Completed</Link></div>
                              </td>
                            </tr>
                            <tr>
                              <td><Link to="helperinterview2" className="text-underline"> ABC1234</Link> </td>
                              <td> ABCD12345 </td>
                              <td> Samantha </td>
                              <td> 25 Feb 2022
                                <br/> 2:00 PM </td>
                              <td>
                                <div className="m-status cancelled"><Link to="helperinterview2" className="text-underline">Cancelled</Link></div>
                              </td>
                            </tr>
                            <tr>
                              <td><Link to="helperinterview2" className="text-underline"> ABC1234 </Link></td>
                              <td> ABCD12345 </td>
                              <td> Samantha </td>
                              <td> 25 Feb 2022
                                <br/> 2:00 PM </td>
                              <td>
                                <div className="m-status rescheduled"><Link to="helperinterview2" className="text-underline">Re-scheduled</Link></div>
                              </td>
                            </tr>
                            <tr>
                              <td><Link to="helperinterview2" className="text-underline"> ABC1234 </Link></td>
                              <td> ABCD12345 </td>
                              <td> Samantha </td>
                              <td> 25 Feb 2022
                                <br/> 2:00 PM </td>
                              <td>
                                <div className="m-status cancelled"><Link to="helperinterview2" className="text-underline">Cancelled</Link></div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="menu1">
                      <div className="table-holder Scrollcontent" data-mcs-theme="dark">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Meeting ID</th>
                              <th>Meeting Link</th>
                              <th>Helper Name</th>
                              <th>Meeting Date/Time</th>
                              <th>Meeting Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td><Link to="helperinterview2" className="text-underline"> ABC1234 </Link></td>
                              <td> ABCD12345 </td>
                              <td> Samantha </td>
                              <td> 25 Feb 2022
                                <br/> 2:00 PM </td>
                              <td>
                                <div className="m-status completed"><Link to="helperinterview2" className="text-underline">Completed</Link></div>
                              </td>
                            </tr>
                            <tr>
                              <td><Link to="helperinterview2" className="text-underline"> ABC1234</Link> </td>
                              <td> ABCD12345 </td>
                              <td> Samantha </td>
                              <td> 25 Feb 2022
                                <br/> 2:00 PM </td>
                              <td>
                                <div className="m-status cancelled"><Link to="helperinterview2" className="text-underline">Cancelled</Link></div>
                              </td>
                            </tr>
                            <tr>
                              <td><Link to="helperinterview2" className="text-underline"> ABC1234 </Link></td>
                              <td> ABCD12345 </td>
                              <td> Samantha </td>
                              <td> 25 Feb 2022
                                <br/> 2:00 PM </td>
                              <td>
                                <div className="m-status rescheduled"><Link to="helperinterview2" className="text-underline">Re-scheduled</Link></div>
                              </td>
                            </tr>
                            <tr>
                              <td><Link to="helperinterview2" className="text-underline"> ABC1234 </Link></td>
                              <td> ABCD12345 </td>
                              <td> Samantha </td>
                              <td> 25 Feb 2022
                                <br/> 2:00 PM </td>
                              <td>
                                <div className="m-status cancelled"><Link to="helperinterview2" className="text-underline">Cancelled</Link></div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                   
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

export default HelperInterview1;