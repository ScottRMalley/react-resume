import React from 'react';
import '../styles/pages/About.css';
import Strings from '../Strings';

export default function About() {
    return (
        <div className="about-container">
            <div className="self-portrait"/>
            <div className="page-separator"/>
            <div className="about-tagline">
                {Strings.About.tagline}
            </div>
        </div>
    );
}
