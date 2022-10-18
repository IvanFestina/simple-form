import React from 'react';

import styled from 'styled-components';

import ErrorMessage from './errorMessage';

type InputPropsType = {
  placeholder?: string;
  label?: string;
  error?: any;
  id?: string;
  register?: any;
  name?: string;
  type?: string;
};

const Input = ({
  label,
  error,
  id,
  type,
  name,
  register,
  placeholder,
  ...props
}: InputPropsType) => {
  return (
    <InputContainer>
      <StyledLabel htmlFor="inputText">{label}</StyledLabel>
      <StyledInput
        placeholder={placeholder}
        type={type}
        name={name}
        id={id}
        error
        {...register}
      />
      {error && <ErrorMessage error={error} />}
    </InputContainer>
  );
};

export default Input;

const InputContainer = styled.div`
  position: relative;

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }

  &:focus-within label {
    color: #0086a8;
  }
`;
const StyledInput = styled('input')<{ error: string }>`
  width: 100%;
  height: 50px;
  border: ${props => (props.error ? '#e3e3e3' : '#eb5e55')} 2px solid;
  border-radius: 8px;
  padding: 18px 15px;
  color: #353238;

  &::placeholder {
    color: #cdcad0;
    letter-spacing: 0.25px;
    line-height: 100%;
    font-size: 14px;
    font-weight: 400;
  }

  &:focus-visible {
    outline-color: #0086a8;
  }
`;
const StyledLabel = styled.label`
  position: absolute;
  top: -7px;
  left: 15px;
  padding: 2px;
  color: #828282;
  z-index: 1;
  font-family: 'SF UI Display', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0.25px;

  &::after {
    content: '';
    background-color: #fff;
    width: 112%;
    height: 13px;
    position: absolute;
    left: -5px;
    bottom: 0;
    z-index: -1;
  }
`;
