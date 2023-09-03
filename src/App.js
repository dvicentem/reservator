import "materialize-css/dist/css/materialize.min.css";
import Reservation from "./components/Reservation";
import UserNav from "./components/UserNav";
import { useState, useEffect } from "react";

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
      <Reservation />
    </div>
  );
}

export default App;
