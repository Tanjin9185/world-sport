import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import LeagueDetails from './Components/LeagueDetails/LeagueDetails';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          
          
          <Route path="/league/:idTeam">
            <LeagueDetails></LeagueDetails>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
