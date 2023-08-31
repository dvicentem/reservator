import "materialize-css/dist/css/materialize.min.css";
import Reservation from "./components/Reservation";
import UserNav from "./components/UserNav";

function App() {
  return (
    <div className="App">
      <UserNav />
      <Reservation />
    </div>
  );
}

export default App;
