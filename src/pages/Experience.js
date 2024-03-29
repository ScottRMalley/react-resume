import React, {useEffect, useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import '../styles/pages/Experience.css';
import Strings from '../Strings';
import ExperienceCard from '../components/ExperienceCard';

export default function Experience(props) {
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setExpanded(0);
    });
  }, []);
  const cards = Strings.Experience.experienceCards.map((experience, ind) => (
      <ExperienceCard
          i={ind}
          key={experience.organization}
          expanded={expanded}
          setExpanded={setExpanded}
          {...experience}
      />
  ));
  return (
      <Row className="experience-container" {...props} style={{minHeight: '50vh'}}>
        <Col lg={12}>
          <Row>
            <Col lg={12} className="pt-5 pb-3"
                 style={{fontFamily: 'Signika-SemiBold', fontSize: 'x-large'}}>
              {Strings.Experience.title}
            </Col>
          </Row>
          {cards}

        </Col>
      </Row>
  )
}
