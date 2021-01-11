import React from 'react';
import Strings from '../Strings';
import {Col, Row} from 'react-bootstrap';
import {IoLogoGithub, IoLogoLinkedin, MdEmail, MdLocationOn, MdPhone, IoLogoSkype} from 'react-icons/all';
import Fade from 'react-reveal/Fade';
import '../styles/pages/About.css';
import NetworkDiagram from '../components/NetworkDiagram';

export default function About(props) {
  return (
      <Row>
        <Col lg={12} className="about-container" {...props}>
          <Fade>
            <Row className="pb-5">
              <Col lg={6}>
                <Row className="pb-2">
                  <Col lg={4}>
                    <div
                        className="d-flex flex-row align-content-center justify-content-center about-hello p-2">
                      Hello, I'm
                    </div>
                  </Col>
                </Row>
                <Row className="pb-2">
                  <Col lg={12} style={{fontFamily: 'Signika-SemiBold', fontSize: 'xxx-large'}}>
                    {Strings.name}
                  </Col>
                </Row>
                <Row>
                  <Col lg={12} style={{fontFamily: 'Signika-SemiBold', fontSize: 'x-large'}}
                       className="pb-1">
                    {Strings.About.position}
                  </Col>
                </Row>
                <Row>
                  <Col lg={12} style={{fontFamily: 'Signika-Regular', fontSize: 'medium'}}>
                    <MdEmail className='mr-1'/>
                    {Strings.About.email}
                  </Col>
                </Row>
                <Row>
                  <Col lg={12} style={{fontFamily: 'Signika-Regular', fontSize: 'medium'}}>
                    <MdPhone className='mr-1'/>
                    {Strings.About.phone}
                  </Col>
                </Row>
                <Row className="pb-2">
                  <Col lg={12} style={{fontFamily: 'Signika-Regular', fontSize: 'medium'}}>
                    <MdLocationOn className='mr-1'/>
                    {Strings.About.address}
                  </Col>
                </Row>
                <Row>
                  <Col lg={5} className="d-flex flex-row justify-content-between align-content-center"
                       style={{fontSize: 'xx-large'}}>
                    <a href={Strings.About.linkedIn}>
                      <IoLogoLinkedin/>
                    </a>
                    <a href={Strings.About.gitHub}>
                      <IoLogoGithub/>
                    </a>
                    <a href={Strings.About.skype}>
                      <IoLogoSkype/>
                    </a>
                  </Col>
                </Row>
              </Col>
              <Col lg={6} className="d-flex flex-row justify-content-end">
                <div className="self-portrait"/>
              </Col>
            </Row>
            <Row className="pt-3 pb-3">
              <Col lg={7}>
                <NetworkDiagram width="100%" height="auto" color="var(--background-start)"/>
              </Col>
              <Col lg={5}>
                <Row>
                  <Col lg={12} className="pb-2"
                       style={{fontFamily: 'Signika-SemiBold', fontSize: 'x-large'}}>
                    {Strings.About.title}
                  </Col>
                </Row>
                <Row>
                  <Col lg={12} style={{fontFamily: 'Signika-Light', fontSize: 'medium'}}>
                    {Strings.About.tagline}
                  </Col>
                </Row>
                <Row className="pt-5">
                  <Col lg={12} className="d-flex flex-row justify-content-start flex-lg-wrap">
                    {Strings.About.skills.map(skill => (
                        <div className="about-skill-card">{skill}</div>))}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Fade>
        </Col>
      </Row>
  );
}
