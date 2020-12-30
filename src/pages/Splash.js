import React from 'react';
import Fade from 'react-reveal/Fade';
import {motion} from 'framer-motion';
import '../styles/pages/Splash.css';

export default function Splash({controls}) {
  return (
      <motion.div animate={controls} initial={{height: '100vh', paddingLeft: '30%'}} className="loading">
        <Fade left>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <div className="text">RESUME</div>
            <div className="text separator">|</div>
            <div className="text text-light"> SCOTT MALLEY</div>
          </div>
        </Fade>
      </motion.div>
  )
}
