import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import Home from './Home'
import Navigation from './Navigation'
import Drivers from './Drivers'
// import Driver from './Driver'
import Riders from './Riders'
import Rider from './Rider'
import Trips from './Trips'
// import Trip from './Trip'
import NewTripForm from './NewTripForm';

function App() {
  return (
    <Router>

      <Navigation />

      <div className="App">
      <Switch>

        <Route exact path='/' component={NewTripForm} />
        <Route exact path='/riders' component={Riders} />
        <Route exact path='/drivers' component={Drivers} />
        <Route exact path='/trips' component={Trips} />
        <Route exact path='/riders/:id' component={Rider} />

      </Switch>
      </div>

    </Router>
  );
}

export default App;
