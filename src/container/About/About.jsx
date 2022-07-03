import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { client } from "../../client";
import { AppWrapper } from "../../wrapper/";
import "./About.scss";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => setAbouts(data));
  }, []);
  return (
    <>
      <h2 className="head-text">
        I Know That <span>Good Product </span>
        <br />
        means <span>Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((line, index) => {
            return (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, ease: "easeInOut", type: "tween" }}
                className="app__profile-item"
                key={`about-${index}`}
              >
                <img src={line.imgUrl+"?tr=h-250,q-70"} alt={line.title} />
                <h2 className="bold-text" style={{ marginTop: 20 }}>
                  {line.title}
                </h2>
                <p className="p-text" style={{ marginTop: 10 }}>
                  {line.description}
                </p>
              </motion.div>
            );
          })}
      </div>
    </>
  );
};

export default AppWrapper(About, 'about', "app__whitebg");
