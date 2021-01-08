import React, {useEffect, useState} from 'react';
import EducationCard from '../components/EducationCard';
import '../styles/pages/Education.css'
import Strings from '../Strings';
import {Col, Row} from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Awards from '../components/Awards';

export default function Education(props) {
    const [expanded, setExpanded] = useState(false);
    const cards = Strings.Education.schools.map((school, ind) => (
        <EducationCard
            {...school}
            i={ind}
            expanded={expanded}
            setExpanded={setExpanded}
        />
    ));
    useEffect(() => {
        setTimeout(() => {
            setExpanded(0);
        });
    }, []);
    return (
        <Row {...props} className="d-flex flex-row justify-content-center align-content-start education-container">
            <Col lg={12} style={{minHeight: '45vh'}}>
                <Fade duration={1000}>
                    <Row>
                        <Col lg={12} className="pt-5 pb-3" style={{fontFamily: 'Signika-SemiBold', fontSize: 'x-large'}}>
                            {Strings.Education.title}
                        </Col>
                    </Row>
                    {cards}
                </Fade>
            </Col>
            <Col lg={12}>
                <Fade duration={1000}>
                    <Row>
                        <Col lg={12} className="pt-5 pb-3" style={{fontFamily: 'Signika-SemiBold', fontSize: 'x-large'}}>
                            {Strings.Education.awards.title}
                        </Col>
                    </Row>
                    <Awards/>
                </Fade>
            </Col>
        </Row>
    );
}
