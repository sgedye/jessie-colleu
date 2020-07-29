import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import eventData from '../assets/data/event-data';
import styles from "../assets/scss/events.module.scss";

import { FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa"
gsap.registerPlugin(ScrollTrigger);

const Events = () => {

  const eventListRef = useRef([]);
  eventListRef.current = [];

  useEffect(() => {
    eventListRef.current.forEach((event, index) => {
      gsap.fromTo(event, {
        autoAlpha: 0
      }, {
        autoAlpha: 1,
        duration: 1.5,
        ease: 'none',
        scrollTrigger: {
          id: `event-${index}`,
          trigger: event,
          start: `top bottom-=200`,
          toggleActions: `play none none none`,
        }
      });
    })
  }, [])

  const addToRef = event => {
    if (event && !eventListRef.current.includes(event)) {
      eventListRef.current.push(event);
    }
  }

  return (
    <section className="page-wrapper">
      <h1 className="section-title">What's on:</h1>
      <br />
      {
        eventData.map(({ id, name, date, location, image, description, links }) => (
          <div key={id} ref={addToRef} className={styles.eventCard}>
            <div className={styles.header}>
              <p className={styles.name}>{name}</p>
              <p className={styles.date}>{date}</p>
              <p className={styles.location}>
                <FaMapMarkerAlt />
                {location}
              </p>
            </div>
            <div className={styles.imageDiv}>
              <img className={styles.image} src={image} alt={name} />
            </div>
            <div className={styles.main}>
              <div className={styles.description}>{description}</div>
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
  );
};

export default Events;
