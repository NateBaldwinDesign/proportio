import React from 'react';
import { useRecoilState } from 'recoil';
import { baseSizeState, baseScaleUnitState } from '../states/base';
import scaleUnits from '../utilities/scaleUnits';
import Logo from './logo';
import GitHubLogo from '../icons/github.js';
import capitalize from '../utilities/capitalize';
import Dropdown from 'react-dropdown';

import '../styles/header.css';

const Header = (props) => {
  const setShowModal = props.setShowModal;
  const [baseScaleUnit, setBaseScaleUnit] = useRecoilState(baseScaleUnitState);

  const inputs = scaleUnits.map((unit) => {
    return (
      <div className="radioGroup" key={`${unit}`}>
        <input
          type="radio"
          id={`scale${unit}`}
          name="scale_unit"
          value={unit}
          onClick={(e) => setBaseScaleUnit(e.target.value)}
          defaultChecked={unit === baseScaleUnit ? true : false}
        />
        <label htmlFor={`scale${unit}`}>{capitalize(unit)}</label>
      </div>
    );
  });

  return (
    <header>
      <div className="header--left">
        <div className="logoLockup">
          <Logo color="var(--logoColor)" size="32" strokeWidth="2.5" />
          <h4 className="logo">Proportio</h4>
        </div>
        {props.children}
      </div>

      <div className="header--right">
        <div className="formGroup">
          <label id="scale_unitLabel">Unit</label>
          <span id="unitPicker">
            <Dropdown
              ariaLabelledBy="scale_unitLabel"
              options={scaleUnits}
              onChange={(e) => {
                setBaseScaleUnit(e.value);
              }}
              // value={icon}
              placeholder={baseScaleUnit}
            />
          </span>
        </div>
        <button
          className="clearButton"
          onClick={() => {
            setShowModal(true);
          }}
        >
          {' '}
          Export{' '}
        </button>
        <a
          target="_blank"
          href="https://github.com/NateBaldwinDesign/proportio"
          title="Github repository"
        >
          <GitHubLogo size="32" color="var(--textColor" />
        </a>
      </div>
    </header>
  );
};

export default Header;
