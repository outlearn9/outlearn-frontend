import logo from './logo.svg';
import './App.scss';
import './Assets/Fonts/font.css';
import Home from './Modules/HomeContainer/Home';
import Store from './Store/Store';
import {BrowserRouter, Route, useHistory, Redirect } from "react-router-dom";
import LandingPage from './Modules/LandingPageContainer/LandingPage';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import OtpScreenLogin from './Modules/Screens/OtpVerifyPage';

// use default theme
// const theme = createTheme();

// Or Create your Own theme:
const theme = createTheme({
  palette: {
    primary: {
      main: '#5F22E0'
    }
  }
});


function App() {
  const history = useHistory();
  let isAuthenticated = localStorage.getItem('visitor_info');

  return (
    <>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Store>
            <Route exact strict path="/onboarding" component={Home} />
            <Route exact strict path="/verify-otp" component={Home} />
            <Route exact strict path="/login" component={Home} />
            <Route exact strict path="/" component={LandingPage} />

          </Store>
        </BrowserRouter>
      </MuiThemeProvider>
    </>
  );
}

export default App;
