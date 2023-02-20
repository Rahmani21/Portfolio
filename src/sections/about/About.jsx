import React from "react";
import "./about.css";
import AboutImage from "../../assets/bio2.jpg";
import CV from "../../assets/MyResume.pdf"
import {AiOutlineDownload} from "react-icons/ai"
import Card from "../../components/Card";
import data from "./data";

const About = () => {
  return (
    <section className="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
          {
            data.map(item => (
              <Card key={item.id} className = "about__card">
              <span className="about__card-icon">{item.icon}</span>
              <h5>{item.title}</h5>
              <small>{item.desc}</small>
              </Card>
            ))
          }
          </div>
          <p>
            Building projects my clients love have always been passion. Being in
            the web development industry for over 3 years and serving more than
            70 happy clients worldwide. I'm always motivated to do more!
          </p>
          <p>
            Hi, my name is <strong>Abdur Rahman</strong> from Kabul Afghanistan.
            I'm a full-stack web developer with a Bachelor degree in Computer
            Science. My top priority is to get your business online the right
            way, giving you industry-standard design and all the functionality
            you need to operate smoothly online. Get in touch today with the
            details of your project let's get started! Check out my resume
            below!
          </p>
            <a href={CV} className="btn primary">Download CV <AiOutlineDownload /> </a>
        </div>
      </div>
    </section>
  );
};

export default About;
