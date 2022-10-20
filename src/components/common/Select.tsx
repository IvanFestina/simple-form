import React, { useState } from 'react';

import {
  UseFormGetValues,
  UseFormRegisterReturn,
  UseFormSetValue,
} from 'react-hook-form';
import styled from 'styled-components';

import Vector from '../../assets/Vector';
import { FormValues } from '../RequestForm';

import ErrorMessage from './errorMessage';

type SelectPropsType = {
  label?: string;
  error?: any;
  id?: string;
  register?: UseFormRegisterReturn<keyof FormValues>;
  name: keyof FormValues;
  type?: string;
  options?: { id: string; name: string }[];
  hookFormSetValue: UseFormSetValue<FormValues>;
  hookFormGetValue: UseFormGetValues<FormValues>;
};
// 2nd select
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
  const [selectWasOpen, setSelectWasOpen] = useState(false);
  // electWasOpen is needed for toggling legend-label up, one time, on open.

  const toggling = () => {
    setIsOpen(!isOpen);
    setSelectWasOpen(true);
  };

  const onClickHandler = (value: string) => {
    // use SetValue from react-hook-form
    if (hookFormSetValue && name) {
      hookFormSetValue(name, value, { shouldValidate: true });
    }

    setIsOpen(false);
  };

  const mappedOptions =
    options &&
    options.map(option => (
      <ListItem key={option.id} onClick={() => onClickHandler(option.name)}>
        {option.name}
      </ListItem>
    ));

  const mapOption =
    options &&
    options.map(opt => (
      <option key={opt.id} value={opt.name}>
        {opt.name}
      </option>
    ));

  return (
    <DropDownContainer isOpen={isOpen}>
      <Label>{label}</Label>
      <DropDownHeader {...register} onClick={toggling}>
        <div>
          <span>{hookFormGetValue(name)}</span>
        </div>
        <FakeInput />
        <Vector isOpen={isOpen} />
        <Fieldset isOpen={isOpen}>
          <Legend selectWasOpen={selectWasOpen}>
            <span>{label}</span>
          </Legend>
        </Fieldset>
      </DropDownHeader>
      <select
        style={{ display: 'none' }}
        {...register}
        onChange={e => onClickHandler(e.currentTarget.value)}
      >
        {mapOption}
      </select>
      {isOpen && <DropDownList>{mappedOptions}</DropDownList>}
      {error && <ErrorMessage error={error} />}
    </DropDownContainer>
  );
};

export default {};

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
  box-sizing: border-box;
`;
const Fieldset = styled('fieldset')<{ isOpen: boolean }>`
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
  border: ${props => (props.isOpen ? 'none' : '#e3e3e3 solid 2px')};
`;
const Legend = styled('legend')<{ selectWasOpen: boolean }>`
  max-width: ${props => (props.selectWasOpen ? '100%' : '0.01px')}
  height: 11px;
  font-size: 0.75em;
  visibility: hidden;
  transition: max-width 50ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  white-space: nowrap;

  span {
    color: #353238;
    font-weight: 500;
    font-size: 1.3rem;
  }
`;

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
