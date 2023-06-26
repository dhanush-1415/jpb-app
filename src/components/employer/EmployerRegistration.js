import React, {  useEffect,useState ,useRef, useCallback} from 'react';
import $ from "jquery";
import Header from '../Header';
import Footer from '../Footer';
import QuickSearch from '../Quicksearch';
import { Link } from 'react-router-dom';



const EmployerRegistration = () => {
  const [selectedLink, setSelectedLink] = useState('/');
  const nameRef = useRef('');
  const emailRef = useRef('');
  const phoneRef = useRef('');
  const otpRef = useRef('');
  useEffect(() => {
    setSelectedLink(window.location.pathname);
    
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
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
    }
  }, []);


  async function stepFirstHandler(event) {
   // event.preventDefault();
  // fetchTokenHandler();
    const regDetail = {
      OrgId: 1,
      Name: nameRef.current.value,
      Email: emailRef.current.value,
      Phone: phoneRef.current.value,
      viaOTP: otpRef.current.value,
    };
    console.log(regDetail);
    console.log(JSON.stringify(regDetail));
   
    // const response = await fetch('http://154.26.130.251:283/api/Employer/Register', {
    //   method: 'POST',
    //   body: JSON.stringify(regDetail),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // });
    // const data = await response.json();
    // console.log(data);
  }

 
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
                  <li className="selected"><Link to="/employerregistration" onClick={() => handleLinkClick('/employerregistration')}>Employer Registration</Link></li>
                  <li><Link to="/maidregistration" onClick={() => handleLinkClick('/maidregistration')}>Helper Registration</Link></li>
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
                          <input type="text" ref={nameRef} className="form-control" placeholder="Your Name" required/> </div>
                      </div>
                      <div className="row form-group align-items-center">
                        <div className="col-lg-4">
                          <label>Email Address <span className="red">*</span></label>
                        </div>
                        <div className="col-lg-8">
                          <input type="email"  ref={emailRef} className="form-control" placeholder="Your Email Address" required/> </div>
                      </div>
                      <div className="row form-group align-items-center">
                        <div className="col-lg-4">
                          <label>Phone Number <span className="red">*</span></label>
                        </div>
                        <div className="col-lg-8">
                          <input type="number" ref={phoneRef} className="form-control" placeholder="Your Phone Number" required/> </div>
                      </div>
                      <div className="row align-items-center text-center justify-content-center form-group">
                        <div className="col-lg-auto">
                          <label>Select Option to Receive OTP * : <span className="red">*</span></label>
                        </div>
                        <div className="col-lg-auto">
                          <div className="radio-inline">
                            
                            <div className="radio">
                              <label>
                                <input type="radio" ref={otpRef} name="r1"/> <span>via Email</span></label>
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
                          <input type="text" className="form-control"/> </div>
                        <div className="col-auto">
                          <input type="text" className="form-control"/> </div>
                        <div className="col-auto">
                          <input type="text" className="form-control"/> </div>
                        <div className="col-auto">
                          <input type="text" className="form-control"/> </div>
                        <div className="col-auto">
                          <input type="text" className="form-control"/> </div>
                      </div>
                      <div className="resend-otp"><a href="#">Resend OTP <i className="fas fa-redo-alt"></i></a></div>
                    </div>
                    <button type="button" className="action-button previous previous_button custom-button prvs">Back</button>
                    <button type="button" className="next action-button custom-button ">Next</button>
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
                                <input type="text" className="form-control" placeholder="Employer Name"/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Nationality</label>
                              </div>
                              <div className="col-lg-6">
                                <select>
                                  <option>Singaporean</option>
                                  <option>Indian</option>
                                  <option>Select</option>
                                </select>
                              </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>NRIC / FIN</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="Your NRIC / FIN"/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Passport</label>
                                <p className="size-12">* only for EP and Spass holder</p>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="Your Passport"/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Date of Birth</label>
                              </div>
                              <div className="col-lg-6">
                                <div className="inrow date-wrap datepicker-wrap">
                                  <input type="text" className="form-control datepicker" placeholder="DD/MM/YYYY" /> <i className="fas fa-calendar-alt"></i> </div>
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
                                <input type="text" className="form-control" placeholder="Contact Person"/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Mobile No.</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="Mobile No."/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Home No</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="Home No."/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Email</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="emailme.@gmail.com"/> </div>
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
                                <select>
                                  <option>Landed Property</option>
                                  <option>Select</option>
                                  <option>Select</option>
                                </select>
                              </div>
                            </div>
                            <div className="row select-group align-items-center">
                              <div className="col-lg-3">
                                <label>Expected Job Scope</label>
                              </div>
                              <div className="col-lg-6">
                                
                                <select multiple className="selectpicker form-control" id="number-multiple" data-virtual-scroll="true">
                                  <option>Household Chores</option>
                                  <option>Cooking</option>
                                  <option>Looking after age person in the household</option>
                                  <option>Constact attaention is required</option>
                                  <option>Babysitting</option>
                                  <option>Child - minding</option>
                                  <option>Others</option>
                                </select>
                              </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Number of Bedroom in the house</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="Number of Bedroom in the house"/> </div>
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
                                <input type="text" className="form-control" placeholder="XXXXXXXXXXXXXXX@gmail.com"/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Password</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="Password" className="form-control"/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>Confirm Password</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="Password" className="form-control"/> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-3">
                                <label>SMS Contact Number</label>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control"/> </div>
                            </div>
                            <div className="row align-items-center  form-group">
                              <div className="col-lg-4">
                                <label>How would you like to proceed?</label>
                              </div>
                              <div className="col-lg-8">
                                <div className="radio-inline">
                                  <div className="radio">
                                    <label>
                                      <input type="radio" name="r1"/> <span>Self Processing</span></label>
                                  </div>
                                  <div className="radio">
                                    <label>
                                      <input type="radio" name="r1"/> <span>Using Salespersons/Agency Services</span></label>
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
                        <label for="c1">I hereby declared that all the above information given are true and correct.</label>
                      </div>
                    </div>
                    <button type="button" className="action-button previous previous_button custom-button prvs">Back</button> <a href="#" className="action-button custom-button finish">SUBMIT</a> 
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