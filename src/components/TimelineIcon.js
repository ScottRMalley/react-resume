import React from 'react';

export default function TimelineIcon({color: colorProp, weight, width, height}) {
    const color = colorProp || 'currentColor';
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 100"
            preserveAspectRatio="xMinYMid"
            width={width}
            height={height}
        >
            <g>
                <circle cx={25 + 2 * weight} cy="50" r={2 * weight} fill={color}/>
                <line x1={2 * weight} y1="50" x2="200" y2="50" strokeWidth={weight} stroke={color}/>
            </g>
        </svg>

    )
}
