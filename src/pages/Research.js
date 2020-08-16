import React from "react"
import { Switch, NavLink } from "react-router-dom"

import styles from "../assets/scss/research.module.scss"
import publications from "../assets/images/research/publications.jpg"
import rtcLogo from "../assets/images/research/rtc_logo.png"

const Research = () => {
  return (
    <section className="page-wrapper">
      <h1 className="section-title">Research:</h1>
      <div className={styles.cardWrap}>
        <NavLink to="/research/rtc">
          <div className={styles.card}>
            <img className={styles.cardLogo} src={rtcLogo} alt="RTC Logo" />
          </div>
        </NavLink>
        <NavLink to="/research/publications">
          <div className={styles.card}>
            <img
              className={styles.cardLogo}
              src={publications}
              alt="Publications Logo"
            />
          </div>
        </NavLink>
      </div>
    </section>
  )
}

export default Research
