import React,{useState,useEffect} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import QuickSearch from '../Quicksearch';
import { Link } from 'react-router-dom';



const HelperProfileDetail = () => {
  const [selectedLink, setSelectedLink] = useState('/');
  const [storedData, setstoreddata] = React.useState([]);
  const [ishelperloggedin, setishelperloggedin] = React.useState(false);
  const [jwtToken, setjwtToken] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [profiledata, setprofiledata] = useState({
    "HelperBioDetails": {
      "OrgId": 1,
      "HelperCode": "",
      "HelperName": "",
      "NRIC_FIN": "",
      "Nationality": "",
      "PassportNo": "",
      "PassportIssuePlace": "",
      "PassIssueDate": "2023-03-29T12:52:44.986Z",
      "PassportExpiryDate": "2023-03-29T12:52:44.986Z",
      "WorkPermitNo": "",
      "WorkPermitExpiry": "2023-03-29T12:52:44.986Z",
      "Religion": "",
      "DateOfBirth": "2023-03-29T12:52:44.986Z",
      "MartilaStatus": "",
      "BirthPlace": "",
      "Specialization_Preference": "",
      "RepatraiteAirport": "",
      "Status": "",
      "OtherInfo": "",
      "DirectHire": true,
      "TrainingCenter": "",
      "FileName": "",
      "Helper_Img_Base64String": "",
      "IsActive": true,
      "ChangedBy": ""
    },
    "Helper_PhysicalAttribute": {
      "Complexion": "",
      "Height_CM": "",
      "Height_Feet": "",
      "Weight_KG": 0,
      "Weight_Pound": 0
    }
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

  const convertToDate = (dateString) => {
    const dateObject = new Date(dateString);
  const day = dateObject.getDate();
  const month = dateObject.getMonth() + 1; // Months are zero-based
  const year = dateObject.getFullYear();

  const formattedDateString = `${day}/${month}/${year}`;
  
    return formattedDateString;
  };

  const convertToISODate = (dateString) => {
    if (!dateString) {
      return null; // or a default value if needed
    }
    const [day, month, year] = dateString.split('/');
  
    // Create a new Date object using the day, month, and year values
    const dateObject = new Date(`${month}/${day}/${year}`);
    
    // Use the toISOString() method to get the date in ISO 8601 format
    const isoDateString = dateObject.toISOString();
  
    return isoDateString;
  };
  
  useEffect(() => {
    if (storedData.length > 0) {
      setprofiledata({
        ...profiledata,
        "HelperBioDetails": {
          "OrgId": 1,
          "HelperCode": storedData[0].HelperCode,
          "HelperName": storedData[0].HelperName,
          "NRIC_FIN": storedData[0].NRIC_FIN,
          "Nationality": storedData[0].Nationality,
          "PassportNo": storedData[0].PassportNo,
          "PassportIssuePlace": storedData[0].PassportIssuePlace,
          "PassIssueDate":convertToDate(storedData[0].PassIssueDate),
          "PassportExpiryDate": convertToDate(storedData[0].PassportExpiryDate),
          "WorkPermitNo": storedData[0].WorkPermitNo,
          "WorkPermitExpiry": convertToDate(storedData[0].WorkPermitExpiry),
          "Religion": storedData[0].Religion,
          "DateOfBirth": convertToDate(storedData[0].DateOfBirth),
          "MartilaStatus": storedData[0].MartilaStatus,
          "BirthPlace": storedData[0].BirthPlace,
          "Specialization_Preference": storedData[0].Specialization_Preference,
          "RepatraiteAirport": storedData[0].RepatraiteAirport,
          "Status": storedData[0].Status,
          "OtherInfo": storedData[0].OtherInfo,
          "DirectHire": storedData[0].DirectHire,
          "TrainingCenter": storedData[0].TrainingCenter,
          "FileName": storedData[0].FileName,
          "Helper_Img_Base64String": "",
          "IsActive": storedData[0].IsActive,
          "ChangedBy": storedData[0].ChangedBy
        },
        "Helper_PhysicalAttribute": {
          "Complexion": storedData[0].Complexion,
          "Height_CM": storedData[0].Height_CM,
          "Height_Feet": storedData[0].Height_Feet,
          "Weight_KG": storedData[0].Weight_KG,
          "Weight_Pound": storedData[0].Weight_Pound
        }
      });

      if(storedData[0].FilePath ){
        const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
        setprofiledata((prevData) => ({
          ...prevData,
          FileName: storedData[0].FileName, // Provide a default file name if needed
          HelperBioDetails: {
            ...prevData.HelperBioDetails,
            Helper_Img_Base64String: reader.result,
          },
        }));
      };
      reader.readAsDataURL(storedData[0].FilePath);
      }
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

  const handleRadioChange = (e) => {
    const { name, value } = e.target;


    setprofiledata((prevData) => ({
     ...prevData,
     HelperBioDetails: 
       {
         ...prevData.HelperBioDetails,
         [name]: value === "true" ? true : false
       }
     
   }));
 
  };

  const saveprofiledataHandler = async (event) => {
    event.preventDefault();
    const regDetail = {
      "HelperBioDetails": {
        "OrgId": 1,
        "HelperCode": profiledata.HelperBioDetails.HelperCode,
        "HelperName": profiledata.HelperBioDetails.HelperName,
        "NRIC_FIN": profiledata.HelperBioDetails.NRIC_FIN,
        "Nationality": profiledata.HelperBioDetails.Nationality,
        "PassportNo": profiledata.HelperBioDetails.PassportNo,
        "PassportIssuePlace": profiledata.HelperBioDetails.PassportIssuePlace,
        "PassIssueDate":convertToISODate(profiledata.HelperBioDetails.PassIssueDate),
        "PassportExpiryDate": convertToISODate(profiledata.HelperBioDetails.PassportExpiryDate),
        "WorkPermitNo": profiledata.HelperBioDetails.WorkPermitNo,
        "WorkPermitExpiry": convertToISODate(profiledata.HelperBioDetails.WorkPermitExpiry),
        "Religion": profiledata.HelperBioDetails.Religion,
        "DateOfBirth": convertToISODate(profiledata.HelperBioDetails.DateOfBirth),
        "MartilaStatus": profiledata.HelperBioDetails.MartilaStatus,
        "BirthPlace": profiledata.HelperBioDetails.BirthPlace,
        "Specialization_Preference": profiledata.HelperBioDetails.Specialization_Preference,
        "RepatraiteAirport": profiledata.HelperBioDetails.RepatraiteAirport,
        "Status": profiledata.HelperBioDetails.Status,
        "OtherInfo": profiledata.HelperBioDetails.OtherInfo,
        "DirectHire": profiledata.HelperBioDetails.DirectHire,
        "TrainingCenter": profiledata.HelperBioDetails.TrainingCenter,
        "FileName": profiledata.HelperBioDetails.FileName,
        "Helper_Img_Base64String": profiledata.HelperBioDetails.Helper_Img_Base64String,
        "IsActive": profiledata.HelperBioDetails.IsActive,
        "ChangedBy": profiledata.HelperBioDetails.ChangedBy
      },
      "Helper_PhysicalAttribute": {
        "Complexion": profiledata.Helper_PhysicalAttribute.Complexion,
        "Height_CM": profiledata.Helper_PhysicalAttribute.Height_CM,
        "Height_Feet": profiledata.Helper_PhysicalAttribute.Height_Feet,
        "Weight_KG": profiledata.Helper_PhysicalAttribute.Weight_KG,
        "Weight_Pound": profiledata.Helper_PhysicalAttribute.Weight_Pound
      }
    };
    console.log(regDetail);

    const jwttoken = jwtToken;
    console.log(jwtToken, jwttoken);

    try {
      const response = await fetch('http://154.26.130.251:283/api/Helper/BioDetails_Updation', {
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
            "HelperCode": profiledata.HelperBioDetails.HelperCode,
            "HelperName": profiledata.HelperBioDetails.HelperName,
            "NRIC_FIN": profiledata.HelperBioDetails.NRIC_FIN,
            "Nationality": profiledata.HelperBioDetails.Nationality,
            "PassportNo": profiledata.HelperBioDetails.PassportNo,
            "PassportIssuePlace": profiledata.HelperBioDetails.PassportIssuePlace,
            "PassIssueDate":profiledata.HelperBioDetails.PassIssueDate,
            "PassportExpiryDate": profiledata.HelperBioDetails.PassportExpiryDate,
            "WorkPermitNo": profiledata.HelperBioDetails.WorkPermitNo,
            "WorkPermitExpiry": profiledata.HelperBioDetails.WorkPermitExpiry,
            "Religion": profiledata.HelperBioDetails.Religion,
            "DateOfBirth": profiledata.HelperBioDetails.DateOfBirth,
            "MartilaStatus": profiledata.HelperBioDetails.MartilaStatus,
            "BirthPlace": profiledata.HelperBioDetails.BirthPlace,
            "Specialization_Preference": profiledata.HelperBioDetails.Specialization_Preference,
            "RepatraiteAirport": profiledata.HelperBioDetails.RepatraiteAirport,
            "Status": profiledata.HelperBioDetails.Status,
            "OtherInfo": profiledata.HelperBioDetails.OtherInfo,
            "DirectHire": profiledata.HelperBioDetails.DirectHire,
            "TrainingCenter": profiledata.HelperBioDetails.TrainingCenter,
            "FileName": profiledata.HelperBioDetails.FileName,
            "FilePath": profiledata.HelperBioDetails.Helper_Img_Base64String,
            "IsActive": profiledata.HelperBioDetails.IsActive,
            "ChangedBy": profiledata.HelperBioDetails.ChangedBy,
            "Complexion": profiledata.Helper_PhysicalAttribute.Complexion,
            "Height_CM": profiledata.Helper_PhysicalAttribute.Height_CM,
            "Height_Feet": profiledata.Helper_PhysicalAttribute.Height_Feet,
            "Weight_KG": profiledata.Helper_PhysicalAttribute.Weight_KG,
            "Weight_Pound": profiledata.Helper_PhysicalAttribute.Weight_Pound
          }; // Update the property
        setstoreddata(updatedData);
        console.log(storedData,updatedData);
        
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
     
      <section className="fullcontainer dashboard helper-bio-profile hbp-page" data-aos="fade-up">
        <div className="inner-container-md">
        <div className="container">
          <div className="pageTitle md"><h2>Helper Dashboard</h2></div>
          <div className="row">
            <div className="col-lg-auto mb-991-30"> 
              <div className="sidebar">
              <div className="sidebar-title"><h5>Hi Samantha,</h5></div>
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
              <form onSubmit={saveprofiledataHandler}>
              <div className="dashboard-right-wrap hbp-wrap">
                <div className="data-collapse-box">
                      <div className="card-header"> <a className="collapsed" data-toggle="collapse" href="#edf-1" role="button" aria-expanded="false" aria-controls="edf-1">1. Helper Bio Details</a> </div>
                      <div className="collapse" id="edf-1">
                        <div className="card card-body">
                         <div className="form-data-wrap">
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Profile Photo/Video</label>
                              </div>
                              <div className="col-lg-6">
                                <div className="upload-area">
                                  <div className="file-upload">
                                    {/* <div id="start">
                                      <img src="images/upload-icon-highlight.png" alt=""/>
                                      <div className="upload-inner-info">Click here to upload Photo/Video</div>
                                    </div> */}

                                    <label htmlFor="uploadInput">
                                            <div id="start">
                                              {selectedImage ? (
                                                <img src={selectedImage} style={{'width':'100px','height':'100px'}} alt="Selected" />
                                              ) : (
                                                <img src="images/upload-icon-highlight.png" alt="" />
                                              )}
                                              <div className="upload-inner-info">Click here to upload Photo/Video</div>
                                            </div>
                                          </label>
                                          <input
                                            type="file"
                                            id="uploadInput"
                                            style={{ display: 'none' }}
                                            accept="image/*, video/*"
                                            onChange={(e) => {
                                              const file = e.target.files[0];
                                              if (file) {
                                                const reader = new FileReader();
                                                reader.onload = () => {
                                                  setSelectedImage(reader.result);
                                          
                                                  setprofiledata((prevData) => ({
                                                    ...prevData,
                                                    FileName: file.name,
                                                    HelperBioDetails: {
                                                      ...prevData.HelperBioDetails,
                                                      Helper_Img_Base64String: reader.result,
                                                    },
                                                  }));
                                                };
                                                reader.readAsDataURL(file);
                                              }
                                            }}
                                          />



                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Name</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="Name"
                                value={profiledata.HelperBioDetails.HelperName}
                                onChange={(e)=>{setprofiledata((prevData)=>({...prevData,HelperBioDetails:{...prevData.HelperBioDetails,HelperName:e.target.value}}));}}
                                /> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>FIN No.</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="Your NRIC / FIN"
                                value={profiledata.HelperBioDetails.NRIC_FIN}
                                onChange={(e)=>{setprofiledata((prevData)=>({...prevData,HelperBioDetails:{...prevData.HelperBioDetails,NRIC_FIN:e.target.value}}));}}
                                /> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Nationality</label>
                              </div>
                              <div className="col-lg-6">
                                <select className='new-select'
                                value={profiledata.HelperBioDetails.Nationality}
                                onChange={(e)=>{setprofiledata((prevData)=>({...prevData,HelperBioDetails:{...prevData.HelperBioDetails,Nationality:e.target.value}}));}}
                                >
                                  <option value="Indonesian">Indonesian</option>
                                  <option value="INDIAN">INDIAN</option>
                                  <option value="">Select</option>
                                </select>
                              </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Passport No.</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="Passport No."
                                value={profiledata.HelperBioDetails.PassportNo}
                                onChange={(e)=>{setprofiledata((prevData)=>({...prevData,HelperBioDetails:{...prevData.HelperBioDetails,PassportNo:e.target.value}}));}}
                                /> </div>
                            </div>
                            

                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Passport Issue Place</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="Passport Issue Place"
                                value={profiledata.HelperBioDetails.PassportIssuePlace}
                                onChange={(e)=>{setprofiledata((prevData)=>({...prevData,HelperBioDetails:{...prevData.HelperBioDetails,PassportIssuePlace:e.target.value}}));}}
                                /> </div>
                            </div>

                            <div className="row form-group align-items-center">
                        <div className="col-lg-3">
                          <label>Passport Expiry Date</label>
                        </div>
                        <div className="col-lg-6">
                          <div className="inrow date-wrap datepicker-wrap">
                                  <input type="text" className="form-control datepicker" placeholder="DD/MM/YYYY" 
                                  value={profiledata.HelperBioDetails.PassportExpiryDate}
                                  onChange={(e)=>{setprofiledata((prevData)=>({...prevData,HelperBioDetails:{...prevData.HelperBioDetails,PassportExpiryDate:e.target.value}}));}}
                                  /> <i className="fas fa-calendar-alt"></i> 
                          </div> 
                        </div>
                      </div>

                      <div className="row form-group align-items-center">
                        <div className="col-lg-3">
                          <label>Passport Issue Date</label>
                        </div>
                        <div className="col-lg-6">
                          <div className="inrow date-wrap datepicker-wrap">
                                  <input type="text" className="form-control datepicker" placeholder="DD/MM/YYYY" 
                                  value={profiledata.HelperBioDetails.PassIssueDate}
                                  onChange={(e)=>{setprofiledata((prevData)=>({...prevData,HelperBioDetails:{...prevData.HelperBioDetails,PassIssueDate:e.target.value}}));}}
                                  /> <i className="fas fa-calendar-alt"></i> 
                          </div> 
                        </div>
                      </div>

                      <div className="row form-group align-items-center">
                        <div className="col-lg-3">
                          <label>Work Permit No.</label>
                        </div>
                        <div className="col-lg-6">
                          <input type="text" className="form-control" placeholder="Passport Issue Place"
                          value={profiledata.HelperBioDetails.WorkPermitNo}
                          onChange={(e)=>{setprofiledata((prevData)=>({...prevData,HelperBioDetails:{...prevData.HelperBioDetails,WorkPermitNo:e.target.value}}));}}
                          /> 
                        </div>
                      </div>

                      <div className="row form-group align-items-center">
                        <div className="col-lg-3">
                          <label>Work Permit Expiry</label>
                        </div>
                        <div className="col-lg-6">
                          <div className="inrow date-wrap datepicker-wrap">
                                  <input type="text" className="form-control datepicker" placeholder="DD/MM/YYYY" 
                                  value={profiledata.HelperBioDetails.WorkPermitExpiry}
                                  onChange={(e)=>{setprofiledata((prevData)=>({...prevData,HelperBioDetails:{...prevData.HelperBioDetails,WorkPermitExpiry:e.target.value}}));}}
                                  /> <i className="fas fa-calendar-alt"></i> 
                          </div> 
                        </div>
                      </div>

                      <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Religion</label>
                              </div>
                              <div className="col-lg-6">
                                <select className='new-select'
                                value={profiledata.HelperBioDetails.Religion}
                                onChange={(e)=>{setprofiledata((prevData)=>({...prevData,HelperBioDetails:{...prevData.HelperBioDetails,Religion:e.target.value}}));}}
                                >
                                  <option value="HINDU">HINDU</option>
                                  <option value="MUSLIM">MUSLIM</option>
                                  <option value="">Other</option>
                                </select>
                              </div>
                            </div>

                            <div className="row form-group align-items-center">
                        <div className="col-lg-3">
                          <label>Date of Birth</label>
                        </div>
                        <div className="col-lg-6">
                          <div className="inrow date-wrap datepicker-wrap">
                                  <input type="text" className="form-control datepicker" placeholder="DD/MM/YYYY" 
                                  value={profiledata.HelperBioDetails.DateOfBirth}
                                  onChange={(e)=>{setprofiledata((prevData)=>({...prevData,HelperBioDetails:{...prevData.HelperBioDetails,DateOfBirth:e.target.value}}));}}
                                  /> <i className="fas fa-calendar-alt"></i> 
                          </div> 
                        </div>
                        
                      </div>

                      <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Martial Status</label>
                              </div>
                              <div className="col-lg-6">
                                <select className='new-select'
                                value={profiledata.HelperBioDetails.MartilaStatus || ''}
                                onChange={(e)=>{setprofiledata((prevData)=>({...prevData,HelperBioDetails:{...prevData.HelperBioDetails,MartilaStatus:e.target.value}}));}}
                                >
                                  <option value="YES">YES</option>
                                  <option value="NO">NO</option>
                                  <option value="">Other</option>
                                </select>
                              </div>
                            </div>


                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Birth Place</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="Birth Place"
                                value={profiledata.HelperBioDetails.BirthPlace}
                                onChange={(e)=>{setprofiledata((prevData)=>({...prevData,HelperBioDetails:{...prevData.HelperBioDetails, BirthPlace:e.target.value}}));}}
                                /> </div>
                            </div>

                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Specialization/Preference</label>
                              </div>
                              <div className="col-lg-6">
                                <select className='new-select'
                                value={profiledata.HelperBioDetails.Specialization_Preference || ''}
                                onChange={(e)=>{setprofiledata((prevData)=>({...prevData,HelperBioDetails:{...prevData.HelperBioDetails,Specialization_Preference:e.target.value}}));}}
                                >
                                  <option value="Caregiver">Caregiver</option>
                                  <option value="">option-2</option>
                                </select>
                              </div>
                            </div>


                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Repatraite Airport</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder=""
                                value={profiledata.HelperBioDetails.RepatraiteAirport}
                                onChange={(e)=>{setprofiledata((prevData)=>({...prevData,HelperBioDetails:{...prevData.HelperBioDetails,RepatraiteAirport:e.target.value}}));}}
                                /> </div>
                            </div>

                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Status</label>
                              </div>
                              <div className="col-lg-6">
                                <select className='new-select'
                                value={profiledata.HelperBioDetails.Status || ''}
                                onChange={(e)=>{setprofiledata((prevData)=>({...prevData,HelperBioDetails:{...prevData.HelperBioDetails,Status:e.target.value}}));}}
                                >
                                  <option value="Incoming Only">Incoming Only</option>
                                  <option value="">option-2</option>
                                </select>
                              </div>
                            </div>

                             <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Other Info</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder=""
                                value={profiledata.HelperBioDetails.OtherInfo}
                                onChange={(e)=>{setprofiledata((prevData)=>({...prevData,HelperBioDetails:{...prevData.HelperBioDetails,OtherInfo:e.target.value}}));}}
                                /> 
                              </div>
                            </div>

                             <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Direct Hire</label>
                              </div>
                              <div className="col-lg-6">
                                      <div className="radio-inline">
                                        <div className="radio">
                                          <label>
                                            <input type="radio"  name="DirectHire"
                                            value="true"
                                            checked={profiledata.HelperBioDetails.DirectHire === true}
                                            onChange={handleRadioChange}
                                            /> <span>Yes</span></label>
                                        </div>
                                        <div className="radio">
                                          <label>
                                            <input type="radio" name="DirectHire" 
                                            value="false"
                                            checked={profiledata.HelperBioDetails.DirectHire === false}
                                            onChange={handleRadioChange}
                                            /> <span>No</span></label>
                                        </div>
                                      </div>
                                    </div>
                            </div>

                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Training Center</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder=""
                                value={profiledata.HelperBioDetails.TrainingCenter}
                                onChange={(e)=>{setprofiledata((prevData)=>({...prevData,HelperBioDetails:{...prevData.HelperBioDetails,TrainingCenter:e.target.value}}));}}
                                /> </div>
                            </div>



                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="data-collapse-box">
                      <div className="card-header"> <a className="collapsed" data-toggle="collapse" href="#edf-2" role="button" aria-expanded="false" aria-controls="edf-2">2. Physical Attributes</a> </div>
                      <div className="collapse" id="edf-2">
                        <div className="card card-body">
                         <div className="form-data-wrap">
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Complexion</label>
                              </div>
                              <div className="col-lg-6">
                                <select className='new-select'
                                value={profiledata.Helper_PhysicalAttribute.Complexion || ''}
                                onChange={(e)=>{setprofiledata((prevData)=>({...prevData,Helper_PhysicalAttribute:{...prevData.Helper_PhysicalAttribute,Complexion:e.target.value}}));}}
                                >
                                  <option value="Dark">Dark</option>
                                  <option value="Fair">Fair</option>
                                  <option value="RELAX">Relax</option>
                                  <option value="">Select</option>
                                </select>
                              </div>
                            </div>
                            
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Height</label>
                              </div>
                              <div className="col-lg-6">
                                <div className="row inner-form-group">
                                  <div className="col-lg-6">
                                    <div className="row gutters-5 align-items-center">
                                      <div className="col-lg-8">
                                         <input type="text" className="form-control" placeholder="CM"
                                         value={profiledata.Helper_PhysicalAttribute.Height_CM || ''}
                                         onChange={(e)=>{setprofiledata((prevData)=>({...prevData,Helper_PhysicalAttribute:{...prevData.Helper_PhysicalAttribute,Height_CM:e.target.value}}));}}
                                         /> 
                                      </div>
                                      <div className="col-lg-4">
                                        <label>CM</label>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                   <div className="row gutters-5 align-items-center">
                                      <div className="col-lg-8">
                                         <input type="text" className="form-control" placeholder="Feet"
                                         value={profiledata.Helper_PhysicalAttribute.Height_Feet || ''}
                                         onChange={(e)=>{setprofiledata((prevData)=>({...prevData,Helper_PhysicalAttribute:{...prevData.Helper_PhysicalAttribute,Height_Feet:e.target.value}}));}}
                                         /> 
                                      </div>
                                      <div className="col-lg-4">
                                        <label>Feet</label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Weight</label>
                              </div>
                              <div className="col-lg-6">
                                <div className="row inner-form-group">
                                  <div className="col-lg-6">
                                    <div className="row gutters-5 align-items-center">
                                      <div className="col-lg-8">
                                         <input type="text" className="form-control" placeholder="KG"
                                         value={profiledata.Helper_PhysicalAttribute.Weight_KG || ''}
                                         onChange={(e)=>{setprofiledata((prevData)=>({...prevData,Helper_PhysicalAttribute:{...prevData.Helper_PhysicalAttribute,Weight_KG:e.target.value}}));}}
                                         /> 
                                      </div>
                                      <div className="col-lg-4">
                                        <label>KG</label>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                   <div className="row gutters-5 align-items-center">
                                      <div className="col-lg-8">
                                         <input type="text" className="form-control" placeholder="Pound"
                                         value={profiledata.Helper_PhysicalAttribute.Weight_Pound || ''}
                                         onChange={(e)=>{setprofiledata((prevData)=>({...prevData,Helper_PhysicalAttribute:{...prevData.Helper_PhysicalAttribute,Weight_Pound:e.target.value}}));}}
                                         /> 
                                      </div>
                                      <div className="col-lg-4">
                                        <label>Pounds</label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            

                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="main-inner-box">
                       <div className="pageTitle title-fix sm">
                        <h2>Other Details</h2></div>
                      <div className="od-upload-section size-14">
                        <p>Upload Passport/ Work Permit</p>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="upload-area">
                              <div className="file-upload">
                                <div id="start">
                                  <img src="images/upload-icon.png" alt="" />
                                  <div className="upload-inner-info">Click here to upload Photo/Video</div>
                                </div>
                              </div>
                              <div className="upload-inner-info">File Type: PDF/JPEG/DOC</div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="file-status-row">
                              <a href="#" className="file-close"><i className="far fa-times-circle"></i></a>
                              <div className="upload-file-name">Passport.PDF</div>
                              <div className="progress">
  <div className="progress-bar" role="progressbar" style={{'width': '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
                              <div className="upload-file-status">uploading...</div>
                            </div>
                            <div className="file-status-row">
                              <a href="#" className="file-close"><i className="fas fa-times-circle"></i></a>
                              <div className="upload-file-name">Passport.PDF</div>
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
                      </div> 
                      
              </div> */}
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

export default HelperProfileDetail;