import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import { AppWrapper } from "../../wrapper/";
import { client } from "../../client";
import "./Skills.scss";

const _mergeArrays = (a, b) => {
  const c = [];

  while (a.length && b.length) {
    c.push(a[0].year > b[0].year ? b.shift() : a.shift());
  }

  //if we still have values, let's add them at the end of `c`
  while (a.length) {
    c.push(a.shift());
  }
  while (b.length) {
    c.push(b.shift());
  }

  return c;
};

const mergeSort = (data) => {
  if (data.length < 2) return data;
  const middle = Math.floor(data.length / 2);
  const data_l = data.slice(0, middle);
  const data_r = data.slice(middle, data.length);
  const sorted_l = mergeSort(data_l);
  const sorted_r = mergeSort(data_r);
  return _mergeArrays(sorted_l, sorted_r);
};

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [exps, setExps] = useState([]);

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';
    const expQuery = '*[_type == "experiences"]';
    client.fetch(skillsQuery).then((data) => setSkills(data || []));
    client.fetch(expQuery).then((data) => setExps(mergeSort(data) || []));
  }, []);

  return (
    <>
      <h2 className="head-text">
        Skills & <span>Experiences</span>
      </h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => {
            return (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"
                key={skill.name}
              >
                <div
                  className="app__flex"
                  style={{ backgroundColor: skill.bgColor }}
                >
                  <img src={skill.icon + "?tr=h-80,w-80"} alt={skill.name} />
                </div>

                <p className="p-text">{skill.name}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div className="app__skills-exp">
          {exps.map((exp) => (
            <motion.div className="app__skills-exp-item" key={exp.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{exp.year}</p>
              </div>

              <motion.div className="app__skills-exp-work">
                {exp.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-tex">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      classname="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrapper(Skills, "skills", "app__whitebg");
