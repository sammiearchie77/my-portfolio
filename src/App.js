import React from 'react'
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import './App.css';
import Skills from './pages/Skills';
import Testimonials from './pages/Testimonials';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <div className={`app text-white body-font`} >
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route exact path='/about'>
                <About />
              </Route>
              <Route exact path='/contact'>
                <Contact />
              </Route>
              <Route exact path='/projects'>
                <Projects />
              </Route>
              <Route exact path='/skills'>
                <Skills />
              </Route>
              <Route exact path='/testimonials'>
                <Testimonials />
              </Route>
              <Route exact path='/profile'>
                <Profile />
              </Route>
            </Switch>
          </div>
      </BrowserRouter>
    </>
  );
}

export default App;
