import React from 'react';

import styled from 'styled-components';

type InputPropsType = {
  placeholder?: string;
  label?: string;
};
const InputContainer = styled.div`
  position: relative;
  &:focus-within label {
    color: #0086a8;
  }
`;
const StyledInput = styled.input`
  width: 100%;
  height: 50px;
  border: #e3e3e3 2px solid;
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

const Input = ({ label, ...props }: InputPropsType) => {
  return (
    <InputContainer>
      <StyledLabel htmlFor="inputText">{label}</StyledLabel>
      <StyledInput {...props} />
    </InputContainer>
  );
};

export default Input;
