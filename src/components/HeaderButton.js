import React from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import '../styles/components/AppHeader.css';

export default function HeaderButton({to, title}) {
  const history = useHistory();
  const location = useLocation();
  const selected = location.pathname === to;
  return (
      <div className={selected ? 'header-button selected' : 'header-button'} onClick={() => history.push(to)}>
        {title.toUpperCase()}
      </div>
  )
}
