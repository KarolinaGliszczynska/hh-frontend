import React, {useEffect, useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Events from './components/Events'
import Navbar from './components/Navbar'
import Homepage from './components/homepage'
import Login from './components/login'
import Registration from './components/registration'
import Contact from './components/contact'
import './App.css'
import './components/Navbar.css'
import EventDetail from './components/EventDetail'

const App = () => {
  

  const [eventId, setEventId] = useState(null)
  const [event, setEvent] = useState(null);


/*
  const getEvent = async (id) => {
    const eventFromServer = await fetchEvent();
    setEvent(eventFromServer)
  }
*/

  const fetchEvent = async (id) => {
    const res = await fetch(`http://localhost:8080/event/{id}`)
    let eventFromServer = await res.json()
    setEvent(eventFromServer)
  }

  return (
    <Router>
      <div className='app'>
        < Navbar 
        />
        <div className='container'>
          <Switch>
            <Route exact path="/">
            < Homepage  />
            </Route>
              
            <Route path="/events">
              < Events
              />
            </Route>
            <Route path = "/eventDetails">
              <EventDetail 
                event={event}   //we need a function the fetches the corrrect event based on which event card was clicked
              />
            </Route>
            <Route path = "/login">
              <Login />
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
