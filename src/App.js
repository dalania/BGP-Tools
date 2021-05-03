import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './routes';
import AppProvider from './hooks';

import GlobalStyles from './styles/global';
import {theme} from './styles/themes';
const App = () => {
  return (
    
    <>
    <Router>
      <AppProvider>
      <Routes />
      </AppProvider>
      <GlobalStyles Theme={theme}/>

    </Router>
    </>
  );
}

export default App;
