import React,{useState,useEffect} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import QuickSearch from '../Quicksearch';
import { Link } from 'react-router-dom';



const HelperFamily = () => {
  const [selectedLink, setSelectedLink] = useState('/');
  const [storedData, setstoreddata] = React.useState([]);
  const [ishelperloggedin, setishelperloggedin] = React.useState(false);
  const [jwtToken, setjwtToken] = useState('');
  const [familydata, setfamilydata] = useState({
    "OrgId": 1,
    "HelperCode": "",
    "FatherOccupation": "",
    "MotherOccupation": "",
    "FatherAge": 0,
    "MotherAge": 0,
    "SiblingsPosition": "",
    "NoOfBrother": 0,
    "NoOfSister": 0,
    "BrotherAge": 0,
    "SisterAge": 0,
    "HusbandName": "",
    "HusbandOccupation": "",
    "HusbandAge": 0,
    "NoOfChildren": 0,
    "ChildAge": 0,
    "FileName": "",
    "Helper_Img_Base64String": ""
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
      setfamilydata({
        ...familydata,
        "OrgId": 1,
        "HelperCode": storedData[0].HelperCode,
        "FatherOccupation": storedData[0].FatherOccupation,
        "MotherOccupation":storedData[0].MotherOccupation,
        "FatherAge": storedData[0].FatherAge,
        "MotherAge": storedData[0].MotherAge,
        "SiblingsPosition": storedData[0].SiblingsPosition,
        "NoOfBrother": storedData[0].NoOfBrother,
        "NoOfSister": storedData[0].NoOfSister,
        "BrotherAge": storedData[0].BrotherAge,
        "SisterAge": storedData[0].SisterAge,
        "HusbandName": storedData[0].HusbandName,
        "HusbandOccupation": storedData[0].HusbandOccupation,
        "HusbandAge":storedData[0].HusbandAge,
        "NoOfChildren": storedData[0].NoOfChildren,
        "ChildAge": storedData[0].ChildAge,
        "FileName": storedData[0].FileName,
        "Helper_Img_Base64String": ""
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

  const savefamilydataHandler = async (event) => {
    event.preventDefault();
if(familydata.Password === familydata.ConfirmPassword){
    const regDetail = {
      "OrgId": 1,
      "HelperCode": familydata.HelperCode,
      "FatherOccupation": familydata.FatherOccupation,
      "MotherOccupation":familydata.MotherOccupation,
      "FatherAge": familydata.FatherAge,
      "MotherAge": familydata.MotherAge,
      "SiblingsPosition": familydata.SiblingsPosition,
      "NoOfBrother": familydata.NoOfBrother,
      "NoOfSister": familydata.NoOfSister,
      "BrotherAge": familydata.BrotherAge,
      "SisterAge": familydata.SisterAge,
      "HusbandName": familydata.HusbandName,
      "HusbandOccupation": familydata.HusbandOccupation,
      "HusbandAge":familydata.HusbandAge,
      "NoOfChildren": familydata.NoOfChildren,
      "ChildAge": familydata.ChildAge,
      "FileName": familydata.FileName,
      "Helper_Img_Base64String": ""
    };
    console.log(regDetail);

    const jwttoken = jwtToken;
    console.log(jwtToken, jwttoken);

    try {
      const response = await fetch('http://154.26.130.251:283/api/Helper/FamilyDetails_Updation', {
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
          "HelperCode": familydata.HelperCode,
          "FatherOccupation": familydata.FatherOccupation,
          "MotherOccupation":familydata.MotherOccupation,
          "FatherAge": familydata.FatherAge,
          "MotherAge": familydata.MotherAge,
          "SiblingsPosition": familydata.SiblingsPosition,
          "NoOfBrother": familydata.NoOfBrother,
          "NoOfSister": familydata.NoOfSister,
          "BrotherAge": familydata.BrotherAge,
          "SisterAge": familydata.SisterAge,
          "HusbandName": familydata.HusbandName,
          "HusbandOccupation": familydata.HusbandOccupation,
          "HusbandAge":familydata.HusbandAge,
          "NoOfChildren": familydata.NoOfChildren,
          "ChildAge": familydata.ChildAge,
          "FileName": familydata.FileName,
          "Helper_Img_Base64String": ""
          }; // Update the property
        setstoreddata(updatedData);
        console.log(storedData,updatedData);
        
        localStorage.setItem('helpertoken', JSON.stringify(updatedData));
      }
    } catch (error) {
      console.log('An error occurred:', error);
    }
  }else{
   // return;
   console.log('Passwords do not match');
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
     
      
      <section className="fullcontainer dashboard helper-family-details hfd-page" data-aos="fade-up">
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
              <form onSubmit={savefamilydataHandler}>
              <div className="dashboard-right-wrap hfd-wrap">
                    <div className="main-inner-box">
                      <div className="pageTitle title-fix sm">
                        <h2>Family Background</h2>
                      </div>
                     
                <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Father Occupation</label>
                              </div>
                              <div className="col-lg-7">
                                <input type="text" className="form-control" placeholder="Occupation"
                                value = {familydata.FatherOccupation}
                                onChange={(e)=>{setfamilydata({...familydata,FatherOccupation:e.target.value});}}
                                /> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Mother Occupation</label>
                              </div>
                              <div className="col-lg-7">
                                <input type="text" className="form-control" placeholder="Occupation"
                                value = {familydata.MotherOccupation}
                                onChange={(e)=>{setfamilydata({...familydata,MotherOccupation:e.target.value});}}
                                /> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Father Age</label>
                              </div>
                              <div className="col-lg-3">
                                <input type="text" className="form-control" placeholder="Age"
                                value = {familydata.FatherAge}
                                onChange={(e)=>{setfamilydata({...familydata,FatherAge:e.target.value});}}
                                /> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Mother Age</label>
                              </div>
                              <div className="col-lg-3">
                                <input type="text" className="form-control" placeholder="Age"
                                value = {familydata.MotherAge}
                                onChange={(e)=>{setfamilydata({...familydata,MotherAge:e.target.value});}}
                                /> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Siblings Position</label>
                              </div>
                              <div className="col-lg-3">
                                <input type="text" className="form-control" placeholder="Position"
                                value = {familydata.SiblingsPosition}
                                onChange={(e)=>{setfamilydata({...familydata,SiblingsPosition:e.target.value});}}
                                /> </div>
                            </div>
                            
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>No. of Brother</label>
                              </div>
                              <div className="col-lg-3">
                                <input type="text" className="form-control" placeholder="No."
                                value = {familydata.NoOfBrother}
                                onChange={(e)=>{setfamilydata({...familydata,NoOfBrother:e.target.value});}}
                                /> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>No. of Sister</label>
                              </div>
                              <div className="col-lg-3">
                                <input type="text" className="form-control" placeholder="No."
                                value = {familydata.NoOfSister}
                                onChange={(e)=>{setfamilydata({...familydata,NoOfSister:e.target.value});}}
                                /> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Brother Age</label>
                              </div>
                              <div className="col-lg-3">
                                <input type="text" className="form-control" placeholder="No."
                                value = {familydata.BrotherAge}
                                onChange={(e)=>{setfamilydata({...familydata,BrotherAge:e.target.value});}}
                                /> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Sister Age</label>
                              </div>
                              <div className="col-lg-3">
                                <input type="text" className="form-control" placeholder="No."
                                value = {familydata.SisterAge}
                                onChange={(e)=>{setfamilydata({...familydata,SisterAge:e.target.value});}}
                                /> </div>
                            </div>
                           
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Husband Name</label>
                              </div>
                              <div className="col-lg-7">
                                <input type="text" className="form-control" placeholder="Husband Name"
                                value = {familydata.HusbandName}
                                onChange={(e)=>{setfamilydata({...familydata,HusbandName:e.target.value});}}
                                /> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Husband Occupation</label>
                              </div>
                              <div className="col-lg-7">
                                <input type="text" className="form-control" placeholder="Husband Occupation"
                                value = {familydata.HusbandOccupation}
                                onChange={(e)=>{setfamilydata({...familydata,HusbandOccupation:e.target.value});}}
                                /> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Husband Age</label>
                              </div>
                              <div className="col-lg-3">
                                <input type="text" className="form-control" placeholder="Age"
                                value = {familydata.HusbandAge}
                                onChange={(e)=>{setfamilydata({...familydata,HusbandAge:e.target.value});}}
                                /> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>No. Of Children</label>
                              </div>
                              <div className="col-lg-3">
                                <input type="text" className="form-control" placeholder="No."
                                value = {familydata.NoOfChildren}
                                onChange={(e)=>{setfamilydata({...familydata,NoOfChildren:e.target.value});}}
                                /> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Child Age</label>
                              </div>
                              <div className="col-lg-3">
                                <input type="text" className="form-control" placeholder="Age"
                                value = {familydata.ChildAge}
                                onChange={(e)=>{setfamilydata({...familydata,ChildAge:e.target.value});}}
                                /> </div>
                            </div> 
                        {/* <div className="od-upload-section size-14">
                        <p>Upload Family List, ID, Birth Cert/Marriage Cert</p>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="upload-area">
                              <div className="file-upload">
                                <div id="start">
                                  <img src="images/upload-icon.png" alt=""/>
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
                      </div> */}
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

export default HelperFamily;