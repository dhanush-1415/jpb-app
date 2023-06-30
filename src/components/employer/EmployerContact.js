import React,{useEffect,useState} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import QuickSearch from '../Quicksearch';
import { Link } from 'react-router-dom';



const EmployerContact = () => {
  const [selectedLink, setSelectedLink] = useState('/');
  const [storedData, setstoreddata] = React.useState([]);
  const [contactdata, setcontactdata] = useState({
    "OrgId": 1,
    "EmployerCode": "",
    "ContactPerson": "",
    "Contact_MobileNo": "",
    "Contact_HomeNo": "",
    "Contact_FaxNo": "",
    "Contact_Email": "",
    "Contact_PostalCode": "",
    "Contact_UnitNo": "",
    "Contact_StreetName": "",
    "Contact_BuildingName": "",
    "Contact_Country": ""
  });
  const [isloggedin, setisloggedin] = React.useState(false);
  const [jwtToken, setjwtToken] = useState('');
  
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
      setcontactdata({
        ...contactdata,
        "OrgId": storedData[0].OrgId,
        "EmployerCode": storedData[0].EmployerCode,
        "ContactPerson": storedData[0].ContactPerson,
        "Contact_MobileNo": storedData[0].Contact_MobileNo,
        "Contact_HomeNo": storedData[0].Contact_HomeNo,
        "Contact_FaxNo":storedData[0].Contact_FaxNo,
        "Contact_Email":storedData[0].Contact_Email,
        "Contact_PostalCode": storedData[0].Contact_PostalCode,
        "Contact_UnitNo": storedData[0].Contact_UnitNo,
        "Contact_StreetName": storedData[0].Contact_StreetName,
        "Contact_BuildingName": storedData[0].Contact_BuildingName,
        "Contact_Country": storedData[0].Contact_Country
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

  const saveContactDataHandler = async (event) => {
    event.preventDefault();
    const regDetail = {
        "OrgId": contactdata.OrgId,
        "EmployerCode": contactdata.EmployerCode,
        "ContactPerson": contactdata.ContactPerson,
        "Contact_MobileNo": contactdata.Contact_MobileNo,
        "Contact_HomeNo": contactdata.Contact_HomeNo,
        "Contact_FaxNo":contactdata.Contact_FaxNo,
        "Contact_Email":contactdata.Contact_Email,
        "Contact_PostalCode": contactdata.Contact_PostalCode,
        "Contact_UnitNo": contactdata.Contact_UnitNo,
        "Contact_StreetName": contactdata.Contact_StreetName,
        "Contact_BuildingName": contactdata.Contact_BuildingName,
        "Contact_Country": contactdata.Contact_Country
    };
    console.log(regDetail);

    const jwttoken = jwtToken;
    console.log(jwtToken, jwttoken);

    try {
      const response = await fetch('http://154.26.130.251:283/api/Employer/ContactDetails_Updation', {
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
       // navigate('/employeraccount');
      }
    } catch (error) {
      console.log('An error occurred:', error);
    }
  
  };

 
  const handleLinkClick = (link) => {
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
     
      <section className="fullcontainer dashboard ecd-page" data-aos="fade-up">
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
            <form onSubmit={saveContactDataHandler}>
              <div className="dashboard-right-wrap ecd-wrap">
                    <div className="main-inner-box">
                   
                      <div className="pageTitle title-fix sm">
                        <h2>Contact Details</h2></div>
                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Contact Person</label>
                        </div>
                        <div className="col-lg-7">
                          <input type="text" className="form-control" placeholder="Person Name"
                          value={contactdata.ContactPerson}
                          onChange={(e)=>{
                            setcontactdata({...contactdata,ContactPerson:e.target.value});
                          }}
                         
                          /> </div>
                      </div>
                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Mobile No. </label>
                        </div>
                        <div className="col-lg-7">
                          <input type="text" className="form-control" placeholder="Mobile No."
                          value={contactdata.Contact_MobileNo}
                          onChange={(e)=>{
                            setcontactdata({...contactdata,Contact_MobileNo:e.target.value});
                          }}
                         
                          /> </div>
                      </div>
                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Home No. </label>
                        </div>
                        <div className="col-lg-7">
                          <input type="text" className="form-control" placeholder="Home No."
                          value={contactdata.Contact_HomeNo}
                          onChange={(e)=>{
                            setcontactdata({...contactdata,Contact_HomeNo:e.target.value});
                          }}
                         
                          /> </div>
                      </div>
                      {/* <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Office No. </label>
                        </div>
                        <div className="col-lg-7">
                          <input type="text" className="form-control" placeholder="Office No."
                          
                         
                          /> </div>
                      </div> */}
                      
                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Fax No.</label>
                        </div>
                        <div className="col-lg-7">
                          <input type="text" className="form-control" placeholder="Fax No."
                          value={contactdata.Contact_FaxNo}
                          onChange={(e)=>{
                            setcontactdata({...contactdata,Contact_FaxNo:e.target.value});
                          }}
                          /> </div>
                      </div>
                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Email</label>
                        </div>
                        <div className="col-lg-7">
                          <input type="text" className="form-control" placeholder="Email"
                          value={contactdata.Contact_Email}
                          onChange={(e)=>{
                            setcontactdata({...contactdata,Contact_Email:e.target.value});
                          }}
                          /> </div>
                      </div>
                      {/* <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Contact Address</label>
                        </div>
                        <div className="col-lg-7">
                          <div className="checkbox">
                            <input type="checkbox" id="c1"/>
                            <label for="c1">Same As Address</label>
                          </div>
                        </div>
                      </div> */}
                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Postal Code</label>
                        </div>
                        <div className="col-lg-7">
                          <input type="text" className="form-control" placeholder="Postal Code"
                          value={contactdata.Contact_PostalCode}
                          onChange={(e)=>{
                            setcontactdata({...contactdata,Contact_PostalCode:e.target.value});
                          }}
                          /> </div>
                      </div>
                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Unit No</label>
                        </div>
                        <div className="col-lg-7">
                          <input type="text" className="form-control" placeholder="Unit No"
                          value={contactdata.Contact_UnitNo}
                          onChange={(e)=>{
                            setcontactdata({...contactdata,Contact_UnitNo:e.target.value});
                          }}
                          /> </div>
                      </div>
                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Street</label>
                        </div>
                        <div className="col-lg-7">
                          <input type="text" className="form-control" placeholder="Street"
                          value={contactdata.Contact_StreetName}
                          onChange={(e)=>{
                            setcontactdata({...contactdata,Contact_StreetName:e.target.value});
                          }}
                          /> </div>
                      </div>
                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Building</label>
                        </div>
                        <div className="col-lg-7">
                          <input type="text" className="form-control" placeholder="Building"
                          value={contactdata.Contact_BuildingName}
                          onChange={(e)=>{
                            setcontactdata({...contactdata,Contact_BuildingName:e.target.value});
                          }}
                          /> </div>
                      </div>
                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Country</label>
                        </div>
                        <div className="col-lg-7">
                          <input type="text" className="form-control" placeholder="Country"
                          value={contactdata.Contact_Country}
                          onChange={(e)=>{
                            setcontactdata({...contactdata,Contact_Country:e.target.value});
                          }}
                          /> </div>
                      </div>
                    
                    
                  
              </div>
              <div className="row mt20 justify-content-end">
                      <div className="col-auto"><button type="submit" className="custom-button">SAVE</button></div>
                    </div>
              </div>
              </form>
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

export default EmployerContact;