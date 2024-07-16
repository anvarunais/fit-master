// import Homepage from "../Components/Homepage";
import Navbar from "../Components/Navbar";
import Footers from "../Components/Footers";
import Contactdestination from "../Components/Contactdestination";
// import Contacthome from "../Components/Contacthome";
import Allhomeimages from "../Components/Allhomeimages";
import ContactImg from "../assets/contact-us-min.jpg";
import Wtspimg from "../assets/whatsapp-logo.png";


function Contact() {
  return (
    <>
      <Navbar />
      <div>
        <img
          className="home-img"
          alt=""
          src={ContactImg}
        />
        <div className="home-text">
          {/* <h2>Welcome to</h2> */}
          <h1>CONTACT</h1>
          <p className="paragraph-text">
            Contact us today to learn more and sign up for our 1-month package.
          </p>
          {/* <a
            href="https://wa.me/917025040484?text= Hello I Saw UG DIET Website, i'm  interested to join with you!"
            target="_blank"
          >
            <button className="homeimgbtn">more info</button>
          </a> */}
        </div>

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
      </div>
      {/* <Allhomeimages
        cName="contact"
        HeroImg={ContactImg}
        mainheading="Contact"
        moreinfo="More info"
      /> */}
      {/* <Contacthome /> */}
      <Contactdestination />
      {/* <Homepage/> */}
      <Footers />
    </>
  );
}

export default Contact;
