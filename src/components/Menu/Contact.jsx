import React, { useRef } from "react";
import { MdEmail } from "react-icons/md";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef()

  const sendEmail =(e)=>{

    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID, // e.g., service_123abc
      import.meta.env.VITE_TEMPLATE_ID, // e.g., template_xyz456
      form.current,
      import.meta.env.VITE_PUBLIC_KEY  // e.g., 6zhTn_abc123XYZ
    )
    .then(
      () => {
        alert("Message sent successfully!");
        form.current.reset(); // Clear the form
      },
      (error) => {
        console.error(error.text);
        alert("Failed to send message. Try again later.");
      }
    );
  }
  return (
    <>
      <div className="head">
        <div className="title" data-aos="fade-left">
          <img
            src="https://html.vikinglab.agency/ovro/assets/img/icons/sublogo1.svg"
            alt="Small-Logo"
          />
          <span>Contact Me</span>
        </div>
        <div className="subtitle h1" data-aos="fade-left">
          Have Any Project in
          <p>
            Mind, <span>Lets Talk</span>
          </p>
        </div>
        <div className="card something p-4" data-aos="zoom-in">
          <div className="card-title">Let's Work Together!</div>
          <form ref={form} className="d-flex flex-column gap-4" method="post" onSubmit={(e)=>{e.preventDefault();sendEmail(e)}}>
            <div className="top d-flex gap-4 flex-wrap">
              <input style={{ minWidth: "240px", flex: "1 1 48%" }} name="name" type="text" placeholder="Full Name" required />
              <input style={{ minWidth: "240px", flex: "1 1 48%" }} name="email" type="email" placeholder="Email" required />
            </div>
            <div className="top d-flex gap-4 flex-wrap">
              <input style={{ minWidth: "240px", flex: "1 1 48%" }} name="phone" type="tel" placeholder="Phone Number" pattern="^\+?[0-9\s\-()]{7,20}$" required />
              <input style={{ minWidth: "240px", flex: "1 1 48%" }} name="title" type="text" placeholder="Subject" required />
            </div>
            <input name="budget" type="number" min={0} placeholder="Your Budget (optional)" />
            <textarea name="message" placeholder="Message" className="mesage" required/>
            <div className="butan w-100 pt-3 ps-1"><button type="submit" className="px-4 rounded-5 fw-bold fs-4 py-3 btn btn-warning">Send <MdEmail /> </button></div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
