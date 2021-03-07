import React from "react";
import { FaInstagram,FaTwitter,FaLinkedin } from "react-icons/fa";

const Banner = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header_content">
                <div className="header_section">
                <ul className="ul_header">
                <li><a href="https://es.indeed.com/ofertas?q=clinical%20data%20management%20intern&l=Barcelona%20provincia&vjk=1c94ea862a694317">
                  <FaInstagram /></a></li>
                <li>
                  <FaLinkedin />
                </li>
                <li>
                  <FaTwitter />
                </li>
              </ul>
              <h1>Hi! I´m Basirul Islam</h1>
              <p>I am professional consultant ,currently working in Barcelona</p>
                </div>
              
            </div>
          </div>
          <div className="col-6"></div>
        </div>
      </div>
    </header>
  );
};
export default Banner;
