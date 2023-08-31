import "materialize-css/dist/css/materialize.min.css";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Reservation from "./components/Reservation";

function App() {
  return (
    <div className="App">
      <Login />
      <Logout />
      <Reservation />
    </div>
  );
}

export default App;
