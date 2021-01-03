import React, {useEffect, useState} from 'react';
import EducationCard from '../components/EducationCard';
import '../styles/pages/Education.css'
import Strings from '../Strings';
import {Col, Container, Row} from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import {IoMdSchool} from 'react-icons/io';

export default function Education() {
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
        <Col lg={12}>
                <Fade duration={1000}>
                    <Row className="d-flex flex-row justify-content-center pb-3 pt-3">
                        <IoMdSchool
                            color="var(--text-primary)"
                            size="5%"
                        />
                    </Row>
                    {cards}
                </Fade>
        </Col>
    );
}
