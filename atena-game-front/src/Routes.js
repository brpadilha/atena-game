import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AboutPage from './pages/About/AboutPage'
import HomePage from './pages/Home/HomePage'
export default function Routes(){
  return (
    <Router>
      <Switch>
        <Route exact to='/' children={HomePage} />
        <Route exact to='/about' children={AboutPage} />
      </Switch>
    </Router>
  )
}