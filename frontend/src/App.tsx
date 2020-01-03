import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {HashRouter, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Gigs from './components/Gigs/Gigs';
import Listen from './components/Listen/Listen';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Booking from './components/Booking/Booking';


const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header/>
      <Navbar/>

      {/* TODO: fix show home if unknown route */}
      <HashRouter>
        <Route path="/listen">
          <Listen/>
        </Route>

        <Route path="/gigs">
          <Gigs showPastGigs={true}/>
        </Route>

        <Route path="/gallery">
          <Gallery/>
        </Route>

        <Route path="/about">
          <About/>
        </Route>

        <Route path="/booking">
          <Booking/>
        </Route>

        <Route path="/" exact>
          <Home/>
        </Route>
      </HashRouter>

      <Footer/>
    </div>
  );
};

export default App;
