import { Container, CssBaseline } from '@mui/material'
import { ReservationForm } from './components/ReservationForm'
import { Fragment } from 'react'
import ResponsiveAppBar from './components/responsive-app-bar'

const App = () => {
  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth='lg'>
        <div className='App'>
          <ResponsiveAppBar />
          <p />
          <ReservationForm />
        </div>
      </Container>
    </Fragment>
  )
}

export default App
