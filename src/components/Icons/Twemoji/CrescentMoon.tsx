import React from 'react'

const CrescentMoon = (props) => (
  <svg viewBox="0 0 45 45" {...props}>
    <defs>
      <clipPath id="a">
        <path d="M0 36h36V0H0v36z" />
      </clipPath>
    </defs>
    <g clipPath="url(#a)" transform="matrix(1.25 0 0 -1.25 0 45)">
      <path
        d="M30.311 35.224C32 17 20 4 .776 5.688c8.2-7.717 21.091-7.588 29.107.429 8.018 8.016 8.148 20.909.428 29.107"
        fill="#ccd6dd"
      />

      <path
        d="M30.705 20.085a1.164 1.164 0 0 1 0-1.644 1.162 1.162 0 1 1 0 1.644M14.683 5.705a1.74 1.74 0 0 1 0-2.465 1.742 1.742 0 1 1 0 2.465m13.968 2.147a2.904 2.904 0 0 0-4.108 0 2.902 2.902 0 0 0 0 4.107 2.902 2.902 0 0 0 4.108 0 2.902 2.902 0 0 0 0-4.107"
        fill="#b8c5cd"
      />
    </g>
  </svg>
)

export default CrescentMoon
