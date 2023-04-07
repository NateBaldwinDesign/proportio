import React from "react";

const Logo = (props) => {
  const color = props.color;
  const size = props.size;
  const strokeWidth = props.strokeWidth;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2_25)">
        <rect width="32" height="32" fill="transparent" />
        <path
          d="M5.71014 25.8617C3.43592 18.7937 7.81408 13.3199 12.1638 11.7706C15.9039 10.4385 19.7139 12.8235 20.6236 15.6507C21.4267 18.1466 19.9641 20.4155 18.1718 21.0539C16.3794 21.6923 15.2022 20.6837 14.8682 19.6456C14.5341 18.6075 15.3779 17.5916 15.9302 17.4948"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        <path
          d="M1.67089 18.0382C2.95401 11.0555 8.51038 6.50203 15.1213 6.30573C21.7322 6.10944 25.1958 11.1509 25.8074 14.5176C26.4191 17.8843 24.5593 23.2667 21.0843 24.573C17.6093 25.8792 16.0173 25.0397 14.3206 26.9953C12.9783 28.5424 13.4274 30.0561 13.4274 30.0561"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        <path
          d="M17.8011 30.0677C23.3087 29.3883 28.154 25.5226 29.8072 19.8572C32.0239 12.2611 27.6631 4.30634 20.067 2.08966C16.3694 1.0106 12.5867 1.49018 9.42227 3.14285"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        <path
          d="M10.8924 18.0961C10.2072 19.1036 9.92006 20.7614 10.315 22.3095C10.8393 24.3649 9.54156 26.9684 9.12122 28.4088"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2_25">
          <rect width="32" height="32" fill="transparent" />
        </clipPath>
      </defs>
    </svg>

    // <svg
    //   width={size}
    //   height={size}
    //   viewBox={`0 0 100 100`}
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <g clipPath="url(#clip0_1_2)">
    //     <rect width="100" height="100" fill="transparent" />
    //     <path
    //       d="M17.1659 81.9994C9.96212 59.6107 23.8304 42.2718 37.6085 37.3644C49.4558 33.1447 61.5243 40.6995 64.4059 49.655C66.9497 57.5611 62.3167 64.748 56.6393 66.7702C50.9619 68.7923 47.233 65.5975 46.1749 62.3091C45.1168 59.0208 47.7895 55.8029 49.5391 55.4961"
    //       stroke={color}
    //       strokeWidth={strokeWidth}
    //       strokeLinecap="round"
    //     />
    //     <path
    //       d="M4.37118 57.2177C8.4356 35.0991 26.036 20.6756 46.9767 20.0538C67.9175 19.432 78.8885 35.4012 80.826 46.0657C82.7634 56.7302 76.8725 73.7793 65.8651 77.917C54.8578 82.0548 49.8147 79.3955 44.4403 85.5899C40.1885 90.4906 41.611 95.2855 41.611 95.2855"
    //       stroke={color}
    //       strokeWidth={strokeWidth}
    //       strokeLinecap="round"
    //     />
    //     <path
    //       d="M55.4651 95.3222C72.9112 93.1701 88.2589 80.9249 93.4959 62.9792C100.517 38.918 86.704 13.7204 62.6428 6.69887C50.9301 3.28086 38.9481 4.79997 28.9245 10.035"
    //       stroke={color}
    //       strokeWidth={strokeWidth}
    //       strokeLinecap="round"
    //     />
    //     <path
    //       d="M33.5812 57.4009C31.4109 60.5924 30.5013 65.8436 31.7522 70.7472C33.413 77.2578 29.3023 85.5046 27.9709 90.0672"
    //       stroke={color}
    //       strokeWidth={strokeWidth}
    //       strokeLinecap="round"
    //     />
    //   </g>
    //   <defs>
    //     <clipPath id="clip0_1_2">
    //       <rect width="100" height="100" fill="transparent" />
    //     </clipPath>
    //   </defs>
    // </svg>
  );
};

export default Logo;
