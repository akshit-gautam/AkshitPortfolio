import React from "react";
import "./style.scss";
import BlogCard from "./blog-card";
import Section from "../shared/section";

import Blog1 from "../../images/blogs/blog-thumb-1.jpg";
import Blog2 from "../../images/blogs/blog-thumb-2.jpg";
import Blog3 from "../../images/blogs/blog-thumb-3.jpg";

const Blogs = () => {
  return (
    <Section id="blogs" title="Blogs & Articles" background="dark">
      <div className="blogs-content-wrapper">
        <BlogCard
          user="Manju"
          date="23 feb 2023"
          image={Blog1}
          title="React"
          description="Whether you work on your own or with thousands of other developers, using React feels the same. It is designed to let you seamlessly combine components written by independent people, teams, and organizations.."
        />
        <BlogCard
          user="Akshit"
          date="12 march 2023"
          image={Blog2}
          title="Kabadivale"
          description="The Kabadivale project has achieved significant milestones and outcomes throughout its 
          journey. It has garnered recognition and success by being selected in various competitions 
          and hackathons, including Techigum and NITs Hackathon. These achievements highlight the 
          project's innovation, technical prowess, and potential for addressing real-world challenges.x"
        />
        <BlogCard
          user="Ishu"
          date=" 08 june 2023"
          image={Blog3}
          title="SEO VS SEM"
          description=" SEO focuses on optimizing a website for organic search traffic, while SEM includes both organic search and paid advertising to attract traffic."
        />
      </div>
    </Section>
  );
};

export default Blogs;
