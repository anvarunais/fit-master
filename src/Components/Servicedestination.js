import "./Servicedestination.css";
import React from "react";
import Card from "react-bootstrap/Card";
import Imageone from "../assets/diet-1.png";
import Imagetwo from "../assets/diet-2.png";
import Imagethree from "../assets/diet-3.png";
import Imagefour from "../assets/diet-4.png";
import Imagefive from "../assets/diet-5.png";
import Imagesix from "../assets/diet-6.png";

const Servicedestination = () => {
  return (
    <>
      <div>
        <div className="container servicecontainer1 mb-5">
          <h1 className="servicesheading mb-5 text-center">
            Weight management
          </h1>
          <div className="row justify-content-center">
            <div className="col-md-4 col-sm-6 text-center">
              <img
                className="serviceimg"
                src={Imagefive}
                alt="Gluten-Free Diets"
              />
              <p className="paragraphheading">
                <b>CERTIFIED TRAINERS</b>
              </p>
            </div>

            <div className="col-md-4 col-sm-6 text-center">
              <img
                className="serviceimg"
                src={Imagetwo}
                alt="Gluten-Free Diets"
              />
              <p className="paragraphheading">
                <b>ONGOING SUPPORT</b>
              </p>
            </div>

            <div className="col-md-4 col-sm-6 text-center">
              <img
                className="serviceimg"
                src={Imagefive}
                alt="Gluten-Free Diets"
              />
              <p className="paragraphheading">
                <b>SATISFACTION GUARANTEED</b>
              </p>
            </div>
          </div>

          <div className="row justify-content-center mt-3">
            <div className="col-md-4 col-sm-6 text-center">
              <img
                className="serviceimg"
                src={Imagefive}
                alt="Gluten-Free Diets"
              />
              <p className="paragraphheading">
                <b>CUSTOMIZED DIET PLANS</b>
              </p>
            </div>

            <div className="col-md-4 col-sm-6 text-center">
              <img
                className="serviceimg"
                src={Imagefive}
                alt="Gluten-Free Diets"
              />
              <p className="paragraphheading">
                <b>CERTIFIED NUTRITIONISTS</b>
              </p>
            </div>

            <div className="col-md-4 col-sm-6 text-center">
              <img
                className="serviceimg"
                src={Imagefive}
                alt="Gluten-Free Diets"
              />
              <p className="paragraphheading">
                <b>GLUTEN-FREE DIETS</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Servicedestination;
