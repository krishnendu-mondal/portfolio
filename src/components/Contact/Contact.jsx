import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactStyles.css";
import { PiWarningCircle } from "react-icons/pi";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

function Contact() {
  const form = useRef();
  const [loaderToast, setLoaderToast] = useState(false);
  const [successToast, setSuccessToast] = useState(false);
  const [errorToast, setErrorToast] = useState(false);
  const [emptyFieldErrorToast, setEmptyFieldErrorToast] = useState(false);


  const sendEmail = (e) => {
    setSuccessToast(false);
    setErrorToast(false);
    setEmptyFieldErrorToast(false);
    setLoaderToast(true);
    e.preventDefault();
    
    const formData = {
      name:e.target.name.value,
      email:e.target.email.value,
      subject:e.target.subject.value,
      message:e.target.message.value
    }
    if(formData.name.trim() ==='' || formData.email.trim()==='' || formData.subject.trim()==='' || formData.message.trim()===''){
      setLoaderToast(false);
      setEmptyFieldErrorToast(true);
    }else{
      emailjs.sendForm("service_sigel78", "template_62m8rfr", form.current, {
          publicKey: "Vd53Bra3S4rezmZDt",
      })
      .then(() => {
            e.target.reset();
            setLoaderToast(false);
            setSuccessToast(true);
          },
          () => {
            e.target.reset();
            setLoaderToast(false);
            setErrorToast(true);
          }
      );
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="name" id="name" placeholder="Full Name" />
      <input type="email" name="email" id="email" placeholder="Email" />
      <input type="text" name="subject" id="subject" placeholder="Subject" />
      <textarea type="textarea" name="message" rows={10} placeholder="Comments & queries" />

      {
        loaderToast && <div className="loader"></div>
      }

      {
        emptyFieldErrorToast && <div className="notification notification-error">
          <PiWarningCircle size={18} style={{fill:"crimson"}}/>Please fill all the fields.</div>
      }
      {
        successToast && <div className="notification notification-success">
          <IoIosCheckmarkCircleOutline size={18} style={{fill:"lightgreen"}}/> Success! Email sent Successfully.</div>
      }
      
      {
        errorToast && <div className="notification notification-error">
          <PiWarningCircle size={18} style={{fill:"crimson"}}/> Something went wrong! Email did not sent.</div>
      }
      
      <button type="submit" value="submit">Submit</button>
    </form>
  );
}

export default Contact;
