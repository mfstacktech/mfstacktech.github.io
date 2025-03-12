import * as React from "react";
interface props {
  className?: string;
}
const SlashCircleSvg = ({ className }: props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    className={`${className} stroke-current`}
    fill="none"
    viewBox="0 0 20 20"
  >
    <g clipPath="url(#clip0_15899_1971)">
      <path
        className="text-gray-800 dark:text-white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.667"
        d="m4.108 4.108 11.784 11.784M18.333 10a8.333 8.333 0 1 1-16.666 0 8.333 8.333 0 0 1 16.666 0"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_15899_1971">
        <path fill="#fff" d="M0 0h20v20H0z"></path>
      </clipPath>
    </defs>
  </svg>
);

export default SlashCircleSvg;
