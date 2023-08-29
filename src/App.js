import logo from "./logo.svg";
import "./App.css";
import NewReleasePhoto from "./images/release1.jpg";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faSoundcloud,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import MobileNavigation from "./NavBar /MobileNavigation";
import Navigation from "./NavBar /Navigation";
import Videos from "./Videos/Videos";
import News from "./News/News";
import { motion } from "framer-motion";
import Music from "./Music Module/Music";
import About from "./About Section/About";

//Navigation bar, mobile & desktop //

const NavBar = () => {
  return (
    <div>
      <MobileNavigation />
      <Navigation />
    </div>
  );
};

// Footer component
const Footer = () => {
  return (
    <footer>
      <section>
        <footer className="footer-container">
          <div className="social-icons">
            <a href="https://www.instagram.com/nansea_music">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://soundcloud.com/nansea_music">
              <FontAwesomeIcon icon={faSoundcloud} />
            </a>
            <a href="https://www.tiktok.com/@_nansea">
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </div>
        </footer>
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Nansea. All rights reserved.
        </p>
      </section>
    </footer>
  );
};

// Main component representing the entire page
const ArtistPage = () => {
  return (
    <div className="page-container">
      <NavBar />
      <main>
        <News />
        <Music />
        <About />
        <Videos />
      </main>
      <Footer />
    </div>
  );
};

export default ArtistPage;
