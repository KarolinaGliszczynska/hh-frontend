import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Events from './components/AllEvents/Events'
import Navbar from './components/navbar/Navbar'
import Homepage from './components/main-page/homepage'
import Login from './components/login'
import Registration from './components/registration'
import Contact from './components/contact'
import './App.css'
import EventDetail from './components/EventDetail'
import NewEvent from "./components/AllEvents/NewEvent";
import {useState} from "react";

const App = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const handleLogin = (loggedIn) => {
    setUserLoggedIn(loggedIn)
  }

  return (
    <Router>
      <div >
        < Navbar
            userLoggedIn = { userLoggedIn }
            handleLogin = { handleLogin }
        />
        <div>
          <Switch>
            <Route exact path="/">
              < Homepage/>
            </Route>
              
            <Route path="/events">
              < Events
              />
            </Route>

            <Route path="/newEvent">
              < NewEvent />
            </Route>

            <Route path = "/eventDetails/:id">
              <EventDetail
              />
            </Route>

            <Route path = "/login">
              <Login
                  handleLogin = { handleLogin }
              />
            </Route>

            <Route path = "/registration">
              <Registration />
            </Route>

            <Route path = "/contact">
              <Contact />
            </Route>

          </Switch>  
        </div>
      </div>
    </Router>
  )
}

export default App
