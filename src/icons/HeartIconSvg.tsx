import * as React from "react";

interface props {
  className?: string;
}
const HeartIconSvg = ({ className }: props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    className={`${className} stroke-current`}
    fill="none"
    viewBox="0 0 20 20"
  >
    <path
      className="text-gray-800 dark:text-white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.667"
      d="M9.994 4.28C8.328 2.332 5.55 1.808 3.462 3.592c-2.087 1.783-2.381 4.765-.742 6.875 1.363 1.754 5.488 5.453 6.84 6.65.151.134.227.201.315.228a.4.4 0 0 0 .239 0c.088-.027.163-.094.315-.228 1.351-1.197 5.477-4.896 6.84-6.65 1.639-2.11 1.38-5.11-.743-6.875s-4.865-1.26-6.532.688"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default HeartIconSvg;
