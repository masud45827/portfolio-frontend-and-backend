import React, { useState } from "react";
import ContactForm from "./contact/ContactForm";
import ContactFormText from "./contact/ContactFormText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
function Contact() {
  const [showMessage, setShowMessage] = useState(false);
  const [buttonText, setButtonText] = useState("Write Message");
  const showMessageBox = () => {
    console.log(buttonText);
    setShowMessage((prevState) => !prevState);
    setButtonText((prevText) =>
      prevText === "Write Message" ? "Send Message" : "Write Message"
    );
  };
  return (
    <div className="bg-indigo-50 h-screen">
      <div className="flex flex-col items-center justify-center">
        <h1 className="pt-10 w-3/4 pb-5 text-3xl text-center font-bold">Contact</h1>
        <hr className="h-[3px] w-[150px] sm:w-[200px] md:w-[300px] lg:w-[300px] bg-black text-center" />
      </div>
      <div className="flex flex-col justify-center items-center pt-4">
        {showMessage ? <ContactForm /> : <ContactFormText />}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-3 rounded"
          onClick={showMessageBox}
        >
          {buttonText}
        </button>
      </div>

      <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row justify-center items-center pt-10 ">
        <div className="flex flex-row justify-center items-center pb-2 ">
          <FontAwesomeIcon className="pr-2" icon={faLinkedin} />
          <a href="https://www.linkedin.com/in/masud-ali-626740204/">Linkedin</a>
        </div>

        <div className="flex flex-row justify-center items-center pb-2 pl-2">
        <FontAwesomeIcon className="pr-2" icon={faEnvelope} /> <h1> masud.cse2019@gmail.com</h1>
        </div>

        <div className="flex flex-row justify-center items-center pl-2">
        <FontAwesomeIcon className="pr-2" icon={faPhoneVolume} /> <h1> 01774687690</h1>
        </div>

      </div>
    </div>
  );
}

export default Contact;
