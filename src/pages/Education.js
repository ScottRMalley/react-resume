import React, {useState} from 'react';
import EducationCard from '../components/EducationCard';
import '../styles/pages/Education.css'
import Strings from '../Strings';

export default function Education() {
    const [expanded, setExpanded] = useState(false);
    const cards = Strings.Education.schools.map((school, ind) => (
        <div style={{padding: '1rem'}}>
            <EducationCard
                title={school.name}
                i={ind}
                expanded={expanded}
                setExpanded={setExpanded}
            />
        </div>
    ))
    return (
        <div className="education-container">
            {cards}
        </div>
    );
}
