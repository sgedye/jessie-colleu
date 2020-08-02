import React from "react";

import dsf from "../assets/images/about/dsf.png";
import lda from "../assets/images/about/lda.png";
import macquarieUni from "../assets/images/about/macquarie_uni.png";
import thinkForward from "../assets/images/about/think_forward.png";
import trl from "../assets/images/about/trl.png";

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
          <p className={styles.text}>Midday way in 2013 until 2019, Jessica has been running a targeted intervention for struggling adolescents at <a href="https://www.como.wa.edu.au/" target="_blank" rel="noopener noreferrer">Como Secondary College</a>, in Western Australia. During this time, she has built a considerable reputation as an outstanding educator and an expert in explicit teaching and special needs education.</p>
          <p className={styles.text}>In 2019 she was awarded a coveted and prestigious <a href="https://teachingawards.com.au/teaching-fellows" target="_blank" rel="noopener noreferrer">Commonwealth Bank / Schools Plus teaching award</a> in recognition of her success in improving literacy and numeracy outcomes in at‐risk students. As a special education and instructional coach, Jessica has been instrumental in advancing the awareness, understanding and use of evidence‐based instruction to prevent low numeracy and literacy failures across the state and beyond.</p>
          <p className={styles.text}>Being a sought‐after advisor to more than 50 other secondary schools, she continues to impart her knowledge by assisting schools with timetabling, screening processes, recruitment and teacher training.</p>
          <p className={styles.text}>Since July 2020, Jessica has taken on a new role as a literacy coach in the <a href="https://www.education.sa.gov.au/teaching/curriculum-and-teaching/numeracy-and-literacy/literacy-guarantee" target="_blank" rel="noreferrer noopener">Literacy Guarantee Unit</a> with the Department for Education in South Australia. The LGU team is made of 14 highly skilled teachers in literacy acquisition who collaborate with school leaders, teachers and other professionals to extend their knowledge of evidence-based pedagogies that progress reading development and close the gap for emergent readers who may be experiencing difficulties.</p>
          <br />
          <p className={styles.text}>The Literacy Guarantee Unit deliver a range of services, including:</p>
          <ul className={styles.list}>
            <li>Use school assessment and other data to improve teaching and learning;</li>
            <li>Provide professional learning focused on early reading instruction and intervention for students with learning difficulties;</li>
            <li>Organise conferences providing professional development opportunities for teachers; and</li>
            <li>Direct coaching for teachers, including support in teaching explicit synthetic phonics and interpretation of the Phonics Screening Check (PSC) data to inform practice and design explicit teaching programs that meet the needs of all learners. </li>
          </ul>
        </div>
      </div>
      <br />
      <div>
        <p className={styles.text}>Professional Associations:</p>
        <div className={styles.linksWrapper}>
          <a className={styles.card} href="https://thinkforwardeducators.org/" target="_blank" rel="noopener noreferrer">
            <img className={styles.cardImg} src={thinkForward} alt="Think Forward Educators Logo" style={{ backgroundColor: 'grey' }} />
            {/* <p className={styles.cardTitle}>Think Forward Educators</p> */}
          </a>
          <a className={styles.card} href="http://www.cogsci.mq.edu.au/ddoll/" target="_blank" rel="noopener noreferrer">
            <img className={styles.cardImg} src={macquarieUni} alt="Macquarie University Logo" />
            {/* <p className={styles.cardTitle}>Macquarie University</p> */}
          </a>
          <a className={styles.card} href="https://www.thereadingleague.org/" target="_blank" rel="noopener noreferrer">
              <img className={styles.cardImg} src={trl} alt="The Reading League Logo" />
            {/* <p className={styles.cardTitle}>The Reading League</p> */}
          </a>
          <a className={styles.card} href="https://www.ldaustralia.org/" target="_blank" rel="noopener noreferrer">
            <img className={styles.cardImg} src={lda} alt="Learning Difficulties Australia Logo" />
            {/* <p className={styles.cardTitle}>Learning Difficulties Australia</p> */}
          </a>
          <a className={styles.card} href="https://dsf.net.au/" target="_blank" rel="noopener noreferrer">
            <img className={styles.cardImg} src={dsf} alt="Dyslexia SPELD Foundation Logo" />
            {/* <p className={styles.cardTitle}>Dyslexia SPELD Foundation</p> */}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
