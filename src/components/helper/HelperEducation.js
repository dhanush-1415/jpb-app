import React,{useState,useEffect} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import QuickSearch from '../Quicksearch';
import { Link } from 'react-router-dom';



const HelperEducation = () => {
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
     // setHelperName(storedData[0].HelperName);
    }
    console.log(ishelperloggedin);
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
            <figure><img src="images/banner-helper-dashboard.jpg" alt="JPB"/></figure>
          </div>
        </div>
        <div className="home-banner-bottom-bg inner-banner-shape"> <img src="images/inner-banner-shape.png" alt=""/> </div>
      </div>
      <div className="clear"></div>
     
      <section className="fullcontainer dashboard helper-education-details hbd-page" data-aos="fade-up">
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
                  <div className="pageTitle title-fix sm"><h2>Education Details</h2></div>
              
                  <div className="table-holder Scrollcontent" data-mcs-theme="dark">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Education</th>
                              <th>School Name</th>
                              <th>From</th>
                              <th>To</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td> Primary School </td>
                              <td> Samantha </td>
                              <td> 12 Jan 2000 </td>
                              <td> 12 Jan 2000</td>
                            </tr>
                            <tr>
                              <td> Junior High School </td>
                              <td> Samantha </td>
                              <td> 25 Feb 2006 </td>
                              <td> 25 Feb 2006</td>
                            </tr>
                            <tr>
                              <td> Senior High School </td>
                              <td> Samantha </td>
                              <td> 28 April 2011 </td>
                              <td> 12 April 2013</td>
                            </tr>
                            <tr>
                              <td> College </td>
                              <td> Samantha </td>
                              <td> 28 April 2011 </td>
                              <td>28 April 2011</td>
                            </tr>
                            <tr>
                              <td> University </td>
                              <td> Samantha </td>
                              <td> 28 April 2011 </td>
                              <td> 28 April 2011</td>
                            </tr>
                            <tr>
                              <td> Under Graduate </td>
                              <td> Samantha </td>
                              <td> 28 April 2011 </td>
                              <td> 28 April 2011 </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                       {/* <div className="od-upload-section size-14">
                        <p>Upload Education Cert</p>
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
                              <div className="upload-file-name">CertificateName.PDF</div>
                              <div className="progress">
  <div className="progress-bar" role="progressbar" style={{'width': '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
                              <div className="upload-file-status">uploading...</div>
                            </div>
                            <div className="file-status-row">
                              <a href="#" className="file-close"><i className="fas fa-times-circle"></i></a>
                              <div className="upload-file-name">CertificateName.PDF</div>
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
                      </div> */}
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

export default HelperEducation;