/* eslint-disable react/prop-types */
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { Input } from '@mui/base/Input'

export const FormInputText = (props) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState
      }) => (
        <Input
          helperText={error ? error.message : null}
          size='small'
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={props.label}
          variant='outlined'
        />
      )}
    />
  )
}
