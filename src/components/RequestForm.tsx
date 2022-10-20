import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import * as yup from 'yup';

import { applyForm } from '../store/requestFormSlice';
import { useAppDispatch, useAppSelector } from '../utils/hooks';

import AdditionalField from './AdditionalField';
import Button from './common/Button';
import Input from './common/Input';
import SelectMain from './common/SelectMain';

export type FormValues = {
  name: string;
  email: string;
  phoneNumber: string;
  profileLink: string;
  city: string;
  organisation: string;
  receiver: string;
  howKnown: string;
  nothing: string;
};

const RequestForm = () => {
  const dispatch = useAppDispatch();
  const isAppLoading = useAppSelector(state => state.request.appIsLoading);
  const cities = useAppSelector(state => state.request.cities);
  const sources = useAppSelector(state => state.request.sources);

  const minLettersInName = 2;
  // this is yup for making validation a little easier
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .min(minLettersInName, 'Напишите более 2 символов')
      .required('Обязательное поле'),
    email: yup.string().email('Введите валидный email').required('Обязательное поле'),
    phoneNumber: yup
      .string()
      .matches(
        /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/gm,
        'Введите номер телефона',
      )
      .required('Обязательное поле'),
    profileLink: yup.string().required('Обязательное поле'),
    city: yup.string().required('Пожалуйста, выберите город'),
    organisation: yup.string(),
    receiver: yup.string(),
    howKnown: yup.string(),
  });

  // this is a start of applying react-hook-form library
  const {
    register,
    handleSubmit,
    reset,
    control,
    getValues,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: 'all',
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = handleSubmit((data: FormValues) => {
    dispatch(applyForm({ params: data }));
    reset(); // reset fields and errors
  });
  // we make array of string ('sources') an array with object(mappedSources), the reason is, for use in custom Select.
  const mappedSources = sources.map((s, i) => ({ name: s, id: i.toString() }));

  return (
    <FormWrapper>
      <form onSubmit={onSubmit}>
        <FormBlock>
          <InputGroup>
            <Input
              register={register('name')}
              id="name"
              name="name"
              type="text"
              label="Ваше имя *"
              placeholder="Иван"
              error={errors.name?.message}
            />
            <Input
              label="Номер телефона *"
              placeholder="+7 (000) 000-00-00"
              register={register('phoneNumber')}
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              error={errors.phoneNumber?.message}
            />
          </InputGroup>
          <InputGroup>
            <Input
              label="E-mail *"
              placeholder="example@skdesign.ru"
              register={register('email')}
              id="email"
              name="email"
              type="text"
              error={errors.email?.message}
            />
            <Input
              label="Ссылка на профиль *"
              placeholder="+instagram.com/skde…"
              register={register('profileLink')}
              id="profileLink"
              name="profileLink"
              type="text"
              error={errors.profileLink?.message}
            />
          </InputGroup>
          <SelectMain
            control={control}
            name="city"
            options={cities}
            label="Выберите город *"
            error={errors.city?.message}
            getValues={getValues}
          />
          <Input
            label="Название организации/студии"
            placeholder="SK Design"
            register={register('organisation')}
            id="organisation"
            name="organisation"
            type="text"
          />
          <AdditionalField
            registerInput={register('receiver')}
            options={mappedSources}
            control={control}
            getValues={getValues}
          />
          <Button
            disabled={!isValid}
            text="Отправить заявку"
            width="100%"
            loading={isAppLoading}
          />
        </FormBlock>
      </form>
    </FormWrapper>
  );
};

export default RequestForm;

const FormWrapper = styled.div`
  padding: 40px 30px;
  width: 440px;
  min-height: 466px;

  box-shadow: 0 5px 20px rgba(53, 50, 56, 0.14);
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
