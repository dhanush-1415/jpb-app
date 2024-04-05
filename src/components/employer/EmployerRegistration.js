import React, {  useEffect,useState ,useRef, useCallback} from 'react';
import $ from "jquery";
import Header from '../Header';
import Footer from '../Footer';
import QuickSearch from '../Quicksearch';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Select from 'react-select';
import { sendRegOTP , verifyRegOTP, createEmployerUser } from '../../apiCalls';
import { jpb } from '../../config';

const EmployerRegistration = () => {

  const [otp , setOtp] = useState("")
  const [selectedLink, setSelectedLink] = useState('/');
  const [jwtToken, setjwtToken] = useState('');
  const [employerCode, setemployerCode] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [inputOtp , setInputOtp] = useState('');
  const [stepOneComplete, setStepOneComplete] = useState(true);
  const [stepTwoComplete, setStepTwoComplete] = useState(true);
  const [stepThreeComplete, setStepThreeComplete] = useState(true);
  const navigate = useNavigate();
  const [employerFormData, setemployerFormData] = React.useState({
    PersonalDetails: {
      OrgId: 1,
      EmployerCode: employerCode,
     EmployerName: name,
      Nationality: "Singaporean",
     NRIC_FIN: "string",
      PassportNo: "string",
      DateOfBirth: "2023-06-28T05:07:49.787Z"
    },
    ContactDetails: {
      ContactPerson: "string",
      MobileNo: "string",
      HomeNo: "string",
      EmailId: email
    },
    JobScopes: {
      HousingType: "string",
      ExpectedJobScope: [
        
      ],
      NoOfBedroom: "string"
    },
    AccountDetails: {
      Email: email,
      Password: "string",
      ConfirmPassword: "string",
      SMSContactNumber: "string",
      MethodOfproceed: "string"
    }
})


const handleNameChange = (event) => {
  setName(event.target.value);
};

const handleEmailChange = (event) => {
  setEmail(event.target.value);
};

const handlePhoneChange = (event) => {
  setPhone(event.target.value);
};

const handleOtpChange = (event) => {
  setInputOtp(event.target.value);
};

const jobscopeoptions = [
  {JobScopeId: 1, value: 'Household Chores', label: 'Household Chores' },
  {JobScopeId: 2, value: 'Cooking', label: 'Cooking' },
  {JobScopeId: 3, value: 'Looking after age person in the household', label: 'Looking after age person in the household' },
  {JobScopeId: 4, value: 'Constact attaention is required', label: 'Constact attaention is required' },
  {JobScopeId: 5, value: 'Babysitting', label: 'Babysitting' },
  {JobScopeId: 6, value: 'Child - minding', label: 'Child - minding' },
  {JobScopeId: 7, value: 'Others', label: 'Others' },
];




 
  useEffect(() => {
    setSelectedLink(window.location.pathname);
    fetchTokenHandler();
      const verificationForm = () => {
          (function($) {
              "use strict";
              //* Form js
              function verificationForm() {
                //jQuery time
                var current_fs, next_fs, previous_fs; //fieldsets
                var left, opacity, scale; //fieldset properties which we will animate
                var animating; //flag to prevent quick multi-click glitches
                $(".next").click(function() {
                  if(animating) return false;
                  animating = true;
                  current_fs = $(this).parent();
                  next_fs = $(this).parent().next();
                  //activate next step on progressbar using the index of next_fs
                  $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
                  //show the next fieldset
                  next_fs.show();
                  //hide the current fieldset with style
                  current_fs.animate({
                    opacity: 0
                  }, {
                    step: function(now, mx) {
                      //as the opacity of current_fs reduces to 0 - stored in "now"
                      //1. scale current_fs down to 80%
                      //scale = 1 - (1 - now) * 0.2;
                      //2. bring next_fs from the right(50%)
                      //left = now * 50 + "%";
                      //3. increase opacity of next_fs to 1 as it moves in
                      opacity = 1 - now;
                      current_fs.css({
                        //transform: "scale(" + scale + ")",
                        //position: "absolute"
                      });
                      next_fs.css({
                        //left: left,
                        opacity: opacity
                      });
                    },
                    duration: 400,
                    complete: function() {
                      current_fs.hide();
                      animating = false;
                    },
                    //this comes from the custom easing plugin
                    //easing: "easeInOutBack"
                  });
                });
                $(".previous").click(function() {
                  if(animating) return false;
                  animating = true;
                  current_fs = $(this).parent();
                  previous_fs = $(this).parent().prev();
                  //de-activate current step on progressbar
                  $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
                  //show the previous fieldset
                  previous_fs.show();
                  //hide the current fieldset with style
                  current_fs.animate({
                    opacity: 0
                  }, {
                    step: function(now, mx) {
                      //as the opacity of current_fs reduces to 0 - stored in "now"
                      //1. scale previous_fs from 80% to 100%
                      scale = 0.8 + (1 - now) * 0.2;
                      //2. take current_fs to the right(50%) - from 0%
                      left = (1 - now) * 50 + "%";
                      //3. increase opacity of previous_fs to 1 as it moves in
                      opacity = 1 - now;
                      current_fs.css({
                        //left: left
                      });
                      previous_fs.css({
                        //transform: "scale(" + scale + ")",
                        opacity: opacity
                      });
                    },
                    duration: 800,
                    complete: function() {
                      current_fs.hide();
                      animating = false;
                    },
                    //this comes from the custom easing plugin
                    //easing: "easeInOutBack"
                  });
                });
              }
              verificationForm();
            })($);
      };
      verificationForm();
  
      
      return () => {
        
      };
    }, []);

    const handleChange = (selectedOptions) => {
      setemployerFormData((prevFormData) => ({
        ...prevFormData,
        JobScopes: {
          ...prevFormData.JobScopes,
          ExpectedJobScope: selectedOptions.map((option) => ({
            JobScopeId: option.JobScopeId,
            ExpectedJobScope: option.value,
          })),
        },
      }));
      console.log(employerFormData.JobScopes.ExpectedJobScope);
    };

    const updateExpectedJobScope = (selectedOptions) => {

      const updatedExpectedJobScope = selectedOptions.map((option, index) => (
        {

        JobScopeId: index,
        ExpectedJobScope: option.value,
      }));
      setemployerFormData((prevFormData) => ({
        ...prevFormData,
        JobScopes: {
          ...prevFormData.JobScopes,
          ExpectedJobScope: updatedExpectedJobScope,
        },
      }));
      console.log(updatedExpectedJobScope,);
    };
   
  const fetchTokenHandler = useCallback(async () => {
    const tokenDetail = {
      Username: "admin",
      Password: "admin54321",
    };
    try {
      const response = await fetch('http://154.26.130.251:283/api/Token/GenerateToken', {
        method: 'POST',
        body: JSON.stringify(tokenDetail),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        console.log('Something went wrong!');
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      console.log(data.Jwt_Token);
      setjwtToken(data.Jwt_Token);
     // console.log(jwtToken);
     // return data.Jwt_Token;
    } catch (error) {
    }
  }, []);



  // async function stepFirstHandler(event) {
  //  // event.preventDefault();
  
  //   const regDetail = {
  //     OrgId: 1,
  //     Name: nameRef.current.value,
  //     Email: emailRef.current.value,
  //     Phone: phoneRef.current.value,
  //     viaOTP: 'EMAIL',
  //   };
  //   console.log(regDetail);
  //   console.log(JSON.stringify(regDetail));
   
  //   const token = jwtToken;
  //   console.log(jwtToken);
  //   console.log(token);
  //   const response = await fetch('http://154.26.130.251:283/api/Employer/Register', {
  //     method: 'POST',
  //     body: JSON.stringify(regDetail),
  //     headers: {
  //       'Content-Type': 'application/json',
  //          Authorization: `Bearer ${token}`,
  //     }
  //   });
  //   if (!response.ok) {
  //     console.log('Something went wrong!');
  //   }
  //   const data = await response.json();
  //   console.log(data);
  // }


  useEffect(() => {
    if (!name || !email || !phone) {
      setStepOneComplete(true);
    } else {
      setStepOneComplete(false);
    }


    console.log(otp , inputOtp , "iii")
    if(otp === inputOtp){
      setStepTwoComplete(false);
    }else{
      setStepTwoComplete(true);
    }
  }, [name, email, phone , otp , inputOtp]);



   const stepFirstHandler = async (event) => {
    event.preventDefault();

    const regDetail = {
      Name: name,
      Email: email,
      Phone: phone,
      Method: 'Employer',
    };  

    try {
      const response = await sendRegOTP(regDetail);


      if (response.Code === 200 && response.Message === 'Sucess') {
        setOtp(response.Data);
      }else{
        toast.error('Failed to send OTP');
      }
    } catch (error) {
      toast.error('Failure!');
      console.log('An error occurred:', error);
    }
  };

  async function stepTwoHandler(event) {
    // event.preventDefault();
  // fetchTokenHandler();
     const regDetail = {
      OrgId: jpb.OrgId,
      Email: email,
      OTP: inputOtp,
      Module: "Employer"
    }
    
    try {
      const response = await verifyRegOTP(regDetail);

      if (response.Code === 200 && response.Message === 'Sucess') {
        alert("Otp Verified");
      }
    } catch (error) {
      toast.error('Failure!');
      console.log('An error occurred:', error);
    }
   }

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

   async function stepThreeHandler(event) {
     event.preventDefault();
  // fetchTokenHandler();
     const regDetail = {
      PersonalDetails: {
        OrgId: 1,
        EmployerCode: employerCode,
      //  EmployerName: employerFormData.EmployerName,
        // Nationality:document.getElementById('Nationality').value,
      //  NRIC_FIN: employerFormData.NRIC_FIN,
        // PassportNo: employerFormData.PassportNo,
        // DateOfBirth: convertToISODate(document.getElementById('DateOfBirth').value)
      },
      ContactDetails: {
        // ContactPerson: employerFormData.ContactPerson,
        // MobileNo: employerFormData.MobileNo,
        // HomeNo: employerFormData.HomeNo,
        // EmailId: employerFormData.EmailId
      },
      JobScopes: {
        // HousingType: document.getElementById('HousingType').value,
        ExpectedJobScope: employerFormData.JobScopes.ExpectedJobScope,
        // NoOfBedroom: employerFormData.NoOfBedroom
      },
      AccountDetails: {
        Email: employerFormData.Email,
        Password: employerFormData.Password,
        ConfirmPassword: employerFormData.ConfirmPassword,
        SMSContactNumber:employerFormData.SMSContactNumber,
        MethodOfproceed: employerFormData.MethodOfproceed
      }
     };
     console.log(regDetail);
     console.log(employerFormData.Nationality);
     console.log(JSON.stringify(regDetail));
    


     const postData = {
      "EmployerMasterV2": {
        "ICIssueDateString": "",
        "DateOfBirthString": "",
        "PassportExpiryDateString": "",
        "OrgId": jpb.OrgId,
        "EmployerAutoId": 0,
        "BranchCode": "",
        "EmployerCode": employerCode,
        "EmployerName": employerFormData.EmployerName,
        "EmailId": employerFormData.Email,
        "Password": employerFormData.Password,
        "Nationality": document.getElementById('Nationality').value,
        "NRIC_FIN": employerFormData.NRIC_FIN,
        "PassportNo": employerFormData.PassportNo,
        "PassportExpiryDate": "2024-03-22T07:17:42.733Z",
        "DateOfBirth": convertToISODate(document.getElementById('DateOfBirth').value),
        "ICIssueDate": new Date(),
        "Gender": "",
        "RaceCode": 0,
        "ResidentialStatusCode": "",
        "BlockList": true,
        "MartilaStatus": "",
        "ReligionCode": 0,
        "Occupation": "",
        "Employed": true,
        "ReferralMethod": "",
        "CombinedIncome": true,
        "MonthlyIncome": 0,
        "YearofAssesment": 0,
        "NoofBedroom": employerFormData.NoOfBedroom,
        "NoofToilet": 0,
        "ClearWindowExterior": "",
        "CompanyName": "string",
        "MarriageRegisteredinSG": "",
        "AnnualIncome": 0,
        "TypeOfResidence": "",
        "ContactPerson": employerFormData.ContactPerson,
        "Contact_MobileNo": employerFormData.MobileNo,
        "Contact_HomeNo": employerFormData.HomeNo,
        "Contact_OfficeNo": "",
        "Contact_Email": employerFormData.EmailId,
        "Contact_PostalCode": "",
        "Contact_UnitNo": "",
        "Contact_StreetName": "",
        "Contact_BuildingName": "",
        "Contact_Country": "",
        "PostalCode": "",
        "UnitNo": "",
        "StreetName": "",
        "BuildingName": "",
        "Country": "",
        "HousingType": document.getElementById('HousingType').value,
        "HelperSleepingArea": "",
        "OFMS": "",
        "Remarks": "",
        "CreatedBy": "",
        "CreatedOn": new Date(),
        "ChangedBy": "",
        "ChangedOn": new Date(),
        "Contact_EmailId": "",
        "JobNoOfBedRoom": 0,
        "IsActive": true
      },
      "employerMasterJobScopv2": [
        {
          "OrgId": jpb.OrgId,
          "EmployerCode": employerCode,
          "JobScopId": 0,
          "JobScopDescriptin": ""
        }
      ],
      "employerMasterFamilyDetailv2": {
        "OrgId": jpb.OrgId,
        "EmployerCode": employerCode,
        "PassportExpiryDateString": "",
        "DateOfBirthString": "",
        "SlNo": 0,
        "Name": "",
        "Relationship": "",
        "NRIC_FIN": "",
        "DateofBirth": "",
        "Title": "",
        "Nationality": "",
        "Passport": "",
        "PassportExpiry": "",
        "Gender": "",
        "ResidentialStatus": "",
        "Occupation": "",
        "Employed": true,
        "CompanyName": "",
        "MonthlyIncome": "",
        "AnnualIncome": 0,
        "YearofAssessment": 0,
        "MobileNo": "",
        "Email": "",
        "OtherNo": ""
      },
      "employerMasterContactDetailv2": [
        {
          "OrgId": jpb.OrgId,
          "EmployerCode": employerCode,
          "SlNo": 0,
          "ContactPerson": "",
          "ContactNo": ""
        }
      ]
    }

    try {
      const response = await createEmployerUser(postData);

      if (response.Message === "Sucess" ) {
        window.location.href = "/helperlist"

      }
    } catch (error) {
      toast.error('Failure!');
      console.log('An error occurred:', error);
    }


   }

   const customStyles = {
  control: (provided, state) => ({
    ...provided,
    zIndex: 1, 
  }),
  menu: (provided, state) => ({
    ...provided,
    zIndex: 2, 
  }),
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
 
    <div className="main-content-wrapper main-container-bg bg-img-tc" style={{background: 'url(images/banner-bg.jpg)'}}>
      <div className="employer-registration">
        <div className="inner-container">
          <div className="container">
            <div className="main-box-wrapper">
              <div className="reg-links">
                <ul>
                  <li className={selectedLink === '/employerregistration' ? 'selected' : ''}><Link to="/employerregistration" onClick={() => handleLinkClick('/employerregistration')}>Employer Registration</Link></li>
                  <li className={selectedLink === '/maidregistration' ? 'selected' : ''}><Link to="/maidregistration" onClick={() => handleLinkClick('/maidregistration')}>Helper Registration</Link></li>
                </ul>
              </div>
              
              <section className="multi_step_form form-holder">
                <form id="msform">
                  
                  <ul id="progressbar">
                    <li className="active">Step 1</li>
                    <li>Step 2</li>
                    <li>Step 3</li>
                  </ul>
      
                  <fieldset>
                    <div className="mx-575">
                      <div className="pageTitle title-fix text-center md">
                        <h2>Enter The Details</h2></div>
                      <div className="row form-group align-items-center">
                        <div className="col-lg-4">
                          <label>Name <span className="red">*</span></label>
                        </div>
                        <div className="col-lg-8">
                          <input type="text" value={name} onChange={handleNameChange} className="form-control" placeholder="Your Name" required/> </div>
                      </div>
                      <div className="row form-group align-items-center">
                        <div className="col-lg-4">
                          <label>Email Address <span className="red">*</span></label>
                        </div>
                        <div className="col-lg-8">
                          <input type="email"   value={email} onChange={handleEmailChange} className="form-control" placeholder="Your Email Address" required/> </div>
                      </div>
                      <div className="row form-group align-items-center">
                        <div className="col-lg-4">
                          <label>Phone Number <span className="red">*</span></label>
                        </div>
                        <div className="col-lg-8">
                          <input type="number" value={phone} onChange={handlePhoneChange} className="form-control" placeholder="Your Phone Number" required/> </div>
                      </div>
                      {/* <div className="row align-items-center text-center justify-content-center form-group">
                        <div className="col-lg-auto">
                          <label>Select Option to Receive OTP * : <span className="red">*</span></label>
                        </div>
                        <div className="col-lg-auto">
                          <div className="radio-inline">
                            
                            <div className="radio">
                              <label>
                                <input type="radio"  name="r1"/> <span>via Email</span></label>
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>
                    <button type="button" onClick={stepFirstHandler} disabled={stepOneComplete} className="next action-button custom-button center-btn">Next</button>
                  </fieldset>
                  <fieldset>
                    <div className="pageTitle title-fix text-center md">
                      <h2>Enter The Details</h2></div>
                    <div className="text-center ">
                      <h6>OTP has been sent it to your registered Email Id!</h6>
                      <label>Enter the OTP <span className="red">*</span></label>
                      <div className="row gutters-10 otp-row align-items-center justify-content-center">
                        <div className="col-auto">
                          <input type="text"  value={inputOtp} onChange={handleOtpChange} className="form-control"/> </div>
                        {/* <div className="col-auto">
                          <input type="text" className="form-control"/> </div>
                        <div className="col-auto">
                          <input type="text" className="form-control"/> </div>
                        <div className="col-auto">
                          <input type="text" className="form-control"/> </div>
                        <div className="col-auto">
                          <input type="text" className="form-control"/> </div> */}
                      </div>
                      <div className="resend-otp"><a href="#">Resend OTP <i className="fas fa-redo-alt"></i></a></div>
                    </div>
                    <button type="button" className="action-button previous previous_button custom-button prvs">Back</button>
                    <button type="button" onClick={stepTwoHandler} disabled={stepTwoComplete} className="next action-button custom-button ">Next</button>
                  </fieldset>
                  <fieldset>
                    <div className="pageTitle title-fix text-center md">
                      <h2> Employer Data Form</h2></div>
                    <div className="data-collapse-box">
                      <div className="card-header"> <a className="" data-toggle="collapse" href="#edf-1" role="button" aria-expanded="false" aria-controls="edf-1">1. Personal Details</a> </div>
                      <div className="collapse show" id="edf-1">
                        <div className="card card-body">
                          <div className="form-data-wrap">
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Employer Name</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="Employer Name" value={employerFormData.EmployerName}
                                onChange={(e) => {
                                    setemployerFormData({
                                        ...employerFormData,
                                        EmployerName:  e.target.value
                                    })
                                }}/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Nationality</label>
                              </div>
                              <div className="col-lg-6">
                               <select className='form-control' id="Nationality"
                                onChange={(e) => {
                                  console.log(e.target.value);
                                  setemployerFormData({
                                      ...employerFormData,
                                      Nationality: e.target.value
                                  })
                              }}
                               >
                                  <option value="Singaporean">Singaporean</option>
                                  <option value="Indian">Indian</option>
                                  <option value="">Select</option>
                                </select>
                              </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>NRIC / FIN</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="Your NRIC / FIN" value={employerFormData.NRIC_FIN}
                                onChange={(e) => {
                                    setemployerFormData({
                                        ...employerFormData,
                                        NRIC_FIN:  e.target.value
                                    })
                                }}/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Passport</label>
                                <p className="size-12">* only for EP and Spass holder</p>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="Your Passport" value={employerFormData.PassportNo}
                                onChange={(e) => {
                                    setemployerFormData({
                                        ...employerFormData,
                                        PassportNo:  e.target.value
                                    })
                                }}/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Date of Birth</label>
                              </div>
                              <div className="col-lg-6">
                                <div className="inrow date-wrap datepicker-wrap">
                                  <input type="text" className="form-control datepicker" id="DateOfBirth" placeholder="DD/MM/YYYY" value={employerFormData.DateOfBirth}
                                onChange={(e) => {
                                    setemployerFormData({
                                        ...employerFormData,
                                        DateOfBirth:  e.target.value
                                    })
                                }}/> <i className="fas fa-calendar-alt"></i> </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="data-collapse-box">
                      <div className="card-header"> <a className="" data-toggle="collapse" href="#edf-2" role="button" aria-expanded="false" aria-controls="edf-2">2. Contact Details</a> </div>
                      <div className="collapse show" id="edf-2">
                        <div className="card card-body">
                          <div className="form-data-wrap">
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Contact Person</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="Contact Person" value={employerFormData.ContactPerson}
                                onChange={(e) => {
                                    setemployerFormData({
                                        ...employerFormData,
                                        ContactPerson:  e.target.value
                                    })
                                }}/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Mobile No.</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="Mobile No." value={employerFormData.MobileNo}
                                onChange={(e) => {
                                    setemployerFormData({
                                        ...employerFormData,
                                        MobileNo:  e.target.value
                                    })
                                }}/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Home No</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="Home No." value={employerFormData.HomeNo}
                                onChange={(e) => {
                                    setemployerFormData({
                                        ...employerFormData,
                                        HomeNo:  e.target.value
                                    })
                                }}/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Email</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="emailme.@gmail.com" value={employerFormData.EmailId}
                                onChange={(e) => {
                                    setemployerFormData({
                                        ...employerFormData,
                                        EmailId:  e.target.value
                                    })
                                }}/> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="data-collapse-box">
                      <div className="card-header"> <a className="" data-toggle="collapse" href="#edf-3" role="button" aria-expanded="false" aria-controls="edf-3">3. Job Scopes</a> </div>
                      <div className="collapse show" id="edf-3">
                        <div className="card card-body">
                          <div className="form-data-wrap">
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Housing Type</label>
                              </div>
                              <div className="col-lg-6">
                               <select className='form-control'id="HousingType"
                                onChange={(e) => {
                                    setemployerFormData({
                                        ...employerFormData,
                                        HousingType:  e.target.value
                                    })
                                }}>
                                  <option value="Landed Property">Landed Property</option>
                                  <option value="">Select</option>
                                </select>
                              </div>
                            </div>
                            <div className="row select-group align-items-center">
                              <div className="col-lg-3">
                                <label>Expected Job Scope</label>
                              </div>
                              <div className="col-lg-6">
                                
                                {/* <select multiple className="selectpicker form-control" id="number-multiple" data-virtual-scroll="true" 
                                value={employerFormData.ExpectedJobScope}
  onChange={(e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => ({
      JobScopeId: option.index,
      ExpectedJobScope: option.value
    }));

    setemployerFormData({
      ...employerFormData,
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
                                </select> */}
                                {/* <Select
        isMulti
        options={jobscopeoptions} // Assuming you have defined options array somewhere
        value={employerFormData.JobScopes.ExpectedJobScope}
        onChange={updateExpectedJobScope}
      /> */}
     <Select
      isMulti
      options={jobscopeoptions}
      value={jobscopeoptions.filter((option) => employerFormData.JobScopes.ExpectedJobScope.some((selectedOption) => selectedOption.JobScopeId === option.JobScopeId))}
      onChange={handleChange}
      getOptionValue={(option) => option.JobScopeId}
      getOptionLabel={(option) => option.value}
    />
                              </div> 
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Number of Bedroom in the house</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="Number of Bedroom in the house" value={employerFormData.NoOfBedroom}
                                onChange={(e) => {
                                    setemployerFormData({
                                        ...employerFormData,
                                        NoOfBedroom:  e.target.value
                                    })
                                }}/> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="data-collapse-box">
                      <div className="card-header"> <a className="" data-toggle="collapse" href="#edf-4" role="button" aria-expanded="false" aria-controls="edf-4">4. Account Details</a> </div>
                      <div className="collapse show" id="edf-4">
                        <div className="card card-body">
                          <div className="form-data-wrap">
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Email Address</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="XXXXXXXXXXXXXXX@gmail.com" value={employerFormData.Email}
                                onChange={(e) => {
                                    setemployerFormData({
                                        ...employerFormData,
                                        Email:  e.target.value
                                    })
                                }}/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Password</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="Password" className="form-control" value={employerFormData.Password}
                                onChange={(e) => {
                                    setemployerFormData({
                                        ...employerFormData,
                                        Password:  e.target.value
                                    })
                                }}/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Confirm Password</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="Password" className="form-control" value={employerFormData.ConfirmPassword}
                                onChange={(e) => {
                                    setemployerFormData({
                                        ...employerFormData,
                                        ConfirmPassword:  e.target.value
                                    })
                                }}/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>SMS Contact Number</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" value={employerFormData.SMSContactNumber}
                                onChange={(e) => {
                                    setemployerFormData({
                                        ...employerFormData,
                                        SMSContactNumber:  e.target.value
                                    })
                                }}/> </div>
                            </div>
                            <div className="row align-items-center  form-group">
                              <div className="col-lg-4">
                                <label>How would you like to proceed?</label>
                              </div>
                              <div className="col-lg-8">
                                <div className="radio-inline">
                                  <div className="radio">
                                    <label>
                                      <input type="radio" name="r1" value="Self Processing"
      checked={employerFormData.MethodOfproceed === "Self Processing"}
      onChange={(e) => {
        setemployerFormData({
          ...employerFormData,
          MethodOfproceed: e.target.value
        });
      }}/> <span>Self Processing</span></label>
                                  </div>
                                  <div className="radio">
                                    <label>
                                      <input type="radio" name="r1" value="Using Salespersons/Agency Services"
      checked={employerFormData.MethodOfproceed === "Using Salespersons/Agency Services"}
      onChange={(e) => {
        setemployerFormData({
          ...employerFormData,
          MethodOfproceed: e.target.value
        });
      }}/> <span>Using Salespersons/Agency Services</span></label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ctpod col-lg-12 pt20 pb20">
                      <div className="checkbox size-16">
                        <input type="checkbox" id="c1"/>
                        <label htmlFor="c1">I hereby declared that all the above information given are true and correct.</label>
                      </div>
                    </div>
                    <button type="button" disabled={stepThreeComplete} className="action-button previous previous_button custom-button prvs">Back</button> <a href="#" onClick={stepThreeHandler} className="action-button custom-button finish">SUBMIT</a> 
                  </fieldset>
                </form>
              </section>
              
            </div>
          </div>
        </div>
        <div className="google-recaptch"><img src="images/google-captcha.png" alt=""/></div>
      </div>
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

export default EmployerRegistration;