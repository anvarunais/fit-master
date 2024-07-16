import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Imagefive from "../assets/drink-img.png";
import "./Homesecound.css";

function Homesecound() {
  return (
    <div className="bgcolor d-flex align-items-center justify-content-center vh-100">
      <div className="container">
        <div className="row py-5">
          <div className="col-md-6 col-sm-12">
            <img src={Imagefive} alt="/" className="Homesecoundimg" />
          </div>
          <div className="col-md-6 col-sm-12 mt-5">
            <h4 className="homesecoundheading">
              Start Your Healthy journey Today!
            </h4>
            <p className="homesecoundparagraph mt-5">
              Your health is our priority. Talk to one of our experts and get
              the best plan.
              <br />
              Chat with us on WhatAapp for customized diet plans and valuable
              health .
            </p>

            <div>
              <a
                href="https://wa.me/917025040484?text= Hi! I was browsing the website blog and wanted to know more about FIT MASTER"
                target="_blank"
              >
                <button className="homeimgbtn2">Chat Now</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homesecound;
