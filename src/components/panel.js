import React from 'react';
import { useRecoilState } from 'recoil';
import '../styles/panel.css';

const Panel = (props) => {
  const isFixed = props.fixed === true ? 'panel--fixed' : '';

  return (
    <div className={`${props.direction} panel ${isFixed}`}>
      {props.children}
    </div>
  );
};

export default Panel;
