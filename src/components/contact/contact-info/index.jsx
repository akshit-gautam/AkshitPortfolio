import React from "react";
import "./style.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div className="contact-info-box">
      <h4>
      Feel free to ask any questions you might have regarding freelance writing or content marketing! I'm here to provide expert assistance and guidance.
      </h4>
      <div className="contact-option">
        <FaPhoneAlt/>
        <span className="text">+91 7827817592</span>
      </div>
      <div className="contact-option">
        <MdEmail/>
        <span className="text">akshitgautam2002@gmail.com</span>
      </div>
    </div>
  );
};

export default ContactInfo;
