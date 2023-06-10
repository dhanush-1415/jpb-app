import React from 'react';
import Header from './Header';
import Footer from './Footer';
import QuickSearch from './Quicksearch';




const About = () => {
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
            <figure><img src="images/banner-about.jpg" alt="JPB"/></figure>
          </div>
        </div>
        <div className="home-banner-bottom-bg inner-banner-shape"> <img src="images/inner-banner-shape.png" alt=""/> </div>
      </div>
      <div className="clear"></div>
    
      <section className="fullcontainer about-section1" data-aos="fade-up">
        <div className="float-icon s5 left-img-1 tp35 left5" data-aos="fade-right"><img src="images/left-img-1.png" alt="" className="responsive"/></div>
        <div className="float-icon s7 right-img-2 tp20 right5" data-aos="fade-left"><img src="images/right-img-1.png" alt="" className="responsive"/></div>
        <div className="inner-container-sm">
          <div className="container container-950 text-center">
            <div className="pageTitle  title-border">
              <h2>About us</h2> </div>
            <p>Our company, JPB Group has more than 23 years of rich experience in providing household with well-trained workers for Singapore, Hongkong, Taiwan and Malaysia.</p>
            <p>Our agency also supplies labour for Malaysia in construction industry. To be the biggest worker’s supplier in this region, we have built huge network in Indonesia, Philippines to fulfil our customers’ requirements. Myanmar 10000-meter square training center which is fully equipped with training’s equipment.</p>
          </div>
        </div>
      </section>
     
      <section className="fullcontainer about-section2" data-aos="fade-up">
        <div className="float-icon s7 we-img-3 tp0 right25" data-aos="fade-left"><img src="images/we-img-3.png" alt="" className="responsive"/></div>
        <div className="inner-container">
          <div className="container">
            <div className="row">
              <div className="col-lg-6" data-aos="zoom-in">
                <div className="abt-photo text-center row-inner-lg leftpad pl50 lg rightpad pr20" data-tilt data-tilt-max="10" data-tilt-speed="600" data-tilt-perspective="800"> <img src="images/our-philosophy.png" alt=""/> </div>
              </div>
              <div className="col-lg-6 align-self-center" data-aos="fade-up">
                <div className="about-content rightpad xl">
                  <div className="pageTitle  title-border">
                    <h2>Our Philosophy</h2> </div>
                  <p className="size-26">The JPB Employment Pte Ltd is the industry leader in providing quality helper, Nannies, Construction workers, Professional, Nurse and other employment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="float-icon ms-right img-animation-holder"><img src="images/ms-right.png" alt="" /></div>
        <div className="float-icon ms-left"><img src="images/op-home.png" alt="" /></div>
      </section>
      
      <div className="fullcontainer about-section3 bg-img" style={{background: '#FFFBE7'}}>
        <div className="mst-shape"><img src="images/mst-bg-shape.png" alt="" /></div>
        <div className="inner-container pt0">
          <div className="container" data-aos="fade-up">
            <div className="row mst-holder mt50 gutters-10 grid-10  ">
              <div className="col-lg-4">
                <div className="icon-pod-box">
                  <div className="pageTitle">
                    <h2>Maids are specially trained in</h2></div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="icon-pod-box">
                  <div className="icon-pod-img"> <img src="images/mst-1.png" alt=""/> </div>
                  <h6>Aged Care</h6>
                  <p>Knowing that your loved ones is at the end of his/her life journey is emotionally straining for the family and the required logistic is complicated to set. Our maids will take care of them for you.</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="icon-pod-box">
                  <div className="icon-pod-img"> <img src="images/mst-2.png" alt=""/> </div>
                  <h6>Infant Care</h6>
                  <p>Our maids strive to meet and develop the physical, cognitive and psycho-social needs of the infant in a safe and conducive environment. A specialized training is given to our maids working with babies.</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="icon-pod-box">
                  <div className="icon-pod-img"> <img src="images/mst-3.png" alt=""/> </div>
                  <h6>Cooking</h6>
                  <p>Our maids undergo special cooking training to be confident in the kitchen so that they have the ability to prepare tasty and well-balanced meals for families. </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="icon-pod-box">
                  <div className="icon-pod-img"> <img src="images/mst-4.png" alt=""/> </div>
                  <h6>Worker</h6>
                  <p>BCA Certified and experience in
                    <br/> Construction work and etc</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="icon-pod-box">
                  <div className="icon-pod-img"> <img src="images/mst-2.png" alt=""/> </div>
                  <h6>Nurse</h6>
                  <p>Train in hospital and certified Nurses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-space"></div>
      </div>
     
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

export default About;