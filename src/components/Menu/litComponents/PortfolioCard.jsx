import React from "react";

const PortfolioCard = (props) => {
  return (
    <>
      <div
        className="picture w-100 text-center overflow-hidden mb-2 mt-5"
        data-aos="zoom-in"
      >
        <a target={props.link ? "_blank" : "_self"} href={props.link || "#"}>
          <img
            src={props.img}
            alt="Website1"
            style={{ maxWidth: "100%", borderRadius: "20px" }}
          />
        </a>
        <div className="image-title fs-2  fw-bold w-100">{props.name}</div>
      </div>
    </>
  );
};

export default PortfolioCard;
