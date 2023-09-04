import { useGoogleApi } from 'react-gapi'

export const saveCalendarEvent = async (calendarEvent) => {
  console.log('input: ', calendarEvent)
  const mockEvent = {
    summary: 'Sample Event',
    location: 'Sample Location',
    description:
      'This is a sample event created with React and Google Calendar API.',
    start: {
      dateTime: '2023-09-05T10:00:00',
      timeZone: 'Your Time Zone'
    },
    end: {
      dateTime: '2023-09-05T12:00:00',
      timeZone: 'Your Time Zone'
    }
  }
  console.log(mockEvent)
  try {
    const event = mockEvent
    const accessToken = JSON.parse(localStorage.getItem('gToken'))
    const gapi = useGoogleApi()
    const calendar = gapi.calendar('v3')
    const response = await calendar.events.insert({
      auth: accessToken,
      calendarId: 'primary',
      resource: event
    })
    console.log(response)

    console.log('Event created:', response.data)
  } catch (error) {
    console.error('Error creating event:', error)
  }
}
