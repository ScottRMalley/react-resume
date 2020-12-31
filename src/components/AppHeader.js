import React from 'react';
import '../styles/components/AppHeader.css';
import HeaderButton from './HeaderButton';

export default function AppHeader() {
    return (
        <nav>
            <div className="header-text">
                <HeaderButton to="/" title="About"/>
                <HeaderButton to="/education" title="Education"/>
                <HeaderButton to="/experience" title="Experience"/>
                <HeaderButton to="/projects" title="Projects"/>
            </div>
        </nav>
    );
}
