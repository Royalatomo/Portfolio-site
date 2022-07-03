import React from "react";
import { NavigationDots, SocialMedia } from "../components";

const AppWrap = (Component, idName, classNames, inHome=true) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames?classNames:""}`}>
        <SocialMedia Class={classNames} />

        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p className="p-text">@{new Date().getFullYear()} RAHUL</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>

        {inHome && <NavigationDots active={idName} />}
      </div>
    );
  };

export default AppWrap;
