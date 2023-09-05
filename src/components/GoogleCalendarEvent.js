import React, { useEffect, useState } from "react";

// Import the Google API libraries
import { load as gapiLoad } from "gapi-client";
import { init, getAuthInstance } from "gapi-client/auth2";
import { client } from "gapi-client/calendar";

const GoogleCalendarEvent = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const calendarID = process.env.REACT_APP_GOBLIN_CALENDAR_ID;
  const mockEvent = {
    summary: "Sample Event",
    location: "Sample Location",
    description:
      "This is a sample event created with React and Google Calendar API.",
    start: {
      dateTime: "2023-09-05T10:00:00",
      timeZone: "Your Time Zone",
    },
    end: {
      dateTime: "2023-09-05T12:00:00",
      timeZone: "Your Time Zone",
    },
  };

  useEffect(() => {
    const apiKey = process.env.REACT_APP_APIKEY;
    const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    const gToken = JSON.parse(localStorage.getItem("gToken"));

    const initClient = async () => {
      try {
        // Initialize the client with your API key and the Calendar API
        await init({
          apiKey: apiKey,
          clientId: clientId,
          discoveryDocs: [
            "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
          ],
          scope: "https://www.googleapis.com/auth/calendar.events",
        });

        // Listen for sign-in state changes
        //getAuthInstance().isSignedIn.listen(updateSigninStatus);

        // Handle the initial sign-in state
        //updateSigninStatus(getAuthInstance().isSignedIn.get());
      } catch (error) {
        console.error("Error initializing Google API client:", error);
      }
    };
    // Load the Google API client library and set up the client
    gapiLoad("client:auth2", initClient);
  }, []);

  const updateSigninStatus = (isSignedIn) => {
    setIsSignedIn(isSignedIn);
  };

  const handleCreateEvent = async () => {
    if (isSignedIn) {
      const event = {
        summary: "Sample Event",
        description:
          "This is a sample event created using React and Google Calendar API",
        start: {
          dateTime: "2023-09-10T10:00:00",
          timeZone: "YOUR_TIMEZONE",
        },
        end: {
          dateTime: "2023-09-10T11:00:00",
          timeZone: "YOUR_TIMEZONE",
        },
      };

      try {
        const response = await client.calendar.events.insert({
          calendarId: "primary",
          resource: event,
        });

        console.log("Event created:", response.result);
      } catch (error) {
        console.error("Error creating event:", error);
      }
    }
  };

  return (
    <div>
      {isSignedIn ? (
        <button onClick={handleCreateEvent}>Create Event</button>
      ) : (
        <button onClick={() => getAuthInstance().signIn()}>
          Sign In with Google
        </button>
      )}
    </div>
  );
};

export default GoogleCalendarEvent;
