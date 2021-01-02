import React from 'react';

export default function TimelineIcon({color, weight}) {
  return (

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 500">
        <g>
          <circle cx="28" cy="250" r="26" fill="none" strokeWidth={weight} stroke={color}/>
          <line x1="28" y1="0" x2="28" y2="202" strokeWidth={weight} stroke={color}/>
          <line x1="28" y1="298" x2="28" y2="500" strokeWidth={weight} stroke={color}/>
          <line x1="76" y1="250" x2="200" y2="250" strokeWidth={weight} stroke={color}/>
        </g>
      </svg>

  )
}