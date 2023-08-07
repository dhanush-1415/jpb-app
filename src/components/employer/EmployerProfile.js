import React,{useEffect,useState} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import QuickSearch from '../Quicksearch';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';



const EmployerProfile = () => {
  const [selectedLink, setSelectedLink] = useState('/');
  const [storedData, setstoreddata] = React.useState([]);
  const [employerName, setEmployerName] = useState('');
  const [profiledata, setprofiledata] = useState({
    "OrgId": 1,
    "EmployerCode": "",
    "EmployerName": "",
    "Nationality": "",
    "NRIC_FIN": "",
    "PassportNo": "",
    "DateOfBirth": "",
    "ICIssueDate": "",
    "PassportExpiryDate": "",
    "Gender": "",
    "RaceCode":0,
    "ResidentialStatusCode": "",
    "BlockList": null,
    "MartilaStatus": "",
    "ReligionCode": 0,
    "Occupation": "",
    "Employed": true,
    "ReferralMethod": "",
    "CombinedIncome": true,
    "MonthlyIncome": 0,
    "YearofAssesment": 0,
    "NoofBedroom": 0,
    "NoofToilet": 0,
    "ClearWindowExterior": true,
    "CompanyName": "",
    "MarriageRegisteredinSG": true,
    "AnnualIncome": 0,
    "TypeOfResidence": ""
  });
  const [isloggedin, setisloggedin] = React.useState(false);
  const [jwtToken, setjwtToken] = useState('');

  // const navigate = useNavigate();
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
      setprofiledata({
        ...profiledata,
        "OrgId": storedData[0].OrgId,
        "EmployerCode": storedData[0].EmployerCode,
        "EmployerName": storedData[0].EmployerName,
        "Nationality": storedData[0].Nationality ? storedData[0].Nationality : '',
        "NRIC_FIN": storedData[0].NRIC_FIN,
        "PassportNo": storedData[0].PassportNo,
        "DateOfBirth": convertToDate(storedData[0].DateOfBirth),
        "ICIssueDate": convertToDate(storedData[0].ICIssueDate),
        "PassportExpiryDate": convertToDate(storedData[0].PassportExpiryDate),
        "Gender": storedData[0].Gender ? storedData[0].Gender : '',
        "RaceCode":storedData[0].RaceCode ? storedData[0].RaceCode : '',
        "ResidentialStatusCode": storedData[0].ResidentialStatusCode ? storedData[0].ResidentialStatusCode : '',
        "BlockList": storedData[0].BlockList,
        "MartilaStatus": storedData[0].MartilaStatus ? storedData[0].MartilaStatus : '',
        "ReligionCode":storedData[0].ReligionCode ? storedData[0].ReligionCode : '',
        "Occupation": storedData[0].Occupation ? storedData[0].Occupation : '',
        "Employed":storedData[0].Employed,
        "ReferralMethod": storedData[0].ReferralMethod ? storedData[0].ReferralMethod : '',
        "CombinedIncome": storedData[0].CombinedIncome,
        "MonthlyIncome": storedData[0].MonthlyIncome ? storedData[0].MonthlyIncome : '',
        "YearofAssesment": storedData[0].YearofAssesment ? storedData[0].YearofAssesment : '',
        "NoofBedroom":storedData[0].NoofBedroom,
        "NoofToilet": storedData[0].NoofToilet,
        "ClearWindowExterior": storedData[0].ClearWindowExterior,
        "CompanyName": storedData[0].CompanyName,
        "MarriageRegisteredinSG":storedData[0].MarriageRegisteredinSG,
        "AnnualIncome": storedData[0].AnnualIncome,
        "TypeOfResidence": storedData[0].TypeOfResidence ? storedData[0].TypeOfResidence : ''
      });
      setEmployerName(storedData[0].EmployerName);
    }
  }, [storedData]);

  const convertToDate = (dateString) => {
    const dateObject = new Date(dateString);
  const day = dateObject.getDate();
  const month = dateObject.getMonth() + 1; // Months are zero-based
  const year = dateObject.getFullYear();

  const formattedDateString = `${day}/${month}/${year}`;
  
    return formattedDateString;
  };

  const convertToISODate = (dateString) => {
    const [day, month, year] = dateString.split('/');
  
    // Create a new Date object using the day, month, and year values
    const dateObject = new Date(`${month}/${day}/${year}`);
    
    // Use the toISOString() method to get the date in ISO 8601 format
    const isoDateString = dateObject.toISOString();
  
    return isoDateString;
  };

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

  const handleInputChange = (event) => {
   console.log(event.target);
   // this.setState({ value: event.target.value });
    const { name, value } = event.target;

    console.log(value,name);
    setprofiledata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
  
    setprofiledata((prevData) => ({
      ...prevData,
      [name]: value === "true" ? true : false, // Convert the string value to boolean
    }));
  };

  

  const saveProfileDataHandler = async (event) => {
    event.preventDefault();
    const regDetail = {
      "OrgId": profiledata.OrgId,
        "EmployerCode": profiledata.EmployerCode,
        "EmployerName": profiledata.EmployerName,
        "Nationality": profiledata.Nationality,
        "NRIC_FIN": profiledata.NRIC_FIN,
        "PassportNo": profiledata.PassportNo,
        "DateOfBirth": convertToISODate(profiledata.DateOfBirth),
        "ICIssueDate": convertToISODate(profiledata.ICIssueDate),
        "PassportExpiryDate": convertToISODate(profiledata.PassportExpiryDate),
        "Gender": profiledata.Gender,
        "RaceCode":profiledata.RaceCode,
        "ResidentialStatusCode": profiledata.ResidentialStatusCode,
        "BlockList": profiledata.BlockList,
        "MartilaStatus": profiledata.MartilaStatus,
        "ReligionCode":profiledata.ReligionCode,
        "Occupation": profiledata.Occupation,
        "Employed":profiledata.Employed,
        "ReferralMethod": profiledata.ReferralMethod,
        "CombinedIncome": profiledata.CombinedIncome,
        "MonthlyIncome": profiledata.MonthlyIncome,
        "YearofAssesment": profiledata.YearofAssesment,
        "NoofBedroom":profiledata.NoofBedroom,
        "NoofToilet": profiledata.NoofToilet,
        "ClearWindowExterior": profiledata.ClearWindowExterior,
        "CompanyName": profiledata.CompanyName,
        "MarriageRegisteredinSG":profiledata.MarriageRegisteredinSG,
        "AnnualIncome": profiledata.AnnualIncome,
        "TypeOfResidence": profiledata.TypeOfResidence
    };
    console.log(regDetail);

    const jwttoken = jwtToken;
    console.log(jwtToken, jwttoken);

    try {
      const response = await fetch('http://154.26.130.251:283/api/Employer/ProfileDetails_Updation', {
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
          "OrgId": profiledata.OrgId,
        "EmployerCode": profiledata.EmployerCode,
        "EmployerName": profiledata.EmployerName,
        "Nationality": profiledata.Nationality,
        "NRIC_FIN": profiledata.NRIC_FIN,
        "PassportNo": profiledata.PassportNo,
        "DateOfBirth": convertToISODate(profiledata.DateOfBirth),
        "ICIssueDate": convertToISODate(profiledata.ICIssueDate),
        "PassportExpiryDate": convertToISODate(profiledata.PassportExpiryDate),
        "Gender": profiledata.Gender,
        "RaceCode":profiledata.RaceCode,
        "ResidentialStatusCode": profiledata.ResidentialStatusCode,
        "BlockList": profiledata.BlockList,
        "MartilaStatus": profiledata.MartilaStatus,
        "ReligionCode":profiledata.ReligionCode,
        "Occupation": profiledata.Occupation,
        "Employed":profiledata.Employed,
        "ReferralMethod": profiledata.ReferralMethod,
        "CombinedIncome": profiledata.CombinedIncome,
        "MonthlyIncome": profiledata.MonthlyIncome,
        "YearofAssesment": profiledata.YearofAssesment,
        "NoofBedroom":profiledata.NoofBedroom,
        "NoofToilet": profiledata.NoofToilet,
        "ClearWindowExterior": profiledata.ClearWindowExterior,
        "CompanyName": profiledata.CompanyName,
        "MarriageRegisteredinSG":profiledata.MarriageRegisteredinSG,
        "AnnualIncome": profiledata.AnnualIncome,
        "TypeOfResidence": profiledata.TypeOfResidence
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
     
      <section className="fullcontainer dashboard eppd-page" data-aos="fade-up">
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
            <form onSubmit={saveProfileDataHandler}>
              <div className="dashboard-right-wrap eppd-wrap">
                    <div className="main-inner-box">
                      <div className="pageTitle title-fix sm">
                        <h2>Personal Profile Details</h2></div>
                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Employer Name</label>
                        </div>
                        <div className="col-lg-7">
                          <input type="text" className="form-control" placeholder="Employer Name"
                          value={profiledata.EmployerName || ''}
                          onChange={(e) => {
                            setprofiledata({ ...profiledata, EmployerName: e.target.value });
                          }}
                          /> </div>
                      </div>
                      <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Nationality</label>
                              </div>
                              <div className="col-lg-7">
                               <select className='form-control'
                                id="Nationality"
                                name="Nationality"
                                value={profiledata.Nationality || ''}
                                onChange={handleInputChange}
                                >
                                   {/* {
                                    [{label : "Singaporean", value : "Singaporean"}, {label : "Indian", value : "Indian"}, {label : "Select", value : ""} ]
                                    .map(item=> ( <option key={item.value} selected={ profiledata.Nationality ==  item.value }  value={item.value}>{item.label}</option> ))
                                  } */}
                                  <option key="Singaporean" value="Singaporean">Singaporean</option>
                                  <option key="Indian" value="Indian">Indian</option>
                                  <option key="" value="">Select</option>
                                </select>

                               
                              </div>
                            </div>
                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>NRIC / FIN</label>
                        </div>
                        <div className="col-lg-7">
                          <input type="text" className="form-control" placeholder="NRIC / FIN"
                          value={profiledata.NRIC_FIN || ''}
                          onChange={(e) => {
                            setprofiledata({ ...profiledata, NRIC_FIN: e.target.value });
                          }}
                          /> </div>
                      </div>

                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Passport</label>
                        </div>
                        <div className="col-lg-7">
                          <input type="text" className="form-control" placeholder="Passport"
                          value={profiledata.PassportNo || ''}
                          onChange={(e) => {
                            setprofiledata({ ...profiledata, PassportNo: e.target.value });
                          }}
                          /> </div>
                      </div>
                      
                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Date of Birth</label>
                        </div>
                        <div className="col-lg-7">
                          <div className="inrow date-wrap datepicker-wrap">
                                  <input type="text" className="form-control datepicker" placeholder="DD/MM/YYYY" 
                                  value={profiledata.DateOfBirth || ''}
                                  onChange={(e) => {
                                    setprofiledata({ ...profiledata, DateOfBirth: e.target.value });
                                  }}
                                  /> <i className="fas fa-calendar-alt"></i> 
                          </div> 
                        </div>
                      </div>

                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>IC Issue Date</label>
                        </div>
                        <div className="col-lg-7">
                          <div className="inrow date-wrap datepicker-wrap">
                                  <input type="text" className="form-control datepicker" placeholder="DD/MM/YYYY" 
                                  value={profiledata.ICIssueDate || ''}
                                  onChange={(e) => {
                                    setprofiledata({ ...profiledata, ICIssueDate: e.target.value });
                                  }}
                                  /> <i className="fas fa-calendar-alt"></i> 
                          </div> 
                        </div>
                      </div>

                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Passport Expiry</label>
                        </div>
                        <div className="col-lg-7">
                          <div className="inrow date-wrap datepicker-wrap">
                                  <input type="text" className="form-control datepicker" placeholder="DD/MM/YYYY" 
                                  value={profiledata.PassportExpiryDate || ''}
                                  onChange={(e) => {
                                    setprofiledata({ ...profiledata, PassportExpiryDate: e.target.value });
                                  }}
                                  /> <i className="fas fa-calendar-alt"></i> 
                          </div> 
                        </div>
                      </div>

                      <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Gender</label>
                              </div>
                              <div className="col-lg-7">
                                <select className='form-control'
                                id="Gender"
                                name="Gender"
                                value={profiledata.Gender || ''}
                                onChange={handleInputChange}
                                >
                                  <option value="Male">Male</option>
                                  <option value="Female">Female</option>
                                  <option value="">Select</option>
                                </select>
                              </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Race</label>
                              </div>
                              <div className="col-lg-7">
                               <select className='form-control'
                                id="RaceCode"
                                name="RaceCode"
                                value={profiledata.RaceCode || ''}
                                onChange={handleInputChange}
                                >
                                  <option value="Chinese">Chinese</option>
                                  <option value="Indian">Indian</option>
                                  <option value="">Select</option>
                                </select>
                              </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Residential Status</label>
                              </div>
                              <div className="col-lg-7">
                               <select className='form-control'
                                id="ResidentialStatusCode"
                                name="ResidentialStatusCode"
                                value={profiledata.ResidentialStatusCode || ''}
                                onChange={handleInputChange}
                                >
                                  <option value="Singaporean Citizen">Singaporean Citizen</option>
                                  <option value="">option-2</option>
                                </select>
                              </div>
                            </div>
                            
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Marital Status</label>
                              </div>
                              <div className="col-lg-7">
                               <select className='form-control'
                                id="MartilaStatus"
                                name="MartilaStatus"
                                value={profiledata.MartilaStatus || ''}
                                onChange={handleInputChange}
                                >
                                  <option value="Married">Married</option>
                                  <option value="Unmarried">Unmarried</option>
                                  <option value="Divorced">Divorced</option>
                                  <option value="">Select</option>
                                </select>
                              </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Religion</label>
                              </div>
                              <div className="col-lg-7">
                               <select className='form-control'
                                id="ReligionCode"
                                name="ReligionCode"
                                value={profiledata.ReligionCode || ''}
                                onChange={handleInputChange}
                                >
                                  <option value="1">Buddhist</option>
                                  <option value="">option-2</option>
                                </select>
                              </div>
                            </div>
                            
              </div>
              <div className="main-inner-box">
                      <div className="pageTitle title-fix sm">
                        <h2>Other Details</h2></div>
                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Occupation</label>
                        </div>
                        <div className="col-lg-7">
                         <select className='form-control'
                          id="Occupation"
                          name="Occupation"
                          value={profiledata.Occupation || ''}
                          onChange={handleInputChange}
                          >
                                  <option value="Professional">Professional</option>
                                  <option value="">Select</option>
                                </select>
                        </div>
                      </div>
                      <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Employed</label>
                              </div>
                              <div className="col-lg-7">
                                <div className="radio-inline">
                                  <div className="radio">
                                    <label>
                                      <input
                                      type="radio"
                                      name="Employed"
                                      value="true"
                                      checked={profiledata.Employed === true}
                                      onChange={handleRadioChange}
                                      /> <span>Yes</span></label>
                                  </div>
                                  <div className="radio">
                                    <label>
                                    <input
                                      type="radio"
                                      name="Employed"
                                      value="false"
                                      checked={profiledata.Employed === false}
                                      onChange={handleRadioChange}
                                      /> <span>No</span></label>
                                  </div>
                                </div>
                              </div>
                            </div>
                      <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Refferal Method</label>
                              </div>
                              <div className="col-lg-7">
                               <select className='form-control'
                                id="ReferralMethod"
                                name="ReferralMethod"
                                value={profiledata.ReferralMethod || ''}
                                onChange={handleInputChange}
                                >
                                  <option value="Walk In">Walk In</option>
                                  <option value="">Select</option>
                                </select>
                              </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Combined Income ($)</label>
                              </div>
                              <div className="col-lg-7">
                                <div className="radio-inline">
                                  <div className="radio">
                                    <label>
                                      <input 
                                      type="radio" 
                                      name="CombinedIncome"
                                      value="true"
                                      checked={profiledata.CombinedIncome === true}
                                      onChange={handleRadioChange}
                                      /> <span>Yes</span></label>
                                  </div>
                                  <div className="radio">
                                    <label>
                                      <input 
                                      type="radio" 
                                      name="CombinedIncome"
                                      value="false"
                                      checked={profiledata.CombinedIncome === false}
                                      onChange={handleRadioChange}
                                      /> <span>No</span></label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Monthly Income</label>
                              </div>
                              <div className="col-lg-7">
                               <select className='form-control'
                                id="MonthlyIncome"
                                name="MonthlyIncome"
                                value={profiledata.MonthlyIncome || ''}
                                onChange={handleInputChange}
                                >
                                  <option value="25,000">Above $25,000</option>
                                  <option value="">Select</option>
                                </select>
                              </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Year of Assesment</label>
                              </div>
                              <div className="col-lg-7">
                               <select className='form-control'
                                id="YearofAssesment"
                                name="YearofAssesment"
                                value={profiledata.YearofAssesment || ''}
                                onChange={handleInputChange}
                                >
                                  <option value="2005">2005</option>
                                  <option value="2003">2003</option>
                                  <option value="">Select</option>
                                </select>
                              </div>
                            </div>
                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>No of Bedroom</label>
                        </div>
                        <div className="col-lg-4">
                          <input type="text" className="form-control" placeholder="No of Bedroom"
                          value={profiledata.NoofBedroom || ''}
                          onChange={(e) => {
                            setprofiledata({ ...profiledata, NoofBedroom: e.target.value });
                          }}
                          /> </div>
                      </div>
                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>No. of Toilet</label>
                        </div>
                        <div className="col-lg-4">
                          <input type="text" className="form-control" placeholder="No. of Toilet"
                          value={profiledata.NoofToilet || ''}
                          onChange={(e) => {
                            setprofiledata({ ...profiledata, NoofToilet: e.target.value });
                          }}
                          /> </div>
                      </div>

                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Clear Window Exterior</label>
                        </div>
                        <div className="col-lg-7">
                                <div className="radio-inline">
                                  <div className="radio">
                                    <label>
                                      <input 
                                      type="radio" 
                                      name="ClearWindowExterior"
                                      value="true"
                                      checked={profiledata.ClearWindowExterior === true}
                                      onChange={handleRadioChange}
                                      /> <span>Yes</span></label>
                                  </div>
                                  <div className="radio">
                                    <label>
                                      <input 
                                      type="radio" 
                                      name="ClearWindowExterior"
                                      value="false"
                                      checked={profiledata.ClearWindowExterior === false}
                                      onChange={handleRadioChange}
                                      /> <span>No</span></label>
                                  </div>
                                </div>
                              </div>
                      </div>
                      
                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Company Name</label>
                        </div>
                        <div className="col-lg-7">
                           <input type="text" className="form-control" placeholder="Company Name" 
                           value={profiledata.CompanyName || ''}
                           onChange={(e) => {
                             setprofiledata({ ...profiledata, CompanyName: e.target.value });
                           }}
                           /> 
                        </div>
                      </div>

                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Marriage Registered in SG</label>
                        </div>
                        <div className="col-lg-7">
                                <div className="radio-inline">
                                  <div className="radio">
                                    <label>
                                      <input 
                                      type="radio" 
                                      name="MarriageRegisteredinSG"
                                      value="true"
                                      checked={profiledata.MarriageRegisteredinSG === true}
                                      onChange={handleRadioChange}
                                      /> <span>Yes</span></label>
                                  </div>
                                  <div className="radio">
                                    <label>
                                      <input 
                                      type="radio" 
                                      name="MarriageRegisteredinSG"
                                      value="false"
                                      checked={profiledata.MarriageRegisteredinSG === false}
                                      onChange={handleRadioChange}
                                      /> <span>No</span></label>
                                  </div>
                                </div>
                              </div>
                      </div>

                     <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Annual Income ($)</label>
                        </div>
                        <div className="col-lg-7">
                           <input type="text" className="form-control" placeholder="Annual Income ($)"
                           value={profiledata.AnnualIncome || ''}
                           onChange={(e) => {
                             setprofiledata({ ...profiledata, AnnualIncome: e.target.value });
                           }}
                            /> 
                        </div>
                      </div>
                      <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Type of Residence</label>
                              </div>
                              <div className="col-lg-7">
                               <select className='form-control'
                                id="TypeOfResidence"
                                name="TypeOfResidence"
                                value={profiledata.TypeOfResidence || ''}
                                onChange={handleInputChange}
                                >
                                  <option value="Apartment">Apartment</option>
                                  <option value="House">House</option>
                                  <option value="">Select</option>
                                </select>
                              </div>
                            </div>      
                        
              </div>
              {/* <div className="main-inner-box">
                      <div className="pageTitle title-fix sm">
                        <h2>Other Details</h2></div>
                      <div className="od-upload-section size-14">
                        <p>Upload NRIC/Passport/Tentancy Agreement (for foreigner)</p>
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

export default EmployerProfile;