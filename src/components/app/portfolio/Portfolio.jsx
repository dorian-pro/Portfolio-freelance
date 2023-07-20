import { DataPortfolio } from '../../../data/DataPortfolio';
import './Portfolio.scss';
import React from 'react'

const Portfolio = () => {
  return (
      <section id="portfolio">
          <div className="container">
              <h2 className='d-none'>Portfolio</h2>
              <ul className="group-card">
                  {DataPortfolio.map((item, index) => {
                      return (
                          <li className="card" key={index}>
                              <div className="card-image">
                                  {item.img}
                              </div>
                              <div className="card-text">
                                  <h3>{item.title}</h3>
                                  <p>{item.text}</p>
                                  <div className="group-button">
                                      <a href={item.link} className="btn-second">Voir le site</a>
                                      <a href={item.codeLink} className="btn-outline">Voir le code</a>
                                  </div>
                              </div>
                          </li>
                      )
                  })}
              </ul>
          </div>
    </section>
  )
}

export default Portfolio