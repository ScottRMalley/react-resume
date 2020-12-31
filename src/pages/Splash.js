import React from 'react';
import Fade from 'react-reveal/Fade';
import '../styles/pages/Splash.css';

export default function Splash() {
    return (
        <Fade left>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div className="text">RESUME</div>
                <div className="text separator">|</div>
                <div className="text text-light"> SCOTT MALLEY</div>
            </div>
        </Fade>
    )
}
