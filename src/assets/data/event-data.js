import React from "react";
import perthSSP from "../images/events/perthSSP.jpeg";
import researchEd from "../images/events/researchEd.png";
import webinars2020 from "../images/events/webinars2020.jpg";
import uniteSPLD from "../images/events/uniteSPLD.png";

export default [
  {
    id: "event-0",
    name: "Perth ResearchED",
    date: "October 17, 2020",
    location: "Western Australia",
    image: researchEd,
    description: (
      <p>
        The first researchED Perth, Western Australia in October 2020. This
        event provides an exciting opportunity for teachers, researchers and
        academics to get together to discuss ways in which education in
        Australia can use evidence to drive better teaching and learning.
        <br />
        <br />
        Sessions are designed for anyone interested in finding out what evidence
        tells us about education, of any level, beginner or expert.There will be
        sessions on literacy, cognitive psychology, best teaching practice,
        language and learning, mental health, and many more.
        <br />
        <br />
        The conference will be opened by the Director General of Education in
        Western Australia, Lisa Rodgers.
      </p>
    ),
    links: [
      {
        id: "event-0-link-0",
        title: "Buy your ticket",
        src:
          "https://dsf.net.au/our-services/professional-learning/event-details/researched-perth-3bd743bf",
      },
    ],
  },
  {
    id: "event-1",
    name: "Perth Sharing Successful Practice",
    date: "October 9, 2020",
    location: "Western Australia",
    image: perthSSP,
    description: (
      <p>
        Perth Sharing Successful Practice brings together academics,
        administrators and classroom teachers who demonstrate evidence-based
        practice. Keynote Speakers: Emeritus Professor Bill Louden, Professor
        Stephen Dinham, Dr Catherine Scott, Dr Jennifer Buckingham, Associate
        Professor Lorraine Hammond and Ollie Lovell.
      </p>
    ),
    links: [
      {
        id: "event-1-link-0",
        title: "Buy your ticket",
        src:
          "https://www.eventbrite.com.au/e/perth-sharing-successful-practice-tickets-86985970379",
      },
    ],
  },
  {
    id: "event-2",
    name: "Australian Curriculum Studies Association - ACSA Webinars",
    date: "2020 - Various Dates",
    location: "Online",
    image: webinars2020,
    description: (
      <p>
        ACSA offers a range of valued professional learning topics delivered via
        our webinar medium and 2020 will be their biggest year yet with over 30
        hours of PD available!
        <br />
        <br />
        They especially offer a dedicated program on Wednesday evenings centred
        around School and Curriculum leadership. Fourteen hours of learning will
        be available and presented by accomplished and award-winning leaders in
        schools.
        <br />
        <br />
        Jessica is{" "}
        <a
          href="https://www.acsa.edu.au/pages/page770.asp"
          target="_blank"
          rel="noreferrer noopener"
        >
          presenting a webinar
        </a>{" "}
        titled{" "}
        <i>
          Best practices in literacy and literacy interventions for older
          struggling students in secondary schools
        </i>{" "}
        at 7-8pm AEST on August 26, 2020.
      </p>
    ),
    links: [
      {
        id: "event-2-link-0",
        title: "Register Online",
        src: "https://www.acsa.edu.au/pages/page752.asp",
      },
      {
        id: "event-2-link-1",
        title: "Downloadable Program",
        src:
          "https://www.acsa.edu.au/pages/images/ACSA%202020%20webinars%20A4%20FINAL.pdf",
      },
    ],
  },
  {
    id: "event-3",
    name: "UNITE SPLD Conference",
    date: "June 24-25, 2020",
    location: "Online",
    image: uniteSPLD,
    description: (
      <p>
        The online UNITE SPLD Conference seeks to bring together researchers,
        parents, teachers and practitioners working with children with Specific
        Learning Differences (SpLD) and special educational needs.
        <br />
        <br />
        This conference will showcase research that covers aspects of behaviour,
        identification, early intervention, technology, multilingualism,
        assessment and much more for children and adults with special learning
        needs. Research and practical solutions will be presented in short,
        engaging and entertaining sessions accompanied by poster presentations.
        And what’s most exciting – there are several opportunities to talk
        directly with researchers who are making a difference internationally.
      </p>
    ),
    links: [
      {
        id: "event-3-link-0",
        title: "Programme Booklet",
        src:
          "https://www.das.org.sg/images/events/UNITE2020/UNITE-2020-ProgrammeBooklet.pdf",
      },
    ],
  },
]