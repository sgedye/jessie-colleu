import React from "react";
import TeachingSvg from "../assets/svg/teachingSvg";
import PortfolioSvg from "../assets/svg/portfolioSvg";
import CalendarSvg from "../assets/svg/calendarSvg";
import ResearchSvg from "../assets/svg/researchSvg";

const Research = () => {
  return (
    <section className="page-wrapper">
      <div>
        <p>Research Research Research Research Research Research Research Research</p>
        <p>Research Research Research Research Research Research Research Research</p>
        <br />
        <br />
        <div style={{ width: "25px", marginLeft: '20px', display: 'inline-block'}}>
          <TeachingSvg />
          <PortfolioSvg />
          <CalendarSvg />
          <ResearchSvg />
        </div>
        <div style={{ width: "50px", marginLeft: '20px', display: 'inline-block' }}>
          <TeachingSvg />
          <PortfolioSvg />
          <CalendarSvg />
          <ResearchSvg />
        </div>
        <div style={{ width: "100px", marginLeft: '20px', display: 'inline-block' }}>
          <TeachingSvg />
          <PortfolioSvg />
          <CalendarSvg />
          <ResearchSvg />
        </div>
      </div>
    </section>
  )
}

export default Research
