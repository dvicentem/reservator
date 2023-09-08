import 'materialize-css/dist/css/materialize.min.css'
import Reservation from './components/Reservation'
import UserNav from './components/UserNav'
import { ReservationForm } from './components/ReservationForm'

const App = () => {
  return (
    <div className='App'>
      <Reservation />
      <ReservationForm />
    </div>
  )
}

export default App
