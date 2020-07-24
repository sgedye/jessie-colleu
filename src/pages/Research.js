import React from "react";
import TeachingSvg from "../assets/svg/teachingSvg";
import PortfolioSvg from "../assets/svg/portfolioSvg";
import CalendarSvg from "../assets/svg/calendarSvg";
import ResearchSvg from "../assets/svg/researchSvg";
import { FaCalendarAlt, FaBook, FaUserAlt, FaPortrait, FaChalkboard, FaChalkboardTeacher } from "react-icons/fa";
import { GiTeacher, GiBookCover } from 'react-icons/gi';
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
        <br />
        <br />
        <hr />
        <hr />
        <br />
        <br />
        <div style={{ fontSize: "25px", marginLeft: '20px', display: 'inline-block' }}>
          <FaCalendarAlt />
          <FaBook />
          <GiBookCover />
          <FaPortrait />
          <FaUserAlt />
          <FaChalkboard />
          <FaChalkboardTeacher />
          <GiTeacher />
        </div>
      </div>
    </section>
  )
}

export default Research
