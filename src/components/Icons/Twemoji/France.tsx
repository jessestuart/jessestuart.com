import React from 'react'

const France = (props) => (
  <svg viewBox="0 0 45 45" {...props}>
    <defs>
      <clipPath id="a">
        <path d="M0 36h36V0H0v36z" />
      </clipPath>
    </defs>
    <g clipPath="url(#a)" transform="matrix(1.25 0 0 -1.25 0 45)">
      <path d="M36 9a4 4 0 0 0-4-4h-8v26h8a4 4 0 0 0 4-4V9z" fill="#ed2939" />
      <path d="M4 31a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h8v26H4z" fill="#002495" />
      <path d="M24 5H12v26h12V5z" fill="#eee" />
    </g>
  </svg>
)

export default France
