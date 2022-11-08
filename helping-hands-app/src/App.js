import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Events from './components/Events'
import Event from './components/Event'
import Navbar from './components/Navbar'
import Homepage from './components/homepage'
import Login from './components/login'
import Registration from './components/registration'
import Contact from './components/contact'
import CreateEvent from './components/createEvent'
import './App.css'
import './components/Navbar.css'
import EventDetail from './components/EventDetail'

const App = () => {
  
  const [events, setEvents] = useState([]);

  //fetching events data from server as soon as the page loads
  useEffect(() => {
    getEvents();
  }, 
  [])

  const getEvents = async () => {
    const eventsFromServer = await fetchEvents();
    setEvents(eventsFromServer);
  }

  const fetchEvents = async () => {
    console.log("fetching events")
    //const res = await fetch('https://20glq.mocklab.io/events')
    const res = await fetch('http://localhost:8080/events')
    const data = await res.json()
    return data
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
                events={events} 
              />
            </Route>
            <Route path = "/eventDetails">
              <EventDetail 
                //event={event}   //we need a function the fetches the corrrect event based on which event card was clicked
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
