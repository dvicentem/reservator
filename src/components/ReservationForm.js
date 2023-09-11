import { useForm, Controller } from 'react-hook-form'
import dayjs from 'dayjs'
import es from 'dayjs/locale/es'

import {
  Button,
  InputAdornment,
  InputLabel,
  TextField,
  // Grid,
  MenuItem,
  FormControl,
  Select
} from '@mui/material'
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
    watch,
    formState: { errors }
  } = useForm({ defaultValues })

  const onSubmit = (data) => {
    console.log(data)
    openCalendarLink(data)
  }

  return (
    <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name='startDateTime'
        control={control}
        render={({ field }) => (
          <DateTimePicker
            {...field}
            required
            defaultValue={dayjs(new Date())}
            label='Fecha y hora de inicio'
            sx={{ m: 1, width: '24ch' }}
          />
        )}
      />

      <Controller
        name='duration'
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            required
            label={'Duración'}
            type='number'
            sx={{ m: 1, width: '14ch' }}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>Horas</InputAdornment>
              )
            }}
          />
        )}
      />

      <Controller
        name='room'
        control={control}
        render={({ field }) => (
          <FormControl required sx={{ m: 1, width: '16ch' }}>
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

      <Controller
        name='type'
        control={control}
        render={({ field }) => (
          <FormControl required sx={{ m: 1, width: '18ch' }}>
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
      />

      <TextField
        {...register('game')}
        label={'Juego/Actividad'}
        type='text'
        required
        sx={{ m: 1, width: '42ch' }}
        InputLabelProps={{
          shrink: true
        }}
      />

      <TextField
        {...register('host')}
        label={'Organizador'}
        type='text'
        required
        sx={{ m: 1, width: '14ch' }}
        InputLabelProps={{
          shrink: true
        }}
      />
      <TextField
        {...register('goblins')}
        label={'Goblins'}
        type='number'
        required
        sx={{ m: 1, width: '10ch' }}
        InputLabelProps={{
          shrink: true
        }}
      />

      <TextField
        {...register('guests')}
        label={'Invitados'}
        type='number'
        required
        sx={{ m: 1, width: '12ch' }}
        InputLabelProps={{
          shrink: true
        }}
      />

      <Button
        variant='contained'
        type='submit'
        size='medium'
        sx={{ m: 1, width: '99%' }}
      >
        Link
      </Button>
    </form>
  )
}
