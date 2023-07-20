import { useState, useEffect } from "react";
import { sliderData } from "../../data/sliderData";
import "./SliderHome.scss";

const SliderHome = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    
    useEffect(() => {
      const interval = setInterval(() => {
        // Passage à l'index de l'image suivante
        setActiveIndex((prevIndex) =>
          prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1
        );
      }, 4500);

      // Nettoyage de l'intervalle lors du démontage du composant
      return () => {
        clearInterval(interval);
      };
    }, []);
  return (
    <ul className="slider">
      {sliderData.map((item, index) => {
        const isActive = index === activeIndex;
        const className = `slider-item ${isActive ? "fade-in" : "fade-out"}`;
        return (
          <li className={className} key={index}>
            <div className="container">
              <div className="group-text">
                <h2>{item.title}</h2>
                <p>{item.Text}</p>
              </div>
              <div className="btn">
                <a href="#" className="btn-primary">
                  Découvrire
                </a>
              </div>
            </div>
          </li>
        );
      })}
      <div className="dot-slide">
        {sliderData.map((_, index) => (
          <span
            key={index}
            className={index === activeIndex ? "dot active" : "dot"}
            onClick={() => setActiveIndex(index)}
          ></span>
        ))}
      </div>
    </ul>
  );
};

export default SliderHome;
