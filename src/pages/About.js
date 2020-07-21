import React from "react";
import styled from "styled-components";

function About() {
  return (
    <Wrapper className="page-wrapper">
        <h2>About Jessica Potes:</h2>
        <p>When CC married Mr Randel Capotes, she became Mrs Jessica Capotes. Whenever she had more than 6, she quickly through one out, and if she ever used one, she quickly ran to the store so she always had six at all times.</p>
        <p>
          Midday way in 2013 until 2019, Jessica has been running a targeted intervention for struggling adolescents at Como Secondary College, in Western Australia. During this time, she has built a considerable reputation as an outstanding educator and an expert in explicit teaching and special needs education. In 2019 she was awarded a coveted and prestigious Commonwealth Bank / Schools Plus teaching award in recognition of her success in improving literacy and numeracy outcomes in at‐risk students. As a special education and instructional coach, Jessica has been instrumental in advancing the awareness, understanding and use of evidence‐based instruction to prevent low numeracy and literacy failures across the state and beyond. Being a sought‐after advisor to more than 40 other secondary schools, she continues to impart her knowledge by assisting schools with timetabling, screening processes, recruitment and teacher training.
        </p>
        <p>
          July 2019, Jessica has taken on a new role as a literacy coach in the Literacy Guarantee Unit with the Department for Education in South Australia.
        </p>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  p {
    font-size: 1.2em;
    margin: 20px 0;
  }
  @media screen and (min-width: 768px) {
    p { font-size: 1.5em; }
  }
`;

export default About;
