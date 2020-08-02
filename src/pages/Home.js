import React from "react";

import HomeImage from "../assets/images/home.jpeg";
import styles from "../assets/scss/home.module.scss";
import { FaAward, FaHandshake, FaHeartbeat } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";

function Home() {
  return (
    <section className="page-wrapper">
      <h1 className="section-title" style={{ marginBottom: '1rem' }}>Home:</h1>
      <div className={styles.imgMissionWrap}>
        <div className={styles.imageDiv}>
          <img className={styles.image} src={HomeImage} alt="jessie" />
        </div>
        <div className={styles.valuesDiv}>
          <h2 className={styles.subHeading}>Mission</h2>
          <p className={styles.mainText}>Ensuring that all students, including those with learning difficulties or from disadvantaged backgrounds, gain access to high-quality education suited to their needs.</p>
          <h2 className={styles.subHeading}>Vision</h2>
          <p className={styles.mainText}>All schools have the moral obligation to ensure that all students, regardless of background, can read fluently.</p>
          <h2 className={styles.subHeading}>Values</h2>
          <table className={styles.valueTable}>
            <tbody>
              <tr>
                <td>
                  <FaHeartbeat />
                </td>
                <td>
                  <p className={styles.mainText}><strong>Passion:</strong> I work to ensure that literacy is the highest priority in education.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <FaAward />
                </td>
                <td>
                  <p className={styles.mainText}><strong>Quality:</strong> I maintain honest, transparent relationships and accurate objective use of data.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <GiBrain />
                </td>
                <td>
                  <p className={styles.mainText}><strong>Knowledge:</strong> Accumulated scientific knowledge is the basis of excellent practice.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <FaHandshake />
                </td>
                <td>
                  <p className={styles.mainText}><strong>Connection:</strong> I work collaboratively with partner schools and stakeholders, as part of a wider movement, to lift literacy outcomes in students so that no one leaves school unable to read.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.philosophyDiv}>
        <h2 className={styles.subHeading}>Life philosophy:</h2>
        <p className={styles.mainText}>
          Jessica's life’s purpose is to make a difference to people’s lives.
          Jessica came to Australia in 2007 to complete her Masters in Anthropology on the subject of child abuse. While living in the Northern Territory, she witnessed the disadvantages faced by the Aboriginal people. This experience planted a seed which has grown into a strong desire to help improve the lives of others.<br /><br />
          Her passion is to enable disadvantaged children to achieve their full potential. She strongly believes that an education is the greatest proactive factor to make this a better world, so she completed a Masters of Education to put her passion into practice.<br /><br />
          Jessica firmly believes that it is the responsibility of teachers to help students overcome educational obstacles giving them independence and full access to life’s opportunities. She likes to be challenged which is why she went into special education. By helping the most difficult and challenging students overcome their learning barriers, she feels she can do the most good.<br /><br />
          Having had a lot of success as a teacher and being a sought-after advisor to other schools, Jessica embraces every opportunity that will develop her leadership skills further and therefore magnify and extend the positive impact of her work. Her vision of leadership is to inspire, energise and enable others to be the best educators they can be.<br /><br />
          Jessica's work truly provides her with a deep sense of purpose and reflects her values, energy and personality. Through her motivation, grit, effort, and friendly and respectful relationships, She has a positive influence. She strives to blossom into an achiever and inspirational leader by allowing the various petals of her identity to unfold. Every day she cultivates her self-confidence and professionalism, aiming to turn her vision into tangible and sustainable outcomes. As Aristotle said: “Where the needs of the world and your talents cross, there lies your vocation.”
        </p>
      </div>
    </section>
  );
};

export default Home;
