import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import {motion} from 'framer-motion';
import AppHeader from './components/AppHeader';
import About from './pages/About';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Projects from './pages/Projects';

export default function AppRouter({controls}) {
  return (
      <BrowserRouter>
        <motion.div initial={{height: 0, background: 'var(--text-primary)'}} animate={controls}>
          <AppHeader/>
          <Switch>
            <Route path="/education">
              <Education/>
            </Route>
            <Route path="/experience">
              <Experience/>
            </Route>
            <Route path="/projects">
              <Projects/>
            </Route>
            <Route path="/">
              <About/>
            </Route>
          </Switch>
        </motion.div>
      </BrowserRouter>
  )
}
