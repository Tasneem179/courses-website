import { Container, Button } from "reactstrap";
import lines from "../assests/images/Abstract Line.png";
import vector from "../assests/images/Vector 449 (Stroke).png";
import zapier from "../assests/images/zapier.png";
import spotify from "../assests/images/spotify.png";
import zoom from "../assests/images/zoom.png";
import amazom from "../assests/images/amazon.png";
import adobe from "../assests/images/adobe.png";
import notion from "../assests/images/notion.png";
import netflix from "../assests/images/netflix.png";
import thumbnail from "../assests/images/thumbnail.png";
import video_course from "../assests/images/video_course.mp4";

import "./Hero.css";
const Hero = () => {
  return (
    <Container className=" text-center mx-auto">
      <section id="home" className="mt-5">
        <div className="position-relative mx-auto fit  ">
          <img
            src={lines}
            alt="lines"
            className="position-absolute top-0 start-0 translate-middle"
            width="25px"
            height="25px"
          />
          <div className="rounded-xl   p-3 mx-auto  d-flex align-items-center fit box ">
            <div className="rounded   me-2 p-2 px-auto fit boxOrange ">
              <img src={vector} alt="" />
            </div>
            <h3 className="protext-bold ">
              <span className="unlock">Unlock </span>
              <span className="creative">Your Creative Potential</span>
            </h3>
          </div>
        </div>
        <h4 className="mt-5 protext  ">
          with Online Design and Development Courses.
        </h4>
        <h6 className="mt-2 protext  ">
          Learn from Industry Experts and Enhance Your Skills.
        </h6>
        <div className="d-flex mt-5 justify-content-center align-items-center ">
          <Button
            className="nav-link  px-md-5  px-3  text-center text-white Loginbtn me-2 py-2 "
            href="#"
          >
            Explore Courses{" "}
          </Button>
          <Button
            className="nav-link   bg-white protext px-md-5  px-3  text-center py-2  "
            href="#"
          >
            View Pricing
          </Button>
        </div>

        <div className="bg-white rounded-xl  mt-5 d-flex p-5 justify-content-center align-items-center">
          <div className="border-end mx-auto px-auto w-100">
            <img src={zapier} alt="zapier" />
          </div>
          <div className="border-end mx-auto px-auto w-100">
            <img src={spotify} alt="spotify" />
          </div>
          <div className=" mx-auto px-auto w-100 border0Mob">
            <img src={zoom} alt="zoom" />
          </div>
          <div className="border-end mx-auto px-auto w-100 d-none d-md-block">
            <img src={amazom} alt="amazon" />
          </div>
          <div className="border-end mx-auto px-auto w-100 d-none d-md-block">
            <img src={adobe} alt="adobe" />
          </div>
          <div className="border-end mx-auto px-auto w-100 d-none d-md-block">
            <img src={notion} alt="notion" />
          </div>
          <div className=" mx-auto px-auto w-100 d-none d-md-block">
            <img src={netflix} alt="netflix" />
          </div>
        </div>

        <div className="w-100 mt-5">
                       

                       <video className="w-100 rounded-xl" controls poster={thumbnail}>
                           <source src={video_course} type="video/mp4"/>
                       </video>
                   </div>
      </section>
    </Container>
  );
};

export default Hero;
