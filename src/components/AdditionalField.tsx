import React, { useState } from 'react';

import { Control } from 'react-hook-form';
import styled from 'styled-components';

import Vector from '../assets/Vector';

import Input from './common/Input';
import SelectMain from './common/SelectMain';
import { FormValues } from './RequestForm';

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
  control: Control<FormValues, any>;
};

const AdditionalField = ({
  registerInput,
  options,
  control,
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
          <SelectMain
            control={control}
            options={options}
            name="howKnown"
            label="Откуда узнали про нас?"
          />
        </Content>
      )}
    </FieldContainer>
  );
};

export default AdditionalField;
