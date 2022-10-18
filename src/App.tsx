import React from 'react';

import styled from 'styled-components';

import Greetings from './components/Greetings';
import RequestForm from './components/RequestForm';

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
`;

const AppBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  margin: 10px;
  @media (max-width: 980px) {
    flex-wrap: wrap;
    margin-top: 50px;
  }
`;

export const App = () => {
  return (
    <AppWrapper>
      <AppBlock>
        <Greetings />
        <RequestForm />
      </AppBlock>
    </AppWrapper>
  );
};
