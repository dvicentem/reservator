import "materialize-css/dist/css/materialize.min.css";
import UserNav from "./components/UserNav";
import CreateEvent from "./components/CreateEvent";
import GoogleCalendarEvent from "./components/GoogleCalendarEvent";
import React, { useState, useEffect } from "react";

function App() {
  const storedGToken = JSON.parse(localStorage.getItem("gToken"));
  const [gToken, setGToken] = useState(storedGToken);

  useEffect(() => {
    localStorage.setItem("gToken", JSON.stringify(gToken));
    console.log(gToken);
  }, [gToken]);

  return (
    <div className="App">
      <UserNav gToken={gToken} setGToken={setGToken} />
      <CreateEvent />
      <GoogleCalendarEvent />
    </div>
  );
}

export default App;
