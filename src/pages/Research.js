import React from "react";
import TeachingSvg from "../assets/svg/teachingSvg";
import PortfolioSvg from "../assets/svg/portfolioSvg";
import CalendarSvg from "../assets/svg/calendarSvg";
import ResearchSvg from "../assets/svg/researchSvg";
import { FaCalendarAlt, FaBook, FaUserAlt, FaPortrait, FaChalkboard, FaChalkboardTeacher, FaInternetExplorer, FaSearch, FaUserCircle, FaUserTag, FaUserTie, FaRegUserCircle, FaInfoCircle, FaHome } from "react-icons/fa";
import { GiTeacher, GiBookCover, GiBookPile, GiBookshelf, GiOpenBook, GiBlackBook, GiWhiteBook, GiSecretBook, GiPublicSpeaker, GiMailbox, GiMegaphone } from 'react-icons/gi';
import { TiInfo, TiHomeOutline } from 'react-icons/ti'
// Calendars
import { FaRegCalendarAlt } from 'react-icons/fa'
import { GoCalendar, GoInfo, GoHome, GoMegaphone } from 'react-icons/go'
import { GiCalendar } from 'react-icons/gi'
import { AiOutlineHome, AiOutlineMail, AiTwotoneMail } from 'react-icons/ai'
import { IoIosHome, IoIosContact, IoMdContact, IoMdMail, IoIosMailOpen, IoIosMegaphone } from 'react-icons/io'
import { TiHome } from 'react-icons/ti'
import { MdEmail } from 'react-icons/md'
import Image from '../assets/images/aaaaa.jpeg'


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
        <div>
          <h2>Events</h2>
          <img src={Image} width="auto" height="500px" alt='blah' />
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
          <IoIosContact />
          <IoMdContact />
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
        <br />
        <br />
        <hr />
        <hr />
        <br />
        <br />
        <h2>Contact</h2>
        <div style={{ fontSize: "25px", width: "25px", height: '25px', margin: '20px', display: 'inline-block' }}>
          <MdEmail />
          <AiOutlineMail />
          <AiTwotoneMail />
          <IoMdMail />
          <GiMailbox />
          <IoIosMailOpen />
          <IoIosMegaphone />
          <GoMegaphone />
          <GiMegaphone />
        </div>
      </div>
    </section>
  )
}

export default Research
