import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import QuickSearch from '../Quicksearch';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const HelperBio = () => {

    const { helpercode } = useParams();


    console.log(helpercode , "kkkkkkkkkkkkkkkkkkkkkkkkk")

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
            <figure><img src="images/banner-news.jpg" alt="JPB"/></figure>
            </div>
        </div>
        <div className="home-banner-bottom-bg inner-banner-shape">
                    <img src="images/inner-banner-shape.png" alt=""/>
                    </div> 
        </div>
        <div className="clear"></div>
    
        <section className="fullcontainer news-section1" data-aos="fade-up">
        <div className="float-icon s5 left-img-1 tp15 left5" data-aos="fade-right"><img src="images/left-img-1.png" alt="" className="responsive"/></div>
        <div className="float-icon s7 right-img-2 tp10 right5" data-aos="fade-left"><img src="images/right-img-1.png" alt="" className="responsive"/></div>
        <div className="float-icon s7 we-img-3 tp20 right30" data-aos="fade-left"><img src="images/we-img-3.png" alt="" className="responsive"/></div>
        <div className="float-icon we-img-1 tp25 left25" data-aos="fade-right"><img src="images/we-img-1.png" alt="" className="responsive"/></div>
        <div className="float-icon s6 we-img-4 tp45 right5" data-aos="fade-left"><img src="images/we-img-4.png" alt="" className="responsive"/></div>
        <div className="inner-container">
            <div className="container">
                <div className="pageTitle text-center title-border">
                <h2>Helper Bio</h2>
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
export default HelperBio;

