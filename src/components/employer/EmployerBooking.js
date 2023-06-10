import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import QuickSearch from '../Quicksearch';
import { Link } from 'react-router-dom';



const EmployerBooking = () => {
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
      
      <section className="fullcontainer dashboard ebpd-page" data-aos="fade-up">
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
                <li><Link to="/employerfamily">Family Details & Job Scope</Link></li>
                <li><Link to="/employerInterview"> Interview Appointment Details</Link></li>
                <li className="active"><Link to="/employerbooking"> Booking & Payment Details</Link></li>
              </ul>
            </div>
            </div>
            <div className="col-lg-8">
              <div className="dashboard-right-wrap ebpd-wrap">
                <div className="table-holder Scrollcontent" data-mcs-theme="dark">
                        <table className="table responsive-table big-table">
                          <thead>
                            <tr>
                              <th>Transaction ID</th>
                              <th>Booking No.</th>
                              <th>Helper Code</th>
                              <th>Helper Name</th>
                              <th>Payment Status</th>
                              <th>Processing Status</th>
                              <th>Helper Employment Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td> ABC123456789 </td>
                              <td> BK202112-0072 </td>
                              <td> 001 </td>
                              <td> Samantha</td>
                              <td>Paid</td>
                              <td>
                                <a  href="javascript:void(0);" data-toggle="modal" data-target="#myModal" className="m-status cancelled">Cancelled</a>
                              </td>
                              <td>Medical Unfit
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</p>
                              </td>
                            </tr>
                            <tr>
                             <td> ABC1234 </td>
                              <td> ABCD12345 </td>
                              <td> Samantha </td>
                              <td> Samantha</td>
                              <td>Contra</td>
                              <td>
                                <a  href="javascript:void(0);" data-toggle="modal" data-target="#myModal"  className="m-status pending">Pending Arrival</a>
                              </td>
                              <td>Active</td>
                            </tr>
                            <tr>
                             <td> ABC1234 </td>
                              <td> ABCD12345 </td>
                              <td> Samantha </td>
                              <td> Samantha</td>
                              <td>Paid</td>
                              <td>
                                <a  href="javascript:void(0);" data-toggle="modal" data-target="#myModal"  className="m-status completed">Completed</a>
                              </td>
                              <td>Active - Employed</td>
                            </tr>
                           
                          </tbody>
                        </table>
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

export default EmployerBooking;