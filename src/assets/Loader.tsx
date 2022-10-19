import * as React from 'react';

import { BiLoaderAlt } from 'react-icons/bi';
import styled, { keyframes } from 'styled-components';

const rotateAnimation = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
`;

const Icon = styled(BiLoaderAlt)`
  animation: ${rotateAnimation} 600ms infinite linear;
`;

const Loader = () => <Icon size="2rem" color="white" />;

export default Loader;
