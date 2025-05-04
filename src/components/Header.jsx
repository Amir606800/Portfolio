import { IoIosMailOpen } from "react-icons/io";
import "../assets/CSS/head.css";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { FaMoon, FaRegSun } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { BsGithub, BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";
import { CgDribbble } from "react-icons/cg";

function OffCanvasExample(props) {
  const handleClose = () => props.settingName(false);
  const handleScroll = (secId) => {
    const section = document.getElementById(secId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Offcanvas
        show={props.name}
        onHide={handleClose}
        scroll={true}
        backdrop={true}
        placement={"end"}
        className="offcanvasi ps-4 "
      >
        <Offcanvas.Header >
          <Offcanvas.Title ><img className="w-50 mt-4 mb-2" src={props.image}></img></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className=" overflow-x-hidden">
          <ul className=" list-unstyled d-flex flex-column mb-5 gap-3 fs-4">
           <li onClick={() => {handleScroll("home");handleClose() }}>
              <div className="expanded">Home</div>
           </li>
           <li onClick={() => {handleScroll("about");handleClose() }}>
              <div className="expanded">About Us</div>
           </li>
           <li onClick={() => {handleScroll("services");handleClose() }}>
              <div className="expanded">Our Service</div>
           </li>
           <li onClick={() => {handleScroll("skills");handleClose() }}>
              <div className="expanded">My Skill</div>
           </li>
           <li onClick={() => {handleScroll("portfolio");handleClose() }}>
              <div className="expanded">Portfolio</div>
           </li>
           <li onClick={() => {handleScroll("testimonial");handleClose() }}>
              <div className="expanded">Testimonial</div>
           </li>
           <li onClick={() => {handleScroll("blog");handleClose() }}>
              <div className="expanded">Our Blog</div>
           </li>
           <li onClick={() => {handleScroll("contact");handleClose() }}>
              <div className="expanded">Contact Me</div>
           </li>
          </ul>
          <button onClick={() => {handleScroll("contact");handleClose()}} className="btn btn-warning p-3 fs-4 rounded-5 fw-bold">Get In Touch Now</button>
          <h3 className="mt-5">Social Links</h3>
          <div className="social justify-content-around">
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
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

const Header = (props) => {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow((s) => !s);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const handleScroll = (secId, e) => {
    const section = document.getElementById(secId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
      props.settingImage(
        "https://html.vikinglab.agency/ovro/assets/img/logo/logo2.png"
      );
    } else {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
      props.settingImage(
        "https://html.vikinglab.agency/ovro/assets/img/logo/logo1.png"
      );
    }
  }, [theme]);

  return (
    <div className="Head">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="right align-items-center d-flex gap-4">
          <div className="theme">
            <input
              id="check-theme"
              type="checkbox"
              className="theme-btn btn"
              checked={theme === "dark"}
              onChange={toggleTheme}
            />
            <label className="theme-btn btn" htmlFor="check-theme">
              <FaMoon className="theme-mon" />
              <FaRegSun className="theme-sun" />
            </label>
          </div>
          <div className="splitter d-none d-lg-block"></div>
          <div className="hire d-none d-md-block">
            <button onClick={()=>{handleScroll('contact')}} className="hire-btn rounded-5 d-flex align-items-center gap-1 btn btn-warning fw-bold">
              <span>HIRE ME</span> <IoIosMailOpen />
            </button>
          </div>
          <div className="bars" onClick={toggleShow}>
            <HiMiniBars3BottomLeft />
          </div>
        </div>
      </div>
      <OffCanvasExample name={show} settingName={setShow} image={props.image} />
    </div>
  );
};

export default Header;
