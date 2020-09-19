import React from 'react';
// import { useState } from 'react';
import styles from "../assets/scss/contact.module.scss";

import headshot from "../assets/images/contact/headshot.jpg";

const Contact = () => {

  return (
    <section className="page-wrapper">
      <h1 className="section-title">Let me know if I can help you:</h1>
      <div className={styles.mainContent}>
        <div className="">
          <img
            className={styles.headshot}
            src={headshot}
            alt="Headshot of Jessica Colleu Terradas"
          />
        </div>
        <div className={styles.text}>
          <p className={styles.contactDescription}>I can assist in building teacher’s capacities by helping schools merge the latest research from cognitive science into classroom practice to lift student outcomes and engagement. I can also provide advice about pedagogy, informed-based instructional strategies, early reading instruction, adolescent literacy, and procedures for implementing successful literacy and numeracy interventions for students with learning difficulties. Let me know if I can help you. Contact me and I will be in touch with you shortly.</p>
          <a className={styles.emailMe} href="mailto:#">jessie-which-email-do-you-want-to-show-/-have-people-contact-you-on</a>
        </div>
      </div>
      <br /><br /><br />
      <div>
        <strong style={{ background: 'yellow' }}>TODO: Jess to get a domain</strong>
      </div>
    </section>
  )
};

export default Contact;