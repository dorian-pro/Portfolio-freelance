import React, { useState, useEffect } from "react";
import { AboutFirstData } from "../../../data/AboutFirstData";
import { AboutSecondData } from "../../../data/AboutSecondData";
import { AboutIconData } from "../../../data/AboutIconData";
import "./About.scss";

const About = () => {
  const [activeIcon, setActiveIcon] = useState("");
  const [activeSlider, setActiveSlider] = useState("");

  useEffect(() => {
    const defaultIcon = AboutIconData.find((item) => item.class);
    const defaultText = AboutSecondData.find((item) => item.class);

    if (defaultIcon && defaultText) {
      setActiveIcon(defaultIcon.class);
      setActiveSlider(defaultText.class);
    }
  }, []);

  const handleIconClick = (iconClass, sliderClass) => {
    setActiveIcon(iconClass);
    setActiveSlider(sliderClass);
  };

  return (
    <section id="about">
      <div className="about-top container">
        <ul className="list-about">
          {AboutFirstData.map((item, index) => (
            <li className="list-item" key={index}>
              {item.title}
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="about-bottom">
        <ul className="slider-about">
          {AboutSecondData.map((item, index) => (
            <li
              className={`${item.class} ${
                activeSlider === item.class || item.class === activeIcon
                  ? "active fade-in"
                  : "fade-out"
              }`}
              key={index}
            >
              <div className="container">
                <h2 className={` ${
                  activeSlider === item.class || item.class === activeIcon
                    ? "active"
                    : ""
                  }`}>
                  {item.title}
                </h2>
                <p className={` ${
                  activeSlider === item.class || item.class === activeIcon
                    ? "active"
                    : ""
                  }`}>
                  {item.text}
                </p>
              </div>
            </li>
          ))}
          <li className="icon-item">
            <ul className="container">
              {AboutIconData.map((item, index) => (
                <li
                  key={index}
                  className={`${item.class} ${
                    activeIcon === item.class ? "active" : ""
                  }`}
                  onClick={() => handleIconClick(item.class, item.sliderClass)}
                >
                  <i className={`${
                    activeIcon === item.class ? "active" : ""
                    }`}>
                    {item.icon}
                  </i>
                  <p className={` ${
                    activeIcon === item.class ? "active" : ""
                    }`}>
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
