import { useForm, Controller } from 'react-hook-form'
import dayjs from 'dayjs'
import es from 'dayjs/locale/es'

import {
  Button,
  InputAdornment,
  InputLabel,
  TextField,
  MenuItem,
  FormControl,
  Select,
  Grid
} from '@mui/material'
import { CalendarIcon } from '@mui/x-date-pickers'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'

import openCalendarLink from '../services/gcal/eventlink'

dayjs.locale('es')

export const ReservationForm = () => {
  const defaultValues = {
    startDateTime: dayjs(new Date()),
    duration: 3,
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
    formState: { errors }
  } = useForm({ defaultValues })

  const onSubmit = (data) => {
    openCalendarLink(data)
  }

  return (
    <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={1} sx={{ mt: 2 }}>
        <Grid item xs={8} sm={5}>
          <Controller
            name='startDateTime'
            control={control}
            render={({ field }) => (
              <DateTimePicker
                {...field}
                required
                defaultValue={dayjs(new Date())}
                label='Fecha y hora de inicio'
                sx={{ width: 1 }}
              />
            )}
          />
        </Grid>
        <Grid item xs={4} sm={3}>
          <Controller
            name='duration'
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                required
                label={'Duración'}
                type='number'
                sx={{ width: 1, minWidth: '8ch' }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>Horas</InputAdornment>
                  )
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <Controller
            name='room'
            control={control}
            render={({ field }) => (
              <FormControl required sx={{ width: 1 }}>
                <InputLabel id='select-room-label' shrink>
                  Sala
                </InputLabel>
                <Select {...field} label='Sala'>
                  <MenuItem value={'SP'}>Pecera</MenuItem>
                  <MenuItem value={'S1'}>Sala 1</MenuItem>
                  <MenuItem value={'S2'}>Sala 2</MenuItem>
                  <MenuItem value={'S3'}>Sala 3</MenuItem>
                  <MenuItem value={'S4'}>Sala 4</MenuItem>
                </Select>
              </FormControl>
            )}
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <Controller
            name='type'
            control={control}
            render={({ field }) => (
              <FormControl required sx={{ width: 1 }}>
                <InputLabel id='select-type-label' shrink>
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
          />{' '}
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextField
            {...register('game')}
            label={'Juego/Actividad'}
            type='text'
            required
            sx={{ width: 1 }}
            InputLabelProps={{
              shrink: true
            }}
          />{' '}
        </Grid>
        <Grid item xs={6}>
          <TextField
            {...register('host')}
            label={'Organizador'}
            type='text'
            required
            sx={{ width: 1 }}
            InputLabelProps={{
              shrink: true
            }}
          />{' '}
        </Grid>{' '}
        <Grid item xs={3}>
          <TextField
            {...register('goblins')}
            label={'Goblins'}
            type='number'
            required
            sx={{ width: 1 }}
            InputLabelProps={{
              shrink: true
            }}
          />{' '}
        </Grid>
        <Grid item xs={3}>
          <TextField
            {...register('guests')}
            label={'Invitados'}
            type='number'
            required
            sx={{ width: 1 }}
            InputLabelProps={{
              shrink: true
            }}
          />{' '}
        </Grid>
        <Grid item xs={12}>
          <Button
            variant='contained'
            type='submit'
            size='medium'
            sx={{ width: 1, mt: 1 }}
            endIcon={<CalendarIcon />}
          >
            Añadir al calendario
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}
