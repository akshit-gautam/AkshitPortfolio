import React from "react";
import TechIcons from '../../images/tech-icons.png';
import Section from "../shared/section";
import CallToAction from "../shared/CallToAction";
import {AiOutlineCloudDownload} from "react-icons/ai";
import "./style.scss";

const Skills = () => {
  return <Section background="dark" id="skills">
    <div className="skills-content-wrapper">
        <div className="left-col">
            <img src={TechIcons} alt="JS,React,HTML,CSS" />
        </div>
        <div className="right-col">
            <h2>Skills</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim non nostrum illum quia inventore saepe velit quas architecto totam omnis expedita consectetur autem minima in earum, eos quisquam dicta dolorum dolore libero eligendi. Laudantium perspiciatis alias, quasi optio placeat autem?</p>
            <CallToAction text="Download Cv" icon={<AiOutlineCloudDownload/>}/>
        </div>
    </div>

  </Section>;
};

export default Skills;
