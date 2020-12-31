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

const variants = {
  loading: {
    height: 0,
    background: 'var(--text-primary)'
  },
  done: {
    height: '93%',
    transition: {
      duration: 1,
    }
  },
}
export default function AppRouter({loading}) {
  return (
      <BrowserRouter>
        <motion.div initial="loading" animate={loading ? 'loading' : 'done'} variants={variants}>
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
