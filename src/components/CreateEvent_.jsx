import React, { Fragment } from 'react'
// import { google } from 'googleapis'

const CreateEvent_ = (props) => {
  const createGoogleEvent = async (props) => {
    // do stuff
  }

  return (
    <Fragment>
      <button
        id="btn-create-event"
        onClick={async () => await createGoogleEvent(props)}
      >
        Create event
      </button>
    </Fragment>
  )
}

export default CreateEvent_
/* extends Component{
  constructor(props) {
    super(props);
    this.state = {
      event: {
        summary: "Sample Event",
        location: "Sample Location",
        description:
          "This is a sample event created with React and Google Calendar API.",
        start: {
          dateTime: "2023-09-03T10:00:00",
          timeZone: "Your Time Zone",
        },
        end: {
          dateTime: "2023-09-03T12:00:00",
          timeZone: "Your Time Zone",
        },
      },
      accessToken: "YOUR_ACCESS_TOKEN", // Replace with your access token
    };
  }

  createGoogleEvent = async () => {
    try {
      const { event, accessToken } = this.state;
      const calendar = google.calendar("v3");
      const response = await calendar.events.insert({
        auth: accessToken,
        calendarId: "primary", // Use 'primary' for the user's primary calendar
        resource: event,
      });

      console.log("Event created:", response.data);
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  render() {
    return (
      <div>
        <h1>Create Event</h1>
        <button onClick={this.createGoogleEvent}>Create Event</button>
      </div>
    );
  }
}

export default CreateEvent; */
