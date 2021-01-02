import React, {useState} from 'react';
import EducationCard from '../components/EducationCard';
import '../styles/pages/Education.css'

export default function Education() {
  const [expanded, setExpanded] = useState(false);
  return (
      <div className="education-container">
        <EducationCard
            title="Stanford"
            expanded={expanded}
            setExpanded={setExpanded}
            i={0}
        />
      </div>
  );
}
