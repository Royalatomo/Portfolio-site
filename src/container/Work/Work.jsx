import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub, AiFillRead } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrapper } from "../../wrapper/";
import { client } from "../../client";
import "./Work.scss";
import { Link } from "react-router-dom";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opactiy: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  const [show, setShow] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query).then((data) => {
      setShow(data.slice(0, 4));
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });
    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      if (item === "All") {
        setShow(works.slice(0, 4));
        setFilterWork(works);
      } else {
        const data = works.filter((work) =>
          work.tags.includes(item.toLowerCase())
        );
        setShow(data.slice(0, 4));
        setFilterWork(data);
      }
    }, 500);
  };

  const showMore = () => {
    const more = show.length + 4;
    setShow(filterWork.slice(0, more));
  };

  return (
    <>
      <h2 className="head-text">
        Projects & <span>Works</span>
      </h2>

      <div className="app__work-filter">
        {["MERN", "Design", "Games", "Clones", "Web App", "All"].map(
          (item, index) => {
            return (
              <div
                key={`work-${index}`}
                onClick={() => handleWorkFilter(item)}
                className={`app__work-filter-item app__flex p-text ${
                  activeFilter === item ? "item-active" : ""
                }`}
              >
                {item}
              </div>
            );
          }
        )}
      </div>
      <motion.div
        animate={animateCard}
        transtion={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {show.map((work, index) => {
          return (
            <div className="app__work-item app__flex" key={`work-${index}`}>
              <div className="app__work-img app__flex">
                <img src={work.imgUrl + "?tr=h-300,w-300"} alt={work.name} />

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                  className="app__work-hover app__flex"
                >
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>

                  <a href={work.codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileHover={{ scale: [1, 0.9] }}
                      whileInView={{ scale: [0, 1] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>

                  <Link to={"/info/" + work.blogLink}>
                    <motion.div
                      whileHover={{ scale: [1, 0.9] }}
                      whileInView={{ scale: [0, 1] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillRead />
                    </motion.div>
                  </Link>
                </motion.div>
              </div>

              <div className="app__work-content app__flex">
                <h4 className="bold-text">{work.title}</h4>
                <p className="p-text" style={{ marginTop: 10 }}>
                  {work.description}
                </p>

                <div className="app__work-links">
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>

                  <a href={work.codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileHover={{ scale: [1, 0.9] }}
                      whileInView={{ scale: [0, 1] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>

                  <Link to={"/info/" + work.blogLink}>
                    <motion.div
                      whileHover={{ scale: [1, 0.9] }}
                      whileInView={{ scale: [0, 1] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillRead />
                    </motion.div>
                  </Link>
                </div>

                <div className="app__work-tag app__flex">
                  {work.tags &&
                    work.tags.map((tag) => {
                      if (tag === "all" || !tag) return "";
                      return <p className="p-text">{tag}</p>;
                    })}
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
      {show.length < filterWork.length && (
        <button class="show-more" onClick={showMore}>show more</button>
      )}
    </>
  );
};

export default AppWrapper(Work, "work");
