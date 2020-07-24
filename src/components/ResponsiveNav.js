import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ResponsiveNav ({ navLinks, background, hoverBackground, linkColor, logo }) {
  const [hoverIndex, setHoverIndex] = useState(-1)
  const [navOpen, setNavOpen] = useState(false)

  useEffect(() => {
    document.getElementById('logo').classList.toggle('logo-roll');
  }, [navOpen])

  return (
    <nav
      className="responsive-nav"
      style={{ background: background || "#222" }}
    >
      <figure onClick={() => setNavOpen(!navOpen)}>
        <img id="logo" src={logo} height="45px" width="45px" alt="Logo-Nav-Toggler" />
      </figure>
      <h1>Jessie</h1>
      <ul
        style={{ background: background || "#222" }}
        className={navOpen ? "active" : ""}
      >
        {navLinks.map(({ id, path, title, icon }) => (
          <li
            key={id}
            onMouseEnter={() => setHoverIndex(id)}
            onMouseLeave={() => setHoverIndex(-1)}
            style={{
              background: hoverIndex === id ? hoverBackground || "#999" : "",
            }}
          >
            <Link to={path} style={{ color: linkColor || "#eee" }} onClick={() => setNavOpen(false)}>
              {title}
              {icon}
              {/* { <FaCalendarAlt />} */}
              {/* <i className={icon} /> */}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default ResponsiveNav;