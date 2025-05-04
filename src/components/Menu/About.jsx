import React from "react";
import Card from "./litComponents/Card";
import { BsGithub, BsTwitterX } from "react-icons/bs";
import { CgDribbble } from "react-icons/cg";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";

const About = () => {
  return (
    <>
      <div className="head">
        <div className="title" data-aos="fade-left">
          <img
            src="https://html.vikinglab.agency/ovro/assets/img/icons/sublogo1.svg"
            alt="Small-Logo"
          />
          <span>About Me</span>
        </div>

        <div className="subtitle h1" data-aos="fade-left">
          Crafting Seamless{" "}
          <p>
            User <span>Experiences</span>
          </p>
        </div>

        <Card
          title={"Amir Asadli"}
          text={`Hi, I'm Amir Asadli, a passionate Front-End Developer focused on building clean, responsive, and user-friendly web interfaces. I specialize in React, JavaScript, and CSS to create modern, high-performing websites. Currently, I’m expanding my skills into Back-End development, working with databases and APIs to become a more well-rounded full-stack developer. My goal is to build seamless, end-to-end digital experiences that not only look great but also work flawlessly behind the scenes.`}
        />

        <div className="cards p-3">
          <div className="row mt-4 d-flex flex-sm-row justify-content-center flex-column gap-4">
            <Card
              img={
                "https://html.vikinglab.agency/ovro/assets/img/icons/home2.svg"
              }
              title={"Frontend Development"}
              text={`Building dynamic, responsive websites using modern frameworks like React, and ensuring cross-browser compatibility.`}
            />

            <Card
              img={
                "https://html.vikinglab.agency/ovro/assets/img/icons/home3.svg"
              }
              title={"UI Implementation"}
              text={`Translating Figma and design mockups into pixel-perfect, functional interfaces with clean code.`}
            />
          </div>

          <div className="row mt-4 d-flex flex-sm-row justify-content-center flex-column gap-4">
            <Card
              img={
                "https://html.vikinglab.agency/ovro/assets/img/icons/home4.svg"
              }
              title={"Responsive Design"}
              text={`Creating layouts that adapt beautifully across desktops, tablets, and mobile devices for optimal UX.`}
            />

            <Card
              img={
                "https://html.vikinglab.agency/ovro/assets/img/icons/home5.svg"
              }
              title={"Performance & Optimization"}
              text={`Optimizing front-end code and assets for speed, accessibility, and SEO, delivering smooth performance.`}
            />
          </div>
          <div className="bottom d-flex flex-xl-nowrap justify-content-center flex-wrap flex-row gap-3 mt-4">
            <div className="column d-flex flex-column ">
              <h2 className="mb-3">Work Experience</h2>

              <div
                className="card d-flex flex-column mb-3"
                data-aos="zoom-in-up"
              >
                <div className="job d-flex flex-column gap-1">
                  <h6 className="year text-gray">2018–2021</h6>
                  <h4 className="job-name">IT Help Desk Technician</h4>
                  <h6 className="company text-gray">
                    Azerbaijan Technical University
                  </h6>
                </div>

                <div className="job mt-4 d-flex flex-column gap-1">
                  <h6 className="year text-gray">2021–Present</h6>
                  <h4 className="job-name">Front-End Developer</h4>
                  <h6 className="company text-gray">Remote • Self-Employed</h6>
                </div>
              </div>

              <div
                className="card text-center flex-column justify-content-center align-items-center"
                data-aos="zoom-in-up"
              >
                <h3>Stay With Me</h3>
                <div className="social flex-wrap justify-content-around w-75">
                  <a
                    href="https://www.instagram.com/0nly_amirr/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="social-icons" />
                  </a>
                  <a
                    href="https://x.com/AmirAsadli2613"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF className="social-icons" />{" "}
                    {/* You can replace with a Twitter icon */}
                  </a>
                  <a
                    href="https://www.linkedin.com/in/amir-asadli-370899271/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GrLinkedin className="social-icons" />
                  </a>
                  <a
                    href="https://github.com/Amir606800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsGithub className="social-icons" />
                  </a>
                </div>
              </div>
            </div>
            <div className="column">
              <h2 className="mb-3">Education</h2>

              <div className="card d-flex flex-column" data-aos="zoom-in-up">
                <div className="educ d-flex flex-column gap-2">
                  <h6 className="year text-gray">2022–Present</h6>
                  <h4 className="job-name">BSc in Computer Engineering</h4>
                  <h6 className="company text-gray">
                    Azerbaijan State University of Economics (UNEC)
                  </h6>
                </div>

                <div className="educ mt-4 d-flex flex-column gap-2">
                  <h6 className="year text-gray">Oct 2023 – Feb 2024</h6>
                  <h4 className="job-name">Front-End Development Program</h4>
                  <h6 className="company text-gray">Matrix Academy</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
