import { sampleData } from './res'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

const calendarLink = (data) => {
  /*
   * Referencia:
   * https://github.com/InteractionDesignFoundation/add-event-to-calendar-docs/blob/main/services/google.md
   */

  const BASEURL = 'https://calendar.google.com/calendar/event?action=TEMPLATE'
  const AMP = '&'
  let TEXT =
    'text=(' +
    data.room +
    ')' +
    data.type +
    ' ' +
    data.game +
    '[' +
    data.host +
    ':' +
    data.goblins +
    ':' +
    data.guests +
    ']'

  TEXT = TEXT.replace(/ /g, '+')

  const startDateTime = dayjs
    .utc(data.startDateTime)
    .format('YYYYMMDDTHHmmss[Z]')
  const endDateTime = dayjs
    .utc(data.startDateTime)
    .add(data.duration, 'hours')
    .utc(true)
    .format('YYYYMMDDTHHmmss[Z]')
  const DATES = 'dates=' + startDateTime + '/' + endDateTime
  const DETAILS = 'details='
  const LOCATION =
    'location=La Goblinera - C. del Escultor Benlliure, 3, 50002 Zaragoza, AR, es'.replace(
      / /g,
      '+'
    )
  const SPROP_WEBSITE = 'sprop=website:https://www.goblinera.net'
  const SPROP_NAME = 'sprop=name:La Goblinera'.replace(/ /g, '+')
  const ADD = 'add=' + process.env.REACT_APP_GOBLIN_USER
  return (
    BASEURL +
    AMP +
    DATES +
    AMP +
    TEXT +
    AMP +
    DETAILS +
    AMP +
    LOCATION +
    AMP +
    SPROP_WEBSITE +
    AMP +
    SPROP_NAME +
    AMP +
    ADD
  )
}

const openCalendarLink = (data) => {
  const link = calendarLink(data)
  window.open(link, '_blank', 'noreferrer')
}

export default openCalendarLink
