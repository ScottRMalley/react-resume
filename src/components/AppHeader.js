import React from 'react';
import '../styles/components/AppHeader.css';
import HeaderButton from './HeaderButton';

export default function AppHeader({loading}) {
    return (
        <nav>
            <div className="header-text">
                <HeaderButton loading={loading} to="/" title="About"/>
                <HeaderButton loading={loading} to="/education" title="Education"/>
                <HeaderButton loading={loading} to="/experience" title="Experience"/>
                <HeaderButton loading={loading} to="/projects" title="Projects"/>
            </div>
        </nav>
    );
}
