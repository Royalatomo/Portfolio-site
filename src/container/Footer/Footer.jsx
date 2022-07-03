import React, { useState } from "react";
import { AppWrapper } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({name: "", email: "", message: ""});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;
  const handleChangeInput = (e) => {
    const { name, value } = e.currentTarget;
    setFormData({...formData, [name]: value })
  }
  
  const handleSubmit = (e) => {
    setLoading(true);
    const contact = { 
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }

    client.create(contact).then(() => {
      setIsFormSubmitted(true);
      setLoading(false);
    })
  }

  return <>
    <h2 className="head-text">Grab A Coffee & <span>Chat With Me</span></h2>
    <div className="app__footer-cards">
      <div className="app__footer-card">
        <img src="https://ik.imagekit.io/imdfhuoko/Portfolio/email_p66JOMLJ0.png?tr=w-50,h-50" alt="email" />
        <a href="mailto:rahulsinghrawat9797@gmail.com" className="p-text">rahulsinghrawat9797@gmail.com</a>
      </div>

      <div className="app__footer-card">
        <img src="https://ik.imagekit.io/imdfhuoko/Portfolio/mobile_E-ZOgktaCV.png?tr=w-50,h-50" alt="mobile" />
        <a href="tel: +91 827-951-6896" className="p-text">+91 827-951-6896</a>
      </div>
    </div>

    {!isFormSubmitted ?
    <div className="app__footer-form app__flex">
      <div className="app__flex app__footer-input">
        <input type="text" className="p-text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput} />
        <input type="email" className="p-text" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
      </div>

      <div>
        <textarea className="p-text" placeholder="Your Message" value={message} name="message" onChange={handleChangeInput}></textarea>
        <button type="button" className="p-text" onClick={handleSubmit}>{loading?"Sending...":"Send Message"}</button>
      </div>
    </div>
    :
    <div className="app__footer_thanks">
      <h4 className="head-text">Thanks For Your <span>Intrest</span></h4>
      <img src="https://ik.imagekit.io/imdfhuoko/Portfolio/thanks_3cUADkwlq.gif?tr=h-220,w-220" alt="" />
    </div>
}
  </>;
};

export default AppWrapper(Footer, "contact", "app__whitebg");
