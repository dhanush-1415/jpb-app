import React from 'react';
import Header from './Header';
import Footer from './Footer';
import QuickSearch from './Quicksearch';
import { Link } from 'react-router-dom';



const Contact = () => {
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
            <figure><img src="images/banner-contact-us.jpg" alt="JPB"/></figure>
          </div>
        </div>
        <div className="home-banner-bottom-bg inner-banner-shape"> <img src="images/inner-banner-shape.png" alt=""/> </div>
      </div>
      <div className="clear"></div>
      
      <section className="fullcontainer contact-us-section1" data-aos="fade-up">
        <div className="float-icon s5 left-img-1 tp15 left5" data-aos="fade-right"><img src="images/left-img-1.png" alt="" className="responsive"/></div>
        <div className="float-icon s7 right-img-2 tp10 right5" data-aos="fade-left"><img src="images/right-img-1.png" alt="" className="responsive"/></div>
        <div className="float-icon s6 we-img-4 bt20 right5" data-aos="fade-left"><img src="images/we-img-4.png" alt="" className="responsive"/></div>
        <div className="inner-container">
          <div className="container">
            <div className="text-center mb40">
              <div className="pageTitle text-center title-border">
                <h2>Contact Us</h2> </div>
              <h5 className="pt20">Outlet Sales Operating hour:</h5>
              <p>11:00am till 8:00pm (Monday to Friday)
                <br/> 11:00am till 6:00pm (Saturday & Sunday)</p>
            </div>
            <div className="pageTitle text-center title-border">
              <h2>Contact to Our Salespersons</h2> </div>
            <div className="salesp-holder">
              <div className="row grid-15 align-items-center">
                <div className="col-lg-6 col-sm-6">
                  <div className="member-box">
                    <div className="row gutters-10 align-items-center">
                      <div className="col-auto">
                        <div className="member-photo">
                          <div className="img-holder img-cover">
                            <figure><img src="images/member-1.jpg" className="responsive" alt=""/></figure>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-7">
                        <div className="member-info">
                          <div className="member-title">Ah Nyi Jaw Zar Mee</div>
                          <ul className="member-listing size-14">
                            <li><span>RegNo:</span>
                              <p>R1443125</p>
                            </li>
                            <li><span>Outlet:</span>
                              <p>Buki Timah Shopping Center</p>
                            </li>
                            <li><span>Email:</span>
                              <p><a href="mailto:ahnyijpb@yahoo.com.sg">ahnyijpb@yahoo.com.sg </a></p>
                            </li>
                            <li><span>WhatsApp:</span>
                              <p>+65 64670039</p>
                            </li>
                          </ul>
                          <div className="contact-agent size-14"><a href="/">Contact Agent</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="member-box">
                    <div className="row gutters-10 align-items-center">
                      <div className="col-auto">
                        <div className="member-photo">
                          <div className="img-holder img-cover">
                            <figure><img src="images/member-2.jpg" className="responsive" alt=""/></figure>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-7">
                        <div className="member-info">
                          <div className="member-title">Shi Xiaoqing</div>
                          <ul className="member-listing size-14">
                            <li><span>RegNo:</span>
                              <p>R1107443</p>
                            </li>
                            <li><span>Outlet:</span>
                              <p>Katong Shopping Center</p>
                            </li>
                            <li><span>Email:</span>
                              <p><a href="mailto:helenjpb@yahoo.com.sg ">helenjpb@yahoo.com.sg </a></p>
                            </li>
                            <li><span>WhatsApp:</span>
                              <p>+65 87416125</p>
                            </li>
                          </ul>
                          <div className="contact-agent size-14"><a href="/">Contact Agent</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="member-box">
                    <div className="row gutters-10 align-items-center">
                      <div className="col-auto">
                        <div className="member-photo">
                          <div className="img-holder img-cover">
                            <figure><img src="images/member-1.jpg" className="responsive" alt=""/></figure>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-7">
                        <div className="member-info">
                          <div className="member-title">Yap Jenelyn Padilla </div>
                          <ul className="member-listing size-14">
                            <li><span>RegNo:</span>
                              <p>R1105778</p>
                            </li>
                            <li><span>Outlet:</span>
                              <p>KATONG SHOPPING CENTER</p>
                            </li>
                            <li><span>Email:</span>
                              <p><a href="mailto:jenny_jpbgroup@yahoo.com.sg">jenny_jpbgroup@yahoo.com.sg</a></p>
                            </li>
                            <li><span>WhatsApp:</span>
                              <p>+65 68440589</p>
                            </li>
                          </ul>
                          <div className="contact-agent size-14"><a href="/">Contact Agent</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="member-box">
                    <div className="row gutters-10 align-items-center">
                      <div className="col-auto">
                        <div className="member-photo">
                          <div className="img-holder img-cover">
                            <figure><img src="images/member-2.jpg" className="responsive" alt=""/></figure>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-7">
                        <div className="member-info">
                          <div className="member-title">Yupar Lwin</div>
                          <ul className="member-listing size-14">
                            <li><span>RegNo:</span>
                              <p>R1105823</p>
                            </li>
                            <li><span>Outlet:</span>
                              <p>EUNOS CRESCENT</p>
                            </li>
                            <li><span>Email:</span>
                              <p><a href="mailto:jpb.yupar0116@gmail.com">jpb.yupar0116@gmail.com</a></p>
                            </li>
                            <li><span>WhatsApp:</span>
                              <p>+65 62422777</p>
                            </li>
                          </ul>
                          <div className="contact-agent size-14"><a href="/">Contact Agent</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row grid-5 mt50 align-items-center justify-content-center">
              <div className="col-auto pagination-container">
                <ul className="pagination">
                  <li className="page-item"><a className="page-link prev" href="/"><i className="fas fa-arrow-circle-left"></i></a></li>
                  <li className="page-item active"><a className="page-link" href="/">1</a></li>
                  <li className="page-item"><a className="page-link" href="/">2</a></li>
                  <li className="page-item"><a className="page-link" href="/">3</a></li>
                  <li className="page-item"><a className="page-link" href="/">4</a></li>
                  <li className="page-item"><span>...</span></li>
                  <li className="page-item"><a className="page-link" href="/">5</a></li>
                  <li className="page-item"><a className="page-link next" href="/"><i className="fas fa-arrow-circle-right"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
     
      <section className="fullcontainer contact-us-section2" data-aos="fade-up">
        <div className="inner-container">
          <div className="container">
            <div className="pageTitle text-center title-border">
              <h2>Our Locations</h2> </div>
            <div className="location-holder pt10">
              <div className="row grid-15 gutters-15 align-items-center">
                <div className="col-lg-6">
                  <div className="location-box">
                    <div className="location-map">
                      <iframe title="First" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7851944245276!2d103.89898451533118!3d1.3039083620831309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da186dc00972b9%3A0x149c32224f0cc948!2sKatong%20Shopping%20Centre!5e0!3m2!1sen!2sin!4v1650780069155!5m2!1sen!2sin" width="600" height="300" style={{border:'0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="location-info">
                      <h6>Katong Shopping Centers</h6>
                      <ul className="contact-list">
                        <li><i className="fas fa-map-marker-alt"></i><a href="/">865 Mountbatten Road #1-16, Singapore 437844</a></li>
                        <li><i className="fas fa-phone"></i><a href="/">6844 0589</a></li>
                        <li><i className="fas fa-fax"></i><a href="/">6844 4695</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="location-box">
                    <div className="location-map">
                      <iframe title="Second" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.661832187837!2d103.88588281533096!3d1.3795649618621266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da164168267bbf%3A0xae5a836f4f82f1b0!2sHougang%20Green%20Shopping%20Mall!5e0!3m2!1sen!2sin!4v1650783437214!5m2!1sen!2sin" width="600" height="300" style={{border:'0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="location-info">
                      <h6>Hougang Green Shopping Mall</h6>
                      <ul className="contact-list">
                        <li><i className="fas fa-map-marker-alt"></i><a href="/">Blk 21 Hougang Street 51 #2-23, Singapore 538719</a></li>
                        <li><i className="fas fa-phone"></i><a href="/">6386 5339</a></li>
                        <li><i className="fas fa-fax"></i><a href="/">6386 2337</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="location-box">
                    <div className="location-map">
                      <iframe title="Third" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.723050327461!2d103.77384961533096!3d1.3425535119714052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da11d085b7bbbf%3A0xa1c1d2dd91fe299d!2sBukit%20Timah%20Shopping%20Centre!5e0!3m2!1sen!2sin!4v1650783512101!5m2!1sen!2sin" width="600" height="300" style={{border:'0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="location-info">
                      <h6>Bukit Timah Shopping Center</h6>
                      <ul className="contact-list">
                        <li><i className="fas fa-map-marker-alt"></i><a href="/">1A Eunos Crescent #01-2467, Singapore 401001</a></li>
                        <li><i className="fas fa-phone"></i><a href="/">6467 0039</a></li>
                        <li><i className="fas fa-fax"></i><a href="/">6469 8068</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="location-box">
                    <div className="location-map">
                      <iframe title="Fourth" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7574501520194!2d103.9005493153311!3d1.3213011620331498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da181b54bc3da5%3A0x8fe03839a33a800b!2s1A%20Eunos%20Cres%2C%20%2301%202467%2C%20Singapore%20401001!5e0!3m2!1sen!2sin!4v1650783539996!5m2!1sen!2sin" width="600" height="300" style={{border:'0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="location-info">
                      <h6>Eunos Crescent</h6>
                      <ul className="contact-list">
                        <li><i className="fas fa-map-marker-alt"></i><a href="/">1A Eunos Crescent #01-2467, Singapore 401001</a></li>
                        <li><i className="fas fa-phone"></i><a href="/">6747 1888</a></li>
                        <li><i className="fas fa-fax"></i><a href="/">6767 1648</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-space"></div>
      </section>
      
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
export default Contact;