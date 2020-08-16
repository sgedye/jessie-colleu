import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import publicationsData from "../../assets/data/publications-data"
import styles from "../../assets/scss/events.module.scss"
import { FaExternalLinkAlt } from "react-icons/fa"

gsap.registerPlugin(ScrollTrigger)

const Publications = () => {
  const publicationsListRef = useRef([])
  publicationsListRef.current = []

  useEffect(() => {
    publicationsListRef.current.forEach((publication, index) => {
      gsap.fromTo(
        publication,
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: 1.5,
          ease: "none",
          scrollTrigger: {
            id: `publications-${index}`,
            trigger: publication,
            start: `top bottom-=200`,
            toggleActions: `play none none none`,
          },
        }
      )
    })
  }, [])

  const addToRef = publication => {
    if (publication && !publicationsListRef.current.includes(publication)) {
      publicationsListRef.current.push(publication)
    }
  }

  return (
    <section className="page-wrapper">
      <h1 className="section-title">Research - Publications:</h1>
      <br />
      {publicationsData.map(
        ({ id, title, date, pages, image, imageAlt, description, links }) => (
          <div key={id} ref={addToRef} className={styles.eventCard}>
            <div className={styles.header}>
              <p className={styles.name}>{title}</p>
              <p className={styles.date}>{date}</p>
              <p className={styles.location}>{pages}</p>
            </div>
            <div className={styles.imageDiv}>
              <img className={styles.image} src={image} alt={imageAlt} />
            </div>
            <div className={styles.main}>
              <div className={styles.description}>{description}</div>
              <a
                className={styles.link}
                href={links.src}
                target="_blank"
                rel="noreferrer noopener"
              >
                {links.title}
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        )
      )}
      <br />
      {/* <div style={{ maxWidth: "50%" }}>
        <h2>
          Targeted interventions | A lifeline for students at educational risk
          and with special education needs
        </h2>
        <strong>Semester 1, 2020 | Pages 5-9</strong>
        <h3>Australian Association of Special Education (AASE) newsletter</h3>
        <p>
          Jessica wrote an article on{" "}
          <a href={newsletterAase} target="_blank" rel="noreferrer noopener">
            Targeted Interventions
          </a>{" "}
          in the Semester 1, 2020 Australian Association of Special Education
          (AASE) newsletter.
        </p>
        <img src={newsletterAase} alt="AASE Semester 1, 2020 Newsletter" />
        <br /> <br />
        <br /> <br />
        <br /> <br />
        <br /> <br />
      </div> */}
    </section>
  )
}

export default Publications
