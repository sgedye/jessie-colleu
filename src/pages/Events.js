import React from "react";

import eventData from '../assets/data/event-data';
import styles from "../assets/scss/events.module.scss";

import { FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa"

const Events = () => {
  return (
    <section className="page-wrapper" style={{ background: 'lightblue'}}>
      <h2>Events:</h2>
      <br />
      {
        eventData.map(({ id, name, date, location, image, description, links }) => (
          <div key={id} className={styles.eventCard}>
            <div className={styles.header}>
              <p className={styles.name}>{name}</p>
              <code className={styles.date}>{date}</code>
              <p className={styles.location}>
                <FaMapMarkerAlt />
                {location}
              </p>
            </div>
            <div className={styles.imageDiv}>
              <img className={styles.image} src={image} alt={name} />
            </div>
            <div className={styles.main}>
              <p className={styles.description}>{description}</p>
              {
                links.map(({ id, title, src }) => (
                  <a key={id} className={styles.link} href={src} target="_blank" rel="noreferrer noopener">
                    {title}
                    <FaExternalLinkAlt />
                  </a>
                ))
              }
            </div>
          </div>
        ))
      }
    </section>
  )
}

export default Events
