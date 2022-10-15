import React from 'react';

import styled from 'styled-components';

import Button from './common/Button';
import Input from './common/Input';
import Select from './common/Select';

const FormWrapper = styled.div`
  padding: 40px 30px;
  width: 440px;
  min-height: 466px;

  box-shadow: 0px 5px 20px rgba(53, 50, 56, 0.14);
  border-radius: 8px;
`;

const FormBlock = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 20px;
`;

const RequestForm = () => {
  return (
    <FormWrapper>
      <FormBlock>
        <InputGroup>
          <Input label="Ваше имя *" placeholder="Иван" />
          <Input label="Номер телефона *" placeholder="+7 (000) 000-00-00" />
        </InputGroup>
        <InputGroup>
          <Input label="E-mail *" placeholder="example@skdesign.ru" />
          <Input label="Ссылка на профиль *" placeholder="+instagram.com/skde…" />
        </InputGroup>
        <Select />
        <Input label="Название организации/студии" placeholder="SK Design" />
        <Button text="Отправить заявку" disabled width="100%" />
      </FormBlock>
    </FormWrapper>
  );
};

export default RequestForm;
