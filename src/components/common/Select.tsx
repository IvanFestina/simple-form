import React, { useState } from 'react';

import styled from 'styled-components';

import Vector from '../../assets/Vector';

import ErrorMessage from './errorMessage';

type SelectPropsType = {
  label: string;
  error?: any;
  id?: string;
  register?: any;
  name?: string;
  type?: string;
  options?: any[];
  hookFormSetValue: any;
  hookFormGetValue: any;
};

const Select = ({
  label,
  options,
  register,
  name,
  hookFormSetValue,
  hookFormGetValue,
  error,
}: SelectPropsType) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  const onClickHandler = (value: string) => {
    // use SetValue from react-hook-form
    hookFormSetValue(name, value);
    setIsOpen(false);
  };

  const mappedOptions =
    options &&
    options.map(option => (
      <ListItem onClick={() => onClickHandler(option.name)} key={option.id}>
        {option.name}
      </ListItem>
    ));

  return (
    <DropDownContainer isOpen={isOpen}>
      <Label> {label}</Label>
      <DropDownHeader onClick={toggling}>
        <div />
        <FakeInput />
        <Vector isOpen={isOpen} />
        <Fieldset isOpen={isOpen}>
          <Legend>
            <span />
          </Legend>
        </Fieldset>
      </DropDownHeader>
      {isOpen && <DropDownList>{mappedOptions}</DropDownList>}
      {error && <ErrorMessage error={error} />}
    </DropDownContainer>
  );
};

export default Select;

const DropDownContainer = styled('div')<{ isOpen: boolean }>`
  border: ${props => (props.isOpen ? '#0086a8' : 'none')} solid 2px;
  position: relative;
  width: 100%;
  border-radius: ${props => (props.isOpen ? '8px 8px 0 0' : '8px')};
`;
const Label = styled('label')`
  display: block;
  transform: translate(10px, 12px);
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

const FakeInput = styled('input')`
  bottom: 0;
  left: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  width: 100%;
`;
const Fieldset = styled('fieldset')<{isOpen: boolean}>`
  text-align: left;
  position: absolute;
  bottom: 0;
  right: 0;
  top: -5px;
  left: 0;
  margin: 0;
  padding: 0 8px;
  pointer-events: none;
  border-radius: 8px;
  overflow: hidden;
  min-width: 0%;
  border: ${props => (props.isOpen ? 'none' : '#0086a8 solid 2px')};
`;
const Legend = styled('legend')`
  max-width: 0.01px;
  height: 11px;
  font-size: 0.75em;
  visibility: hidden;
  transition: max-width 50ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  white-space: nowrap;
  p {
    color: #353238;
    font-weight: 500;
    font-size: 1.3rem;
  }
`;
//
// const DropDownListContainer = styled('div')<{ isOpen: boolean }>`
//   border: ${props => (props.isOpen ? '#0086a8' : '#e3e3e3')} solid 2px;
//   border-radius: 8px;
//   position: absolute;
//   z-index: 100;
//   width: 25%;
//   box-shadow: 0px 5px 20px rgba(53, 50, 56, 0.14);
// `;

const DropDownList = styled('ul')`
  //padding: 15px;
  margin: 0;
  background: #ffffff;
  z-index: 100;
  width: calc(100% + 4px);
  left: -2px;
  border: solid #0086a8;
  //border: 2px solid #e3e3e3;
  border-radius: 0 0 8px 8px;
  color: #353238;
  font-weight: 500;
  font-size: 1.3rem;
  position: absolute;
  border-width: 0 2px 2px 2px;

  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled('li')`
  border-top: #0086a8 solid 2px;
  list-style: none;
  padding: 7px 17px;

  &:hover {
    cursor: pointer;
  }

  &:hover {
    color: #2b6a8d;
  }
`;
