import React from "react";
import "./Aboutsecound.css";
import Card from "react-bootstrap/Card";
import Imageone from "../assets/set-goal.png";
import Imagetwo from "../assets/track-food.png";
import Imagethree from "../assets/success.png";
import ReactDOM from "react-dom/client";
import Aboutsecoundimg from "../assets/aboutsecoundimg.jpg";

function Aboutsecound() {
  return (
    <div>
      <div className="container">
        <h1 className="Homecardheading mt-5 mb-5">
          How it Work?
        </h1>
        <div className="row py-5">
          <div className="col-md-4 col-sm-12">
            <Card style={{ marginBottom: "20px", height: "300px" }}>
              <Card.Body>
                <Card.Title
                  style={{ color: "#5a9f53", textDecoration: "uppercase" }}
                >
                  Set Your Goals
                </Card.Title>

                <Card.Text>
                  <Card.Img className="goalimg" variant="top" src={Imageone} />
                  <br /> <br />
                  Tell us what you want to achieve and receive personalized
                  goals.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4 col-sm-12">
            <Card style={{ marginBottom: "20px", height: "300px" }}>
              {/* <Card.Img variant="top" src={Imagetwo} /> */}

              <Card.Body>
                <Card.Title style={{ color: "#5a9f53" }}>
                  Track Your Food
                </Card.Title>

                <Card.Text>
                  <Card.Img className="goalimg" variant="top" src={Imagetwo} />
                  <br />
                  <br />
                  Learn about the foods you're eating and keep your calories
                  within your daily budget.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4 col-sm-12">
            <Card style={{ marginBottom: "20px", height: "300px" }}>
              <Card.Body>
                <Card.Title style={{ color: "#5a9f53" }}>
                  Lose Weight
                </Card.Title>
                <Card.Text>
                  <Card.Img
                    className="goalimg"
                    variant="top"
                    src={Imagethree}
                  />
                  <br /> <br />
                  Reach Your goals and continue to set new ones for a happier,
                  healthier you!
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutsecound;
