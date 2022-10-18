import React from 'react';

import styled from 'styled-components';

import Vector from '../../assets/Vector';

const Empty = () => {
  return (
    <DropDownContainer>
      <label>Select</label>
      <DropDownHeader onClick={() => {
      }}>
        <div />
        <input type='text' />
        <Vector isOpen />
        <fieldset>
          <legend>
            <span>Select</span>
          </legend>
        </fieldset>
      </DropDownHeader>
    </DropDownContainer>
  );
};

export default Empty;

const DropDownContainer = styled('div')`
  margin-bottom: 48px;
  position: relative;

  label {
    display: block;
    transform: translate(10px, 12px);
  }

  input {
    opacity: 0;
    bottom: 0;
    left: 0;
    position: absolute;
    pointer-events: none;
    width: 100%;
  }

  fieldset {
    text-align: left;
    position: absolute;
    bottom: 0;
    right: 0;
    top: -5px;
    left: 0;
    margin: 0;
    padding: 0 8px;
    pointer-events: none;
    border-radius: inherit;
    border-style: solid;
    border-width: 1px;
    overflow: hidden;
    min-width: 0%;
    border-color: rgba(0, 0, 0, 0.23);
  }

  legend {
    max-width: 0.01px;
    height: 11px;
    font-size: 0.75em;
    visibility: hidden;
    transition: max-width 50ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    white-space: nowrap;
  }
`;
const DropDownHeader = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 15px;
  height: 50px;
  color: #353238;

  &:hover {
    cursor: pointer;
  }
`;
