import React, {useEffect, useState} from 'react';
import {scroller} from 'react-scroll';
import AppHeader from './components/AppHeader';
import About from './pages/About';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import {Col, Row} from 'react-bootstrap';
import {useLocation} from 'react-router-dom';

import Splash from './pages/Splash';

export default function AppRouter({loading}) {
    const [stillLoading, setStillLoading] = useState(true);
    const {pathname} = useLocation();
    useEffect(() => {
        if (!loading) {
            setTimeout(() => setStillLoading(false), 1000)
        }
    }, [loading]);
    useEffect(() => {
        scroller.scrollTo(pathname, {
            duration: 800,
            delay: 0,
            smooth: true,
            containerId: 'main-container'
        });
    })
    return (
        <>
            <AppHeader loading={stillLoading}/>
            <Row className="d-flex flex-column justify-content-start flex-grow-1 align-content-center"
                 style={{overflowY: 'auto'}} id="main-container">
                <Col lg={12} style={{maxWidth: '60rem'}} className="pt-5">
                    <About name="/"/>
                    <Education name="/education"/>
                    <Experience name="/experience"/>
                    <Projects name="/projects"/>
                </Col>
            </Row>
            <Splash loading={loading}/>
        </>
    );
}
