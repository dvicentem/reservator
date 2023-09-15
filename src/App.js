import { Container, ThemeProvider } from '@mui/material'
import { ReservationForm } from './components/ReservationForm'
import ResponsiveAppBar from './components/responsive-app-bar'
import theme from './theme-config'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='lg'>
        <div className='App'>
          <ResponsiveAppBar />
          <ReservationForm />
        </div>
      </Container>
    </ThemeProvider>
  )
}

export default App
