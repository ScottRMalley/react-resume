import React from 'react';
import {useHistory} from 'react-router-dom';
import '../styles/components/AppHeader.css';

export default function HeaderButton({to, selected, title}) {
  const history = useHistory();
  return (
      <div className={selected ? "header-button selected" : "header-button"} onClick={() => history.push(to)}>
        {title}
      </div>
  )
}
