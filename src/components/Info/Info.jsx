import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { client } from "../../client";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Footer } from "../../container";

import "./Info.scss";

const Info = () => {
  const projectId = useParams().id;
  const [info, setInfo] = useState({});

  useEffect(() => {
    const query = `*[_type == 'information' && link == '${projectId}']`;
    client.fetch(query).then((data) => {
      if (data.length < 1) {
        const infoDiv = document.getElementById("info-div");
        infoDiv.innerHTML = "<h1>404!! Project/Work Info Not Found</h1>";
      } else {
        setInfo(data[0]);
      }
    });
  }, [projectId]);

  useEffect(() => {
    if (!info?.ytCode) return;
    const videoElement = document.querySelector("#info-div .video-container");
    videoElement.innerHTML = info.ytCode + videoElement.innerHTML;
  }, [info]);

  window.scrollTo(0, 0);
  return (
    <>
      <Link to="/" className="info__back">
        <IoMdArrowRoundBack className="info__back-icon" />
      </Link>
      <div id="info-div">
        <h2 className="head-text">
          {info?.category} <span>{info?.title}</span>
        </h2>

        <p className="p-text">{info?.description}</p>
        <ul className="links">
          {info?.externalLinks?.map((link) => (
            <li className="p-text live">
              <span style={{ color: link.color || "black" }}>{link.name} </span>
              <a href={link.link} target="_blank" rel="noreferrer">
                {link.link}
              </a>
            </li>
          ))}

          <div className="video-container">
            <img
              src="https://ik.imagekit.io/imdfhuoko/Portfolio/pointing_b1BdHh4oE?tr=h-400"
              alt="man pointing left"
            />
          </div>
        </ul>

        {info?.techUsed?.length > 0 && (
          <ul className="tech-used">
            <h3 className="head-text sub-heading">
              <span>Technologies</span> Used:-
            </h3>

            <div className="icons">
              {info.techUsed.map((tech) => (
                <li className="p-text">
                  <img
                    loading="lazy"
                    src={tech.link + "?tr=h-150,w-150,q-70"}
                    alt={tech.name}
                    style={{ backgroundColor: tech.color || "#d5d9df" }}
                  />
                  <span>{tech.name}</span>
                </li>
              ))}
            </div>
          </ul>
        )}

        {info?.servUsed?.length > 0 && (
          <ul className="service-used">
            <h3 className="head-text sub-heading">
              <span>Services</span> Used:-
            </h3>

            <div className="icons">
              {info.servUsed.map((tech) => (
                <li className="p-text">
                  <img
                    loading="lazy"
                    src={tech.link}
                    alt={tech.name}
                    style={{ backgroundColor: tech.color || "#d5d9df" }}
                  />
                  <span>{tech.name}</span>
                </li>
              ))}
            </div>
          </ul>
        )}

        {info?.media?.length > 0 && (
          <div className="media">
            <h3 className="head-text sub-heading">
              <span>Quick</span> View:-
            </h3>

            <div className="imgs">
              {info?.media.map((img) => (
                <a href={img} target="_blank" rel="noreferrer">
                  <img
                    loading="lazy"
                    src={img + "?tr=h-400,q-80"}
                    alt={info?.category + "-media"}
                  />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer inHome={false} />
    </>
  );
};

export default Info;
