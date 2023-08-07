import React,{useState,useEffect} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import QuickSearch from '../Quicksearch';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


const HelperExperience = () => {
  const [selectedLink, setSelectedLink] = useState('/');
  const [storedData, setstoreddata] = React.useState([]);
  const [ishelperloggedin, setishelperloggedin] = React.useState(false);
  const [jwtToken, setjwtToken] = useState('');
  const [list, setList] = useState([]);
  const [countryValue, setCountryValue] = useState("");
  const [startdateValue, setStartdateValue] = useState("");  
  const [enddateValue, setEnddateValue] = useState("");
  const [dutyValue, setDutyValue] = useState("");
  const [reasonValue, setReasonValue] = useState("");
  const [helperName, setHelperName] = useState('');
  const [testimonialValue, setTestimonialValue] = useState("");
  const [experiencedata, setexperiencedata] = useState({
    "OrgId": 1,
    "HelperCode": "",
    "ExperienceDetails": [
                {
                  "CountryName": "",
                  "StartDate": "",
                  "EndDate": "",
                  "Duty": "",
                  "ReasonofLeaving": "",
                  "Testimonial": "",
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
      setexperiencedata({
        ...experiencedata,
        "OrgId": 1,
    "HelperCode": storedData[0].HelperCode,
  //   "ExperienceDetails": [
  //     {
  //       "CountryName": "",
  //       "StartDate": "",
  //       "EndDate": "",
  //       "Duty": "",
  //       "ReasonofLeaving": "",
  //       "Testimonial": "",
  //       "CreatedBy": "",
  //       "CreatedOn": ""
  //     }
  // ] 
        
      });
      setHelperName(storedData[0].HelperName);
    }
  }, [storedData]);

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
    console.log(countryValue,startdateValue,enddateValue,dutyValue,reasonValue,testimonialValue);
    if (countryValue !== "" ) {
      setList((prevList) => [...prevList, { 
         CountryName: countryValue,
         StartDate: document.getElementById('StartDate').value,
         EndDate : document.getElementById('EndDate').value,
         Duty:dutyValue,
         ReasonofLeaving : reasonValue,
         Testimonial:testimonialValue,
         CreatedBy : storedData[0].HelperName,
         CreatedOn : new Date()

        }]);
      console.log(list);
      setCountryValue("");
      setStartdateValue("");
      setDutyValue("");
      setReasonValue("");
      setTestimonialValue("");
      setEnddateValue("");
    }
  };

  const handleCountryChange = (event) => {
    setCountryValue(event.target.value);
  };
  
  const handleStartdateChange = (event) => {
    console.log(event.target.value,event);
    setStartdateValue(event.target.value);
  };

  const handleEnddateChange = (event) => {
    setEnddateValue(event.target.value);
  };
  
  const handleDutyChange = (event) => {
    setDutyValue(event.target.value);
  };

  const handleReasonChange = (event) => {
    setReasonValue(event.target.value);
  };
  
  const handleTestimonialChange = (event) => {
    setTestimonialValue(event.target.value);
  };

  const saveexperiencedataHandler = async (event) => {
    event.preventDefault();
    const transformedData = list.map((item) => {
      return {
        OrgId: item.OrgId,
        HelperCode: item.HelperCode,
        CountryName: item.CountryName,
        StartDate: convertToISODate(item.StartDate),
        EndDate : convertToISODate(item.EndDate),
        Duty:item.Duty,
        ReasonofLeaving : item.ReasonofLeaving,
        Testimonial:item.Testimonial,
        CreatedBy : item.CreatedBy,
        CreatedOn : item.CreatedOn
        
      };
    });
    const regDetail = {
      "OrgId": 1,
      "HelperCode": experiencedata.HelperCode,
      "ExperienceDetails": transformedData
    };
    console.log(JSON.stringify(regDetail));

    const jwttoken = jwtToken;
    console.log(jwtToken, jwttoken);

    try {
      const response = await fetch('http://154.26.130.251:283/api/Helper/ExperienceDetails', {
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
            "HelperCode": experiencedata.HelperCode,
            
          }; // Update the property
        setstoreddata(updatedData);
        console.log(storedData,updatedData);
        toast.success('Updated Successfully!');
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
   
      <section className="fullcontainer dashboard helper-experience-details hexd-page" data-aos="fade-up">
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
              <form onSubmit={saveexperiencedataHandler}>
              <div className="dashboard-right-wrap hexd-wrap">
                <div className="main-inner-box">
                  <div className="pageTitle title-fix sm"><h2>Experience Details</h2></div>
                   <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Country</label>
                              </div>
                              <div className="col-lg-7">
                                 <select className='form-control' value={countryValue} onChange={handleCountryChange}>
                                  <option value="">Please Select</option>
                                  <option value="India">India</option>
                                  <option value="China">China</option>
                                  <option value="Spain">Spain</option>
                                </select>
                              </div>
                            </div>

                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Start Date</label>
                              </div>
                              <div className="col-lg-7">
                                <div className="inrow date-wrap datepicker-wrap">
                                  <input type="text" className="form-control datepicker" name="StartDate" id="StartDate" placeholder="DD/MM/YYYY"  onChange={handleStartdateChange} /> <i className="fas fa-calendar-alt"></i> 
                          </div>
                              </div>
                            </div>

                             <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>End Date</label>
                              </div>
                              <div className="col-lg-7">
                                <div className="inrow date-wrap datepicker-wrap">
                                  <input type="text" className="form-control datepicker" name="EndDate" id="EndDate" placeholder="DD/MM/YYYY"  onChange={handleEnddateChange} /> <i className="fas fa-calendar-alt"></i> 
                          </div>
                              </div>
                            </div>

                            <div className="row form-group ">
                              <div className="col-lg-5">
                                <label>Duty</label>
                              </div>
                              <div className="col-lg-7">
                                <textarea className="form-control" placeholder="Duty" value={dutyValue} onChange={handleDutyChange}></textarea>
                              </div>
                            </div>
                            <div className="row form-group">
                              <div className="col-lg-5">
                                <label>Reason of Leaving  </label>
                              </div>
                              <div className="col-lg-7">
                                <textarea className="form-control" placeholder="Reason of Leaving" value={reasonValue} onChange={handleReasonChange}></textarea>
                              </div>
                            </div>
                            <div className="row form-group">
                              <div className="col-lg-5">
                                <label>Testimonial</label>
                              </div>
                              <div className="col-lg-7">
                                <textarea className="form-control" placeholder="Testimonial" value={testimonialValue} onChange={handleTestimonialChange}></textarea>
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
                              <th>Country</th>
                              <th>Start Date</th>
                              <th>End Date</th>
                              <th>Duty</th>
                              <th>Reason of Leaving</th>
                              <th>Testimonial</th>
                            </tr>
                          </thead>
                          <tbody>
                          {list.map((item, index) => (
                              <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.CountryName}</td>
                                <td>{item.StartDate}</td>
                                <td>{item.EndDate}</td>
                                <td>{item.Duty}</td>
                                <td>{item.ReasonofLeaving}</td>
                                <td>{item.Testimonial}</td>
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

export default HelperExperience;