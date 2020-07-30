import React from "react";

import styles from "../assets/scss/about.module.scss";

// import JessicaImage from "../assets/images/jessica-blue.jpeg"
import Jessica from "../assets/images/about/jessica.jpg";

function About() {
  return (
    <section className="page-wrapper">
      <h1 className="section-title">About Jessica Potes:</h1>
      <div className={styles.container}>
        <div className={styles.imgDiv}>
          <img className={styles.image} src={Jessica} alt="Jessica in a blue dress" />
        </div>
        <div className={styles.textDiv}>
          <p className={styles.text}>
            Midday way in 2013 until 2019, Jessica has been running a targeted intervention for struggling adolescents at <a href="https://www.como.wa.edu.au/" target="_blank" rel="noopener noreferrer">Como Secondary College</a>, in Western Australia. During this time, she has built a considerable reputation as an outstanding educator and an expert in explicit teaching and special needs education.<br /><br />
            In 2019 she was awarded a coveted and prestigious <a href="https://teachingawards.com.au/teaching-fellows" target="_blank" rel="noopener noreferrer">Commonwealth Bank / Schools Plus teaching award</a> in recognition of her success in improving literacy and numeracy outcomes in at‐risk students. As a special education and instructional coach, Jessica has been instrumental in advancing the awareness, understanding and use of evidence‐based instruction to prevent low numeracy and literacy failures across the state and beyond.<br /><br />
            Being a sought‐after advisor to more than 40 other secondary schools, she continues to impart her knowledge by assisting schools with timetabling, screening processes, recruitment and teacher training.<br /><br />
            Since July 2020, Jessica has taken on a new role as a literacy coach in the <a href="https://www.education.sa.gov.au/teaching/curriculum-and-teaching/numeracy-and-literacy/literacy-guarantee" target="_blank" rel="noreferrer noopener">Literacy Guarantee Unit</a> with the Department for Education in South Australia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
