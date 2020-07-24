import React from 'react'
import EventsCalendar from '../svg/calendarSvg'
import { FaCalendarAlt, FaRegCalendarAlt } from 'react-icons/fa'
import { GoCalendar } from 'react-icons/go'
import { GiCalendar } from 'react-icons/gi'

export default [
  { id: 0, title: 'Home', path: '/', icon: 'ion-ios-home' },
  { id: 1, title: 'About', path: '/about', icon: 'ion-ios-business' },
  { id: 2, title: 'Research', path: '/research', icon: 'ion-ios-bonfire' },
  { id: 3, title: 'Events', path: '/events', icon: 'ion-ios-bonfire' },
  // { id: 3, title: 'Events', path: '/events', icon: <FaCalendarAlt /> },
  // { id: 77, title: 'Events7', path: '/events', icon: <EventsCalendar /> },
  // { id: 88, title: 'Events8', path: '/events', icon: <GoCalendar /> },
  // { id: 55, title: 'Events5', path: '/events', icon: <GiCalendar /> },
  // { id: 99, title: 'Events9', path: '/events', icon: <FaRegCalendarAlt /> },
  { id: 4, title: 'Resources', path: '/resources', icon: 'ion-ios-bonfire' },
  { id: 5, title: 'Consulting', path: '/consulting', icon: 'ion-ios-bonfire' },
  { id: 6, title: 'Contact', path: '/contact', icon: 'ion-ios-megaphone' }
];