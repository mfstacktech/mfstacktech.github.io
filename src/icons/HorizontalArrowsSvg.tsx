import * as React from "react";
interface props {
  className?: string;
}
const HorizontalArrowsSvg = ({ className }: props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    className={className}
    fill="none"
    viewBox="0 0 20 20"
  >
    <path
      stroke="#414651"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.667"
      d="M16.667 14.167H3.333m0 0 3.334-3.334m-3.334 3.334L6.667 17.5M3.333 5.833h13.334m0 0L13.333 2.5m3.334 3.333-3.334 3.334"
    ></path>
  </svg>
);

export default HorizontalArrowsSvg;
