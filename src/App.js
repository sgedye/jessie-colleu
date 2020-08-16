import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import logo from './logo.svg';

import MenuData from '../src/assets/data/menu-data';
import ResponsiveNav from './components/ResponsiveNav';
import Home from './pages/Home';
import About from './pages/About';
import Research from './pages/Research';
import Rtc from './pages/research/Rtc';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Events from './pages/Events';
// import Resources from './pages/Resources';
import Consulting from './pages/Consulting';
import Publications from './pages/research/Publications';

const App = () => (
  <div id="app">
    <Router>
      <ResponsiveNav
        navLinks={MenuData}
        background="#002fa7"
        hoverBackground="#0000ff"
        linkColor="#fff"
        logo={logo}
      />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/research" exact component={Research} />
        <Route path="/research/rtc" component={Rtc} />
        <Route path="/research/publications" component={Publications} />
        <Route path="/events" component={Events} />
        {/* <Route path="/resources" component={Resources} /> */}
        <Route path="/consulting" component={Consulting} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
    <Footer />
  </div>
);

export default App;
