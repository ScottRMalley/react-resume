import React, {useState} from 'react';
import EducationCard from '../components/EducationCard';
import '../styles/pages/Education.css'
import Strings from '../Strings';
import {Container, Row} from 'react-bootstrap';

export default function Education() {
    const [expanded, setExpanded] = useState(false);
    const cards = Strings.Education.schools.map((school, ind) => (
        <EducationCard
            title={school.name}
            i={ind}
            expanded={expanded}
            setExpanded={setExpanded}
        />
    ))
    return (
        <Container className="education-container">
            {cards}
        </Container>
    );
}
