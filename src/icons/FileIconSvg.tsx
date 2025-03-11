import * as React from "react";
interface props {
  className?: string;
}
const FileIconSvg = ({ className }: props) => (
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
      d="M11.667 1.891v3.442c0 .467 0 .7.09.879.08.157.208.284.365.364.178.09.411.09.878.09h3.442m-4.775 7.5h-5m6.666-3.333H6.667m10-2.51v6.01c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.093c-.535.272-1.235.272-2.635.272H7.333c-1.4 0-2.1 0-2.635-.272a2.5 2.5 0 0 1-1.092-1.093c-.273-.534-.273-1.235-.273-2.635V5.667c0-1.4 0-2.1.273-2.635a2.5 2.5 0 0 1 1.092-1.093c.535-.272 1.235-.272 2.635-.272h2.677c.611 0 .917 0 1.205.069a2.5 2.5 0 0 1 .722.3c.253.154.469.37.901.802l2.657 2.657c.432.433.649.649.803.901.137.224.238.468.3.723.069.287.069.593.069 1.205"
    ></path>
  </svg>
);

export default FileIconSvg;
