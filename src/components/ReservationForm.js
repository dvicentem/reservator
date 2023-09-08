import { useForm, Controller } from 'react-hook-form'
import dayjs from 'dayjs'

import {
  Button,
  Paper,
  Typography,
  InputAdornment,
  InputLabel
} from '@mui/material'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { esES } from '@mui/x-date-pickers/locales'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'

import openCalendarLink from '../services/gcal/eventlink'

const defaultValues = {
  startDateTime: dayjs(new Date()),
  duration: 2,
  room: '',
  type: '',
  game: '',
  host: '',
  goblins: 2,
  guests: 0
}
export const ReservationForm = () => {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({ defaultValues })

  const onSubmit = (data) => {
    console.log(data)
    openCalendarLink(data)
  }

  return (
    <Paper
      style={{
        display: 'grid',
        gridRowGap: '10px',
        padding: '10px',
        margin: '10px 10px'
      }}
    >
      <form autoComplete='false' onSubmit={handleSubmit(onSubmit)}>
        <LocalizationProvider
          localeText={
            esES.components.MuiLocalizationProvider.defaultProps.localeText
          }
          dateAdapter={AdapterDayjs}
          adapterLocale='es'
        >
          <Controller
            name='startDateTime'
            control={control}
            render={({ field }) => (
              <DateTimePicker
                {...field}
                defaultValue={dayjs(new Date())}
                label='Fecha y hora de inicio'
              />
            )}
          />
          <TextField
            {...register('duration')}
            label={'Duración'}
            type='number'
            InputLabelProps={{
              shrink: true
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>Horas</InputAdornment>
              )
            }}
          />
          <FormControl required>
            <InputLabel id='select-room-label'>Sala</InputLabel>
            <Select {...register('room')} label='Sala'>
              <MenuItem value={'SP'}>Pecera</MenuItem>
              <MenuItem value={'S1'}>Sala 1</MenuItem>
              <MenuItem value={'S2'}>Sala 2</MenuItem>
              <MenuItem value={'S3'}>Sala 3</MenuItem>
              <MenuItem value={'S4'}>Sala 4</MenuItem>
            </Select>{' '}
          </FormControl>
          <FormControl required>
            <InputLabel id='select-type-label'>Tipo de Juego</InputLabel>
            <Select {...register('type')} label='Tipo de Juego'>
              <MenuItem value={'JdR'}>Rol</MenuItem>
              <MenuItem value={'JdT'}>Tablero</MenuItem>
              <MenuItem value={'JdM'}>Minis</MenuItem>
              <MenuItem value={'Otro'}>Otro</MenuItem>
            </Select>{' '}
          </FormControl>
          <TextField
            {...register('game')}
            label={'Juego/Actividad'}
            type='text'
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            {...register('host')}
            label={'Organizador'}
            type='text'
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            {...register('goblins')}
            label={'Goblins'}
            type='number'
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            {...register('guests')}
            label={'Invitados'}
            type='number'
            InputLabelProps={{
              shrink: true
            }}
          />
        </LocalizationProvider>
        <Button variant='contained' type='submit'>
          Link
        </Button>
      </form>
    </Paper>
  )
}
