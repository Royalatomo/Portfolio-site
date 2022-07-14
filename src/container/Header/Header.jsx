import React from "react";
import { motion } from "framer-motion";

import { AppWrapper } from "../../wrapper/";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transtion={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Rahul</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer</p>
            <p className="p-text">Ethical Hacker</p>
            <p className="p-text">Freelancer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transtion={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src="https://ik.imagekit.io/imdfhuoko/Portfolio/smile1_qLPR9KLpT.jpeg" alt="" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transtion={{ duration: 1, ease: "easeInOut" }}
          src="https://ik.imagekit.io/imdfhuoko/Portfolio/circle_fiRR8tNvh.svg"
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[
          "https://ik.imagekit.io/imdfhuoko/Portfolio/Logos/Technologies/react_4axAmrZN2.png",
          "https://ik.imagekit.io/imdfhuoko/Portfolio/Logos/Technologies/ts.png",
          "https://ik.imagekit.io/imdfhuoko/Portfolio/Logos/Technologies/sass_ScB3FxENR.png",
          "https://ik.imagekit.io/imdfhuoko/Portfolio/Logos/Technologies/redux_p5q4ZFrBQ.png",
          "https://ik.imagekit.io/imdfhuoko/Portfolio/Logos/Technologies/node_rOd6qZu56.png",
          "https://ik.imagekit.io/imdfhuoko/Portfolio/Logos/Technologies/git_ZLUd-b078w.png",
        ].map((circle, index) => {
          return (
            <div className="cricle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle+"?tr=h-90,w-90"} alt="circle" />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default AppWrapper(Header, "home");
