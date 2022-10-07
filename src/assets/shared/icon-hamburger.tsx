import * as React from "react";

export const IconHamburger = (props: { style: React.CSSProperties; }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={21} style={props.style}>
    <g fill="#D0D6F9" fillRule="evenodd">
      <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
    </g>
  </svg>
);