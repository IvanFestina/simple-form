import React from 'react';

import styled from 'styled-components';

type ErrorMessagePropsType = {
  error?: string;
};

const ErrorMessage = ({ error, ...props }: ErrorMessagePropsType) => {
  return <ErrorField>{error}</ErrorField>;
};

export default ErrorMessage;

const ErrorField = styled('div')`
  position: absolute;
  left: 5px;
  top: 53px;
  color: #eb5e55;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
`;
