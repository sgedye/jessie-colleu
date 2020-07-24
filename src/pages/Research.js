import React from "react";
import TeachingSvg from "../assets/svg/teachingSvg";
import PortfolioSvg from "../assets/svg/portfolioSvg";
import CalendarSvg from "../assets/svg/calendarSvg";
import ResearchSvg from "../assets/svg/researchSvg";
import { FaCalendarAlt, FaBook, FaUserAlt, FaPortrait, FaChalkboard, FaChalkboardTeacher, FaInternetExplorer, FaSearch, FaUserCircle, FaUserTag, FaUserTie, FaRegUserCircle, FaInfoCircle, FaHome } from "react-icons/fa";
import { GiTeacher, GiBookCover, GiBookPile, GiBookshelf, GiOpenBook, GiBlackBook, GiWhiteBook, GiSecretBook, GiPublicSpeaker } from 'react-icons/gi';
import { TiInfo, TiHomeOutline } from 'react-icons/ti'
// Calendars
import { FaRegCalendarAlt } from 'react-icons/fa'
import { GoCalendar, GoInfo, GoHome } from 'react-icons/go'
import { GiCalendar } from 'react-icons/gi'
import { AiOutlineHome } from 'react-icons/ai'
import { IoIosHome } from 'react-icons/io'
import { TiHome } from 'react-icons/ti'

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
        <h2>Calendars</h2>
        <div style={{ fontSize: "25px", margin: '20px', display: 'inline-block', background: 'lightblue'}}>
          <FaCalendarAlt />
          <CalendarSvg />
          <FaRegCalendarAlt />
          <GoCalendar />
          <GiCalendar />
        </div>
        <br />
        <br />
        <hr />
        <hr />
        <br />
        <br />
        <h2>Research</h2>
        <div style={{ fontSize: "25px", width: "25px", height: '25px', margin: '20px', display: 'inline-block' }}>
          <ResearchSvg />
          <FaBook />
          <GiBookCover />
          <GiBookPile />
          <GiBookshelf />
          <GiOpenBook />
          <GiBlackBook />
          <GiWhiteBook />
          <GiSecretBook />
          <FaInternetExplorer />
          <FaSearch />
        </div>
        <br />
        <br />
        <hr />
        <hr />
        <br />
        <br />
        <h2>Consulting</h2>
        <div style={{ fontSize: "25px", width: "25px", height: '25px', margin: '20px', display: 'inline-block' }}>
          <GiPublicSpeaker />
          <GiTeacher />
          <FaChalkboardTeacher />
          <FaChalkboard />
          <TeachingSvg />
        </div>
        <br />
        <br />
        <hr />
        <hr />
        <br />
        <br />
        <h2>About</h2>
        <div style={{ fontSize: "25px", width: "25px", height: '25px', margin: '20px', display: 'inline-block' }}>
          <FaPortrait />
          <FaUserAlt />
          <PortfolioSvg />
          <FaUserCircle />
          <FaUserTag />
          <FaUserTie />
          <FaRegUserCircle />
          <FaInfoCircle />
          <GoInfo />
          <TiInfo />
        </div>
        <br />
        <br />
        <hr />
        <hr />
        <br />
        <br />
        <h2>Home</h2>
        <div style={{ fontSize: "25px", width: "25px", height: '25px', margin: '20px', display: 'inline-block' }}>
          <FaHome />
          <IoIosHome />
          <TiHomeOutline />
          <GoHome />
          <AiOutlineHome />
          <TiHome />
          <TiHomeOutline />
        </div>
      </div>
    </section>
  )
}

export default Research
