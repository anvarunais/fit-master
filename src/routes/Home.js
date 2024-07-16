import Navbar from "../Components/Navbar";
import Allhomeimages from "../Components/Allhomeimages";
import HomeImg from "../assets/home-min.jpg";
import Footers from "../Components/Footers";
import Homesecound from "../Components/Homesecound";
import Homecards from "../Components/Homecards";
import Experience from "../Components/Experience";
import Offers from "../Components/Offers";
import Servicedestination from "../Components/Servicedestination";
import Homepage from "../Components/Homepage";

function Home() {
  return (
    <>
      <Navbar />
      <Homepage />

      {/* <div className="container">
        <div className="row py-5">
          <div className="col-md-8 col-sm-12 column">
            <h2>Welcome to</h2>
            <h1>UG DIET</h1>
            <p className="paragraph-text">
              Achieve your health goals with UG Diet Company.
              <br /> Our expert advice, personalized diet plans, and ongoing
              support ensure you get the results you desire.
            </p>
            <a
              href="https://wa.me/917025040484?text= Hello I Saw UG DIET Website, i'm  interested to join with you!"
              target="_blank"
            >
              <button className="homeimgbtn">more info</button>
            </a>
          </div>
          <div className="col-md-4 col-sm-12 column">
            <img src={HomeImg} alt="/" className="Homesecoundimg" />
          </div>
        </div>
      </div> */}

      {/* <div className="home-text">
          <h2>Welcome to</h2>
          <h1>UG DIET</h1>
          <p className="paragraph-text">
            Achieve your health goals with UG Diet Company.
            <br /> Our expert advice, personalized diet plans, and ongoing
            support ensure you get the results you desire.
          </p>
          <a
            href="https://wa.me/917025040484?text= Hello I Saw UG DIET Website, i'm  interested to join with you!"
            target="_blank"
          >
            <button className="homeimgbtn">more info</button>
          </a>
        </div> */}
      {/* </div> */}
      {/* <Allhomeimages
        cName="hero"
        mainheading="UG Diet"
        welcomeheading="Welcome to "
        welcomeparagraph="Achieve your health goals with UG Diet Company. Our expert advice, personalized diet plans, and ongoing support ensure you get the results you desire."
        moreinfo="More info"
        HeroImg={HomeImg}
      /> */}

      <Homesecound />
      <Homecards />
      <Servicedestination />
      {/* <Offers /> */}
      <Experience />
      <Footers />
    </>
  );
}

export default Home;
