import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import QuickSearch from '../Quicksearch';
import { Link } from 'react-router-dom';
import {  toast } from 'react-toastify';




const EmployerAccount = () => {
  const [selectedLink, setSelectedLink] = useState('/');
  const [storedData, setstoreddata] = React.useState([]);
  const [isloggedin, setisloggedin] = React.useState(false);
  const [jwtToken, setjwtToken] = useState('');
  const [accountdata, setaccountdata] = useState({
    EmailId: '',
    Password: '',
    ConfirmPassword: '',
    Contact_MobileNo: '',
    EmployerCode: ''
  });
 
  
  useEffect(() => {
    setSelectedLink(window.location.pathname);
    fetchTokenHandler();
    let token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      console.log(token);
      setisloggedin(true);
      setstoreddata(JSON.parse(token));
      console.log(storedData);
    }
    console.log(isloggedin);
    console.log(storedData);
  }, []);
  
  useEffect(() => {
    if (storedData.length > 0) {
      setaccountdata({
        ...accountdata,
        EmailId: storedData[0].EmailId,
        Password: storedData[0].Password,
        Contact_MobileNo: storedData[0].Contact_MobileNo,
        EmployerCode: storedData[0].EmployerCode
      });
    }
  }, [storedData]);


  const fetchTokenHandler = async () => {
    const tokenDetail = {
      Username: 'admin',
      Password: 'admin54321',
    };
    try {
      const response = await fetch('http://154.26.130.251:283/api/Token/GenerateToken', {
        method: 'POST',
        body: JSON.stringify(tokenDetail),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        console.log('Something went wrong!');
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      console.log(data.Jwt_Token);
      setjwtToken(data.Jwt_Token);
    } catch (error) {}
  };

  const saveAccountDataHandler = async (event) => {
    event.preventDefault();
if(accountdata.Password === accountdata.ConfirmPassword){
    const regDetail = {
      OrgId: 1,
  EmployerCode: accountdata.EmployerCode,
  Email: accountdata.EmailId,
  Password: accountdata.Password,
  SMSContactNumber: accountdata.Contact_MobileNo
    };
    console.log(regDetail);

    const jwttoken = jwtToken;
    console.log(jwtToken, jwttoken);

    try {
      const response = await fetch('http://154.26.130.251:283/api/Employer/AccountDetails_Updation', {
        method: 'POST',
        body: JSON.stringify(regDetail),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwttoken}`,
        },
      });

      console.log(response);

      if (!response.ok) {
        console.log('Something went wrong!');
        return;
      }

      const data = await response.json();
      console.log(data);

      if (data.Code === 200 && data.Message === 'Sucess') {
       
        const updatedData = [...storedData]; // Clone the array
        updatedData[0] = { ...updatedData[0],
          "OrgId": 1,
            EmployerCode: accountdata.EmployerCode,
            Email: accountdata.EmailId,
            Password: accountdata.Password,
            SMSContactNumber: accountdata.Contact_MobileNo
          }; // Update the property
        setstoreddata(updatedData);
        console.log(storedData,updatedData);
        
        localStorage.setItem('token', JSON.stringify(updatedData));
      }
    } catch (error) {
      console.log('An error occurred:', error);
    }
  }else{
   // return;
   console.log('Passwords do not match');
  }
  };

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
      
      <section className="fullcontainer dashboard ead-page" data-aos="fade-up">
        <div className="inner-container-md">
        <div className="container">
          <div className="pageTitle md"><h2>Employer Dashboard</h2></div>
          <div className="row">
            <div className="col-lg-auto mb-991-30"> 
              <div className="sidebar">
              <div className="sidebar-title"><h5>Hi Timothy,</h5></div>
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
              <div className="dashboard-right-wrap ead-wrap">
                    <div className="main-inner-box">
                   
                      <div className="pageTitle title-fix sm">
                        <h2>Account Details</h2></div>
                        <form onSubmit={saveAccountDataHandler}>
      <div className="row form-group align-items-center">
        <div className="col-lg-5">
          <label>Email Address</label>
        </div>
        <div className="col-lg-7">
          <input
            type="text"
            className="form-control"
            placeholder="timothylim@gmail.com"
            value={accountdata.EmailId}
            onChange={(e) => {
              setaccountdata({ ...accountdata, EmailId: e.target.value });
            }}
            readOnly
          />
        </div>
      </div>
      <div className="row form-group align-items-center">
        <div className="col-lg-5">
          <label>Password</label>
        </div>
        <div className="col-lg-7">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={accountdata.Password}
            onChange={(e) => {
              setaccountdata({ ...accountdata, Password: e.target.value });
            }}
            required
          />
        </div>
      </div>
      <div className="row form-group align-items-center">
        <div className="col-lg-5">
          <label>Confirm Password</label>
        </div>
        <div className="col-lg-7">
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password"
            value={accountdata.ConfirmPassword}
            onChange={(e) => {
              setaccountdata({ ...accountdata, ConfirmPassword: e.target.value });
            }}
            required
          />
        </div>
      </div>
      <div className="row form-group align-items-center">
        <div className="col-lg-5">
          <label>SMS Contact Number</label>
        </div>
        <div className="col-lg-7">
          <input
            type="text"
            className="form-control"
            placeholder="+65 9123 456789"
            value={accountdata.Contact_MobileNo}
            onChange={(e) => {
              setaccountdata({ ...accountdata, Contact_MobileNo: e.target.value });
            }}
            required
          />
        </div>
      </div>
      <div className="row mt20 justify-content-end">
        <div className="col-auto">
          <button type="submit" className="custom-button">
            SAVE
          </button>
        </div>
      </div>
    </form>
                    
                  
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

export default EmployerAccount;