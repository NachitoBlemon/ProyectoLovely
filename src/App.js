import ButtonAppBar from './components/Appbar'
import Home from './components/Home';
import theme from './theme/theme';
import {ThemeProvider} from '@material-ui/core';
import Footer from './components/Footer'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Servicios from './components/Servicios';
import Promociones from './components/Promociones'

function App() {

  

  return (
    <div>
      <ThemeProvider  theme={theme}>
      <Router>
        <ButtonAppBar/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/servicios' component={Servicios} />
          <Route exact path='/promociones' component={Promociones} />
        </Switch>
         <Footer/>
      </Router>
      
      
      </ThemeProvider>
    </div>
  );
}

export default App;
