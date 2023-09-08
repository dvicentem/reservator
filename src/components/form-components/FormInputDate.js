/* eslint-disable react/prop-types */
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

const DATE_FORMAT = 'dd-MMM-yy'

export const FormInputDate = (props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        name={props.name}
        control={props.control}
        render={(field) => (
          <DatePicker
            fullWidth
            variant='inline'
            defaultValue={new Date()}
            id={props.name}
            KeyboardButtonProps={{
              'aria-label': 'change date'
            }}
            format={DATE_FORMAT}
            {...field}
          />
        )}
      />
    </LocalizationProvider>
  )
}
