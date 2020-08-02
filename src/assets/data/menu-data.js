import React from 'react';
import { GoCalendar } from 'react-icons/go';
import { GiBookCover } from 'react-icons/gi';
import { FaChalkboardTeacher, FaUserCircle } from 'react-icons/fa';
import { TiHome } from 'react-icons/ti';
import { MdEmail } from 'react-icons/md';

export default [
  { id: 0, title: 'Home', path: '/', icon: <TiHome /> },
  { id: 1, title: 'About', path: '/about', icon: <FaUserCircle /> },
  { id: 2, title: 'Research', path: '/research', icon: <GiBookCover /> },
  { id: 3, title: 'Events', path: '/events', icon: <GoCalendar /> },
  { id: 4, title: 'Consulting', path: '/consulting', icon: <FaChalkboardTeacher /> },
  // { id: 5, title: 'Resources', path: '/resources', icon: <FaInternetExplorer /> },
  { id: 6, title: 'Contact', path: '/contact', icon: <MdEmail /> }
];