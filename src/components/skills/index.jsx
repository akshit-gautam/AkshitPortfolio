import React from "react";
import TechIcons from "../../images/tech-icons.png";
import Section from "../shared/section";
import CallToAction from "../shared/CallToAction";
import { AiOutlineCloudDownload } from "react-icons/ai";
import "./style.scss";

const Skills = () => {
  return (
    <Section background="dark" id="skills">
      <div className="skills-content-wrapper">
        <div className="left-col">
          <img src={TechIcons} alt="JS,React,HTML,CSS" />
        </div>
        <div className="right-col">
          <h2>Skills</h2>
          <p>
            I possess a high level of proficiency in web development, design,
            and cloud computing. My expertise lies in creating websites
            utilizing React.js, JavaScript, HTML, CSS/SCSS, resulting in
            responsive designs. Additionally, I excel in crafting website
            designs using Figma, employing UI/UX principles to create multiple
            pages effectively. My AWS certification underscores my proficiency
            in cloud engineering, complemented by certifications in each of my
            skill areas. Furthermore, I have a solid understanding of Python
            programming, C/C++, and SQL for database management.
          </p>
          <CallToAction text="Download Cv" icon={<AiOutlineCloudDownload />} />
        </div>
      </div>
    </Section>
  );
};

export default Skills;
