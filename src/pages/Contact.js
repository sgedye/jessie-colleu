import React from 'react';
// import { useState } from 'react';
import styles from "../assets/scss/contact.module.scss";

import headshot from "../assets/images/contact/headshot.jpg";

const Contact = () => {

  return (
    <section className="page-wrapper">
      <h1 className="section-title">Let me know if I can help you:</h1>
      <div className={styles.mainContent}>
        <div className={styles.nonFormSection}>
          <img
            className={styles.headshot}
            src={headshot}
            alt="Headshot of Jessica Colleu Terradas"
          />
          <p className={styles.contactDescription}>I can assist in building teacher’s capacities by helping schools merge the latest research from cognitive science into classroom practice to lift student outcomes and engagement. I can also provide advice about pedagogy, informed-based instructional strategies, early reading instruction, adolescent literacy, and procedures for implementing successful literacy and numeracy interventions for students with learning difficulties.Let me know if I can help you. Contact me and I will be in touch with you shortly.</p>
        </div>
        <div className={styles.formSection}>
          <div className={styles.formHeader}>
            <h2 className={styles.formTitle}>Contact Jessica</h2>
            <h3 className={styles.formSubtitle}>
              Please fill out the form below:
            </h3>
          </div>
          <div className={styles.formBody}>
            {/* <div id="form-error"></div> */}
            <form id="contact-form" action="/" method="GET">
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <label className={styles.formLabel} htmlFor="name">
                    Name:
                  </label>
                  <input
                    id="form-name"
                    className={styles.formInput}
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                  />
                </li>
                <li className={styles.listItem}>
                  <label className={styles.formLabel} htmlFor="email">
                    Email:
                  </label>
                  <input
                    id="form-email"
                    className={styles.formInput}
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                  />
                </li>
                <li className={styles.listItem}>
                  <div className={styles.formDivider}></div>
                </li>
                <li className={styles.listItem}>
                  <label className={styles.formLabel} htmlFor="comments">
                    Comments:
                  </label>
                  <textarea
                    className={styles.formTextArea}
                    cols="16"
                    rows="3"
                    required
                    name="comments"
                  ></textarea>
                </li>
                <li className={styles.listItem}>
                  <input
                    className={styles.submitButton}
                    type="submit"
                    value="Submit"
                  />
                  {/* <small>or press <strong>enter</strong></small> */}
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Contact;