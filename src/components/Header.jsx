import { IoIosMailOpen } from "react-icons/io";
import "../assets/CSS/head.css";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { FaMoon, FaRegSun } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { BsTwitterX } from "react-icons/bs";
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
           <li onClick={() => {handleScroll("home"); }}>
              <div className="expanded">Home</div>
           </li>
           <li onClick={() => {handleScroll("about"); }}>
              <div className="expanded">About Us</div>
           </li>
           <li onClick={() => {handleScroll("services"); }}>
              <div className="expanded">Our Service</div>
           </li>
           <li onClick={() => {handleScroll("skills"); }}>
              <div className="expanded">My Skill</div>
           </li>
           <li onClick={() => {handleScroll("portfolio"); }}>
              <div className="expanded">Portfolio</div>
           </li>
           <li onClick={() => {handleScroll("testimonial"); }}>
              <div className="expanded">Testimonial</div>
           </li>
           <li onClick={() => {handleScroll("blog"); }}>
              <div className="expanded">Our Blog</div>
           </li>
           <li onClick={() => {handleScroll("contact"); }}>
              <div className="expanded">Contact Me</div>
           </li>
          </ul>
          <button className="btn btn-warning p-3 fs-4 rounded-5 fw-bold">Get In Touch Now</button>
          <h3 className="mt-5">Social Links</h3>
          <div className="social justify-content-around">
              <BsTwitterX className="social-icons" />
              <FaInstagram className="social-icons" />
              <FaFacebookF className="social-icons" />
              <GrLinkedin className="social-icons" />
              <CgDribbble className="social-icons" />
          </div>
          <h4 className="mt-4 w-100">SUBSCRIBE TO NEWSLETTER</h4>
          <div className="subs position-relative">
            <input className="input-off-canvas rounded-5 ps-4 w-100 fs-4" style={{height:"2.6em",backgroundColor:""}} type="email" placeholder="" />
            <button className="btn btn-warning rounded-5 position-absolute h-75 top-50 translate-middle-y" style={{right:"10px"}}>SUBSCRIBE</button>
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
      <div className="container d-flex justify-content-between align-items-center">
        <img src={props.image} className="logo" alt="logo-light" />
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
            <button className="hire-btn rounded-5 d-flex align-items-center gap-1 btn btn-warning fw-bold">
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
