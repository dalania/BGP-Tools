import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './routes';
import GlobalStyles from './styles/global';
import {theme} from './styles/themes';
function App() {
  return (
    
    <>
    <Router>
      <Routes />
      <GlobalStyles Theme={theme}/>

    </Router>
    </>
  );
}

export default App;
