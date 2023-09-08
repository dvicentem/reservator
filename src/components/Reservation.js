import { useEffect, Fragment, useState } from 'react'
import M from 'materialize-css'
import { auth } from '../firebase/firebase'

const Reservation = () => {
  const [eventData, setEventData] = useState({
    start_date: '',
    start_time: '',
    duration: '01:00',
    room: '',
    game_type: '',
    game_name: '',
    owner: '',
    members: '',
    guests: ''
  })

  useEffect(() => {
    const elemsDatepicker = document.querySelectorAll('.datepicker')
    const optionsDatepicker = {
      autoClose: false,
      showClearBtn: true,
      format: 'yyyy-mm-dd',
      i18n: {
        cancel: 'Cancelar',
        clear: 'Borrar',
        done: 'Ok',
        months: [
          'Enero',
          'Febrero',
          'Marzo',
          'Abril',
          'Mayo',
          'Junio',
          'Julio',
          'Agosto',
          'Septiembre',
          'Octubre',
          'Noviembre',
          'Diciembre'
        ],
        monthsShort: [
          'Ene',
          'Feb',
          'Mar',
          'Abr',
          'May',
          'Jun',
          'Jul',
          'Ago',
          'Sep',
          'Oct',
          'Nov',
          'Dic'
        ],
        weekdays: [
          'Domingo',
          'Lunes',
          'Martes',
          'Miércoles',
          'Jueves',
          'Viernes',
          'Sábado'
        ],
        weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
        weekdaysAbbrev: ['D', 'L', 'M', 'M', 'J', 'V', 'S']
      },
      firstDay: 1
    }
    const instanceDatepicker = M.Datepicker.init(
      elemsDatepicker,
      optionsDatepicker
    )

    const elemsTimepicker = document.querySelectorAll('.timepicker')
    const optionsTimepicker = {
      twelveHour: false,
      autoClose: true
    }
    const instancesTimepicker = M.Timepicker.init(
      elemsTimepicker,
      optionsTimepicker
    )

    const elemsSelect = document.querySelectorAll('select')
    const instancesSelect = M.FormSelect.init(elemsSelect)
  }, [])
  const handleInputChange = (event) => {
    setEventData({
      ...eventData,
      [event.target.name]: event.target.value
    })
    console.log(eventData)
  }
  return (
    <Fragment>
      <div className='container'>
        <form autoComplete='false'>
          <div className='row'>
            <div className='input-field col s4'>
              <input
                id='start_date'
                name='start_date'
                type='text'
                className='datepicker'
              />
              <label htmlFor='startdate'>Fecha</label>
            </div>
            <div className='input-field col s4'>
              <input
                id='start_time'
                name='start_time'
                type='text'
                className='timepicker'
                onChange={handleInputChange}
              />
              <label htmlFor='start_time'>Hora de inicio</label>
            </div>
            <div className='input-field col s4'>
              <input
                id='duration'
                name='duration'
                type='time'
                className='validate'
                min='00:30'
                max='12:00'
                defaultValue='01:00'
                onChange={handleInputChange}
              />
              <label htmlFor='duration'>Duración (h:mm)</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s3'>
              <select id='room' name='room' onChange={handleInputChange}>
                <option value='' disabled>
                  Elige sala
                </option>
                <option value='SP'>Pecera</option>
                <option value='S1'>Sala 1</option>
                <option value='S2'>Sala 2</option>
                <option value='S3'>Sala 3</option>
                <option value='S4'>Sala 4</option>
              </select>
              <label>Sala</label>
            </div>
            <div className='input-field col s3'>
              <select
                id='game_type'
                name='game_type'
                onChange={handleInputChange}
              >
                <option value='' disabled>
                  Tipo de juego
                </option>
                <option value='JdR'>Rol</option>
                <option value='JdT'>Tablero</option>
                <option value='JdM'>Minis</option>
              </select>
              <label>Tipo</label>
            </div>
            <div className='input-field col s6'>
              <input
                id='game_name'
                name='game_name'
                type='text'
                onChange={handleInputChange}
              />
              <label htmlFor='game_name'>Nombre del juego</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s4'>
              <input
                id='owner'
                name='owner'
                type='text'
                onChange={handleInputChange}
              />
              <label htmlFor='owner'>Organizador</label>
            </div>
            <div className='input-field col s4'>
              <input
                id='members'
                name='members'
                type='number'
                className='validate'
                min='0'
                max='20'
                defaultValue='2'
                step='1'
                onChange={handleInputChange}
              />
              <label htmlFor='members' className='active'>
                Goblins
              </label>
            </div>
            <div className='input-field col s4'>
              <input
                id='guests'
                name='guests'
                type='number'
                className='validate'
                min='0'
                max='20'
                defaultValue='0'
                step='1'
                onChange={handleInputChange}
              />
              <label htmlFor='guests' className='active'>
                Invitados
              </label>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  )
}

export default Reservation
