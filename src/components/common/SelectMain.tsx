import React from 'react';

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { Control, Controller } from 'react-hook-form';

import { FormValues } from '../RequestForm';

type SelectPropsType = {
  label?: string;
  error?: any;
  id?: string;
  name: keyof FormValues;
  options: { id: string; name: string }[];
  control: Control<FormValues, any>;
};

const SelectMain = ({ label, options, control, name, error }: SelectPropsType) => {
  const [option, setOption] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setOption(event.target.value as string);
  };
  const mappedOptions =
    options && options.map(option => <MenuItem key={option.id}>{option.name}</MenuItem>);

  return (
    <Controller
      control={control}
      name="city"
      render={({ ...field }) => (
        <FormControl fullWidth>
          <InputLabel id="label">{label}</InputLabel>
          <Select
            onChange={handleChange}
            error={error}
            labelId="label"
            sx={{
              textAlign: 'center',
              height: '50px',
              borderRadius: '8px',
              borderColor: '#0086a8',
              borderWidth: '2px',
            }}
            {...field}
            label={label}
          >
            {mappedOptions}
          </Select>
        </FormControl>
      )}
    />
  );
};

export default SelectMain;
