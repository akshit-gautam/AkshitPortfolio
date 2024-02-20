import React from "react";
import './style.scss';
import hand from '../../../images/hand.png';
import CallToAction from "../../shared/CallToAction";
import girl from '../../../images/girl.png';
import {BsAwardFill} from 'react-icons/bs';
import {FaUser} from 'react-icons/fa';
import { scrollToSection } from "../../utils/helpers";

const IntroContent = () => {
  return (
    <div className="intro-content">
      <div className="layout">
        <div className="left-col">
          <h1 className="title">
            <span className="small-text">
              <span className="text">Hello</span>
              <span className="icon">
                <img src={hand}/>
              </span>
              <span className="text">, I Am</span>
            </span>
            <span className="big-text">Akshit Gautam</span>
          </h1>
          <p>
            My objective is , seeking a challenging position as a fresher Engineer , where I can utlize my technicals skills and Knowlege to contribute to the growth and development of the organization. I am eager to learn new technologies ,work in a collaboration environment and apply to achieve optimal results.

          </p>
          <CallToAction text="Contact Me" action={()=> scrollToSection("contact")}/>
        </div>
        <div className="right-col">
            <img src={girl} alt="Ak" />
            <div className="highlights horizontal">
                <div className="icon">
                  <BsAwardFill />
                </div>
                <div className="text">Software Developer</div>
            </div>
            <div className="highlights vertical">
                <div className="icon">
                    <FaUser />
                </div>
                <div className="text">
                    {/* <span>4k+</span> */}<br></br>
                    Cloud Enthusiast
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default IntroContent;
