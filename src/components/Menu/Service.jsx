import React from "react";
import Card from "./litComponents/Card";

const Service = () => {
  return (
    <>
      <div className="head">
        <div className="title" data-aos="fade-left">
          <img
            src="https://html.vikinglab.agency/ovro/assets/img/icons/sublogo1.svg"
            alt="Small-Logo"
          />
          <span>My Services</span>
        </div>
        <div className="subtitle h1" data-aos="fade-left">
          Building the Web
          <p>
            With <span>Precision & Performance</span>
          </p>
        </div>

        <Card
          title={`Front-End Development`}
          text={`Building responsive, interactive websites using React, JavaScript, HTML, and SCSS. I focus on clean code, accessibility, and performance.`}
        />

        <Card
          title={`UI Implementation`}
          text={`Turning design files (Figma, Adobe XD) into functional front-end code with pixel-perfect precision and seamless animations.`}
        />

        <Card
          title={`API Integration & Dynamic Data`}
          text={`Connecting front-end apps to back-end APIs and databases to display real-time, dynamic content.`}
        />

        <Card
          title={`Version Control & Collaboration`}
          text={`Using Git and GitHub for clean version control and effective collaboration with teams and clients.`}
        />

        <Card
          title={`Learning Back-End Development`}
          text={`Currently expanding into back-end technologies, including working with databases and creating full-stack applications.`}
        />
      </div>
    </>
  );
};

export default Service;
