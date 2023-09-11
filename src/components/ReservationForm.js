import { useForm, Controller } from 'react-hook-form'
import dayjs from 'dayjs'
import 'dayjs/locale/es'

import {
  Button,
  Paper,
  Typography,
  InputAdornment,
  InputLabel,
  TextField,
  MenuItem,
  FormControl,
  Select,
  Container
} from '@mui/material'
import Grid from '@mui/material/Grid'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { esES } from '@mui/x-date-pickers/locales'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'

import openCalendarLink from '../services/gcal/eventlink'
import { Fragment } from 'react'

dayjs.locale('es')

export const ReservationForm = () => {
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
    <Fragment>
      <Container>
        <LocalizationProvider
          localeText={
            esES.components.MuiLocalizationProvider.defaultProps.localeText
          }
          dateAdapter={AdapterDayjs}
          adapterLocale='es'
        >
          <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
            <Grid
              container
              direction='row'
              justify='flex-start'
              alignItems='flex-start'
              spacing={1}
            >
              <Grid xs='12' spacing='1'>
                <Grid item xs='2'>
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
                </Grid>
                <Grid item>
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
                </Grid>
              </Grid>
              <Controller
                name='room'
                control={control}
                render={({ field }) => (
                  <FormControl required>
                    <InputLabel id='select-room-label'>Sala</InputLabel>
                    <Select {...field} label='Sala'>
                      <MenuItem value={'SP'}>Pecera</MenuItem>
                      <MenuItem value={'S1'}>Sala 1</MenuItem>
                      <MenuItem value={'S2'}>Sala 2</MenuItem>
                      <MenuItem value={'S3'}>Sala 3</MenuItem>
                      <MenuItem value={'S4'}>Sala 4</MenuItem>
                    </Select>{' '}
                  </FormControl>
                )}
              />
              <Controller
                name='type'
                control={control}
                render={({ field }) => (
                  <FormControl required>
                    <InputLabel id='select-type-label'>
                      Tipo de Juego
                    </InputLabel>
                    <Select {...field} label='Tipo de Juego'>
                      <MenuItem value={'JdR'}>Rol</MenuItem>
                      <MenuItem value={'JdT'}>Tablero</MenuItem>
                      <MenuItem value={'JdM'}>Minis</MenuItem>
                      <MenuItem value={'Otro'}>Otro</MenuItem>
                    </Select>{' '}
                  </FormControl>
                )}
              />
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
              <Button variant='contained' type='submit'>
                Link
              </Button>
            </Grid>
          </form>
        </LocalizationProvider>
      </Container>
    </Fragment>
  )
}
