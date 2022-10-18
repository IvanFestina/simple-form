import React, { useState } from 'react';

import styled from 'styled-components';

import Vector from '../../assets/Vector';

import ErrorMessage from './errorMessage';

type SelectPropsType = {
  label?: string;
  error?: any;
  id?: string;
  register?: any;
  name?: string;
  type?: string;
  options?: { id: string; name: string }[];
  hookFormSetValue?: any;
  hookFormGetValue?: any;
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
  const [selectWasOpen, setSelectWasOpen] = useState(false);
  // electWasOpen is needed for toggling legend-label up, one time, on open.

  const toggling = () => {
    setIsOpen(!isOpen);
    setSelectWasOpen(true);
  };

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
      <Label>{label}</Label>
      <DropDownHeader {...register} onClick={toggling}>
        <div>
          <span {...register}>{hookFormGetValue(name)}</span>
        </div>
        <FakeInput />
        <Vector isOpen={isOpen} />
        <Fieldset isOpen={isOpen}>
          <Legend selectWasOpen={selectWasOpen}>
            <span {...register}>{label}</span>
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
  border: ${props => (props.isOpen ? 'none' : '#0086a8 solid 2px')};
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

// <div className='MuiBox-root css-ece9u5'>
//   <div className='MuiFormControl-root MuiFormControl-fullWidth css-tzsjye'>
//     <label
//       className='MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined MuiFormLabel-colorPrimary MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined css-p0rm37'
//       data-shrink='false' id='demo-simple-select-label'>Age</label>
//     <div
//       className='MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-formControl  css-fvipm8'>
//       <div tabIndex='0' role='button' aria-expanded='false' aria-haspopup='listbox'
//            aria-labelledby='demo-simple-select-label demo-simple-select'
//            id='demo-simple-select'
//            className='MuiSelect-select MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input css-qiwgdb'>
//         <span className='notranslate'>​</span></div>
//       <input aria-hidden='true' tabIndex='-1'
//              className='MuiSelect-nativeInput css-1k3x8v3' value=''>
//         <svg
//           className='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSelect-icon MuiSelect-iconOutlined css-1636szt'
//           focusable='false' aria-hidden='true' viewBox='0 0 24 24'
//           data-testid='ArrowDropDownIcon'>
//           <path d='M7 10l5 5 5-5z'></path>
//         </svg>
//         <fieldset aria-hidden='true'
//                   className='MuiOutlinedInput-notchedOutline css-igs3ac'>
//           <legend className='css-yjsfm1'><span>Age</span></legend>
//         </fieldset></div>
//   </div>
// </div>;
//
