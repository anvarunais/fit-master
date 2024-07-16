import "./Homepage.css";
import React from "react";
import HomeImg from "../assets/fitmaster-logo.png";
import Wtspimg from "../assets/whatsapp-logo.png";


function Homepage() {
  return (
    <>
      <section id="demos-home" class="main-carousel-one">
        <div className="mt-5"></div>
        <div class="row">
          <div class="large-12 columns">
            <div
              class="owl-carousel owl-theme owl-loaded owl-drag"
              id="my-carousel-one"
            >
              <div class="owl-stage-outer">
                <div class="owl-stage">
                  <div class="owl-item active">
                    <div class="item">
                      <div class="row">
                        <div className="col-lg-6 col-md-6 col-sm-12  order-2 order-md-1 col-xs-12 column">
                          <h1 className="homeheading2 mt-3">FiT Master</h1>
                          <h2 className="homeheading1 mt-3">
                            Get Healthy with Expert Help
                          </h2>
                          <p className="homeparagraph mt-3">
                            Start for better health with our 1-month package for
                            just <span className="homespann">₹1000.</span>{" "}
                            Experience the FIT MASTER difference now! Experience
                            the <span className="homespann">Fit Master </span>
                            difference now!
                          </p>
                          <div className="mt-3 mb-3">
                            <a
                              href="https://wa.me/917025040484?text= Hi! I was browsing the website blog and wanted to know more about FIT MASTER"
                              target="_blank"
                            >
                              <button className="homeimgbtn1">CHAT NOW</button>
                            </a>
                          </div>
                        </div>

                        <div class="col-lg-6 col-md-6   order-1 order-md-2 col-xs-12 ">
                          <div class="bg_img">
                            <img
                              class="homeimages entered lazyloaded "
                              src={HomeImg}
                              alt="Coach Image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="chat_withus chat_open">
        <span class="sc-dkrFOg OAhur">
          <h2 className="fitmasterhead">FiT Master</h2>
          
        </span>
        <a
          id="hero_cta_tablet_desktop-hero-cta-1"
          class="sc-iveFHk dlqPeV sc-gikAfH sc-jIRcFI cQbzwU kHCrWL"
          href="https://wa.me/917025040484?text= Hi! I was browsing the website blog and wanted to know more about FIT MASTER"
          target="_blank"
        >
          <div height="16" width="16" class="sc-iJnaPW DueOT">
            <picture class="sc-hLBbgP jbaWzu">
              <img
                class="sc-eDvSVe hzeEhC sc-cwSeag jYXUKf entered lazyloaded"
                src={Wtspimg}
                alt="whatsapp"
                width="25"
                height="25"
                data-lazy-src="https://healthifyme.imgix.net/static/images/home_website/landing/icons/whatsapp-black.png"
                data-ll-status="loaded"
              />
              <noscript>
                <img
                  class="sc-eDvSVe hzeEhC sc-cwSeag jYXUKf"
                  src={Wtspimg}
                  alt="whatsapp"
                  width="16"
                  height="16"
                />
              </noscript>
            </picture>
          </div>
          <span class="sc-dkrFOg gSBAsl">Chat With Us</span>
        </a>
      </div>

      {/* <div className="container">
        <div className="mt-5">
          <div className="row py-5">
            <div className="col-lg-6 col-md-6 col-sm-12  order-2 order-md-1 col-xs-12 column">
              <h1 className="homeheading"> GET HEALTHY WITH UG DIET</h1>
              <p className="homeparagraph">
                Start your journey towards better health with our 1-month
                package for just ₹1000.
                <br />
                Experience the UG Diet difference now!
              </p>
              <div className="btndiv mt-3">
                <a
                  href="https://wa.me/917025040484?text= Hello I Saw UG DIET Website, i'm  interested to join with you!"
                  target="_blank"
                >
                  <button className="homeimgbtn">CHAT NOW</button>
                </a>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <img src={HomeImg} alt="/" className="Homesecoundimg" />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Homepage;
