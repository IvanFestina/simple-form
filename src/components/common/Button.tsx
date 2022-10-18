import React from 'react';

import styled from 'styled-components';

type ButtonPropsType = {
  text: string;
  disabled: boolean;
  width: string;
  loading: boolean;
};

const Button = ({ ...props }: ButtonPropsType) => {
  return (
    <StyledButton type="submit" {...props}>
      <StyledText>{props.text}</StyledText>
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled('button')<{ width: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.width || '160px'};
  padding: 18px 25px;
  background: #0086a8;
  border-radius: 8px;
  border: none;

  &:hover {
    background: #007693;
    cursor: pointer;
  }

  &:active {
    background: #00657e;
  }

  &:disabled {
    background: #e3e3e3;
    cursor: default;

    p {
      color: #828282;
    }
  }
`;

const StyledText = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  text-align: center;
  color: white;
`;
