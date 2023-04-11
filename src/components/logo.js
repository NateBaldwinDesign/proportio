import React from "react";
import { useRecoilState } from 'recoil';

const Logo = (props) => {
  const color = props.color;
  const size = props.size;
  const strokeWidth = props.strokeWidth;

  return (
<svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width={size} height={size} fill="white"/>
<rect x="3.5" y="3.5" width="25" height="25" stroke={color} strokeWidth="3"/>
<rect x="3.5" y="19.5" width="9" height="9" stroke={color} strokeWidth="3"/>
<rect x="3.5" y="12.5" width="16" height="16" stroke={color} strokeWidth="3"/>
<rect x="28.1432" y="2.54916" width="2" height="35.4735" transform="rotate(45 28.1432 2.54916)" fill={color}/>
</svg>



    // <svg
    //   width={size}
    //   height={size}
    //   viewBox="0 0 32 32"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <g clipPath="url(#clip0_2_25)">
    //     <rect width="32" height="32" fill="transparent" />
    //     <path
    //       d="M5.71014 25.8617C3.43592 18.7937 7.81408 13.3199 12.1638 11.7706C15.9039 10.4385 19.7139 12.8235 20.6236 15.6507C21.4267 18.1466 19.9641 20.4155 18.1718 21.0539C16.3794 21.6923 15.2022 20.6837 14.8682 19.6456C14.5341 18.6075 15.3779 17.5916 15.9302 17.4948"
    //       stroke={color}
    //       strokeWidth={strokeWidth}
    //       strokeLinecap="round"
    //     />
    //     <path
    //       d="M1.67089 18.0382C2.95401 11.0555 8.51038 6.50203 15.1213 6.30573C21.7322 6.10944 25.1958 11.1509 25.8074 14.5176C26.4191 17.8843 24.5593 23.2667 21.0843 24.573C17.6093 25.8792 16.0173 25.0397 14.3206 26.9953C12.9783 28.5424 13.4274 30.0561 13.4274 30.0561"
    //       stroke={color}
    //       strokeWidth={strokeWidth}
    //       strokeLinecap="round"
    //     />
    //     <path
    //       d="M17.8011 30.0677C23.3087 29.3883 28.154 25.5226 29.8072 19.8572C32.0239 12.2611 27.6631 4.30634 20.067 2.08966C16.3694 1.0106 12.5867 1.49018 9.42227 3.14285"
    //       stroke={color}
    //       strokeWidth={strokeWidth}
    //       strokeLinecap="round"
    //     />
    //     <path
    //       d="M10.8924 18.0961C10.2072 19.1036 9.92006 20.7614 10.315 22.3095C10.8393 24.3649 9.54156 26.9684 9.12122 28.4088"
    //       stroke={color}
    //       strokeWidth={strokeWidth}
    //       strokeLinecap="round"
    //     />
    //   </g>
    //   <defs>
    //     <clipPath id="clip0_2_25">
    //       <rect width="32" height="32" fill="transparent" />
    //     </clipPath>
    //   </defs>
    // </svg>
  );
};

export default Logo;
