import "../assets/CSS/panel.css";
import { BsGithub, BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";
import { CgDribbble } from "react-icons/cg";
import { FaDownload } from "react-icons/fa";

const SidePanel = () => {
  const handleScroll = (secId, e) => {
    const section = document.getElementById(secId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    const navItems = document.querySelectorAll(".navigation-item");
    navItems.forEach((item) => {
      if (item.classList.contains("active-part")) {
        item.classList.remove("active-part");
      }
    });

    e.classList.add("active-part");
  };
  return (
    <>
      <div className="Panel d-flex flex-row gap-4">
        <div className="left">
          <ul className="list-unstyled d-flex flex-column gap-3 justify-content-center">
            <li
              onClick={(e) => {
                handleScroll("home", e.currentTarget);
              }}
              className="navigation-item"
            >
              <img
                className="panel-icons"
                src="https://html.vikinglab.agency/ovro/assets/img/icons/home1.svg"
                alt="Home"
              />
              <div className="expanded">Home</div>
            </li>

            <li
              onClick={(e) => {
                handleScroll("about", e.currentTarget);
              }}
              className="navigation-item"
            >
              <img
                className="panel-icons"
                src="https://html.vikinglab.agency/ovro/assets/img/icons/home2.svg"
                alt="Home"
              />
              <div className="expanded">About Us</div>
            </li>

            <li
              onClick={(e) => {
                handleScroll("services", e.currentTarget);
              }}
              className="navigation-item"
            >
              <img
                className="panel-icons"
                src="https://html.vikinglab.agency/ovro/assets/img/icons/home3.svg"
                alt="Home"
              />
              <div className="expanded">Our Service</div>
            </li>

            <li
              onClick={(e) => {
                handleScroll("skills", e.currentTarget);
              }}
              className="navigation-item"
            >
              <img
                className="panel-icons"
                src="https://html.vikinglab.agency/ovro/assets/img/icons/home4.svg"
                alt="Home"
              />
              <div className="expanded">My Skill</div>
            </li>

            <li
              onClick={(e) => {
                handleScroll("portfolio", e.currentTarget);
              }}
              className="navigation-item"
            >
              <img
                className="panel-icons"
                src="https://html.vikinglab.agency/ovro/assets/img/icons/home5.svg"
                alt="Home"
              />
              <div className="expanded">Portfolio</div>
            </li>

            {/* <li
              onClick={(e) => {
                handleScroll("testimonial",e.currentTarget);
              }}
              className="navigation-item"
            >
              <img
                className="panel-icons"
                src="https://html.vikinglab.agency/ovro/assets/img/icons/home6.svg"
                alt="Home"
              />
              <div className="expanded">Testimonial</div>
            </li>

            <li
              onClick={(e) => {
                handleScroll("blog",e.currentTarget);
              }}
              className="navigation-item"
            >
              <img
                className="panel-icons"
                src="https://html.vikinglab.agency/ovro/assets/img/icons/home8.svg"
                alt="Home"
              />
              <div className="expanded">Our Blog</div>
            </li> */}

            <li
              onClick={(e) => {
                handleScroll("contact", e.currentTarget);
              }}
              className="navigation-item"
            >
              <img
                className="panel-icons"
                src="https://html.vikinglab.agency/ovro/assets/img/icons/home7.svg"
                alt="Home"
              />
              <div className="expanded">Contact Me</div>
            </li>
          </ul>
        </div>
        <div className="right">
          <div className="card pt-3">
            <div className="card-img m-auto ">
              <img
                style={{ transform: "rotate(-90deg" }}
                src="/DSC_9266.JPG"
                width={390}
              ></img>
            </div>
            <div className="card-body">
              <div className="card-title text-center fs-2 fw-bold">
                Amir Asadli
              </div>
              <div className="card-text text-center">
                Hi, I’m Amir, a passionate Frontend Developer with a strong eye
                for design and detail. I specialize in building responsive,
                user-friendly interfaces that blend creativity with performance.
              </div>
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

              <div className="buttonDownload text-center">
                <a href="/CV.pdf" download={"CV.pdf"}>
                  <button className="btn btn-warning text-center fs-5 fw-bold py-3 px-4 rounded-4">
                    DOWNLOAD NOW <FaDownload />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidePanel;
