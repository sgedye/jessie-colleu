import React from 'react';
// import { useState } from 'react';
import styles from "../assets/scss/contact.module.scss";

const Contact = () => {
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [message, setMessage] = useState('')
  // const [errorMessage, setErrorMessage] = useState('')

  // const formSubmit = (e) => {
  //   e.preventDefault()
  //   console.log("sdfjsofiwejfoisdhosdij")
  //   const form = document.getElementById("contact-form");
  //   const name = document.getElementById("form-name");
  //   // const email = document.getElementById("form-email");
  //   const error = document.getElementById("form-error");

  //   form.addEventListener('submit', e => {
  //     const errorMessages = [];
  //     if (name.value.includes(/\d/)) {
  //       errorMessages.push('You name must contain letters only')
  //     }
  //     if (errorMessages.length > 0) {
  //       e.preventDefault();
  //       error.innerText = errorMessages.join(', ');
  //     }
  //     console.log('hi')
  //   });
  // }
  return (
    <section className="page-wrapper">
      <h1 className="section-title">We'd love to hear from you:</h1>
      <div className={styles.formContainer}>
        <div className={styles.formHeader}>
          <h2 className={styles.formTitle}>Contact Jessica</h2>
          <h3 className={styles.formSubtitle}>Please fill out the form below:</h3>
        </div>
        <div className={styles.formBody}>
          {/* <div id="form-error"></div> */}
          <form id="contact-form" action="/" method="GET">
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <label className={styles.formLabel} htmlFor="name">Name:</label>
                <input id='form-name' className={styles.formInput} type="text" name="name" required placeholder="Enter your name" />
              </li>
              <li className={styles.listItem}>
                <label className={styles.formLabel} htmlFor="email">Email:</label>
                <input id='form-email' className={styles.formInput} type="email" name="email" required placeholder="Enter your email" />
              </li>
              <li className={styles.listItem}>
                <div className={styles.formDivider}></div>
              </li>
              <li className={styles.listItem}>
                <label className={styles.formLabel} htmlFor="comments">Comments:</label>
                <textarea className={styles.formTextArea} cols="16" rows="3" required name="comments"></textarea>
              </li>
              <li className={styles.listItem}>
                <input className={styles.submitButton} type="submit" value="Submit" />
                {/* <small>or press <strong>enter</strong></small> */}
              </li>
            </ul>
          </form>
        </div>
      </div>
      <br /><br />
      <hr /><hr />
      <br /><br />
      <h1 style={{ fontSize: '2em', color: 'darkred', textShadow: '1px 2px white'}}>
        Change the header image of the form<br />
        Add something else on this page,<br /> 
        maybe location or social media.<br />
        Maybe add aboriginal 'support' flags or something.

        ** Add twitter and linked in...
        ** Work email jessica.colleuterradas@sa.gov.au
        ** Form should go to : Jessica.colleut@gmail.com
      </h1>
      <br /><br /><hr /><hr /><br />
      <h1 style={{ fontSize: "1.2em", color: "red" }}>Add a reCapture https://www.npmjs.com/package/react-recaptcha</h1>
      <h1 style={{ fontSize: "1.2em", color: "blue" }}>Need a domain first.</h1>
      <br /><br />
      <br /><br />
      <br /><br />
      <br /><br />
    </section>
  );
};

export default Contact;