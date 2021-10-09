import logo from './logo.svg';
import './App.css';
import './Assets/Fonts/font.css';
import Home from './Modules/HomeContainer/Home';
import Store from './Store/Store'

function App() {
  return (
    <Store>
      <Home />
    </Store>
  );
}

export default App;
