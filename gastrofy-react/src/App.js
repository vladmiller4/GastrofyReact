import './App.css'
import Header from './components/Header/Header'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Purchased from './components/Purchased/Purchased'
import Shared from './components/Shared/Shared'

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Redirect to="/purchased"/>
        </Route>
        <Route exact path='/purchased'>
        <Purchased/>
        </Route>
        <Route exact path='/shared'>
        <Shared/>
        </Route>
      </Switch>
    <div>      
    </div>
    </Router>
  );
}

export default App;
