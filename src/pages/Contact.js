import React from 'react';
import styles from "../assets/scss/contact.module.scss";

const Contact = () => (
  <section className="page-wrapper">
    <h1 className="section-title">We'd love to hear from you:</h1>
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>
        <h2 className={styles.formTitle}>Contact Jessica</h2>
        <h3 className={styles.formSubtitle}>Please fill out the form below:</h3>
      </div>
      <div className={styles.postalColours}></div>
      <div className={styles.formBody}>
        <form action="#">
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <label className={styles.formLabel} for="name">Name:</label>
              <input className={styles.formInput} type="text" name="name" placeholder="Enter your full name" />
            </li>
            <li className={styles.listItem}>
              <label className={styles.formLabel} for="email">Email:</label>
              <input className={styles.formInput} type="email" name="email" placeholder="Enter your email" />
            </li>
            <li className={styles.listItem}>
              <div className={styles.formDivider}></div>
            </li>
            <li className={styles.listItem}>
              <label className={styles.formLabel} for="comments">Comments:</label>
              <textarea className={styles.formTextArea} cols="16" rows="3" name="comments"></textarea>
            </li>
            <li className={styles.listItem}>
              <input className={styles.submitButton} type="submit" value="Submit" />
              {/* <small>or press <strong>enter</strong></small> */}
            </li>
          </ul>
        </form>
      </div>
      <div className={styles.postalColours}></div>
    </div>
  </section>
);

export default Contact;