import React from "react";

import styles from "../../assets/scss/research-rtc.module.scss";

import comoLogo from "../../assets/images/research/como_logo.png";
import growth from "../../assets/images/research/growth.jpg";
import rtcLogo from "../../assets/images/research/rtc_logo.png";
import whiteboard from "../../assets/images/research/whiteboard.jpg";
import tweet1 from "../../assets/images/research/tweet-1.jpg";
import tweet2 from "../../assets/images/research/tweet-2.jpg";
import lastImage from "../../assets/images/research/rtc-last.jpg";

const Rtc = () => {
  return (
    <section className="page-wrapper">
      <h1 className="section-title">Research - RTC:</h1>
      <br /><br />
      <div className={styles.header}>
        <h2 className={styles.headerTitle}>Research To Classroom School Project, 2019-2020</h2>
        <div className={styles.headerImages}>
          <img className={styles.headerLogo} src={rtcLogo} alt="Research To Classroom Logo" />
          <img className={styles.headerLogo} src={comoLogo} alt="Como Secondary College Logo" />
        </div>
        <div className={styles.mainContent}>
          <p className={styles.mainText}>In 2019, I was named one of 12 fellows to receive the national Commonwealth Bank Teaching Award in recognition of my success in improving literacy and numeracy outcomes in at-risk students, which was awarded in partnership with Schools Plus. Committed to help close the education gap, this philanthropic organisation especially advances the education of students in need by supporting schools in low-socio economic areas, including more than 4,600 schools across Australia. As part of the Fellowship program, my school received a $30,000 prize that allowed me to fund an innovative school project called ‘Research To Classroom’ (RTC), launched mid last year. The RTC project aims to build teacher capacity and improve students’ engagement and performance by exploring cognitive psychology and its educational implications for the classroom.</p>
          <p className={styles.mainText}>I believe teachers cannot make informed decisions about effective teaching approaches or tools to use if they do not first understand how students learn. To understand how our students learn we must understand how their brains take in, process and retrieve information as well as the numerous factors that affect these processes. Thus, nine teachers volunteered to implement and embed effective learning review practices into every lesson to maximise students’ retention, recall and integration of information – in other words to make sure they learn as much as possible, and retain that knowledge as long as possible. Acting as an instructional coach to my colleagues, I make myself available for teachers to facilitate feedback and support change.</p>
          <img className={styles.mainImage} src={growth} alt="Teachers interacting" />
          <p className={styles.mainText}>In semester One (2020), participants split into teams of three (triads) to carry out instructional rounds, based on the research of Jim Knight. Teachers took turns to observe each other delivering a lesson in which they were trialling a new evidence-based teaching practice. Observers then provided feedback in a supportive environment, enabling teachers to reflect on the benefits of these new practices and their applicability to particular lessons.</p>
          <img className={styles.mainImage} src={whiteboard} alt="Teacher writing on whiteboard in a classroom filled with students" />
          <p className={styles.mainText}>This initiative has developed trust between the team members, allowing us to investigate connections between observation data, changes in teaching practice and professional renewal, always focusing on the core purpose of teaching: student learning. It has also revealed how incredibly difficult it is to change our practice as teachers and learn new skills, reminding us what it feels like to be a student. Modifying practice requires making a deliberate decision to make a change and then to persist with it until our default mode and habits shift. Each member has shown a great commitment to trial, improve their teaching practices and positive feedback was collected from students.</p>
          <p className={styles.mainText}>To date, the RTC project is still up and going and teachers are encouraged to embrace new challenges in this post pandemic recovery.</p>
          <div className={styles.tweets}>
            <img src={tweet1} alt="Jessica's tweet about the RTC project" />
            <img src={tweet2} alt="Jessica's tweet about the RTC triads" />
          </div>
          <img className={styles.mainImage} src={lastImage} alt="Workshop delivered by Ass. Prof. L. Hammond" />
          <p className={styles.mainText}>Image of a workshop delivered by Associate Professor Lorraine Hammond from Edith Cowan University.</p>
        </div>
      </div>
    </section>
  );
};

export default Rtc;
