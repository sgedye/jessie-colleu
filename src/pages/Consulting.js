import React from "react"

import styles from "../assets/scss/consulting.module.scss"

const Consulting = () => {
  return (
    <section className="page-wrapper">
      <h1 className="section-title">Consulting:</h1>
      <div>
        <p className={styles.mainText}>By using my extensive experience in literacy, teacher development and leadership, I help school leaders and teachers develop coherent literacy strategies with maximum impact. I also provide ongoing advice and guidance to schools in order to help solve specific learning or teaching issues, to maximise progress, and to connect educators with a broader professional community.</p>
        <p className={styles.mainText}>I can work with individuals and teams for a day or with multiple visits over the space of several months.</p>
        <p className={styles.mainText}><a href="https://jessie-colleu.netlify.app/contact">Get in touch</a> if you want to request either a consulting session, a training workshop for your school or a more personalised 1:1 coaching conversation<sup>*</sup>.</p>
        <p className={styles.mainText}><sup>*</sup>: The intended outcome in the coaching process is that you, as educator, understands and realises the answers are within yourself- it just takes a practiced soundboard or reflective partner to help find them.</p>
        <a className={styles.buttonWrap} href="https://jessie-colleu.netlify.app/contact">
          <button className={styles.button}>Go to Contact Page</button>
        </a>
      </div>
    </section>
  )
}

export default Consulting
