import React,{useState,useEffect} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import QuickSearch from '../Quicksearch';
import { Link } from 'react-router-dom';



const HelperLanguage = () => {
  const [selectedLink, setSelectedLink] = useState('/');
  const [storedData, setstoreddata] = React.useState([]);
  const [ishelperloggedin, setishelperloggedin] = React.useState(false);
  const [jwtToken, setjwtToken] = useState('');
  const [list, setList] = useState([]);
  const [langValue, setLangValue] = useState("");
  const [understandingValue, setUnderstandingValue] = useState("");  
  const [speakingValue, setSpeakingValue] = useState("");
  const [remarksValue, setRemarksValue] = useState("");
  const [langdata, setlangdata] = useState({
    "OrgId": 1,
    "HelperCode": "",
    "Laguage": [
                {
                "OrgId": 1,
                "HelperCode": "",
                "Language": "",
                "UnderstandingLevel": "",
                "SpeakingLevel": "",
                "Remarks": "",
                "CreatedBy": "",
                "CreatedOn": ""
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
      setlangdata({
        ...langdata,
        "OrgId": 1,
    "HelperCode": storedData[0].HelperCode,
    // "Laguage": [
    //             {
    //             "OrgId": 1,
    //             "HelperCode": "",
    //             "Language": "",
    //             "UnderstandingLevel": "",
    //             "SpeakingLevel": "",
    //             "Remarks": "",
    //             "CreatedBy": "",
    //             "CreatedOn": ""
    //             }
    //         ] 
        
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

  const handleAdd = (e) => {
    e.preventDefault();
    if (langValue !== "" && understandingValue !== "" && speakingValue !== "") {
      setList((prevList) => [...prevList, { 
         OrgId:1,
         HelperCode:storedData[0].HelperCode ,
        Language: langValue,
        UnderstandingLevel: understandingValue,
        SpeakingLevel : speakingValue,
        Remarks:remarksValue,
        CreatedBy : storedData[0].HelperName,
        CreatedOn : new Date()
        }]);
      console.log(list);
      setLangValue("");
      setUnderstandingValue("");
      setSpeakingValue("");
      setRemarksValue("");
    }
  };

  const handleLangChange = (event) => {
    setLangValue(event.target.value);
  };
  
  const handleUnderstandingChange = (event) => {
    setUnderstandingValue(event.target.value);
  };

  const handleSpeakingChange = (event) => {
    setSpeakingValue(event.target.value);
  };
  
  const handleRemarksChange = (event) => {
    setRemarksValue(event.target.value);
  };

  const savelangdataHandler = async (event) => {
    event.preventDefault();
    const transformedData = list.map((item) => {
      return {
        OrgId: item.OrgId,
        HelperCode: item.HelperCode,
        Language: item.Language,
        UnderstandingLevel: item.UnderstandingLevel,
        SpeakingLevel : item.SpeakingLevel,
        Remarks:item.Remarks,
        CreatedBy : item.CreatedBy,
        CreatedOn : item.CreatedOn
        
      };
    });
    const regDetail = {
      "OrgId": 1,
      "HelperCode": langdata.HelperCode,
      "Laguage": transformedData
    };
    console.log(regDetail);

    const jwttoken = jwtToken;
    console.log(jwtToken, jwttoken);

    try {
      const response = await fetch('http://154.26.130.251:283/api/Helper/LanguageDetails', {
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
            "HelperCode": langdata.HelperCode,
            
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
     
      <section className="fullcontainer dashboard helper-language-details hlng-page" data-aos="fade-up">
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
              <form onSubmit={savelangdataHandler}>
              <div className="dashboard-right-wrap hlng-wrap">
                <div className="main-inner-box">
                  <div className="pageTitle title-fix sm"><h2>Language Details</h2></div>
                   <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Choose the Language</label>
                              </div>
                              <div className="col-lg-7">
                                 <select className='new-select' value={langValue} onChange={handleLangChange}>
                                  <option value="">Please Select</option>
                                  <option value="Spanish">Spanish</option>
                                  <option value="Chinese">Chinese</option>
                                  <option value="Hindi">Hindi</option>
                                  <option value="English">English</option>
                                </select>
                              </div>
                            </div>

                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Understanding Level</label>
                              </div>
                              <div className="col-lg-7">
                                 <select className='new-select' value={understandingValue} onChange={handleUnderstandingChange}>
                                  <option value="">Please Select</option>
                                  <option value="Basic">Basic</option>
                                  <option value="Intermediate">Intermediate</option>
                                  <option value="High">High</option>
                                </select>
                              </div>
                            </div>

                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Speaking Level</label>
                              </div>
                              <div className="col-lg-7">
                                 <select className='new-select' value={speakingValue} onChange={handleSpeakingChange}>
                                 <option value="">Please Select</option>
                                  <option value="Basic">Basic</option>
                                  <option value="Intermediate">Intermediate</option>
                                  <option value="High">High</option>
                                </select>
                              </div>
                            </div>

                          

                            <div className="row form-group ">
                              <div className="col-lg-5">
                                <label>Remarks</label>
                              </div>
                              <div className="col-lg-7">
                                <textarea className="form-control" placeholder="Remarks" value={remarksValue} onChange={handleRemarksChange}></textarea>
                              </div>
                            </div>

                            
                            
                            <div className="row form-group align-items-center">

                        <div className="col-lg-12">
                        <button name="add-more" onClick={handleAdd} className="add-more"> Add <i className="fas fa-plus"></i></button>
                        </div>
                      </div>
                      {list.length > 0 && (
                       <div className="table-holder md-table Scrollcontent" data-mcs-theme="dark">
                        <table className="table" style={{ width: "80%" }}>
                          <thead>
                            <tr>
                              <th>S/No</th>
                              <th>Language</th>
                              <th>Understanding Level</th>
                              <th>Speaking Level</th>
                              <th>Remarks</th>
                            </tr>
                          </thead>
                          <tbody>
                          {list.map((item, index) => (
                              <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.Language}</td>
                                <td>{item.UnderstandingLevel}</td>
                                <td>{item.SpeakingLevel}</td>
                                <td>{item.Remarks}</td>
                              </tr>
                            ))}
                            </tbody>
                            </table>
                            </div>
                      )}

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

export default HelperLanguage;