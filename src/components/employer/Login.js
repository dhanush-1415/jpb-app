import React, {  useEffect } from 'react';
import $ from "jquery";
import Header from '../Header';
import Footer from '../Footer';
import QuickSearch from '../Quicksearch';
import { Link } from 'react-router-dom';

const Login = () => {
  useEffect(() => {
   
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
  return(
    <div>
        <div id="wrapper">
<Header/>
    <div className="clear"></div>
 
    <div className="clear"></div>
        <div className="main-content-wrapper main-container-bg bg-img-tc" style={{background: 'url(images/banner-bg.jpg)'}}>
      <div className="login-page">
        <div className="inner-container">
          <div className="container">
            <div className="main-box-wrapper">
              <div className="reg-links">
                <ul>
                  <li className="selected"><a href="#">Employer Login</a></li>
                  <li><a href="#">Maid Login</a></li>
                </ul>
              </div>
             
             <div className="login-holder">
                <form>
                   <div className="main-inner-box">
                    <div className="mx-575">
                    <div className="pageTitle title-fix text-center md"><h2>Enter The Credentials</h2></div>
                    <div className="row form-group align-items-center">
                      <div className="col-lg-4">
                        <label>Email Address <span className="red">*</span></label>
                      </div>
                      <div className="col-lg-8">
                        <input type="text" className="form-control" placeholder="Email Address"/> </div>
                    </div>
                    <div className="row form-group align-items-center">
                      <div className="col-lg-4">
                        <label>Password <span className="red">*</span></label>
                      </div>
                      <div className="col-lg-8">
                        <input type="text" className="form-control" placeholder="Password"/> </div>
                    </div>
                   
                    <div className="fogot-pass text-center w-100"><Link to="/forgotpassword">Forgot Password?</Link></div>
                    <div className="row align-items-center">
                      <div className="col-lg-12 m-auto align-self-center">
                      <div className="form-action mt30 text-center">
                        <button className="custom-button">LOGIN</button>
                      </div>
                    </div>
                    </div>
                    </div>
                  </div>
                </form>
             </div>
             
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
export default Login;