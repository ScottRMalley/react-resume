import React from 'react';
import {Col, Row} from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Strings from '../Strings';
import '../styles/pages/Projects.css';
import ProjectCard from '../components/ProjectCard';

export default function Projects(props) {
  return (
      <Row {...props} className="d-flex flex-row justify-content-center align-content-start projects-container">
        <Col lg={12} style={{minHeight: '45vh', paddingBottom: '2rem'}}>
          <Fade duration={1000}>
            <Row>
              <Col lg={12} className="pt-5 pb-3"
                   style={{fontFamily: 'Signika-SemiBold', fontSize: 'x-large'}}>
                {Strings.Projects.title}
              </Col>
            </Row>
            <Row className="pb-5">
              {Strings.Projects.cards.map((card, ind) => (
                  <ProjectCard
                      id={`project-card-${ind}`}
                      {...card}
                  />
              ))}
            </Row>
          </Fade>
        </Col>
      </Row>);
}
