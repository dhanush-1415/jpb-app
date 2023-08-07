import React, {useState, useEffect} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import QuickSearch from '../Quicksearch';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


const EmployerBooking = () => {
  const [selectedLink, setSelectedLink] = useState('/');
  const [storedData, setstoreddata] = React.useState([]);
  const [employerName, setEmployerName] = useState('');
  const [isloggedin, setisloggedin] = React.useState(false);
  // const navigate = useNavigate();
  useEffect(() => {
    setSelectedLink(window.location.pathname);
    let token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      console.log(token);
      setisloggedin(true);
      setstoreddata(JSON.parse(token));
      console.log(storedData);
      //setEmployerName(storedData[0].EmployerName);
    }
    console.log(isloggedin);
    console.log(storedData);

    

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
              <div className="sidebar-title"><h5>Hi {employerName},</h5></div>
              <a className="btn-control-notext show-lg" href="#nav">Select</a>
              <ul id="nav" className="nav-1 hide-lg">
              <li className={selectedLink === '/employeraccount' ? 'active' : ''}><Link to="/employeraccount" onClick={() => { handleLinkClick('/employeraccount');}}>Account Details</Link></li>
                <li className={selectedLink === '/employerprofile' ? 'active' : ''}><Link to="/employerprofile" onClick={() => { handleLinkClick('/employerprofile');}}>Personal Profile Details</Link></li>
                <li className={selectedLink === '/employercontact' ? 'active' : ''}><Link to="/employercontact" onClick={() => { handleLinkClick('/employercontact');}}> Contact Details</Link></li>
                <li className={selectedLink === '/employeraddress' ? 'active' : ''}><Link to="/employeraddress" onClick={() => { handleLinkClick('/employeraddress');}}>Address</Link></li>
                <li className={selectedLink === '/employerfamily' ? 'active' : ''}><Link to="/employerfamily" onClick={() => { handleLinkClick('/employerfamily');}}>Family Details & Job Scope</Link></li>
                <li className={selectedLink === '/employerInterview' ? 'active' : ''}><Link to="/employerInterview" onClick={() => { handleLinkClick('/employerInterview');}}> Interview Appointment Details</Link></li>
                <li className={selectedLink === '/employerbooking' ? 'active' : ''}><Link to="/employerbooking" onClick={() => { handleLinkClick('/employerbooking');}}> Booking & Payment Details</Link></li>
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