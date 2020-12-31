import React from 'react';
import '../styles/components/AppHeader.css';
import HeaderButton from './HeaderButton';
import portrait from '../resources/images/self_portrait.jpeg';

export default function AppHeader() {
  return (
      <div className="self-portrait-container">
        <div className="self-portrait">
          <img src={portrait}/>
        </div>
        <nav>
          <div className="text">
            <HeaderButton to="/" title="About"/>
            <HeaderButton to="/education" title="Education"/>
            <HeaderButton to="/experience" title="Experience"/>
            <HeaderButton to="/projects" title="Projects"/>
          </div>
        </nav>
      </div>
  );
}