import React from "react";
import "./Homecards.css";
import AccordionItem from "./Accordionitem"; // Adjust the path based on your project structure

function Homecards() {
  return (
    <div className="container">
      <h1 className="Homecardheading">Frequently Asked Questions</h1>
      <AccordionItem
        title="Q. What are the benefits of Fit Master?"
        content="Ans. Fit Master provides expert help in achieving better health through personalized diet and fitness plans."
      />
      <AccordionItem
        title="Q. How do I get started with Fit Master?"
        content="Ans. You can start by signing up for our 1-month package for ₹1000 and experience the difference."
      />
      <AccordionItem
        title="Q. Can I customize my diet plan?"
        content="Ans. Yes, Fit Master offers customized diet plans tailored to your specific health goals and needs."
      />
      <AccordionItem
        title="Q. Can I customize my diet plan?"
        content="Ans. Yes, Fit Master offers customized diet plans tailored to your specific health goals and needs."
      />
      {/* <AccordionItem
        title="Q. Can I customize my diet plan?"
        content="Ans. Yes, Fit Master offers customized diet plans tailored to your specific health goals and needs."
      />
      <AccordionItem
        title="Q. Can I customize my diet plan?"
        content="Ans. Yes, Fit Master offers customized diet plans tailored to your specific health goals and needs."
      />
      <AccordionItem
        title="Q. Can I customize my diet plan?"
        content="Ans. Yes, Fit Master offers customized diet plans tailored to your specific health goals and needs."
      /> */}
      {/* Add more AccordionItem components for additional questions */}
    </div>

    // <div>
    //   <div className="container">
    //     <h1 className="Homecardheading mt-5 mb-5">Why Choose UG Diet Company?</h1>
    //     <div className="row py-5">
    //       <div className="col-md-3 col-sm-12">
    //         <Card style={{ marginBottom: "20px", height: "500px" }}>
    //           <Card.Img variant="top" src={Imageone} />
    //           <Card.Body>
    //             <Card.Title
    //               style={{ color: "#5a9f53", textDecoration: "uppercase" }}
    //             >
    //               Certified Nutritionists
    //             </Card.Title>
    //             <Card.Text>
    //               Personalized diet plans from our team of professionals
    //             </Card.Text>
    //           </Card.Body>
    //         </Card>
    //       </div>

    //       <div className="col-md-3 col-sm-12">
    //         <Card style={{ marginBottom: "20px", height: "500px" }}>
    //           <Card.Img variant="top" src={Imagetwo} />
    //           <Card.Body>
    //             <Card.Title style={{ color: "#5a9f53" }}>
    //               Tailored Plans
    //             </Card.Title>
    //             <Card.Text>
    //               Customized for weight loss, muscle gain, or health
    //               improvement.
    //             </Card.Text>
    //           </Card.Body>
    //         </Card>
    //       </div>

    //       <div className="col-md-3 col-sm-12">
    //         <Card style={{ marginBottom: "20px", height: "500px" }}>
    //           <Card.Img variant="top" src={Imagethree} />
    //           <Card.Body>
    //             <Card.Title style={{ color: "#5a9f53" }}>
    //               Continuous Support
    //             </Card.Title>
    //             <Card.Text>Ongoing motivation and guidance</Card.Text>
    //           </Card.Body>
    //         </Card>
    //       </div>

    //       <div className="col-md-3 col-sm-12">
    //         <Card style={{ marginBottom: "20px", height: "500px" }}>
    //           <Card.Img variant="top" src={Imagefour} />
    //           <Card.Body>
    //             <Card.Title style={{ color: "#5a9f53" }}>
    //               Satisfaction Guaranteed
    //             </Card.Title>
    //             <Card.Text>
    //               No results in 1 month? Get a full refund. 100% cash back if
    //               there are no changes.
    //             </Card.Text>
    //           </Card.Body>
    //         </Card>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Homecards;
