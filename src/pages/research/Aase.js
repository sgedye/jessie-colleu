import React from "react";

import newsletterAase from "../../assets/doc/AASE_Newsletter_Sem1_2020.pdf";

const Aase = () => {
  return (
    <section className="page-wrapper">
      <h1 className="section-title">Research - AASE:</h1>
      <br /><br />
      <div>
        <p>
          Jessica wrote an article in the <a href={newsletterAase} target="_blank" rel="noreferrer noopener">Australian Association of Special Education (AASE) newsletter</a>, refer to pages five though nine to see Jessica's article on Targeted Interventions.
        </p>
        <br /> <br />
        <strong style={{background: 'yellow'}}> if there is no more information to go here. pics / etc. it's probbly better to make the link on the research page go straightto the newsletter.</strong>
      </div>
    </section>
  );
};

export default Aase;
