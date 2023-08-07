import React,{useState,useEffect} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import QuickSearch from '../Quicksearch';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


const HelperContact = () => {
  const [selectedLink, setSelectedLink] = useState('/');
  const [storedData, setstoreddata] = React.useState([]);
  const [ishelperloggedin, setishelperloggedin] = React.useState(false);
  const [jwtToken, setjwtToken] = useState('');
  const [helperName, setHelperName] = useState('');
  const [list, setList] = useState([]);
  const [typeValue, setTypeValue] = useState("");
  const [infoValue, setInfoValue] = useState("");  
  const [contactdata, setcontactdata] = useState({
    "OrgId": 1,
    "HelperCode": "",
    "HomeAddress": "",
    "HomeTelephone": "",
    "WhatsApp": "",
    "Viber": "",
    "Facebook": "",
    "OtherContact": [
      {
        "OrgId": 1,
        "HelperCode": "",
        "Type": "",
        "Information": ""
      }
    ]
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
      setcontactdata({
        ...contactdata,
        "OrgId": 1,
        "HelperCode": storedData[0].HelperCode,
        "HomeAddress": storedData[0].HomeAddress,
        "HomeTelephone": storedData[0].HomeTelephone,
        "WhatsApp": storedData[0].WhatsApp,
        "Viber": storedData[0].Viber,
        "Facebook": storedData[0].Facebook,
        // "OtherContact": [
        //   {
        //     "OrgId": 1,
        //     "HelperCode": storedData[0].HelperCode,
        //     "Type": "",
        //     "Information": ""
        //   }
        // ]
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

  const handleAdd = (e) => {
    e.preventDefault();
    if (typeValue !== "" && infoValue !== "") {
      setList((prevList) => [...prevList, { Type: typeValue, Information: infoValue ,OrgId:1,HelperCode:storedData[0].HelperCode }]);
      console.log(list);
      setTypeValue("");
      setInfoValue("");
    }
  };

  const handleTypeChange = (event) => {
    setTypeValue(event.target.value);
  };
  
  const handleInfoChange = (event) => {
    setInfoValue(event.target.value);
  };

  const savecontactdataHandler = async (event) => {
    event.preventDefault();
    const transformedData = list.map((item) => {
      return {
        OrgId: item.OrgId,
        HelperCode: item.HelperCode,
        Type: item.Type,
        Information: item.Information
      };
    });
    const regDetail = {
      "OrgId": 1,
      "HelperCode": contactdata.HelperCode,
      "HomeAddress": contactdata.HomeAddress,
      "HomeTelephone": contactdata.HomeTelephone,
      "WhatsApp": contactdata.WhatsApp,
      "Viber": contactdata.Viber,
      "Facebook": contactdata.Facebook,
      "OtherContact": transformedData
    };
    console.log(regDetail);

    const jwttoken = jwtToken;
    console.log(jwtToken, jwttoken);

    try {
      const response = await fetch('http://154.26.130.251:283/api/Helper/ContactDetails_Updation', {
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
            "HelperCode": contactdata.HelperCode,
            "HomeAddress": contactdata.HomeAddress,
            "HomeTelephone": contactdata.HomeTelephone,
            "WhatsApp": contactdata.WhatsApp,
            "Viber": contactdata.Viber,
            "Facebook": contactdata.Facebook
          }; // Update the property
        setstoreddata(updatedData);
        console.log(storedData,updatedData);
        toast.success('Updated Successfully!');
        localStorage.setItem('helpertoken', JSON.stringify(updatedData));
      }
    } catch (error) {
      console.log('An error occurred:', error);
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
      
      <section className="fullcontainer dashboard helper-contact-details hcd-page" data-aos="fade-up">
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
              <form onSubmit={savecontactdataHandler}>
              <div className="dashboard-right-wrap hct-wrap">
                    <div className="main-inner-box">
                      <div className="pageTitle title-fix sm">
                        <h2>Contact Details</h2>
                      </div>
                     <div className="row form-group">
                              <div className="col-lg-5">
                                <label>Home Address</label>
                              </div>
                              <div className="col-lg-7">
                                <textarea className="form-control" placeholder="Home Address"
                                value={contactdata.HomeAddress}
                                onChange={(e)=>{setcontactdata({...contactdata,HomeAddress:e.target.value});}}
                                ></textarea>
                              </div>
                            </div>  
                             <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Home Telephone</label>
                        </div>
                        <div className="col-lg-7">
                           <input type="text" className="form-control" placeholder="Home Telephone"
                           value={contactdata.HomeTelephone}
                           onChange={(e)=>{setcontactdata({...contactdata,HomeTelephone:e.target.value});}}
                            /> 
                        </div>
                      </div>   
                       <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Viber</label>
                        </div>
                        <div className="col-lg-7">
                           <input type="text" className="form-control" placeholder="Viber"
                           value={contactdata.Viber}
                           onChange={(e)=>{setcontactdata({...contactdata,Viber:e.target.value});}}
                            /> 
                        </div>
                      </div> 
                       <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Facebook</label>
                        </div>
                        <div className="col-lg-7">
                           <input type="text" className="form-control" placeholder="Facebook"
                           value={contactdata.Facebook}
                           onChange={(e)=>{setcontactdata({...contactdata,Facebook:e.target.value});}}
                            /> 
                        </div>
                      </div> 

                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>WhatsApp</label>
                        </div>
                        <div className="col-lg-7">
                           <input type="text" className="form-control" placeholder="WhatsApp"
                           value={contactdata.WhatsApp}
                           onChange={(e)=>{setcontactdata({...contactdata,WhatsApp:e.target.value});}}
                            /> 
                        </div>
                      </div> 
                            <div className="row mb15 sub-title-row form-group align-items-center">
                        <div className="col-lg-12">
                          <h6>Other Contact</h6>
                        </div>
                      </div>
                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Type</label>
                        </div>
                        <div className="col-lg-7">
                          <input type="text" className="form-control" placeholder="Type"
                          value={typeValue}
                          onChange={handleTypeChange}
                          /> </div>
                      </div>
                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Information</label>
                        </div>
                        <div className="col-lg-7">
                          <input type="text" className="form-control" placeholder="Info"
                          value={infoValue}
                          onChange={handleInfoChange}
                          /> </div>
                      </div>

                      <div className="row form-group align-items-center">
                        <div className="col-lg-12">
                          <button name="add-more" onClick={handleAdd} className="add-more"> Add <i className="fas fa-plus"></i></button>
                        </div>
                      </div> 
                      {/* <ul>
                        {list.map((item, index) => (
                          <li key={index}>
                            Type: {item.type}, Info: {item.info}
                          </li>
                        ))}
                      </ul> */}
                      {list.length > 0 && (
                       <div className="table-holder md-table Scrollcontent" data-mcs-theme="dark">
                        <table className="table" style={{ width: "80%" }}>
                          <thead>
                            <tr>
                              <th>S/No</th>
                              <th>Type</th>
                              <th>Information</th>
                            </tr>
                          </thead>
                          <tbody>
                          {list.map((item, index) => (
                              <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.Type}</td>
                                <td>{item.Information}</td>
                              </tr>
                            ))}
                            </tbody>
                            </table>
                            </div>
                      )}
                     
                      {/* <div className="row mb15 sub-title-row form-group align-items-center">
                              <div className="col-lg-12">
                                <h6>Next of Kin</h6>
                              </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Name</label>
                              </div>
                              <div className="col-lg-7">
                                <input type="text" className="form-control" placeholder="Name"/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Contact Number</label>
                              </div>
                              <div className="col-lg-7">
                                <input type="text" className="form-control" placeholder="Contact Number"/> </div>
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

export default HelperContact;