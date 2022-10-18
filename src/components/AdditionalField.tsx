import React, { useState } from 'react';

import styled from 'styled-components';

import Vector from '../assets/Vector';

import Input from './common/Input';
import Select from './common/Select';

const FieldContainer = styled('div')<{ isOpen: boolean }>`
  transition: ease-in-out;
`;

const FieldOpennerHeader = styled('div')`
  position: relative;
  margin-bottom: 20px;

  &:hover {
    cursor: pointer;
  }
`;
const Title = styled('p')`
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
`;
const Content = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

type AdditionalFieldPropsType = {
  registerInput: any;
  options: { name: string; id: string }[];
  registerSelect: any;
  hookFormSetValue: any;
  hookFormGetValue: any;
};

const AdditionalField = ({
  registerInput,
  options,
  registerSelect,
  hookFormSetValue,
  hookFormGetValue,
}: AdditionalFieldPropsType) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggling = () => setIsOpen(!isOpen);

  return (
    <FieldContainer isOpen={isOpen}>
      <FieldOpennerHeader onClick={toggling}>
        <Title>Скрыть дополнительные поля</Title>
        <Vector isOpen={isOpen} />
      </FieldOpennerHeader>
      {isOpen && (
        <Content>
          <Input
            label="Получатель"
            placeholder="ФИО"
            register={registerInput}
            id="receiver"
            name="receiver"
          />
          <Select
            hookFormGetValue={hookFormGetValue}
            hookFormSetValue={hookFormSetValue}
            {...registerSelect}
            label="Откуда узнали про нас?"
            id="howKnown"
            name="howKnown"
            options={options}
          />
        </Content>
      )}
    </FieldContainer>
  );
};

export default AdditionalField;
