import "./Footers.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import WtspIcon from "../assets/whatsapp-logo.png";
import Footer_logo from "../assets/fitmaster-logo.png";
import InstaIcon from "../assets/Instagram-logo.png";
import FacebookIcon from "../assets/facebook-logo.png";

const Footers = () => {
  return (
    <div className="footerstyle">
      <div className="container">
        <div className="row py-5 ">
          <div className="col-md-4 col-sm-12">
            <img src={Footer_logo} alt="" className="footerlogo" />
          </div>
          <div className="col-md-4 col-sm-12 mt-5">
            <h4>CONTACT</h4>
            <FaPhoneAlt className="me-2" />
            7025040484
            <br />
            {/* <FaEnvelope className="me-2" />
            fitmaster@gmail.com
            <br /> */}
          </div>
          <div className="col-md-4 col-sm-12 mt-5">
            <h4 className="followus">FOLLOW US</h4>
            <p>
              <a href="https://wa.me/917025040484?text= Hi! I was browsing the website blog and wanted to know more about FIT MASTER" target="_blank">
              <img className="followicon" src={WtspIcon} />
              </a>
              <a
                href="https://www.instagram.com/fitmaster__?igsh=ZjcxeXB4aG5vNnV0"
                target="_blank"
              >
                <img className="followicon" src={InstaIcon} />
              </a>
              <a href="/">
                <img className="followicon" src={FacebookIcon} />
              </a>
            </p>
          </div>
        </div>
        {/* <p className="copyrightstyle pb-3">@Copyright Code with Convo</p> */}
      </div>
    </div>
  );
};
export default Footers;
