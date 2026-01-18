import React from "react";

const Spinner = ({ size = 40 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      role="status"
      aria-label="loading"
    >
      <path
        d="M25 5
           a20 20 0 0 1 0 40
           a20 20 0 0 1 0 -40"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="90 150"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 25 25"
          to="360 25 25"
          dur="0.9s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
  
  export default Spinner;
  