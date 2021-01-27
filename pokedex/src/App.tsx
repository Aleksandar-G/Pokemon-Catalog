import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import {BrowsePage} from './Pages/BrowsePage/BrowsePage'
import {SinglePokemonPage} from './Pages/SinglePokemonPage/SinglePokemonPage'

const App: React.FC = () => {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={BrowsePage} exact/>
          <Route path="/pokemon/:pokemonName" component={SinglePokemonPage} />
        </Switch>
        {/* Next Lines are for testing purposes only */}
        <Link to="/">Go to browse page</Link>
        <br />
        <Link to="/pokemon/pikachu">Go to pikachu page</Link>
        <br />
        <Link to="/pokemon/klendi">Go to klendi page</Link>
      </div>
    </Router>

  );
}

export default App;
