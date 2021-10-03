import React from "react";
import web from '../../images/about.svg'


export const About = () => {
  return (

    <div>
      <section id="about" className="about">
        <div className="container my-4">
          <hr className="hr" />
          <div className="row justify-content-between">
            <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
              <img src={web} className="img-fluid" alt="" data-aos="zoom-in" />
            </div>
            <div className="col-lg-6 pt-5 pt-lg-0">
              <h3 data-aos="fade-up">Offshore IT Company In India</h3>
              <p data-aos="fade-up" data-aos-delay="100">
                Increased efficiency and viable benefits (to your business and end users) are two assured outcomes which you are going to enjoy with Intlum’s unique and creative web solutions. We take pride ourselves in developing websites with fluctuating complexities to some of the most internet-savvy and difficult clients across the globe.
            </p>
              <div className="row">
                <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                  <i className="fa fa-home"></i>
                  <h4>Kolkata Web Design Company</h4>
                  <p>We specialize in web design, web development, eCommerce development, web application development, software development on cloud, mobile app development, SEO services, digital marketing and much more. Our team is full of talented individuals from different fields such as web consultation, creative design, content writing, programming, and digital marketing. Our team knows how to bring results and that’s why we have been the first choice of our clients when it comes to web design company</p>
                </div>
                <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                  <i className="fa fa-home"></i>
                  <h4>Best Web Design Company in Kolkata</h4>
                  <p>The web solutions provided by <b>WebCore</b> are aesthetically shaped, feature-rich, functional, and immensely scalable which let those fit to the changes of your business and future improvements. We deal with each client individually and that doesn’t let us offer any fixed price. While Intlum is one of the most recognized web development companies in India at the moment, we had a long journey to reach this glory.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
export default About