import React,{useState,useEffect} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import QuickSearch from '../Quicksearch';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


const HelperMedical = () => {
  const [selectedLink, setSelectedLink] = useState('/');
  const [storedData, setstoreddata] = React.useState([]);
  const [ishelperloggedin, setishelperloggedin] = React.useState(false);
  const [jwtToken, setjwtToken] = useState('');
  const [helperName, setHelperName] = useState('');
  const [medicaldata, setmedicaldata] = useState({
    "OrgId": 1,
    "HelperCode": "",
    "Allergies": "No",
    "Mental_illness": "No",
    "Epilepsy": "No",
    "Asthma": "No",
    "Diabetes": "No",
    "Hypertension": "No",
    "Tuberculosis": "No",
    "HeartDisease": "No",
    "Malaria": "No",
    "Operations": "No",
    "Others": "No",
    "PhyscialDisabilities": "No",
    "Dietary_NoPork": "No",
    "Dietary_NoBeef": "No",
    "Dietary_Others": "No",
    "FoodHanding_YesPork": "No",
    "FoodHanding_YesBeef": "No",
    "FoodHanding_Others": "No"
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
      setmedicaldata({
        ...medicaldata,
        "OrgId": 1,
        "HelperCode": storedData[0].HelperCode,
        // "Allergies": storedData[0].Allergies,
        // "Mental_illness": storedData[0].Mental_illness,
        // "Epilepsy": storedData[0].Epilepsy,
        // "Asthma": storedData[0].Asthma,
        // "Diabetes": storedData[0].Diabetes,
        // "Hypertension": storedData[0].Hypertension,
        // "Tuberculosis": storedData[0].Tuberculosis,
        // "HeartDisease": storedData[0].HeartDisease,
        // "Malaria": storedData[0].Malaria,
        // "Operations": storedData[0].Operations,
        // "Others": storedData[0].Others,
        // "PhyscialDisabilities": storedData[0].PhyscialDisabilities,
        // "Dietary_NoPork": storedData[0].Dietary_NoPork,
        // "Dietary_NoBeef": storedData[0].Dietary_NoBeef,
        // "Dietary_Others": storedData[0].Dietary_Others,
        // "FoodHanding_YesPork": storedData[0].FoodHanding_YesPork,
        // "FoodHanding_YesBeef": storedData[0].FoodHanding_YesBeef,
        // "FoodHanding_Others": storedData[0].FoodHanding_Others
      });
      setHelperName(storedData[0].HelperName);
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

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setmedicaldata({...medicaldata,[name]: value});
  };

  const savemedicaldataHandler = async (event) => {
    event.preventDefault();
    const regDetail = {
        "OrgId": 1,
        "HelperCode": medicaldata.HelperCode,
        "Allergies": medicaldata.Allergies,
        "Mental_illness": medicaldata.Mental_illness,
        "Epilepsy": medicaldata.Epilepsy,
        "Asthma": medicaldata.Asthma,
        "Diabetes": medicaldata.Diabetes,
        "Hypertension": medicaldata.Hypertension,
        "Tuberculosis": medicaldata.Tuberculosis,
        "HeartDisease": medicaldata.HeartDisease,
        "Malaria": medicaldata.Malaria,
        "Operations": medicaldata.Operations,
        "Others": medicaldata.Others,
        "PhyscialDisabilities": medicaldata.PhyscialDisabilities,
        "Dietary_NoPork": medicaldata.Dietary_NoPork,
        "Dietary_NoBeef": medicaldata.Dietary_NoBeef,
        "Dietary_Others": medicaldata.Dietary_Others,
        "FoodHanding_YesPork": medicaldata.FoodHanding_YesPork,
        "FoodHanding_YesBeef": medicaldata.FoodHanding_YesBeef,
        "FoodHanding_Others": medicaldata.FoodHanding_Others
    };
    console.log(regDetail);

    const jwttoken = jwtToken;
    console.log(jwtToken, jwttoken);

    try {
      const response = await fetch('http://154.26.130.251:283/api/Helper/MedicalDetails', {
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
          "OrgId": 1,
          "HelperCode": medicaldata.HelperCode,
          "Allergies": medicaldata.Allergies,
          "Mental_illness": medicaldata.Mental_illness,
          "Epilepsy": medicaldata.Epilepsy,
          "Asthma": medicaldata.Asthma,
          "Diabetes": medicaldata.Diabetes,
          "Hypertension": medicaldata.Hypertension,
          "Tuberculosis": medicaldata.Tuberculosis,
          "HeartDisease": medicaldata.HeartDisease,
          "Malaria": medicaldata.Malaria,
          "Operations": medicaldata.Operations,
          "Others": medicaldata.Others,
          "PhyscialDisabilities": medicaldata.PhyscialDisabilities,
          "Dietary_NoPork": medicaldata.Dietary_NoPork,
          "Dietary_NoBeef": medicaldata.Dietary_NoBeef,
          "Dietary_Others": medicaldata.Dietary_Others,
          "FoodHanding_YesPork": medicaldata.FoodHanding_YesPork,
          "FoodHanding_YesBeef": medicaldata.FoodHanding_YesBeef,
          "FoodHanding_Others": medicaldata.FoodHanding_Others
          }; // Update the property
        setstoreddata(updatedData);
        console.log(storedData,updatedData);
        toast.success('Updated Successfully!');
       // localStorage.setItem('helpertoken', JSON.stringify(updatedData));
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
     
      <section className="fullcontainer dashboard helper-medical-details hmd-page" data-aos="fade-up">
        <div className="inner-container-md">
        <div className="container">
          <div className="pageTitle md"><h2>Helper Dashboard</h2></div>
          <div className="row">
            <div className="col-lg-auto mb-991-30"> 
              <div className="sidebar">
              <div className="sidebar-title"><h5>Hi {helperName},</h5></div>
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
              <form onSubmit={savemedicaldataHandler}>
              <div className="dashboard-right-wrap hiad-wrap">
                <div className="main-inner-box">
                  <div className="pageTitle title-fix sm"><h2>Medical Details</h2></div>
               
                  <div className="table-holder md-table Scrollcontent" data-mcs-theme="dark">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>S/No</th>
                              <th>Question</th>
                              <th>Answer</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td> 1 </td>
                              <td> Allergies (if any) </td>
                              <td> <div className="radio-inline">
                                  <div className="radio">
                                    <label>
                                      <input type="radio" name="Allergies"
                                      value="Yes"
                                      checked={medicaldata.Allergies === "Yes"}
                                      onChange={handleRadioChange}
                                      /> <span>Yes</span></label>
                                  </div>
                                  <div className="radio">
                                    <label>
                                      <input type="radio" name="Allergies"
                                      value="No"
                                      checked={medicaldata.Allergies === "No"}
                                      onChange={handleRadioChange}
                                      /> <span>No</span></label>
                                  </div>
                                </div></td>
                             
                            </tr>
                            <tr>
                              <td> 2 </td>
                              <td> Mental illness </td>
                              <td> <div className="radio-inline">
                                  <div className="radio">
                                    <label>
                                      <input type="radio" 
                                      name="Mental_illness"
                                      value="Yes"
                                      checked={medicaldata.Mental_illness === "Yes"}
                                      onChange={handleRadioChange}
                                      /> <span>Yes</span></label>
                                  </div>
                                  <div className="radio">
                                    <label>
                                      <input type="radio"
                                      name="Mental_illness"
                                      value="No"
                                      checked={medicaldata.Mental_illness === "No"}
                                      onChange={handleRadioChange} 

                                      /> <span>No</span></label>
                                  </div>
                                </div></td>
                             
                            </tr>
                            <tr>
                              <td> 3 </td>
                              <td> Epilepsy</td>
                              <td> <div className="radio-inline">
                                  <div className="radio">
                                    <label>
                                      <input type="radio"
                                      name="Epilepsy"
                                      value="Yes"
                                      checked={medicaldata.Epilepsy === "Yes"}
                                      onChange={handleRadioChange}
                                      /> <span>Yes</span></label>
                                  </div>
                                  <div className="radio">
                                    <label>
                                      <input type="radio"
                                      name="Epilepsy"
                                      value="No"
                                      checked={medicaldata.Epilepsy === "No"}
                                      onChange={handleRadioChange}
                                      /> <span>No</span></label>
                                  </div>
                                </div></td>
                             
                            </tr>
                            <tr>
                              <td> 4 </td>
                              <td> Asthma </td>
                              <td> <div className="radio-inline">
                                  <div className="radio">
                                    <label>
                                      <input type="radio"
                                      name="Asthma"
                                      value="Yes"
                                      checked={medicaldata.Asthma === "Yes"}
                                      onChange={handleRadioChange}
                                      /> <span>Yes</span></label>
                                  </div>
                                  <div className="radio">
                                    <label>
                                      <input type="radio"
                                      name="Asthma"
                                      value="No"
                                      checked={medicaldata.Asthma === "No"}
                                      onChange={handleRadioChange}
                                      /> <span>No</span></label>
                                  </div>
                                </div></td>
                             
                            </tr>
                            <tr>
                              <td> 5 </td>
                              <td> Diabetes </td>
                              <td> <div className="radio-inline">
                                  <div className="radio">
                                    <label>
                                      <input type="radio"
                                      name="Diabetes"
                                      value="Yes"
                                      checked={medicaldata.Diabetes === "Yes"}
                                      onChange={handleRadioChange}
                                      /> <span>Yes</span></label>
                                  </div>
                                  <div className="radio">
                                    <label>
                                      <input type="radio"
                                      name="Diabetes"
                                      value="No"
                                      checked={medicaldata.Diabetes === "No"}
                                      onChange={handleRadioChange}
                                      /> <span>No</span></label>
                                  </div>
                                </div></td>
                             
                            </tr>
                            <tr>
                              <td> 6 </td>
                              <td> Hypertension </td>
                              <td> <div className="radio-inline">
                                  <div className="radio">
                                    <label>
                                      <input type="radio"
                                      name="Hypertension"
                                      value="Yes"
                                      checked={medicaldata.Hypertension === "Yes"}
                                      onChange={handleRadioChange}
                                      /> <span>Yes</span></label>
                                  </div>
                                  <div className="radio">
                                    <label>
                                      <input type="radio"
                                      name="Hypertension"
                                      value="No"
                                      checked={medicaldata.Hypertension === "No"}
                                      onChange={handleRadioChange}
                                      /> <span>No</span></label>
                                  </div>
                                </div></td>
                             
                            </tr>
                            <tr>
                              <td> 7 </td>
                              <td> Tuberculosis </td>
                              <td> <div className="radio-inline">
                                  <div className="radio">
                                    <label>
                                      <input type="radio"
                                      name="Tuberculosis"
                                      value="Yes"
                                      checked={medicaldata.Tuberculosis === "Yes"}
                                      onChange={handleRadioChange}
                                      /> <span>Yes</span></label>
                                  </div>
                                  <div className="radio">
                                    <label>
                                      <input type="radio"
                                      name="Tuberculosis"
                                      value="No"
                                      checked={medicaldata.Tuberculosis === "No"}
                                      onChange={handleRadioChange}
                                      /> <span>No</span></label>
                                  </div>
                                </div></td>
                             
                            </tr>
                            <tr>
                              <td> 8 </td>
                              <td> Heart Disease </td>
                              <td> <div className="radio-inline">
                                  <div className="radio">
                                    <label>
                                      <input type="radio"
                                      name="HeartDisease"
                                      value="Yes"
                                      checked={medicaldata.HeartDisease === "Yes"}
                                      onChange={handleRadioChange}
                                      /> <span>Yes</span></label>
                                  </div>
                                  <div className="radio">
                                    <label>
                                      <input type="radio"
                                      name="HeartDisease"
                                      value="No"
                                      checked={medicaldata.HeartDisease === "No"}
                                      onChange={handleRadioChange}
                                      /> <span>No</span></label>
                                  </div>
                                </div></td>
                             
                            </tr>
                            <tr>
                              <td> 9 </td>
                              <td> Malaria </td>
                              <td> <div className="radio-inline">
                                  <div className="radio">
                                    <label>
                                      <input type="radio"
                                      name="Malaria"
                                      value="Yes"
                                      checked={medicaldata.Malaria === "Yes"}
                                      onChange={handleRadioChange}
                                      /> <span>Yes</span></label>
                                  </div>
                                  <div className="radio">
                                    <label>
                                      <input type="radio"
                                      name="Malaria"
                                      value="No"
                                      checked={medicaldata.Malaria === "No"}
                                      onChange={handleRadioChange}
                                      /> <span>No</span></label>
                                  </div>
                                </div></td>
                             
                            </tr>
                            <tr>
                              <td> 10 </td>
                              <td> Operations </td>
                              <td> 
                                <div className="radio-inline">
                                  <div className="radio">
                                    <label>
                                      <input type="radio"
                                      name="Operations"
                                      value="Yes"
                                      checked={medicaldata.Operations === "Yes"}
                                      onChange={handleRadioChange}
                                      /> <span>Yes</span></label>
                                  </div>
                                  <div className="radio">
                                    <label>
                                      <input type="radio"
                                      name="Operations"
                                      value="No"
                                      checked={medicaldata.Operations === "No"}
                                      onChange={handleRadioChange}
                                      /> <span>No</span></label>
                                  </div>
                                </div>
                              </td>
                             
                            </tr>
                            <tr>
                              <td> 11 </td>
                              <td> Others </td>
                              <td className="pl0"><div className="form-group col-lg-8"><input type="text" className="form-control" value={medicaldata.Others} onChange={(e)=>{setmedicaldata({...medicaldata,Others:e.target.value});}} /></div></td>
                             
                            </tr>
                            <tr>
                              <td> 12 </td>
                              <td> Physcial Disabilities </td>
                              <td className="pl0"><div className="form-group col-lg-8"><input type="text" className="form-control" value={medicaldata.PhyscialDisabilities} onChange={(e)=>{setmedicaldata({...medicaldata,PhyscialDisabilities:e.target.value});}} /></div></td>
                             
                            </tr>
                            <tr className="white-transparent">
                              <td className="valign-top"> 13 </td>
                              <td colSpan="2">  
                                <table className="sub-table">
                                  <tr><td className="pl0" style={{'minWidth': 110+'px'}}>Dietary Restrictions</td></tr>
                                  <tr>
                                    <td className="pl0 ">No Pork</td>
                                    <td>
                                      <div className="radio-inline">
                                        <div className="radio">
                                          <label>
                                            <input type="radio"
                                            name="Dietary_NoPork"
                                            value="Yes"
                                            checked={medicaldata.Dietary_NoPork === "Yes"}
                                            onChange={handleRadioChange}
                                            /> <span>Yes</span></label>
                                        </div>
                                        <div className="radio">
                                          <label>
                                            <input type="radio"
                                            name="Dietary_NoPork"
                                            value="No"
                                            checked={medicaldata.Dietary_NoPork === "No"}
                                            onChange={handleRadioChange}
                                            /> <span>No</span></label>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="pl0">No Beef</td>
                                    <td>
                                      <div className="radio-inline">
                                        <div className="radio">
                                          <label>
                                            <input type="radio"
                                            name="Dietary_NoBeef"
                                            value="Yes"
                                            checked={medicaldata.Dietary_NoBeef === "Yes"}
                                            onChange={handleRadioChange}
                                            /> <span>Yes</span></label>
                                        </div>
                                        <div className="radio">
                                          <label>
                                            <input type="radio"
                                            name="Dietary_NoBeef"
                                            value="No"
                                            checked={medicaldata.Dietary_NoBeef === "No"}
                                            onChange={handleRadioChange}
                                            /> <span>No</span></label>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="pl0">Others</td>
                                    <td className="pl0">
                                      <div className="form-group col-lg-8"><input type="text" className="form-control" value={medicaldata.Dietary_Others} onChange={(e)=>{setmedicaldata({...medicaldata,Dietary_Others:e.target.value});}}/></div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                              
                            </tr>
                            <tr className="tr-dark">
                              <td className="valign-top"> 14 </td>
                              <td colSpan="2">  
                                <table className="sub-table">
                                  <tr className="tr-dark"><td className="pl0" style={{'minWidth': '110px'}}>Food Handing Preference</td></tr>
                                  <tr>
                                    <td className="pl0 ">Yes Pork</td>
                                    <td>
                                      <div className="radio-inline">
                                        <div className="radio">
                                          <label>
                                            <input type="radio"
                                            name="FoodHanding_YesPork"
                                            value="Yes"
                                            checked={medicaldata.FoodHanding_YesPork === "Yes"}
                                            onChange={handleRadioChange}
                                            /> <span>Yes</span></label>
                                        </div>
                                        <div className="radio">
                                          <label>
                                            <input type="radio"
                                            name="FoodHanding_YesPork"
                                            value="No"
                                            checked={medicaldata.FoodHanding_YesPork === "No"}
                                            onChange={handleRadioChange}
                                            /> <span>No</span></label>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr className="tr-dark">
                                    <td className="pl0">Yes Beef</td>
                                    <td>
                                      <div className="radio-inline">
                                        <div className="radio">
                                          <label>
                                            <input type="radio"
                                            name="FoodHanding_YesBeef"
                                            value="Yes"
                                            checked={medicaldata.FoodHanding_YesBeef === "Yes"}
                                            onChange={handleRadioChange}
                                            /> <span>Yes</span></label>
                                        </div>
                                        <div className="radio">
                                          <label>
                                            <input type="radio"
                                            name="FoodHanding_YesBeef"
                                            value="No"
                                            checked={medicaldata.Mental_illness === "No"}
                                            onChange={handleRadioChange}
                                            /> <span>No</span></label>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="pl0">Others</td>
                                    <td className="pl0">
                                      <div className="form-group col-lg-8"><input type="text" className="form-control" value={medicaldata.FoodHanding_Others} onChange={(e)=>{setmedicaldata({...medicaldata,FoodHanding_Others:e.target.value});}}/></div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                              
                            </tr>
                          </tbody>
                        </table>
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

export default HelperMedical;