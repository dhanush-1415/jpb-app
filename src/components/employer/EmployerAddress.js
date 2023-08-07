import React,{useState,useEffect} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import QuickSearch from '../Quicksearch';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


const EmployerAddress = () => {
  const [selectedLink, setSelectedLink] = useState('/');
  const [storedData, setstoreddata] = React.useState([]);
  const [employerName, setEmployerName] = useState('');
  const [addressdata, setaddressdata] = useState({
    "OrgId": 1,
    "EmployerCode": "",
    "PostalCode": "",
    "UnitNo": "",
    "StreetName": "",
    "BuildingName": "",
    "Country": "",
    "EmailId": "",
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
      setaddressdata({
        ...addressdata,
        "OrgId": storedData[0].OrgId,
        "EmployerCode": storedData[0].EmployerCode,
        "PostalCode": storedData[0].PostalCode,
        "UnitNo": storedData[0].UnitNo,
        "StreetName": storedData[0].StreetName,
        "BuildingName":storedData[0].BuildingName,
        "Country":storedData[0].Country,
        "EmailId": storedData[0].EmailId,
      });
      setEmployerName(storedData[0].EmployerName);
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

  const saveAddressDataHandler = async (event) => {
    event.preventDefault();
    const regDetail = {
        "OrgId": addressdata.OrgId,
        "EmployerCode": addressdata.EmployerCode,
        "PostalCode": addressdata.PostalCode,
        "UnitNo": addressdata.UnitNo,
        "StreetName": addressdata.StreetName,
        "BuildingName":addressdata.BuildingName,
        "Country":addressdata.Country,
        "EmailId": addressdata.EmailId,
    };
    console.log(regDetail);

    const jwttoken = jwtToken;
    console.log(jwtToken, jwttoken);

    try {
      const response = await fetch('http://154.26.130.251:283/api/Employer/AddressDetails_Updation', {
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
          OrgId: addressdata.OrgId,
          EmployerCode: addressdata.EmployerCode,
          PostalCode: addressdata.PostalCode,
          UnitNo: addressdata.UnitNo,
          StreetName: addressdata.StreetName,
          BuildingName: addressdata.BuildingName,
          Country: addressdata.Country,
          EmailId: addressdata.EmailId
          }; // Update the property
        setstoreddata(updatedData);
        console.log(storedData,updatedData);
        toast.success('Updated Successfully!');
        localStorage.setItem('token', JSON.stringify(updatedData));
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
      
      <section className="fullcontainer dashboard eadd-page" data-aos="fade-up">
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
              <form onSubmit={saveAddressDataHandler}>
              <div className="dashboard-right-wrap eadd-wrap">
                    <div className="main-inner-box">
                   
                      <div className="pageTitle title-fix sm">
                        <h2>Address</h2>
                      </div>
                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Postal Code</label>
                        </div>
                        <div className="col-lg-7">
                          <input type="text" className="form-control" placeholder="Postal Code"
                          value={addressdata.PostalCode}
                          onChange={(e)=>{setaddressdata({...addressdata,PostalCode:e.target.value});}}
                          /> </div>
                      </div>
                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Unit No</label>
                        </div>
                        <div className="col-lg-7">
                          <input type="text" className="form-control" placeholder="Unit No"
                          value={addressdata.UnitNo}
                          onChange={(e)=>{setaddressdata({...addressdata,UnitNo:e.target.value});}}
                          /> </div>
                      </div>
                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Street</label>
                        </div>
                        <div className="col-lg-7">
                          <input type="text" className="form-control" placeholder="Street"
                          value={addressdata.StreetName}
                          onChange={(e)=>{setaddressdata({...addressdata,StreetName:e.target.value});}}
                          /> </div>
                      </div>
                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Building</label>
                        </div>
                        <div className="col-lg-7">
                          <input type="text" className="form-control" placeholder="Building"
                          value={addressdata.BuildingName}
                          onChange={(e)=>{setaddressdata({...addressdata,BuildingName:e.target.value});}}
                          /> </div>
                      </div>
                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Country</label>
                        </div>
                        <div className="col-lg-7">
                          <input type="text" className="form-control" placeholder="Country"
                          value={addressdata.Country}
                          onChange={(e)=>{setaddressdata({...addressdata,Country:e.target.value});}}
                          /> </div>
                      </div>
                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Email</label>
                        </div>
                        <div className="col-lg-7">
                          <input type="text" className="form-control" placeholder="Email" readOnly
                          defaultValue={addressdata.EmailId}
                          /> </div>
                      </div>
                      {/* <div className="row mb15 sub-title-row form-group align-items-center">
                        <div className="col-lg-12">
                          <h6>Other Contact</h6>
                        </div>
                      </div>
                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Contact Person <span className="red">*</span></label>
                        </div>
                        <div className="col-lg-7">
                          <input type="text" className="form-control" placeholder="Contact Person"/> </div>
                      </div>
                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Contact No <span className="red">*</span></label>
                        </div>
                        <div className="col-lg-7">
                          <input type="text" className="form-control" placeholder="Contact No."/> </div>
                      </div>

                      <div className="row form-group align-items-center">
                        <div className="col-lg-12">
                          <button name="add-more" className="add-more"><i className="fas fa-plus"></i> Add More</button>
                        </div>
                      </div> */}

                    
                  
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

export default EmployerAddress;