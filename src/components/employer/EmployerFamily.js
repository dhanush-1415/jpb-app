import React,{useEffect,useState} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import QuickSearch from '../Quicksearch';

import { Link } from 'react-router-dom';



const EmployerFamily = () => {
  const [selectedLink, setSelectedLink] = useState('/');
  const [storedData, setstoreddata] = React.useState([]);
  const [familydata, setfamilydata] = useState({
    "FamilyDetails": [
      {
        "OrgId": 1,
        "EmployerCode": "",
        "Name": "",
        "SlNo": 0,
        "Relationship": "",
        "NRIC_FIN": "",
        "DateofBirth": "",
        "Title": "",
        "Passport": "",
        "PassportExpiry": "",
        "Gender": "",
        "ResidentialStatus": "",
        "Occupation": "",
        "Employed": true,
        "CompanyName": "",
        "MonthlyIncome": "",
        "AnnualIncome": true,
        "YearofAssessment": 0,
        "MobileNo": "",
        "Email": "",
        "OtherNo": ""
      }
    ],
    "JobScopes": {
      "HousingType": "",
      "ExpectedJobScope": [
        {
          "JobScopeId": 0,
          "ExpectedJobScope": ""
        }
      ],
      "NoOfBedroom": "",
      "HelperSleepingArea": "",
      "OtherFamilyMemberStayinginthehouse": "",
      "Remarks": ""
    }
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
  
  useEffect(() => {
    if (storedData.length > 0) {
      setfamilydata({
        ...familydata,
        "FamilyDetails": [
          {
            "OrgId": storedData[0].OrgId,
            "EmployerCode": storedData[0].EmployerCode,
            "Name": "",
            "SlNo": 0,
            "Relationship": "",
            "NRIC_FIN": "",
            "DateofBirth": convertToDate(storedData[0].DateOfBirth),
            "Title": "",
            "Passport": "",
            "PassportExpiry": convertToDate(storedData[0].PassportExpiryDate),
            "Gender": "",
            "ResidentialStatus": "",
            "Occupation": "",
            "Employed": true,
            "CompanyName": "",
            "MonthlyIncome": "",
            "AnnualIncome": true,
            "YearofAssessment": 0,
            "MobileNo": "",
            "Email": "",
            "OtherNo": ""
          }
        ],
        "JobScopes": {
          "HousingType": storedData[0].OrgId,
          "ExpectedJobScope": [
            {
              "JobScopeId": 0,
              "ExpectedJobScope": ""
            }
          ],
          "NoOfBedroom": storedData[0].NoOfBedroom,
          "HelperSleepingArea": storedData[0].HelperSleepingArea,
          "OtherFamilyMemberStayinginthehouse": storedData[0].OFMS,
          "Remarks": storedData[0].Remarks
        }
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

  

  const handleInputChange = (event) => {
    console.log(event.target);
    // this.setState({ value: event.target.value });
     const { name, value } = event.target;
 
     console.log(value,name);
     setfamilydata((prevData) => ({
       ...prevData,
       [name]: value,
     }));
   };
 
   const handleRadioChange = (e) => {
     const { name, value } = e.target;
   
     setfamilydata((prevData) => ({
       ...prevData,
       [name]: value === "true" ? true : false, // Convert the string value to boolean
     }));
   };

  const savefamilydataHandler = async (event) => {
    event.preventDefault();
    console.log(familydata.DateofBirth);
    const regDetail = {
      "FamilyDetails": [
        {
          "OrgId": familydata.OrgId,
          "EmployerCode": familydata.EmployerCode,
          "Name": familydata.Name,
          "SlNo": familydata.SlNo,
          "Relationship": familydata.Relationship,
          "NRIC_FIN": familydata.NRIC_FIN,
          "DateofBirth": convertToISODate(familydata.DateofBirth),
          "Title": familydata.Title,
          "Passport": familydata.Passport,
          "PassportExpiry": convertToISODate(familydata.PassportExpiry),
          "Gender": familydata.Gender,
          "ResidentialStatus": familydata.ResidentialStatus,
          "Occupation": familydata.Occupation,
          "Employed": familydata.Employed,
          "CompanyName": familydata.CompanyName,
          "MonthlyIncome": familydata.MonthlyIncome,
          "AnnualIncome": familydata.AnnualIncome,
          "YearofAssessment": familydata.YearofAssessment,
          "MobileNo": familydata.MobileNo,
          "Email": familydata.Email,
          "OtherNo": familydata.OtherNo
        }
      ],
      "JobScopes": {
        "HousingType": familydata.OrgId,
        "ExpectedJobScope": familydata.ExpectedJobScope,
        "NoOfBedroom": familydata.NoOfBedroom,
        "HelperSleepingArea": familydata.HelperSleepingArea,
        "OtherFamilyMemberStayinginthehouse": familydata.OFMS,
        "Remarks": familydata.Remarks
      }
    };
    console.log(regDetail);

    const jwttoken = jwtToken;
    console.log(jwtToken, jwttoken);

    // try {
    //   const response = await fetch('http://154.26.130.251:283/api/Employer/FamilyDetails_Updation', {
    //     method: 'POST',
    //     body: JSON.stringify(regDetail),
    //     headers: {
    //       'Content-Type': 'application/json',
    //       Authorization: `Bearer ${jwttoken}`,
    //     },
    //   });

    //   console.log(response);

    //   if (!response.ok) {
    //     console.log('Something went wrong!');
    //     return;
    //   }

    //   const data = await response.json();
    //   console.log(data);

    //   if (data.Code === 200 && data.Message === 'Sucess') {
        
    //     const updatedData = [...storedData]; // Clone the array
    //     updatedData[0] = { ...updatedData[0],
    //       HousingType: familydata.HousingType,
    //       ExpectedJobScope: familydata.ExpectedJobScope,
    //       NoOfBedroom: familydata.NoOfBedroom,
    //       HelperSleepingArea: familydata.HelperSleepingArea,
    //       OFMS: familydata.OtherFamilyMemberStayinginthehouse,
    //       Remarks: familydata.Remarks
          
    //       }; // Update the property
    //     setstoreddata(updatedData);
    //     console.log(storedData,updatedData);
        
    //     localStorage.setItem('token', JSON.stringify(updatedData));
    //   }
    // } catch (error) {
    //   console.log('An error occurred:', error);
    // }
  
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
      
      <section className="fullcontainer dashboard efml-page" data-aos="fade-up">
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
              <form onSubmit={savefamilydataHandler}>
              <div className="dashboard-right-wrap efml-wrap">
                    <div className="main-inner-box">
                      <div className="pageTitle title-fix sm">
                        <h2>Family Details</h2></div>
                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Name</label>
                        </div>
                        <div className="col-lg-7">
                          <input type="text" className="form-control" placeholder="Name"/> </div>
                      </div>
                      <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Relationship</label>
                              </div>
                              <div className="col-lg-7">
                               <select className='new-select'onChange={(e) => {setfamilydata({...familydata,Relationship:e.target.value});}}>
                                  <option value="">Please Select</option>
                                  <option value="Mother">Mother</option>
                                  <option value="Father">Father</option>
                                </select>
                              </div>
                            </div>
                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>NRIC / FIN</label>
                        </div>
                        <div className="col-lg-7">
                          <input type="text" className="form-control" placeholder="NRIC / FIN"
                          value={familydata.NRIC_FIN}
                          onChange={(e) => {
                              setfamilydata({
                                  ...familydata,
                                  NRIC_FIN:  e.target.value
                              })
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
                                   value={familydata.DateOfBirth || ''}
                                  onChange={(e) => {
                                      setfamilydata({
                                          ...familydata,
                                          DateofBirth:  e.target.value
                                      })
                                  }}
                                   /> <i className="fas fa-calendar-alt"></i> 
                          </div> 
                        </div>
                      </div>
                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Title</label>
                        </div>
                        <div className="col-lg-7">
                          <input type="text" className="form-control" placeholder="Title"
                          value={familydata.Title}
                          onChange={(e) => {
                              setfamilydata({
                                  ...familydata,
                                  Title:  e.target.value
                              })
                          }}
                          /> </div>
                      </div>
                      
                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Passport</label>
                        </div>
                        <div className="col-lg-7">
                          <input type="text" className="form-control" placeholder="Passport"
                          value={familydata.Passport}
                          onChange={(e) => {
                              setfamilydata({
                                  ...familydata,
                                  Passport:  e.target.value
                              })
                          }}
                          /> </div>
                      </div>
                      
                      

                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Passport Expiry</label>
                        </div>
                        <div className="col-lg-7">
                          <div className="inrow date-wrap datepicker-wrap">
                                  <input type="text" className="form-control datepicker" placeholder="DD/MM/YYYY"
                                   value={familydata.PassportExpiry || ''}
                                  onChange={(e) => {
                                      setfamilydata({
                                          ...familydata,
                                          PassportExpiry:  e.target.value
                                      })
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
                                <select
                                onChange={(e) => {
                                    setfamilydata({
                                        ...familydata,
                                        Gender:  e.target.value
                                    })
                                }}
                                >
                                  <option value="Male">Male</option>
                                  <option value="Female">Female</option>
                                  <option value="">Select</option>
                                </select>
                              </div>
                            </div>
                           
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Residential Status</label>
                              </div>
                              <div className="col-lg-7">
                                <input type="text" className="form-control" placeholder="Residential Status"
                                value={familydata.ResidentialStatus}
                                onChange={(e) => {
                                    setfamilydata({
                                        ...familydata,
                                        ResidentialStatus:  e.target.value
                                    })
                                }}
                                /> </div>
                              </div>

                              <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Occupation</label>
                              </div>
                              <div className="col-lg-7">
                                <select
                                onChange={(e) => {
                                    setfamilydata({
                                        ...familydata,
                                        Occupation:  e.target.value
                                    })
                                }}
                                >
                                  <option value="">Please Select</option>
                                  <option value="Occupation">Occupation</option>
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
                                      checked={familydata.Employed === true}
                                      onChange={handleRadioChange}
                                      /> <span>Yes</span></label>
                                  </div>
                                  <div className="radio">
                                    <label>
                                    <input
                                      type="radio"
                                      name="Employed"
                                      value="false"
                                      checked={familydata.Employed === false}
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
                                 value={familydata.CompanyName || ''}
                                 onChange={(e) => {
                                   setfamilydata({ ...familydata, CompanyName: e.target.value });
                                 }}
                                /> </div>
                              </div>


                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Monthly Income ($)</label>
                              </div>
                              <div className="col-lg-7">
                             <select className='new-select'
                                id="MonthlyIncome"
                                name="MonthlyIncome"
                                value={familydata.MonthlyIncome || ''}
                                onChange={handleInputChange}
                                >
                                  <option value="25,000">Above $25,000</option>
                                  <option value="">Select</option>
                                </select>
                              </div>
                            </div>

                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Annual Income ($)</label>
                              </div>
                              <div className="col-lg-7">
                              <input type="text" className="form-control" placeholder="Annual Income ($)"
                           value={familydata.AnnualIncome || ''}
                           onChange={(e) => {
                             setfamilydata({ ...familydata, AnnualIncome: e.target.value });
                           }}
                            /> 
                              </div>
                            </div>

                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Year of Assessment</label>
                              </div>
                              <div className="col-lg-7">
                             <select className='new-select'
                                id="YearofAssesment"
                                name="YearofAssesment"
                                value={familydata.YearofAssesment || ''}
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
                                <label>Mobile No.</label>
                              </div>
                              <div className="col-lg-7">
                                <input type="text" className="form-control" placeholder="Mobile No."
                                value={familydata.MobileNo}
                                onChange={(e) => {setfamilydata({...familydata,MobileNo:e.target.value});}}
                                /> </div>
                              </div>

                              <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Email</label>
                              </div>
                              <div className="col-lg-7">
                                <input type="text" className="form-control" placeholder="Email"
                                 value={familydata.Email}
                                 onChange={(e) => {setfamilydata({...familydata,Email:e.target.value});}}
                                /> </div>
                              </div>

                              <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Other No.</label>
                              </div>
                              <div className="col-lg-7">
                                <input type="text" className="form-control" placeholder="Other No."
                                 value={familydata.OtherNo}
                                 onChange={(e) => {setfamilydata({...familydata,OtherNo:e.target.value});}}
                                /> </div>
                              </div>

                              {/* <div className="row form-group align-items-center">
                                <div className="col-lg-12">
                                  <button name="add-more" className="add-more"><i className="fas fa-plus"></i> Add More</button>
                                </div>
                              </div> */}


                            
              </div>
              <div className="main-inner-box">
                      <div className="pageTitle title-fix sm">
                        <h2>Job Scopes</h2></div>
                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Housing Type</label>
                        </div>
                        <div className="col-lg-7">
                       <select className='new-select' id="HousingType" 
                        name='HousingType'
                         value={familydata.HousingType || ''}
                         onChange={handleInputChange}
                               >
                                  <option value="Landed Property">Landed Property</option>
                                  <option value="">Select</option>
                                </select>
                        </div>
                      </div>
                      <div className="row select-group form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Expected Job Scope</label>
                              </div>
                              <div className="col-lg-7">
                             <select multiple className="selectpicker form-control" name="Job[]" id="number-multiple" data-virtual-scroll="true" 
                                value={familydata.ExpectedJobScope}
                                onChange={(e) => {
                                  const selectedOptions = Array.from(e.target.selectedOptions, (option) => ({
                                    JobScopeId: option.index,
                                    ExpectedJobScope: option.value
                                  }));

                                  setfamilydata({
                                    ...familydata,
                                    ExpectedJobScope: selectedOptions
                                  });
                                }} >
                                <option value="Household Chores">Household Chores</option>
                                <option value="Cooking">Cooking</option>
                                <option value="Looking after age person in the household">Looking after age person in the household</option>
                                <option value="Constact attaention is required">Constact attaention is required</option>
                                <option value="Babysitting">Babysitting</option>
                                <option value="Child - minding">Child - minding</option>
                                <option value="Others">Others</option>
                                </select>
                              </div>
                            </div>
                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Number of Bedrooms</label>
                        </div>
                        <div className="col-lg-7">
                           <input type="text" className="form-control" placeholder="Number of Bedroom in the house" 
                           value={familydata.NoofBedroom || ''}
                           onChange={(e) => {
                             setfamilydata({ ...familydata, NoofBedroom: e.target.value });
                           }}
                           /> 
                        </div>
                      </div>

                      <div className="row form-group align-items-center">
                        <div className="col-lg-5">
                          <label>Helper Sleeping Area</label>
                        </div>
                        <div className="col-lg-7">
                           <input type="text" className="form-control" placeholder="Helper Sleeping Area" 
                           value={familydata.HelperSleepingArea || ''}
                           onChange={(e) => {
                             setfamilydata({ ...familydata, HelperSleepingArea: e.target.value });
                           }}
                           /> 
                        </div>
                      </div>
                   
                      <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Other Family Member staying in the house</label>
                              </div>
                              <div className="col-lg-7">
                                <textarea className="form-control" placeholder="Other Family Member staying in the house"
                                value={familydata.OtherFamilyMemberStayinginthehouse || ''}
                                onChange={(e) => {
                                  setfamilydata({ ...familydata, OtherFamilyMemberStayinginthehouse: e.target.value });
                                }}
                                ></textarea>
                              </div>
                            </div>     
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Remarks</label>
                              </div>
                              <div className="col-lg-7">
                                <textarea className="form-control" placeholder="Remarks"
                                value={familydata.Remarks || ''}
                                onChange={(e) => {
                                  setfamilydata({ ...familydata, Remarks: e.target.value });
                                }}
                                ></textarea>
                              </div>
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

export default EmployerFamily;