import React from 'react';

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Control, Controller, UseFormGetValues, UseFormSetValue } from 'react-hook-form';

import { FormValues } from '../RequestForm';

import ErrorMessage from './errorMessage';

type SelectPropsType = {
  label?: string;
  error?: any;
  id?: string;
  name: keyof FormValues;
  options: { id: string; name: string }[];
  control: Control<FormValues, any>;
  getValues: UseFormGetValues<FormValues>;
};

const SelectMain = ({
  getValues,
  label,
  options,
  control,
  name,
  error,
}: SelectPropsType) => {
  const mapOption =
    options &&
    options.map(opt => (
      <MenuItem key={opt.id} value={opt.name}>
        {opt.name}
      </MenuItem>
    ));

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="label">{label}</InputLabel>
        <Controller
          control={control}
          name={name}
          render={({
            field: { onChange, onBlur, value, name, ref },
            fieldState: { invalid, isTouched, isDirty, error },
          }) => (
            <Select
              onChange={onChange}
              error={!!error}
              label={label}
              value={value}
              labelId="label"
              sx={{
                textAlign: 'center',
                height: '50px',
                borderRadius: '8px',
                borderColor: '#0086a8',
                borderWidth: '2px',
              }}
            >
              {mapOption}
            </Select>
          )}
        />
      </FormControl>
      {error && <ErrorMessage error={error} />}
    </>
  );
};

export default SelectMain;
