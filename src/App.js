import logo from './logo.svg';
import './App.scss';
import './Assets/Fonts/font.css';
import Home from './Modules/HomeContainer/Home';
import Store from './Store/Store';
import {BrowserRouter, Route, useHistory } from "react-router-dom";
import LandingPage from './Modules/LandingPageContainer/LandingPage';

function App() {
  const history = useHistory();
  let isAuthenticated = localStorage.getItem('visitor_info');

  return (
    <>
      <BrowserRouter>
        <Store>
          <Route path="/onboarding" component={Home} />
          <Route path="/login" component={Home} />
          <Route path="/landing" component={LandingPage} />

        </Store>
      </BrowserRouter>
    </>
  );
}

export default App;
