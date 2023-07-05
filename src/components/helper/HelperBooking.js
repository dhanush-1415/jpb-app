import React,{useState,useEffect} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import QuickSearch from '../Quicksearch';
import { Link } from 'react-router-dom';



const HelperBooking = () => {
  const [selectedLink, setSelectedLink] = useState('/');
  const [storedData, setstoreddata] = React.useState([]);
  const [ishelperloggedin, setishelperloggedin] = React.useState(false);
  const [jwtToken, setjwtToken] = useState('');
  const [bookingdata, setbookingdata] = useState({
    "OrgId": 1,
    "HelperCode": "",
    "PlacementFees": 0,
    "BasicSalary": 0,
    "OffDayDailyRate": 0,
    "HelperFee": 0,
    "PocketMoney": 0,
    "SelectOffDays": "",
    "NoOffDays": 0
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
      setbookingdata({
        ...bookingdata,
        "OrgId": 1,
        "HelperCode": storedData[0].HelperCode,
        "PlacementFees": storedData[0].PlacementFees,
        "BasicSalary": storedData[0].BasicSalary,
        "OffDayDailyRate": storedData[0].OffDayDailyRate,
        "HelperFee": storedData[0].HelperFee,
        "PocketMoney": storedData[0].PocketMoney,
        "SelectOffDays": storedData[0].SelectOffDays,
        "NoOffDays": storedData[0].NoOffDays
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

  const savebookingdataHandler = async (event) => {
    event.preventDefault();

    const regDetail = {
        "OrgId": 1,
        "HelperCode": bookingdata.HelperCode,
        "PlacementFees": bookingdata.PlacementFees,
        "BasicSalary": bookingdata.BasicSalary,
        "OffDayDailyRate": bookingdata.OffDayDailyRate,
        "HelperFee": bookingdata.HelperFee,
        "PocketMoney": bookingdata.PocketMoney,
        "SelectOffDays": bookingdata.SelectOffDays,
        "NoOffDays": bookingdata.NoOffDays
    };
    console.log(regDetail);

    const jwttoken = jwtToken;
    console.log(jwtToken, jwttoken);

    try {
      const response = await fetch('http://154.26.130.251:283/api/Helper/BookingRelatedInfo_Updation', {
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
          "HelperCode": bookingdata.HelperCode,
          "PlacementFees": bookingdata.PlacementFees,
          "BasicSalary": bookingdata.BasicSalary,
          "OffDayDailyRate": bookingdata.OffDayDailyRate,
          "HelperFee": bookingdata.HelperFee,
          "PocketMoney": bookingdata.PocketMoney,
          "SelectOffDays": bookingdata.SelectOffDays,
          "NoOffDays": bookingdata.NoOffDays
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
      
      <section className="fullcontainer dashboard helper-booking-details hbd-page" data-aos="fade-up">
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
              <form onSubmit={savebookingdataHandler}>
              <div className="dashboard-right-wrap hbd-wrap">
                    <div className="main-inner-box">
                      <div className="pageTitle title-fix sm">
                        <h2>Booking Related Info</h2>
                      </div>
                     
                <div className="row form-group align-items-center justify-content-between">
                              <div className="col-lg-auto ml-auto">
                                  {/* <div className="ehp-status row justify-content-between">
                                    <div className="col-lg-auto"><span>Status:</span></div>
                                    <div className="col-lg-auto">
                                    <div className="e-stts available">Available</div>
                                    </div>
                                  </div> */}
                              </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Placement Fees ($)</label>
                              </div>
                              <div className="col-lg-7">
                                <input type="text" className="form-control" placeholder="Placement Fees ($)" 
                                  value={bookingdata.PlacementFees}
                                  onChange={(e)=>{setbookingdata({...bookingdata,PlacementFees:e.target.value});}}
                                /> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Basic Salary ($)</label>
                              </div>
                              <div className="col-lg-7">
                                <input type="text" className="form-control" placeholder="Basic Salary ($)"
                                value={bookingdata.BasicSalary}
                                onChange={(e)=>{setbookingdata({...bookingdata,BasicSalary:e.target.value});}}
                                /> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Off Day Daily Rate ($)</label>
                              </div>
                              <div className="col-lg-7">
                                <input type="text" className="form-control" placeholder="Off Day Daily Rate ($)"
                                value={bookingdata.OffDayDailyRate}
                                onChange={(e)=>{setbookingdata({...bookingdata,OffDayDailyRate:e.target.value});}}
                                /> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Helper Fee ($)</label>
                              </div>
                              <div className="col-lg-7">
                                <input type="text" className="form-control" placeholder="Helper Fee ($)"
                                value={bookingdata.HelperFee}
                                onChange={(e)=>{setbookingdata({...bookingdata,HelperFee:e.target.value});}} 
                                /> </div>
                            </div>
                            
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Pocket Money ($)</label>
                              </div>
                              <div className="col-lg-7">
                                <input type="text" className="form-control" placeholder="Pocket Money ($)" 
                                value={bookingdata.PocketMoney}
                                onChange={(e)=>{setbookingdata({...bookingdata,PocketMoney:e.target.value});}}
                                /> </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Select Off Days</label>
                              </div>
                              <div className="col-lg-7">
                                 <select className='new-select'
                                 value={bookingdata.SelectOffDays}
                                 onChange={(e)=>{setbookingdata({...bookingdata,SelectOffDays:e.target.value});}}
                                 >
                                  <option value="Monthly">Monthly</option>
                                  <option value="Year">Year</option>
                                  <option value="Sunday">Sunday</option>
                                </select>
                              </div>
                            </div>
                            <div className="row form-group align-items-center">
                              <div className="col-lg-5">
                                <label>Enter Off Days</label>
                              </div>
                              <div className="col-lg-7">
                                <input type="text" className="form-control" placeholder="Enter Off Days" 
                                value={bookingdata.NoOffDays}
                                onChange={(e)=>{setbookingdata({...bookingdata,NoOffDays:e.target.value});}}
                                /> </div>
                            </div>
                           
                           {/* <div className="row mb15 sub-title-row form-group align-items-center">
                              <div className="col-lg-12">
                                <h6>Availability of FDW to be Interview by Prospective Employer</h6>
                              </div>
                            </div>
                            
                        <div className="row form-group select-group select-slot-group align-items-center">
                        <div className="col-lg-5">
                          <label>Avaialable Time (SGT)</label>
                        </div>
                        <div className="col-lg-7">
                          <select multiple className="selectpicker form-control" id="number-multiple" data-virtual-scroll="true">
                          <option>Morning Slot 1 : 09 AM to 09:30 AM</option>
                          <option>Morning Slot 1 : 09:30 AM to 10:00 AM</option>
                                  <option>Morning Slot 1 : 10: AM to 10:30 AM</option>
                                  <option>Morning Slot 2 : 10:30 AM to 11 AM</option>
                                  <option>Morning Slot 3 : 11 AM to 11:30 AM</option>
                                  <option>Morning Slot 4 : 11:30 AM to 12 PM</option>
                                  <option>Afternoon Slot 1 : 12 PM to 12:30 PM</option>
                                  <option>Afternoon Slot 2 : 12:30 PM to 1 PM</option>
                                  <option>Afternoon Slot 3 : 1 PM to 1:30 PM</option>
                                  <option>Afternoon Slot 4 : 1:30 PM to 2 PM</option>
                                  <option>Afternoon Slot 5 : 2 PM to 2:30 PM</option>
                                  <option>Afternoon Slot 6 : 2:30 PM to 3 PM</option>
                                  <option>Afternoon Slot 7 : 3 PM to 3:30 PM</option>
                                  <option>Afternoon Slot 8 : 3 :30 PM to 4 PM</option>
                                  <option>Afternoon Slot 9 : 4 PM to 4:30 PM</option>
                                  <option>Afternoon Slot 10 : 4:30 PM to 5 PM</option>
                                  <option>Afternoon Slot 11 : 5 PM to 5:30 PM</option>
                                  <option>Afternoon Slot 12 : 5:30 PM to 6 PM</option>
                                </select>
                        </div>
                      </div>

                      <div className="row form-group align-items-center">
                        <div className="col-lg-12">
                          <button name="add-more" className="add-more"><i className="fas fa-plus"></i> Add More</button>
                        </div>
                      </div>
                      <div className="row form-group">
                              <div className="col-lg-5">
                                <label>Other Remarks</label>
                              </div>
                              <div className="col-lg-7">
                                <textarea className="form-control" placeholder="Other Remarks"></textarea>
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

export default HelperBooking;