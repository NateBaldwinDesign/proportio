import React from 'react';

const GitHubLogo = (props) => {
  const color = props.color;
  const size = props.size ? props.size : 24;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 199 199"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M99.5 1.80908C45.2273 1.80908 1.20605 45.8303 1.20605 100.103C1.20605 143.521 29.5485 180.306 68.1424 193.573C72.9667 194.176 74.7757 191.161 74.7757 188.748V171.864C47.6394 177.894 41.6091 158.597 41.6091 158.597C37.3879 147.139 30.7545 144.124 30.7545 144.124C21.7091 138.094 31.3576 138.094 31.3576 138.094C41.0061 138.697 46.4333 148.345 46.4333 148.345C55.4788 163.421 69.3485 159.2 74.7757 156.788C75.3788 150.155 78.3939 145.933 80.8061 143.521C59.097 141.109 36.1818 132.667 36.1818 94.6757C36.1818 83.8212 39.8 75.3788 46.4333 68.1424C45.8303 66.3333 42.8151 56.0818 47.6394 42.8151C47.6394 42.8151 56.0818 40.403 74.7757 53.0667C82.6151 50.6545 91.0576 50.0515 99.5 50.0515C107.942 50.0515 116.385 51.2576 124.224 53.0667C142.918 40.403 151.361 42.8151 151.361 42.8151C156.788 56.0818 153.17 66.3333 152.567 68.7454C158.597 75.3788 162.818 84.4242 162.818 95.2788C162.818 133.27 139.903 141.109 118.194 143.521C121.812 146.536 124.827 152.567 124.827 161.612V188.748C124.827 191.161 126.636 194.176 131.461 193.573C170.658 180.306 198.397 143.521 198.397 100.103C197.794 45.8303 153.773 1.80908 99.5 1.80908Z"
        fill={color}
      />
    </svg>
  );
};

export default GitHubLogo;