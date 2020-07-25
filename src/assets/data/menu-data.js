import React from 'react';
import { GoCalendar } from 'react-icons/go';
import { GiBookCover } from 'react-icons/gi';
import { FaChalkboardTeacher, FaUserCircle, FaInternetExplorer } from 'react-icons/fa';
import { TiHome } from 'react-icons/ti';
import { MdEmail } from 'react-icons/md';

export default [
  { id: 0, title: 'Home', path: '/', icon: <TiHome /> },
  { id: 1, title: 'About', path: '/about', icon: <FaUserCircle /> },
  { id: 2, title: 'Research', path: '/research', icon: <GiBookCover /> },
  { id: 3, title: 'Events', path: '/events', icon: <GoCalendar /> },
  { id: 4, title: 'Consulting', path: '/consulting', icon: <FaChalkboardTeacher /> },
  { id: 5, title: 'Resources', path: '/resources', icon: <FaInternetExplorer /> },
  { id: 6, title: 'Contact', path: '/contact', icon: <MdEmail /> }
];
// export default [
//   { id: 0, title: 'Home', path: '/', icon: 'ion-ios-home' },
//   { id: 1, title: 'About', path: '/about', icon: 'ion-ios-business' },
//   { id: 2, title: 'Research', path: '/research', icon: 'ion-ios-bonfire' },
//   { id: 3, title: 'Events', path: '/events', icon: 'ion-ios-bonfire' },
//   { id: 4, title: 'Resources', path: '/resources', icon: 'ion-ios-bonfire' },
//   { id: 5, title: 'Consulting', path: '/consulting', icon: 'ion-ios-bonfire' },
//   { id: 6, title: 'Contact', path: '/contact', icon: 'ion-ios-megaphone' }
// ];