import React, {  useCallback, useRef, useEffect,useState } from 'react';
import $ from "jquery";
import Header from '../Header';
import Footer from '../Footer';
import QuickSearch from '../Quicksearch';
import { Link, useNavigate } from 'react-router-dom';


const MaidRegistration = () => {
  const [selectedLink, setSelectedLink] = useState('/');
  const [jwtToken, setjwtToken] = useState('');
  const [helperCode, setHelperCode] = useState('');
  const nameRef = useRef('');
  const emailRef = useRef('');
  const phoneRef = useRef('');
  const otpRef = useRef('');
  const [intTime, setIntTime] = useState([]);
  const navigate = useNavigate();
  const [helperFormData, setHelperFormData] = React.useState({
    HelperBioDetails: {
      OrgId: 1,
      HelperCode: helperCode,
      HelperName: "",
      EmailId: "",
      Password: "",
      MobileNo: "",
      NRIC_FIN: "",
      Nationality: "",
      PassportNo: "",
      PassportIssuePlace: "",
      PassIssueDate: "",
      PassportExpiryDate: "",
      WorkPermitNo: "",
      WorkPermitExpiry: "",
      Religion: "",
      DateOfBirth: "",
      MartilaStatus: "",
      BirthPlace: "",
      Specialization_Preference: "",
      RepatraiteAirport: "",
      Status: "",
      OtherInfo: "",
      DirectHire: true,
      TrainingCenter: "",
      EmailAddress: "",
      FileName: "Helper.jpg",
      Helper_Img_Base64String: "",
      IsActive: true,
      CreatedBy: "HLP20261B91"
    },
    "HelperContacts": {
      "HomeAddress": "",
      "HomeTelephone": "",
      "WhatsApp": "",
      "Viber": "",
      "Facebook": "",
      "OtherContact": [
        {
          "OrgId": 1,
          "HelperCode": helperCode,
          "Type": "",
          "Information": ""
        }
      ]
    },
    "FamilyBackground": {
      "FatherOccupation": "",
      "MotherOccupation": "",
      "FatherAge": "",
      "MotherAge": "",
      "SiblingsPosition": "3",
      "NoOfBrother": "",
      "NoOfSister": "",
      "BrotherAge": "",
      "SisterAge": "",
      "HusbandName": "",
      "HusbandOccupation": "",
      "HusbandAge": "",
      "NoOfChildren": "",
      "ChildAge": ""
    },
    "PhysicalAttribute": {
      "Complexion": "",
      "Height_CM": "",
      "Height_Feet": "",
      "Weight_KG": "",
      "Weight_Pound": ""
    },
    "BookingRealtedInformation": {
      "BasicSalary": "",
      "OffDayDailyRate": "",
      "HelperFee": "",
      "PocketMoney": "",
      "SelectOffDays": "",
      "NoOffDays": ""
    },
    "Interview": [
      {
        "OrgId": 1,
        "HelperCode": helperCode,
        "InterviewDate": "",
        "InterviewTime": "",
        "Remarks": ""
      }
    ],
    "AccountDetails": {
      "Email": "",
      "Password": "",
      "ConfirmPassword": "",
      "SMSContactNumber": ""
    }
})

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



  async function stepFirstHandler(event) {
    console.log("in")
   // event.preventDefault();
  
    const regDetail = {
      OrgId: 1,
      Name: nameRef.current.value,
      Email: emailRef.current.value,
      Phone: phoneRef.current.value,
      viaOTP: 'EMAIL',
    };
    console.log(regDetail);
    console.log(JSON.stringify(regDetail));
   
    const token = jwtToken;
    console.log(jwtToken);
    console.log(token);
    if (regDetail.Email !="" && regDetail.Phone !=""){
      console.log("test done");
      const response = await fetch('http://154.26.130.251:283/api/Helper/Register', {
        method: 'POST',
        body: JSON.stringify(regDetail),
        headers: {
          'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
      });
      if (!response.ok) {
        console.log('Something went wrong!');
      }
      const data = await response.json();
      console.log(data);
    }else{
      console.log("mandatory are missing");
    }
    
  }

  async function stepTwoHandler(event) {
    // event.preventDefault();
  // fetchTokenHandler();
     const regDetail = {
       OrgId: 1,
       Email: emailRef.current.value,
       OTP: otpRef.current.value
     };
     console.log(regDetail);
     console.log(JSON.stringify(regDetail));
    
     const token = jwtToken;
     console.log(jwtToken);
     console.log(token);
     if (regDetail.OTP !=""){
      console.log("present otp");
      const response = await fetch('http://154.26.130.251:283/api/Helper/VerifyOTP', {
       method: 'POST',
       body: JSON.stringify(regDetail),
       headers: {
         'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
       }
      });
      if (!response.ok) {
        console.log('Please enter correct OTP!');
      }
      const data = await response.json();
      console.log(data);
      setHelperCode(data.HelperCode );
     }else{
        console.log("empty");
     }
     
  }

  const convertToISODate = (dateString) => {

    console.log(dateString);
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
    console.log("in")
    console.log(intTime);
    event.preventDefault();

    fetchTokenHandler();

     const regDetail = {
      HelperBioDetails: {
        OrgId: 1,
        HelperCode: "HLPE75014F5",
        HelperName: helperFormData.HelperName,
        EmailId: helperFormData.Email,
        Password:helperFormData.Password,
        MobileNo:helperFormData.SMSContactNumber,
        NRIC_FIN:helperFormData.NRIC_FIN,
        Nationality:helperFormData.Nationality,
        PassportNo:helperFormData.PassportNo,
        PassportIssuePlace:helperFormData.PassportIssuePlace,
        PassIssueDate:convertToISODate(document.getElementById('PassIssueDate').value),
        PassportExpiryDate:convertToISODate(document.getElementById('PassportExpiryDate').value),
        WorkPermitNo:helperFormData.WorkPermitNo,
        WorkPermitExpiry:convertToISODate(document.getElementById('WorkPermitExpiry').value),
        Religion:helperFormData.Religion,
        DateOfBirth:convertToISODate(document.getElementById('DateOfBirth').value),
        MartilaStatus:helperFormData.MartilaStatus,
        BirthPlace:helperFormData.BirthPlace,
        Specialization_Preference:helperFormData.Specialization_Preference,
        RepatraiteAirport:helperFormData.RepatraiteAirport,
        Status:helperFormData.Status,
        OtherInfo:helperFormData.OtherInfo,
        DirectHire:true,
        TrainingCenter:helperFormData.TrainingCenter,
        EmailAddress:helperFormData.Email,
        // FileName:helperFormData.FileName,
        FileName:"helper.jpg",
        Helper_Img_Base64String:"",
        IsActive:true,
        CreatedBy:"HLPE75014F5"
      },
      HelperContacts: {
        HomeAddress: helperFormData.HomeAddress,
        HomeTelephone: helperFormData.HomeTelephone,
        WhatsApp: helperFormData.WhatsApp,
        Viber: helperFormData.Viber,
        Facebook:helperFormData.Facebook,
        OtherContact: [
          {
            OrgId: 1,
            HelperCode: "HLPE75014F5",
            Type:helperFormData.Type,
            Information:helperFormData.Information
          }
        ]
      },
      FamilyBackground: {
        FatherOccupation: helperFormData.FatherOccupation,
        MotherOccupation: helperFormData.MotherOccupation,
        FatherAge:helperFormData.FatherAge,
        MotherAge:helperFormData.MotherAge,
        SiblingsPosition:helperFormData.SiblingsPosition,
        NoOfBrother:helperFormData.NoOfBrother,
        NoOfSister:helperFormData.NoOfSister,
        BrotherAge:helperFormData.BrotherAge,
        SisterAge:helperFormData.SisterAge,
        HusbandName:helperFormData.HusbandName,
        HusbandOccupation:helperFormData.HusbandOccupation,
        HusbandAge:helperFormData.HusbandAge,
        NoOfChildren:helperFormData.NoOfChildren,
        ChildAge:helperFormData.ChildAge,
      },
      PhysicalAttribute: {
        Complexion:helperFormData.Complexion,
        Height_CM:helperFormData.Height_CM,
        Height_Feet:helperFormData.Height_Feet,
        Weight_KG:helperFormData.Weight_KG,
        Weight_Pound:helperFormData.Weight_Pound
      },
      BookingRealtedInformation: {
        BasicSalary:helperFormData.BasicSalary,
        OffDayDailyRate:helperFormData.OffDayDailyRate,
        HelperFee:helperFormData.HelperFee,
        PocketMoney:helperFormData.PocketMoney,
        SelectOffDays:helperFormData.SelectOffDays,
        NoOffDays:helperFormData.NoOffDays
      },
      Interview: [
        {
          OrgId: 1,
          HelperCode: "HLPE75014F5",
          InterviewDate:convertToISODate(document.getElementById('InterviewDate').value),
          InterviewTime: intTime,
          Remarks:helperFormData.Remarks
        }
      ],
      AccountDetails: {
        Email:helperFormData.Email,
        Password:helperFormData.Password,
        ConfirmPassword:helperFormData.ConfirmPassword,
        SMSContactNumber:helperFormData.SMSContactNumber
      }
    }

    //  const regDetail={
    //   "HelperBioDetails": {
    //     "OrgId": 1,
    //     "HelperCode": "HLPE75014F5",
    //     "HelperName": helperFormData.HelperName,
    //     "EmailId": helperFormData.Email,
    //     "Password": helperFormData.Password,
    //     "MobileNo": helperFormData.SMSContactNumber,
    //     "NRIC_FIN": helperFormData.NRIC_FIN,
    //     "Nationality": "INDIAN",
    //     "PassportNo": "PK000125",
    //     "PassportIssuePlace": "CHENNAI",
    //     "PassIssueDate": "2023-03-25T12:35:49.646Z",
    //     "PassportExpiryDate": "2023-03-25T12:35:49.646Z",
    //     "WorkPermitNo": "PRM00001",
    //     "WorkPermitExpiry": "2023-03-25T12:35:49.646Z",
    //     "Religion": "MUSLIM",
    //     "DateOfBirth": "2023-03-25T12:35:49.646Z",
    //     "MartilaStatus": "YES",
    //     "BirthPlace": "TRICHY",
    //     "Specialization_Preference": "Caregiver",
    //     "RepatraiteAirport": "Airport1",
    //     "Status": "Active",
    //     "OtherInfo": "Nothing",
    //     "DirectHire": true,
    //     "TrainingCenter": "FACK TRAINING",
    //     "EmailAddress": "Helper@gmail.com",
    //     "FileName": "Helper.jpg",
    //     "Helper_Img_Base64String": "",
    //     "IsActive": true,
    //     "CreatedBy": "HLP20261B91"
    //   },
    //   "HelperContacts": {
    //     "HomeAddress": "Home Add-1",
    //     "HomeTelephone": "044 52220",
    //     "WhatsApp": "65555555555",
    //     "Viber": "900000000",
    //     "Facebook": "Noface5655",
    //     "OtherContact": [
    //       {
    //         "OrgId": 1,
    //         "HelperCode": "HLP20261B91",
    //         "Type": "NEW TYPE",
    //         "Information": "NOTHING"
    //       }
    //     ]
    //   },
    //   "FamilyBackground": {
    //     "FatherOccupation": "VIP",
    //     "MotherOccupation": "HOME MAKER",
    //     "FatherAge": 50,
    //     "MotherAge": 40,
    //     "SiblingsPosition": "3",
    //     "NoOfBrother": 1,
    //     "NoOfSister": 2,
    //     "BrotherAge": 40,
    //     "SisterAge": 20,
    //     "HusbandName": "NO IDEA",
    //     "HusbandOccupation": "NOTHING",
    //     "HusbandAge": 40,
    //     "NoOfChildren": 2,
    //     "ChildAge": 10
    //   },
    //   "PhysicalAttribute": {
    //     "Complexion": "RELAX",
    //     "Height_CM": "5.5",
    //     "Height_Feet": "5",
    //     "Weight_KG": 60,
    //     "Weight_Pound": 50
    //   },
    //   "BookingRealtedInformation": {
    //     "BasicSalary": 1000,
    //     "OffDayDailyRate": 2,
    //     "HelperFee": 2,
    //     "PocketMoney": 100,
    //     "SelectOffDays": "SUNDAY",
    //     "NoOffDays": 1
    //   },
    //   "Interview": [
    //     {
    //       "OrgId": 1,
    //       "HelperCode": "HLP20261B91",
    //       "InterviewDate": "2023-03-28T10:04:04.107Z",
    //       "InterviewTime": ["10:30","11:00"],
    //       "Remarks": "TESTING INETRVIEW"
    //     }
    //   ],
    //   "AccountDetails": {
    //     "Email": "Helper@gmail.com",
    //     "Password": "welcome123",
    //     "ConfirmPassword": "welcome123",
    //     "SMSContactNumber": "987456321"
    //   }
    // }
     console.log(JSON.stringify(regDetail));
    
     const token = jwtToken;  

     const response = await fetch('http://154.26.130.251:283/api/Helper/DataFormUpdation', {
       method: 'POST',
       body: JSON.stringify(regDetail),
       headers: {
         'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
       }
     });
     if (!response.ok) {
       console.log('SOMETHING WENT WRONG');
     }
    //  console.log(response.json());
     const data =  await response.json();
     console.log(data);
     if (data.Code === 200 && data.Message === 'Sucess') {
      // alert('updated successfully')
      navigate('/helperlogin');
      }
   }

  const handleLinkClick = (link) => {
    // navigate(link);
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
      <div className="maid-registration">
        <div className="inner-container">
          <div className="container">
            <div className="main-box-wrapper">
              <div className="reg-links">
                {/* <ul>
                  <li><Link to="/employerregistration">Employer Registration</Link></li>
                  <li className="selected"><Link to="/maidregistration">Maid Registration</Link></li> */}
                  <ul>
                  <li className={selectedLink === '/employerregistration' ? 'selected' : ''}><Link to="/employerregistration" onClick={() => handleLinkClick('/employerregistration')}>Employer Registration</Link></li>
                  <li className={selectedLink === '/maidregistration' ? 'selected' : ''}><Link to="/maidregistration" onClick={() => handleLinkClick('/maidregistration')}>Helper Registration</Link></li>
                </ul>
                {/* </ul> */}
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
                          <input type="text" ref={nameRef} className="form-control" placeholder="Your Name"/> </div>
                      </div>
                      <div className="row form-group align-items-center">
                        <div className="col-lg-4">
                          <label>Email Address <span className="red">*</span></label>
                        </div>
                        <div className="col-lg-8">
                          <input type="text" ref={emailRef} className="form-control" placeholder="Your Email Address"/> </div>
                      </div>
                      <div className="row form-group align-items-center">
                        <div className="col-lg-4">
                          <label>Phone Number <span className="red">*</span></label>
                        </div>
                        <div className="col-lg-8">
                          <input type="text" ref={phoneRef} className="form-control" placeholder="Your Phone Number"/> </div>
                      </div>
                      <div className="row align-items-center justify-content-center form-group">
                        <div className="col-lg-auto">
                          <label>Select Option to Receive OTP * : <span className="red">*</span></label>
                        </div>
                        <div className="col-lg-auto">
                          <div className="radio-inline">
                            
                            <div className="radio">
                              <label>
                                <input type="radio" name="r1"/> <span>via Email</span></label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button type="button" onClick={stepFirstHandler} className="next action-button custom-button center-btn">Next</button>
                  </fieldset>
                  <fieldset>
                    <div className="pageTitle title-fix text-center md">
                      <h2>Enter The Details</h2></div>
                    <div className="text-center otp-wrap">
                      <p>A combination of digits has been sent to your chosen OTP.</p>
                      <label>Enter the OTP <span className="red">*</span></label>
                      <div className="row gutters-10 otp-row align-items-center justify-content-center">
                        <div className="col-auto">
                          <input ref={otpRef} type="text" className="form-control"/> </div>
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
                    <button type="button" onClick={stepTwoHandler} className="next action-button custom-button ">Next</button>
                  </fieldset>
                  <fieldset>
                    <div className="pageTitle title-fix text-center md">
                      <h2> Bio Data Of Foreign Domestic Worker (FDW)</h2></div>
                      <p className="pb20">*Please ensure that you run through the information within the biodata as it is an important document to help you select a suitable FDW</p>
                    <div className="data-collapse-box">
                      <div className="card-header"> <a className="" data-toggle="collapse" href="#edf-1" role="button" aria-expanded="false" aria-controls="edf-1">1. Helper Bio Details</a> </div>
                      <div className="collapse show" id="edf-1">
                        <div className="card card-body">
                          <div className="form-data-wrap">
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Profile Photo/Video</label>
                              </div>
                              <div className="col-lg-6">
                                <div className="upload-area">
                                  <div className="file-upload">
                                    <div id="start">
                                      <img src="images/upload-icon-highlight.png" alt=""/>
                                      <div className="upload-inner-info">Click here to upload Photo/Video</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Name</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="Name"value={helperFormData.HelperName}
                                onChange={(e) => {
                                    setHelperFormData({
                                        ...helperFormData,
                                        HelperName:  e.target.value
                                    })
                                }}/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>FIN No.</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="Your NRIC / FIN" value={helperFormData.NRIC_FIN}
                                onChange={(e) => {
                                    setHelperFormData({
                                        ...helperFormData,
                                        NRIC_FIN:  e.target.value
                                    })
                                }}/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Nationality</label>
                              </div>
                              <div className="col-lg-6">
                                <select className="form-control select" value={helperFormData.Nationality}
                                  onChange={(e) => {
                                  console.log(e.target.value);
                                  setHelperFormData({
                                      ...helperFormData,
                                      Nationality: e.target.value
                                  })
                              }}>
                                  <option>Select Nationality</option>
                                  <option>Indonesian</option>
                                  <option>Indian</option>
                                  <option>Pakistan</option>
                                  <option>test</option>
                                </select>
                              </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Passport No.</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="Passport No." value={helperFormData.PassportNo}
                                onChange={(e) => {
                                    setHelperFormData({
                                        ...helperFormData,
                                        PassportNo:  e.target.value
                                    })
                                }}/> </div>
                            </div>
                            

                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Passport Issue Place</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="Passport Issue Place"  value={helperFormData.PassportIssuePlace}
                                  onChange={(e) => {
                                    setHelperFormData({
                                        ...helperFormData,
                                        PassportIssuePlace:  e.target.value
                                    })
                                }}/> </div>
                            </div>
                         <div className="row form-group align-items-center">
                        <div className="col-lg-3">
                          <label>Passport Issue Date</label>
                        </div>
                        <div className="col-lg-6">
                          <div className="inrow date-wrap datepicker-wrap">
                                  <input type="text" className="form-control datepicker" id="PassIssueDate" placeholder="DD/MM/YYYY"   value={helperFormData.PassIssueDate}
                                  onChange={(e) => {
                                    setHelperFormData({
                                        ...helperFormData,
                                        PassIssueDate:  e.target.value
                                    })
                                }} /> <i className="fas fa-calendar-alt"></i> 
                          </div> 
                        </div>
                      </div>

                      <div className="row form-group align-items-center">
                        <div className="col-lg-3">
                          <label>Passport Expiry Date</label>
                        </div>
                        <div className="col-lg-6">
                          <div className="inrow date-wrap datepicker-wrap">
                                  <input type="text" className="form-control datepicker" id="PassportExpiryDate" placeholder="DD/MM/YYYY" value={helperFormData.PassportExpiryDate}
                                    onChange={(e) => {
                                    setHelperFormData({
                                        ...helperFormData,
                                        PassportExpiryDate:  e.target.value
                                    })
                                }} /> <i className="fas fa-calendar-alt"></i> 
                          </div> 
                        </div>
                      </div>

                     

                      <div className="row form-group align-items-center">
                        <div className="col-lg-3">
                          <label>Work Permit No.</label>
                        </div>
                        <div className="col-lg-6">
                          <input type="text" className="form-control" placeholder="Work Permit No" value={helperFormData.WorkPermitNo}
                                  onChange={(e) => {
                                    setHelperFormData({
                                        ...helperFormData,
                                        WorkPermitNo:  e.target.value
                                    })
                                }}/> 
                        </div>
                      </div>

                      <div className="row form-group align-items-center">
                        <div className="col-lg-3">
                          <label>Work Permit Expiry</label>
                        </div>
                        <div className="col-lg-6">
                          <div className="inrow date-wrap datepicker-wrap">
                                  <input type="text" className="form-control datepicker" id="WorkPermitExpiry" placeholder="Work Permit Expiry" value={helperFormData.WorkPermitExpiry}
                                  onChange={(e) => {
                                    setHelperFormData({
                                        ...helperFormData,
                                        WorkPermitExpiry:  e.target.value
                                    })
                                }} /> <i className="fas fa-calendar-alt"></i> 
                          </div> 
                        </div>
                      </div>

                      <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Religion</label>
                              </div>
                              <div className="col-lg-6">
                                <select className="form-control select" value={helperFormData.Religion}
                                  onChange={(e) => {
                                    setHelperFormData({
                                        ...helperFormData,
                                        Religion:  e.target.value
                                    })
                                }} >
                                  <option>Select Religion</option>
                                  <option>Hindu</option>
                                  <option>Muslim</option>
                                  <option>Christian</option>
                                </select>
                              </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Date of Birth</label>
                              </div>
                              <div className="col-lg-6">
                                <div className="inrow date-wrap datepicker-wrap">
                                  <input type="text" className="form-control datepicker" id="DateOfBirth"  placeholder="DD/MM/YYYY" value={helperFormData.DateOfBirth}
                                onChange={(e) => {
                                  setHelperFormData({
                                        ...helperFormData,
                                        DateOfBirth:  e.target.value
                                    })
                                }}/> <i className="fas fa-calendar-alt"></i> </div>
                              </div>
                            </div>

                      <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Martial Status</label>
                              </div>
                              <div className="col-lg-6">
                                <select className="form-control select" value={helperFormData.MartilaStatus}
                                  onChange={(e) => {
                                    setHelperFormData({
                                        ...helperFormData,
                                        MartilaStatus:  e.target.value
                                    })
                                }}>
                                  <option>Select Marital Status</option>
                                  <option>Single</option>
                                  <option>Married</option>
                                  <option>Divorced</option>
                                </select>
                              </div>
                            </div>


                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Birth Place</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="Birth Place" value={helperFormData.BirthPlace}
                                  onChange={(e) => {
                                    setHelperFormData({
                                        ...helperFormData,
                                        BirthPlace:  e.target.value
                                    })
                                }}/> </div>
                            </div>

                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Specialization/Preference</label>
                              </div>
                              <div className="col-lg-6">
                                <select className="form-control select" value={helperFormData.Specialization_Preference}
                                  onChange={(e) => {
                                    setHelperFormData({
                                        ...helperFormData,
                                        Specialization_Preference:  e.target.value
                                    })
                                }}>
                                  <option>Select Specialization</option>
                                  <option>Caregiver</option>
                                  <option>MaidServant</option>
                                </select>
                              </div>
                            </div>


                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Repatraite Airport</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="" value={helperFormData.RepatraiteAirport}
                                  onChange={(e) => {
                                    setHelperFormData({
                                        ...helperFormData,
                                        RepatraiteAirport:  e.target.value
                                    })
                                }}/> </div>
                            </div>

                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Status</label>
                              </div>
                              <div className="col-lg-6">
                                <select className="form-control select" value={helperFormData.Status}
                                  onChange={(e) => {
                                    setHelperFormData({
                                        ...helperFormData,
                                        Status:  e.target.value
                                    })
                                }}>
                                  <option>Select Status</option>
                                  <option>Incoming Only</option>
                                  <option>Active</option>
                                </select>
                              </div>
                            </div>

                             <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Other Info</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="" value={helperFormData.OtherInfo}
                                  onChange={(e) => {
                                    setHelperFormData({
                                        ...helperFormData,
                                        OtherInfo:  e.target.value
                                    })
                                }}/> 
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
                                            <input type="radio" defaultChecked name="r1" value="Yes"
                                              onChange={(e) => {
                                                setHelperFormData({
                                                    ...helperFormData,
                                                    DirectHire:  true
                                                })
                                            }}/> <span>Yes</span></label>
                                        </div>
                                        <div className="radio">
                                          <label>
                                            <input type="radio" name="r1" value="No"
                                              onChange={(e) => {
                                                setHelperFormData({
                                                    ...helperFormData,
                                                    DirectHire:  false
                                                })
                                            }}/> <span>No</span></label>
                                        </div>
                                      </div>
                                    </div>
                            </div>

                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Training Center</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="" value={helperFormData.TrainingCenter}
                                              onChange={(e) => {
                                                setHelperFormData({
                                                    ...helperFormData,
                                                    TrainingCenter:  e.target.value
                                                })
                                            }}/> </div>
                            </div>



                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="data-collapse-box">
                      <div className="card-header"> <a className="" data-toggle="collapse" href="#edf-2" role="button" aria-expanded="false" aria-controls="edf-2">2. Helper Contact</a> </div>
                      <div className="collapse show" id="edf-2">
                        <div className="card card-body">
                          <div className="form-data-wrap">
                            <div className="row form-group">
                              <div className="col-lg-3">
                                <label>Home Address</label>
                              </div>
                              <div className="col-lg-6">
                                <textarea className="form-control" placeholder="Home Address" value={helperFormData.HomeAddress}
                                              onChange={(e) => {
                                                setHelperFormData({
                                                    ...helperFormData,
                                                    HomeAddress:  e.target.value
                                                })
                                            }}></textarea>
                              </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Home Telephone</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="Telephone No." value={helperFormData.HomeTelephone}
                                    onChange={(e) => {
                                      setHelperFormData({
                                          ...helperFormData,
                                          HomeTelephone:  e.target.value
                                      })
                                  }}/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>WhatsApp</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="WhatsApp" value={helperFormData.WhatsApp}
                                    onChange={(e) => {
                                      setHelperFormData({
                                          ...helperFormData,
                                          WhatsApp:  e.target.value
                                      })
                                  }}/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Viber</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="Viber" value={helperFormData.Viber}
                                    onChange={(e) => {
                                      setHelperFormData({
                                          ...helperFormData,
                                          Viber:  e.target.value
                                      })
                                  }} /> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Facebook</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="Facebook" value={helperFormData.Facebook}
                                    onChange={(e) => {
                                      setHelperFormData({
                                          ...helperFormData,
                                          Facebook:  e.target.value
                                      })
                                  }}/> </div>
                            </div>
                            <div className="row mb15 sub-title-row form-group align-items-center">
                              <div className="col-lg-12">
                                <h6>Other Contact</h6>
                              </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Type</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="WeChat" value={helperFormData.Type}
                                    onChange={(e) => {
                                      setHelperFormData({
                                          ...helperFormData,
                                          Type:  e.target.value
                                      })
                                  }}/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Information</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="WeChat Account ID/Name" value={helperFormData.Information}
                                    onChange={(e) => {
                                      setHelperFormData({
                                          ...helperFormData,
                                          Information:  e.target.value
                                      })
                                  }}/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-12">
                                <button name="add-more" className="add-more"><i className="fas fa-plus"></i> Add More</button>
                              </div>
                            </div>
                            
                            

                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="data-collapse-box">
                      <div className="card-header"> <a className="" data-toggle="collapse" href="#edf-3" role="button" aria-expanded="false" aria-controls="edf-3">3. Family Background</a> </div>
                      <div className="collapse show" id="edf-3">
                        <div className="card card-body">
                          <div className="form-data-wrap">
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Father Occupation</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="Occupation" value={helperFormData.FatherOccupation}
                                    onChange={(e) => {
                                      setHelperFormData({
                                          ...helperFormData,
                                          FatherOccupation:  e.target.value
                                      })
                                  }}/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Mother Occupation</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="Occupation" value={helperFormData.MotherOccupation}
                                    onChange={(e) => {
                                      setHelperFormData({
                                          ...helperFormData,
                                          MotherOccupation:  e.target.value
                                      })
                                  }}/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Father Age</label>
                              </div>
                              <div className="col-lg-2">
                                <input type="text" className="form-control" placeholder="Age" value={helperFormData.FatherAge}
                                    onChange={(e) => {
                                      setHelperFormData({
                                          ...helperFormData,
                                          FatherAge:  e.target.value
                                      })
                                  }}/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Mother Age</label>
                              </div>
                              <div className="col-lg-2">
                                <input type="text" className="form-control" placeholder="Age" value={helperFormData.MotherAge}
                                    onChange={(e) => {
                                      setHelperFormData({
                                          ...helperFormData,
                                          MotherAge:  e.target.value
                                      })
                                  }}/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Siblings Position</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="Position" value={helperFormData.SiblingsPosition}
                                    onChange={(e) => {
                                      setHelperFormData({
                                          ...helperFormData,
                                          SiblingsPosition:  e.target.value
                                      })
                                  }}/> </div>
                            </div>
                            
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>No. of Brother</label>
                              </div>
                              <div className="col-lg-2">
                                <input type="text" className="form-control" placeholder="No." value={helperFormData.NoOfBrother}
                                    onChange={(e) => {
                                      setHelperFormData({
                                          ...helperFormData,
                                          NoOfBrother:  e.target.value
                                      })
                                  }}/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>No. of Sister</label>
                              </div>
                              <div className="col-lg-2">
                                <input type="text" className="form-control" placeholder="No." value={helperFormData.NoOfSister}
                                    onChange={(e) => {
                                      setHelperFormData({
                                          ...helperFormData,
                                          NoOfSister:  e.target.value
                                      })
                                  }}/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Brother Age</label>
                              </div>
                              <div className="col-lg-2">
                                <input type="text" className="form-control" placeholder="No." value={helperFormData.BrotherAge}
                                    onChange={(e) => {
                                      setHelperFormData({
                                          ...helperFormData,
                                          BrotherAge:  e.target.value
                                      })
                                  }}/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Sister Age</label>
                              </div>
                              <div className="col-lg-2">
                                <input type="text" className="form-control" placeholder="No." value={helperFormData.SisterAge}
                                    onChange={(e) => {
                                      setHelperFormData({
                                          ...helperFormData,
                                          SisterAge:  e.target.value
                                      })
                                  }}/> </div>
                            </div>
                           
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Husband Name</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="Husband Name" value={helperFormData.HusbandName}
                                    onChange={(e) => {
                                      setHelperFormData({
                                          ...helperFormData,
                                          HusbandName:  e.target.value
                                      })
                                  }}/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Husband Occupation</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="Husband Occupation" value={helperFormData.HusbandOccupation}
                                    onChange={(e) => {
                                      setHelperFormData({
                                          ...helperFormData,
                                          HusbandOccupation:  e.target.value
                                      })
                                  }}/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Husband Age</label>
                              </div>
                              <div className="col-lg-2">
                                <input type="text" className="form-control" placeholder="Age" value={helperFormData.HusbandAge}
                                    onChange={(e) => {
                                      setHelperFormData({
                                          ...helperFormData,
                                          HusbandAge:  e.target.value
                                      })
                                  }}/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>No. Of Children</label>
                              </div>
                              <div className="col-lg-2">
                                <input type="text" className="form-control" placeholder="No." value={helperFormData.NoOfChildren}
                                    onChange={(e) => {
                                      setHelperFormData({
                                          ...helperFormData,
                                          NoOfChildren:  e.target.value
                                      })
                                  }}/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Child Age</label>
                              </div>
                              <div className="col-lg-2">
                                <input type="text" className="form-control" placeholder="Age" value={helperFormData.ChildAge}
                                    onChange={(e) => {
                                      setHelperFormData({
                                          ...helperFormData,
                                          ChildAge:  e.target.value
                                      })
                                  }}/> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="data-collapse-box">
                      <div className="card-header"> <a className="" data-toggle="collapse" href="#edf-4" role="button" aria-expanded="false" aria-controls="edf-4">4. Physical Attrribute</a> </div>
                      <div className="collapse show" id="edf-4">
                        <div className="card card-body">
                          <div className="form-data-wrap">
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Complexion</label>
                              </div>
                              <div className="col-lg-6">
                                <select className="form-control select" value={helperFormData.Complexion}
                                    onChange={(e) => {
                                      setHelperFormData({
                                          ...helperFormData,
                                          Complexion:  e.target.value
                                      })
                                  }}>
                                  <option>Select Complexion</option>
                                  <option>Very Fair</option>
                                  <option>Fair</option>
                                  <option>Medium</option>
                                  <option>Olive</option>
                                  <option>Brown</option>
                                  <option>Dark</option>
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
                                         <input type="text" className="form-control" placeholder="CM" value={helperFormData.Height_CM}
                                    onChange={(e) => {
                                      setHelperFormData({
                                          ...helperFormData,
                                          Height_CM:  e.target.value
                                      })
                                  }}/> 
                                      </div>
                                      <div className="col-lg-4">
                                        <label>CM</label>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                   <div className="row gutters-5 align-items-center">
                                      <div className="col-lg-8">
                                         <input type="text" className="form-control" placeholder="Feet" value={helperFormData.Height_Feet}
                                    onChange={(e) => {
                                      setHelperFormData({
                                          ...helperFormData,
                                          Height_Feet:  e.target.value
                                      })
                                  }}/> 
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
                                         <input type="text" className="form-control" placeholder="KG" value={helperFormData.Weight_KG}
                                    onChange={(e) => {
                                      setHelperFormData({
                                          ...helperFormData,
                                          Weight_KG:  e.target.value
                                      })
                                  }}/> 
                                      </div>
                                      <div className="col-lg-4">
                                        <label>KG</label>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                   <div className="row gutters-5 align-items-center">
                                      <div className="col-lg-8">
                                         <input type="text" className="form-control" placeholder="Pound" value={helperFormData.Weight_Pound}
                                    onChange={(e) => {
                                      setHelperFormData({
                                          ...helperFormData,
                                          Weight_Pound:  e.target.value
                                      })
                                  }}/> 
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
                    <div className="data-collapse-box">
                      <div className="card-header"> <a className="" data-toggle="collapse" href="#edf-5" role="button" aria-expanded="false" aria-controls="edf-5">5. Booking Related Information</a> </div>
                      <div className="collapse show" id="edf-5">
                        <div className="card card-body">
                          <div className="form-data-wrap">
                           
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Basic Salary ($)</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="Basic Salary" value={helperFormData.BasicSalary}
                                    onChange={(e) => {
                                      setHelperFormData({
                                          ...helperFormData,
                                          BasicSalary:  e.target.value
                                      })
                                  }}/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Off Day Daily Rate ($)</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="Off Day Daily Rate" value={helperFormData.OffDayDailyRate}
                                    onChange={(e) => {
                                      setHelperFormData({
                                          ...helperFormData,
                                          OffDayDailyRate:  e.target.value
                                      })
                                  }}/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Helper Fee ($)</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="Helper Fee" value={helperFormData.HelperFee}
                                    onChange={(e) => {
                                      setHelperFormData({
                                          ...helperFormData,
                                          HelperFee:  e.target.value
                                      })
                                  }}/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Pocket Money ($)</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="Pocket Money" value={helperFormData.PocketMoney}
                                    onChange={(e) => {
                                      setHelperFormData({
                                          ...helperFormData,
                                          PocketMoney:  e.target.value
                                      })
                                  }}/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Select Off Days</label>
                              </div>
                              <div className="col-lg-6">
                                <select className="form-control select" value={helperFormData.SelectOffDays}
                                    onChange={(e) => {
                                      setHelperFormData({
                                          ...helperFormData,
                                          SelectOffDays:  e.target.value
                                      })
                                  }}>
                                  <option>Select Off Days</option>
                                  <option>Monthly</option>
                                  <option>Weekly</option>
                                 </select>
                              </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>No.</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="No." value={helperFormData.NoOffDays}
                                    onChange={(e) => {
                                      setHelperFormData({
                                          ...helperFormData,
                                          NoOffDays:  e.target.value
                                      })
                                  }}/> </div>
                            </div>

                            <div className="row mb15 sub-title-row form-group align-items-center">
                              <div className="col-lg-12">
                                <h6>Availability of FDW to be Interview by Prospective Employer</h6>
                              </div>
                            </div>

                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Available Date (SGT)</label>
                              </div>
                              <div className="col-lg-6">
                                <div className="inrow date-wrap datepicker-wrap">
                                  <input type="text" className="form-control datepicker" id="InterviewDate" placeholder="DD/MM/YYYY" value={helperFormData.InterviewDate}
                                    onChange={(e) => {
                                      setHelperFormData({
                                          ...helperFormData,
                                          InterviewDate:  e.target.value
                                      })
                                  }}/> <i className="fas fa-calendar-alt"></i> </div>
                              </div>
                          </div>

                          <div className="row select-group select-slot-group align-items-center">
                              <div className="col-lg-3">
                                <label>Avaialable Time (SGT)</label>
                              </div>
                              <div className="col-lg-6">
                                <select className="form-control select" placeholder='Select Slot' value={intTime}
                                    onChange={(e) => {
                                      setIntTime([...intTime,e.target.value])

                                      // setHelperFormData({
                                      //     ...helperFormData,
                                      //     InterviewTime:  e.target.value
                                      // })
                                  }} >
                                  <option >Select Slot</option>
                                  <option value="10:00">Morning Slot 1 : 10: AM to 10:30 AM</option>
                                  <option value="10:30">Morning Slot 2 : 10:30 AM to 11 AM</option>
                                  <option value="11:00">Morning Slot 3 : 11 AM to 11:30 AM</option>
                                  <option value="11:30">Morning Slot 4 : 11:30 AM to 12 PM</option>
                                  <option value="12:00">Afternoon Slot 1 : 12 PM to 12:30 PM</option>
                                  <option value="12:30">Afternoon Slot 2 : 12:30 PM to 1 PM</option>
                                  <option value="01:00">Afternoon Slot 3 : 1 PM to 1:30 PM</option>
                                  <option value="01:30">Afternoon Slot 4 : 1:30 PM to 2 PM</option>
                                  <option value="02:00">Afternoon Slot 5 : 2 PM to 2:30 PM</option>
                                  <option value="02:30">Afternoon Slot 6 : 2:30 PM to 3 PM</option>
                                  <option value="03:00">Afternoon Slot 7 : 3 PM to 3:30 PM</option>
                                  <option value="03:30">Afternoon Slot 8 : 3 :30 PM to 4 PM</option>
                                  <option value="04:00">Afternoon Slot 9 : 4 PM to 4:30 PM</option>
                                  <option value="04:30">Afternoon Slot 10 : 4:30 PM to 5 PM</option>
                                  <option value="05:00">Afternoon Slot 11 : 5 PM to 5:30 PM</option>
                                  <option value="05:30">Afternoon Slot 12 : 5:30 PM to 6 PM</option>
                                </select>
                              </div>
                            </div>
                              {intTime.length!=0? 
                                <>{intTime.map((time)=><div key={time} className="row select-group select-slot-group align-items-center">
                                  <div className="col-lg-3"></div>
                                  <div className="col-lg-6">Selected Slot @ {time}</div>
                                </div>)}</>:<></>}
                      <div className="row form-group align-items-center">
                        <div className="col-lg-12">
                          <button name="add-more" className="add-more"><i className="fas fa-plus"></i> Add More</button>
                        </div>
                      </div>

                      <div className="row form-group">
                              <div className="col-lg-3">
                                <label>Other Remarks</label>
                              </div>
                              <div className="col-lg-6">
                                <textarea className="form-control" placeholder="Other Remarks" value={helperFormData.Remarks}
                                    onChange={(e) => {
                                      setHelperFormData({
                                          ...helperFormData,
                                          Remarks:  e.target.value
                                      })
                                  }}></textarea>
                              </div>
                            </div>

                        </div>
                      </div>
                      </div>
                    </div>
                    <div className="data-collapse-box">
                      <div className="card-header"> <a className="" data-toggle="collapse" href="#edf-6" role="button" aria-expanded="false" aria-controls="edf-6">4. Account Details</a> </div>
                      <div className="collapse show" id="edf-6">
                        <div className="card card-body">
                          <div className="form-data-wrap">
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Email Address</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="XXXXXXXXXXXXXXX@gmail.com" value={helperFormData.Email}
                                    onChange={(e) => {
                                      setHelperFormData({
                                          ...helperFormData,
                                          Email:  e.target.value
                                      })
                                  }}/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Password</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="Password" className="form-control" value={helperFormData.Password}
                                    onChange={(e) => {
                                      setHelperFormData({
                                          ...helperFormData,
                                          Password:  e.target.value
                                      })
                                  }}/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Confirm Password</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="Password" className="form-control" value={helperFormData.ConfirmPassword}
                                    onChange={(e) => {
                                      setHelperFormData({
                                          ...helperFormData,
                                          ConfirmPassword:  e.target.value
                                      })
                                  }}/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>SMS Contact Number</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" value={helperFormData.SMSContactNumber}
                                    onChange={(e) => {
                                      setHelperFormData({
                                          ...helperFormData,
                                          SMSContactNumber:  e.target.value
                                      })
                                  }}/> </div>
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
                    <button type="button" className="action-button previous previous_button custom-button prvs">Back</button> <a href="#" onClick={stepThreeHandler} className="action-button custom-button finish">SUBMIT</a> 
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
}
export default MaidRegistration;