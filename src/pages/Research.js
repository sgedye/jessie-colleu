import React from "react";
import { NavLink } from 'react-router-dom';

import styles from "../assets/scss/research.module.scss";
import aaseLogo from "../assets/images/research/aase-logo.png"
import rtcLogo from "../assets/images/research/rtc_logo.png"

const Research = () => {
  return (
    <section className="page-wrapper">
      <h1 className="section-title">Research:</h1>
      <div className={styles.cardWrap}>
        <NavLink to='/research/rtc'>
          <div className={styles.card}>
            <img className={styles.cardLogo} src={rtcLogo} alt="RTC Logo" />
          </div>
        </NavLink>
        <NavLink to='/research/aase'>
          <div className={styles.card}>
            <img className={styles.cardLogo} src={aaseLogo} alt="AASE Logo" />
          </div>
        </NavLink>
      </div>
    </section>
  );
};

export default Research;
