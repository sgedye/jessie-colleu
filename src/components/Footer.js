import React from 'react';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="footer">
      <section className="social">
        <div className="social-buttons">
          <a href="https://www.linkedin.com/in/jessicacolleu/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="https://twitter.com/JessicaColleu" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="mailto:jessica.colleuterradas@sa.gov.au">
            <MdEmail />
          </a>
        </div>
      </section>
      <section className="copywrite">
        <p>© Jessica Potes 2020</p>
      </section>
    </footer>
  );
};

export default Footer;
