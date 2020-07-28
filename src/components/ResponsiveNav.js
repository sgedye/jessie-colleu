import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function ResponsiveNav ({ navLinks, background, hoverBackground, linkColor, logo }) {
  const [hoverIndex, setHoverIndex] = useState(-1)
  const [navOpen, setNavOpen] = useState(false)

  useEffect(() => {
    document.getElementById('logo').classList.toggle('logo-roll');
  }, [navOpen])

  return (
    <nav
      className="responsive-nav"
      style={{ backgroundColor: background || "#003399" }}
    >
      <figure onClick={() => setNavOpen(!navOpen)}>
        <img id="logo" src={logo} height="45px" width="45px" alt="Logo-Nav-Toggler" />
      </figure>
      <h1>Jessica</h1>
      <ul
        style={{ backgroundColor: background || "#003399" }}
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
            <NavLink to={path} exact style={{ color: linkColor || "#eee" }} activeStyle={{ color: 'green' }} onClick={() => setNavOpen(false)}>
              {title}
              {/* <i style={{ textShadow: "1px 3px red" }} >{icon}</i> */}
              {icon}
              {/* { <FaCalendarAlt />} */}
              {/* <i className={icon} /> */}
              {/* <i class="fa fa-user-circle" aria-hidden="true"></i> */}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default ResponsiveNav;