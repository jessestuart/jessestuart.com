import React from 'react'

const Microscope = (props) => (
  <svg viewBox="0 0 45 45" {...props}>
    <defs>
      <clipPath id="a">
        <path d="M0 36h36V0H0v36z" />
      </clipPath>
    </defs>
    <g clipPath="url(#a)" transform="matrix(1.25 0 0 -1.25 0 45)">
      <path
        d="M30 4h-2c0 3.314-2.63 6-5.875 6-3.244 0-5.875-2.686-5.875-6H10a2 2 0 0 1-4 0 2 2 0 0 1 0-4h24a2 2 0 0 1 0 4"
        fill="#f18f26"
      />

      <path
        d="M20 26v-4a7 7 0 1 0 0-14h-8.485C13.532 5.557 16.584 4 20 4c6.075 0 11 4.925 11 11s-4.925 11-11 11m8.041.929a2 2 0 0 0-2.828 2.828l2.121 2.12a2.001 2.001 0 0 0 2.83.002 2.003 2.003 0 0 0-.002-2.83l-2.121-2.12z"
        fill="#f18f26"
      />

      <path
        d="M33.7 28.343a2.002 2.002 0 0 0-2.83 0l-4.243 4.243a1.999 1.999 0 1 0 2.828 2.829l4.244-4.243a2 2 0 0 0 0-2.83M16.727 12.787a1.002 1.002 0 0 0-1.414 0L11.07 17.03a1.004 1.004 0 0 0 0 1.414l12.021 12.021a1.004 1.004 0 0 0 1.414 0l4.243-4.243a1 1 0 0 0 0-1.414l-12.02-12.02z"
        fill="#fdcb58"
      />

      <path
        d="M18.142 14.201l-5.657 5.657 1.415 1.414 5.657-5.656-1.415-1.415z"
        fill="#f18f26"
      />

      <path
        d="M16.414 5.586a2 2 0 0 0-2.828 0l-9.9 9.9a2 2 0 0 0 2.83 2.829l9.898-9.901a2 2 0 0 0 0-2.828m-7.464.879A.999.999 0 1 0 7.536 5.05L3.293 9.293a1 1 0 1 0 1.415 1.414L8.95 6.465z"
        fill="#67757f"
      />
    </g>
  </svg>
)

export default Microscope
