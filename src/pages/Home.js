import React from "react";
import styled from "styled-components";
import HeroImage from "../assets/images/hero-image.jpeg";

function Home() {
  return (
    <Wrapper className="page-wrapper">
      <h2>Home</h2>
      <img src={HeroImage} alt="jessie" width="200px" />
      <h2>Mission</h2>
      <p>I work with schools to eradicate adolescent illiteracy so that no student leaves school unable to read well.</p>
      <h2>Vision</h2>
      <p>All schools have the moral obligation to ensure that all students, regardless of background, can read fluently.</p>
      <h2>Values</h2>
      <table>
        <tbody>
          <tr>
            <td></td>
            <td>
              Commitment I work to ensure that literacy is the highest priority in education.
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              Integrity I am committed to honest, transparent relationships and accurate objective use of data.
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              Knowledge accumulated scientific knowledge is the basis of excellent practice.
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              Partnership I work collaboratively with partner schools, as part of a wider movement, to achieve my mission.
            </td>
          </tr>
        </tbody>
      </table>
      <strong style={{'fontSize': '1.2em', 'color': 'blue'}}>JESS: Write a paragraph about my life philosophy/moral purpose.</strong>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  text-align: center;
`;

export default Home
