import React from "react";

const navItems = ["home", "about", "work", "skills", "testimonials", "contact"];

const NavigationDots = ({ active }) => {
  const host = document.location.host;
  const href = document.location.href.split(host);
  const lastAdd = href[href.length-1];
  if(lastAdd !== "/") { return }
  return (
    <div className="app__navigation">
      {navItems.map((item, index) => (
        <a 
          href={`#${item}`}
          key={item+index}
          className="app__navigation-dot"
          style={ active === item ? {backgroundColor: "#313bac"}: {} }
        >
        </a>
      ))}
    </div>
  );
};

export default NavigationDots;
