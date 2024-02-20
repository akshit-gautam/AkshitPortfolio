import React from "react";
import Section from "../shared/section";
import {
  FaYoutube,
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
  FaInstagram,
} from "react-icons/fa";
import SocialIcon from "./social-icons";
import "./style.scss";
import { scrollToSection } from "../utils/helpers";


const Footer = () => {
  return (
    <Section className="footer" background="light">
      <div className="footer-content-wrapper">
        <div className="footer-logo">
        Akshit Gautam
        </div>
        <ul className="footer-menu-items">
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </li>
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("portfolio")}
          >
            portfolio
          </li>
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("blogs")}
          >
            Blog & Articles
          </li>
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("contact")}
          >
            Contact me
          </li>
        </ul>
        <div className="social-icons">
          <SocialIcon color="#FF0000" icon={<FaYoutube />} link="https://www.youtube.com/" />
          <SocialIcon color="#0D2636" icon={<FaGithub />} link="https://github.com/akshit-gautam" />
          <SocialIcon color="#f2740d" icon={<FaStackOverflow />} link="https://stackoverflow.com/" />
          <SocialIcon color="#E84C88" icon={<FaInstagram />} link="https://www.instagram.com/akshit_is/" />
          <SocialIcon color="#0A66C2" icon={<FaLinkedin />} link="https://www.linkedin.com/in/akshit-gautam/" />
        </div>
        <div className="bottom-bar">
          <div className="copyright-text">
            Copyright 2023 Akshit Gautam | All Rights Reserved
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
