import React, { useEffect, useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import QuickSearch from '../Quicksearch';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { handleEmployerlogin, handleHelperlogin } from '../../apiCalls';
import { jpb } from '../../config';

const Login = () => {
  const [isloggedin, setisloggedin] = useState(false);
  const [logindata, setlogindata] = useState({});
  const [jwtToken, setjwtToken] = useState('');
  const [selectedLink, setSelectedLink] = useState('/');
  
  const navigate = useNavigate();

  useEffect(() => {
    setSelectedLink(window.location.pathname);
    fetchTokenHandler();
    let token = localStorage.getItem('token');
    if (token) {
      setisloggedin(true);
    }
  }, []);
  const handleLinkClick = (link) => {
    //navigate(link);
    window.location.href = link
    setSelectedLink(link);
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

  // const handleLogin = async (event) => {
  //   event.preventDefault();

  //   const regDetail = {
  //     EmailId: logindata.Username,
  //     Password: logindata.Password,
  //   };
  //   console.log(regDetail);

  //   const jwttoken = jwtToken;
  //   console.log(jwtToken, jwttoken);
    

  //   try {
  //     const response = await fetch('http://154.26.130.251:283/api/Employer/Login', {
  //       method: 'POST',
  //       body: JSON.stringify(regDetail),
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: `Bearer ${jwttoken}`,
  //       },
  //     });

  //     console.log(response);

  //     if (!response.ok) {
  //       console.log('Something went wrong!');
  //       toast.error('Login Failure!');
  //       return;
  //     }

  //     const data = await response.json();
  //     console.log(data);

  //     if (data.Code === 200 && data.Message === 'Sucess') {
  //      // alert(true);
  //       const userData = data.Data[0];
  //       console.log(userData);
  //       localStorage.setItem('token', JSON.stringify(data.Data));
  //       setisloggedin(true);
  //       console.log(localStorage.getItem('token'));
  //       console.log(isloggedin);
  //       toast.success('Login Successfully!');
  //       navigate('/employeraccount');
  //       window.location.reload();
  //     }
  //   } catch (error) {
  //     toast.error('Failure!');
  //     console.log('An error occurred:', error);
  //   }
  // };


  
  const handleLogin = async (event) => {
    event.preventDefault();

    const regDetail = {
      OrgId:jpb.OrgId,
      Email: logindata.Username,
      Password: logindata.Password,
    };

    
    if(selectedLink === "/login"){

      try {
        const response = await handleEmployerlogin(regDetail);  
  
        if (response.Code === 200 && response.Message === 'Sucess') {
          if(response.Data[0].Email === logindata.Username ){
            toast.success('Login Sucess');
            window.location.href = "/helperlist"
          }else{
            toast.error("Login Failer , Please Register")
          }
        }else{
          toast.error("Login Failed")
        }
      } catch (error) {
        toast.error('Failure!');
        console.log('An error occurred:', error);
      }

    }else{

      try {
        const response = await handleHelperlogin(regDetail);

        if (response.Code === 200 && response.Message === 'Sucess') {
          if(response.Data[0].Email === logindata.Username ){
            toast.success('Login Sucess');
            window.location.href = "/"
          }else{
            toast.error("Login Failer , Please Register")
          }
        }else{
          toast.error("Login Failed")
        }
      } catch (error) {
        toast.error('Failure!');
        console.log('An error occurred:', error);
      }
    }


  };


   
    
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
                <li className={selectedLink === '/login' ? 'selected' : ''}><Link to="/login" onClick={() => handleLinkClick('/login')}>Employer Login</Link></li>
                  <li className={selectedLink === '/helperlogin' ? 'selected' : ''}><Link to="/helperlogin" onClick={() => handleLinkClick('/helperlogin')}>Helper Login</Link></li>
                </ul>
              </div>
             
             <div className="login-holder">
                <form onSubmit={handleLogin}>
                   <div className="main-inner-box">
                    <div className="mx-575">
                    <div className="pageTitle title-fix text-center md"><h2>Enter The Credentials</h2></div>
                    <div className="row form-group align-items-center">
                      <div className="col-lg-4">
                        <label>Email Address <span className="red">*</span></label>
                      </div>
                      <div className="col-lg-8">
                        <input type="text" className="form-control" placeholder="Email Address" 
                        onChange={(e) => {
                                    setlogindata({ ...logindata, Username: e.target.value })
                                }}/> </div>
                    </div>
                    <div className="row form-group align-items-center">
                      <div className="col-lg-4">
                        <label>Password <span className="red">*</span></label>
                      </div>
                      <div className="col-lg-8">
                        <input type="password" className="form-control" placeholder="Password"
                         onChange={(e) => {
                          setlogindata({ ...logindata, Password: e.target.value })
                      }}/> </div>
                    </div>
                   
                    <div className="fogot-pass text-center w-100"><Link to="/forgotpassword">Forgot Password?</Link></div>
                    <div className="row align-items-center">
                      <div className="col-lg-12 m-auto align-self-center">
                      <div className="form-action mt30 text-center">
                        <button type='submit' className="custom-button">LOGIN</button>
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