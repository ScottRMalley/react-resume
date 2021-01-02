import React, {useEffect, useState} from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import {motion, useAnimation} from 'framer-motion';
import AppHeader from './components/AppHeader';
import About from './pages/About';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Projects from './pages/Projects';

const variants = {
  loading: {
    height: 0,
    background: 'var(--text-dark)',
    overflow: 'hidden',
    maxHeight: '93%',
  },
  done: {
    height: '93%',
    transition: {
      delayChildren: 10,
      duration: 1,
    }
  },
}
export default function AppRouter({loading}) {
  const controls = useAnimation();
  const [stillLoading, setStillLoading] = useState(true);
  useEffect(() => {
    if(!loading){
      controls.start('done')
          .then(() => setStillLoading(false))
    }
  }, [loading])
  return (
      <BrowserRouter>
        <motion.div initial="loading" animate={controls} variants={variants}>
          <AppHeader loading={stillLoading}/>
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
