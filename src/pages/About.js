import React from 'react';
import portrait from '../resources/images/self_portrait.jpeg';
import '../styles/pages/About.css';
import Strings from '../Strings';

export default function About() {
    return (
        <div className="about-container">
            <div className="self-portrait">
                <img src={portrait} alt="Self Portrait"/>
            </div>
            <div className="page-separator"/>
            <div className="about-tagline">
                {Strings.About.tagline}
            </div>
        </div>
    );
}
