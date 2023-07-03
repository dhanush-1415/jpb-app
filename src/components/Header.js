import React , { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
function Header() {
  const [selectedLink, setSelectedLink] = useState('/');
  const [isloggedin, setisloggedin] = React.useState(false);
  const [ishelperloggedin, setishelperloggedin] = useState(false);
  const navigate = useNavigate();

  // const navigate = useNavigate();
  useEffect(() => {
    setSelectedLink(window.location.pathname);
    
        let token = localStorage.getItem("token")
        if (token) {
            setisloggedin(true)
        }
        console.log(token);
        console.log(isloggedin);
        let helpertoken = localStorage.getItem("helpertoken")
        if (helpertoken) {
          setishelperloggedin(true)
        }
        console.log(helpertoken);
        console.log(ishelperloggedin);
  }, []);


  const handleLinkClick = (link) => {
    //navigate(link);
    window.location.href = link
    setSelectedLink(link);
  };
  const handleLogout = () => {
    localStorage.removeItem("token")
    setisloggedin(false);
    navigate('/');
}

const handlehelperLogout = () => {
  localStorage.removeItem("helpertoken")
    setishelperloggedin(false);
  navigate('/');
}


  // if (!selectedLink) {
  //   return null; // or render a loading indicator
  // }
    return(
        <div>
             <header id="pageHeaderWrapper">
          <div id="pageHeader">
            <div className="headerTop">
              <div className="header-container">
                <div className="logo-holder">
                  <div className="logo">
                    <Link to="/" title="JPB"><img src="images/logo.png" alt="JPB" /></Link>
                  </div>
                </div>
                <div className="topRightHeader">
                  <div className="nav-wrapper">
                    <div className="custom-menu-wrap">
                      <div className="nav-container">
                        <nav className="nav">
                        <ul className="main-menu">
                          <li className={selectedLink === '/' ? 'selected' : ''}>
                            <Link to="/" onClick={() => { handleLinkClick('/');}}>
                              Home
                            </Link>
                          </li>
                          {/* <li className={selectedLink === '/services' ? 'selected' : ''}>
                            <Link to="/services" onClick={() => handleLinkClick('/services')}>
                              Services
                            </Link>
                          </li> */}
                          <li className={selectedLink === '/about' ? 'selected has-sub' : 'has-sub'}>
                            <Link to="/about" onClick={() => handleLinkClick('/about')}>
                              About Us
                            </Link>
                            <ul>
                              <li>
                                <Link to="/">Company Profile</Link>
                              </li>
                              <li>
                                <Link to="/">Vision &amp; Mission</Link>
                              </li>
                              <li>
                                <Link to="/">Our Core Values</Link>
                              </li>
                            </ul>
                          </li>
                          <li className={selectedLink === '/news' ? 'selected' : ''}>
                            <Link to="/news" onClick={() => handleLinkClick('/news')}>
                              News and Events
                            </Link>
                          </li>
                          <li className={selectedLink === '/contact' ? 'selected' : ''}>
                            <Link to="/contact" onClick={() => handleLinkClick('/contact')}>
                              Contact Us
                            </Link>
                          </li>
                        </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="top-right order-lg-3">
                  <div className="row align-items-center">
                    <div className="col-auto">
                      <a href="#quickSearch" data-toggle="modal" className="top-a" title="Search"><img src="images/search.svg" alt="JPB" /></a>
                    </div>
                    <div className="col-auto account-button">
                      <a href="/" className="top-link top-acc  dropdown-toggle" title="Register/login" data-toggle="dropdown" aria-haspopup="true"><img src="images/user.svg" alt="Register/login" /></a>
                      <div className="dropdown-menu">
                      {ishelperloggedin ? (
  <>
    <Link className="dropdown-item" to="/helperaccount" onClick={() => handleLinkClick('/helperaccount')}>
      My Account
    </Link>
    <Link className="dropdown-item" to="/" onClick={handlehelperLogout}>
      Logout
    </Link>
  </>
) :isloggedin ? (
  <>
  <Link className="dropdown-item" to="/employeraccount" onClick={() => handleLinkClick('/employeraccount')}>
      My Account
    </Link>
    <Link className="dropdown-item" to="/" onClick={handleLogout}>
      Logout
    </Link>
    
  </>
) : (
  <>
    <Link className="dropdown-item" to="/login" onClick={() => handleLinkClick('/login')}>
      Login
    </Link>
    <Link className="dropdown-item" to="/employerregistration" onClick={() => handleLinkClick('/employerregistration')}>
      Register
    </Link>
  </>
)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="clear" />
          </div>
        </header>
        </div>
    );
}
export default Header;