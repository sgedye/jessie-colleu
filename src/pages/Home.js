import React from "react";
import styled from "styled-components";
import HomeImage from "../assets/images/home.jpeg";

import { FaHandshake, FaAward } from "react-icons/fa"
import { GiPoliceBadge, GiBrain } from "react-icons/gi"

function Home() {
  return (
    <Wrapper className="page-wrapper">
      <img src={HomeImage} alt="jessie" style={{ width: "100%", maxWidth: "300px" }}/>
      <h2>Mission</h2>
      <p>
        I work with schools to eradicate adolescent illiteracy so that no
        student leaves school unable to read well.
      </p>
      <h2>Vision</h2>
      <p>
        All schools have the moral obligation to ensure that all students,
        regardless of background, can read fluently.
      </p>
      <h2>Values</h2>
      <ValueTable>
        <tbody>
          <tr>
            <td>
              <FaAward />
            </td>
            <td>
              <p>
                Commitment I work to ensure that literacy is the highest
                priority in education.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <GiPoliceBadge />
            </td>
            <td>
              <p>
                Integrity I am committed to honest, transparent relationships
                and accurate objective use of data.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <GiBrain />
            </td>
            <td>
              <p>
                Knowledge accumulated scientific knowledge is the basis of
                excellent practice.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <FaHandshake />
            </td>
            <td>
              <p>
                Partnership I work collaboratively with partner schools, as part
                of a wider movement, to achieve my mission.
              </p>
            </td>
          </tr>
        </tbody>
      </ValueTable>
      <strong style={{ fontSize: "1.2em", color: "blue" }}>
        JESS: Write a paragraph about my life philosophy/moral purpose.
      </strong>
      <br /><br /><hr /><hr /><br />
      <strong style={{ fontSize: "1.2em", color: "red" }}>I'll update this section again (formatting) once all the text is provided.</strong>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  text-align: center;
  h2 {
    margin: 20px 0 5px 0;
    text-align: center;
  }
`;

const ValueTable = styled.table`
  margin: 0 auto 30px auto;
  tbody {
    * {
      margin: 5px 0;
    }
    td:first-of-type {
      width: 35px;
    }
  }
  svg {
    font-size: 32px;
  }
  p {
    text-align: left;
    padding-left: 5px;
  }
  @media screen and (min-width: 600px) {
    & {
      width: 75%;
    }
  }
  @media screen and (min-width: 1024px) {
    & {
      width: 50%;
    }
  }
`

export default Home
