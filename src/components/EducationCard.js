import React from 'react';
import {FaGraduationCap} from 'react-icons/fa';
import {motion, AnimatePresence} from 'framer-motion';
import '../styles/components/EducationCard.css';
import Strings from '../Strings';
import TimelineIcon from './TimelineIcon';

export default function EducationCard({i, expanded, setExpanded, title}) {
  const isOpen = i === expanded;
  return (
      <>
        <div style={{display: 'flex', flexDirection: 'row', height: '6rem'}}>
          <TimelineIcon
              color="var(--background)"
              weight="10"
          />
          <div
              onClick={() => setExpanded(isOpen ? false : i)}
              className="education-card-outer"
          >
            <FaGraduationCap size="6rem"/>
            <div style={{display: 'flex', flexDirection: 'column', paddingLeft: '1rem'}}>
              <div style={{fontFamily: 'Signika-SemiBold'}}>{title}</div>
              <div>year0 - year1</div>
              <div>masters degree - physics</div>
            </div>
          </div>
        </div>
        <AnimatePresence initial={false}>
          {isOpen && (
              <motion.section
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: {opacity: 1, height: 'auto'},
                    collapsed: {opacity: 0, height: 0}
                  }}
                  transition={{duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98]}}
              >
                <div>{Strings.About.tagline}</div>
              </motion.section>
          )}
        </AnimatePresence>
      </>
  );
};

