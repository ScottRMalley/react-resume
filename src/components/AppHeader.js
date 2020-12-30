import React from 'react';
import '../styles/components/AppHeader.css';
import HeaderButton from './HeaderButton';

export default function AppHeader() {
  return (
      <nav>
        <div className="text">
          <HeaderButton to="/" selected={true} title="About"/>
          <HeaderButton to="/education" selected={false} title="Education"/>
          <HeaderButton to="/experience" selected={false} title="Experience"/>
          <HeaderButton to="/projects" selected={false} title="Projects"/>
        </div>
      </nav>
  );
}