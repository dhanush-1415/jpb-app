import React,{useState,useEffect} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import QuickSearch from '../Quicksearch';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


const HelperAccount = () => {
  const [selectedLink, setSelectedLink] = useState('/');
  const [storedData, setstoreddata] = React.useState([]);
  const [ishelperloggedin, setishelperloggedin] = React.useState(false);
  const [jwtToken, setjwtToken] = useState('');
  const [helperName, setHelperName] = useState('');
  const [accountdata, setaccountdata] = useState({
    EmailId: '',
    Password: '',
    ConfirmPassword: '',
    Contact_MobileNo: '',
    HelperCode: ''
  });
 
  
  useEffect(() => {
    setSelectedLink(window.location.pathname);
    fetchTokenHandler();
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
  }, []);
  
  useEffect(() => {
    if (storedData.length > 0) {
      setaccountdata({
        ...accountdata,
        EmailId: storedData[0].EmailId,
        Password: storedData[0].Password,
        Contact_MobileNo: storedData[0].MobileNo,
        HelperCode: storedData[0].HelperCode
      });
      setHelperName(storedData[0].HelperName);
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
      HelperCode: accountdata.HelperCode,
  Email: accountdata.EmailId,
  Password: accountdata.Password,
  ConfirmPassword: accountdata.ConfirmPassword,
  SMSContactNumber: accountdata.Contact_MobileNo
    };
    console.log(regDetail);

    const jwttoken = jwtToken;
    console.log(jwtToken, jwttoken);

    try {
      const response = await fetch('http://154.26.130.251:283/api/Helper/AccountDetails_Updation', {
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
        toast.error('Something went wrong!');
        return;
      }

      const data = await response.json();
      console.log(data);

      if (data.Code === 200 && data.Message === 'Sucess') {
       
        const updatedData = [...storedData]; // Clone the array
        updatedData[0] = { ...updatedData[0],
          "OrgId": 1,
          HelperCode: accountdata.HelperCode,
            Email: accountdata.EmailId,
            Password: accountdata.Password,
            SMSContactNumber: accountdata.Contact_MobileNo
          }; // Update the property
        setstoreddata(updatedData);
        console.log(storedData,updatedData);
        toast.success('Updated Successfully!');
        localStorage.setItem('helpertoken', JSON.stringify(updatedData));
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
            <figure><img src="images/banner-helper-dashboard.jpg" alt="JPB"/></figure>
          </div>
        </div>
        <div className="home-banner-bottom-bg inner-banner-shape"> <img src="images/inner-banner-shape.png" alt=""/> </div>
      </div>
      <div className="clear"></div>
      
      <section className="fullcontainer dashboard helper-dashboard had-page" data-aos="fade-up">
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
              <div className="dashboard-right-wrap had-wrap">
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

export default HelperAccount;