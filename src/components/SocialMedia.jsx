import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

const style = (Class) => {
  return {
    marginBottom: "10px",
    fontSize: "20px",
    background: Class==="app__whitebg"?"var(--lightGray-color)":"#fff",
    padding: "10px 10px",
    display: "flex",
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
  };
};

const SocialMedia = ({ Class }) => {
  return (
    <div className="app__social">
      <a
        href="https://twitter.com/coddieRahul"
        rel="noreferrer"
        target="_blank"
        style={style(Class)}
      >
        <BsTwitter />
      </a>
      <a
        href="https://www.linkedin.com/in/rahul-singh-rawat-coder/"
        rel="noreferrer"
        target="_blank"
        style={style(Class)}
      >
        <BsLinkedin />
      </a>
      <a
        href="https://www.instagram.com/_rahul232/"
        rel="noreferrer"
        target="_blank"
        style={style(Class)}
      >
        <BsInstagram />
      </a>
    </div>
  );
};

export default SocialMedia;
