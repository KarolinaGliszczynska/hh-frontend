import React, {useEffect, useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Events from './components/Events'
import Navbar from './components/Navbar'
import Homepage from './components/main-page/homepage'
import Login from './components/login'
import Registration from './components/registration'
import Contact from './components/contact'
import './App.css'
import EventDetail from './components/EventDetail'

const App = () => {

  const [events, setEvents] = useState([]);
  const [clickedEvent, setClickedEvent] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
        fetchEvents();
      },
      [])

  const fetchEvents = ()=>{
    fetch('http://localhost:8080/events')
        .then(res => {
          return res.json();
        })
        .then(data => {
          setIsPending(false);
          setEvents(data);
        })
  }

  const handleCardClick = (eventId) => {
    fetch(`http://localhost:8080/event/{eventId}`)
        .then(res => {
          return res.json();
        })
        .then(data => {
          setClickedEvent(data);
        })
  }

  return (
    <Router>
      <div className='app'>
        < Navbar 
        />
        <div >
          <Switch>
            <Route exact path="/">
              < Homepage  />
            </Route>
              
            <Route path="/events">
              < Events
                  events = {events}
                  handleCardClick = {handleCardClick}
                  clickedEvent = {clickedEvent}
              />
            </Route>
            <Route path = "/eventDetails/:id">
              <EventDetail
                  component = {clickedEvent}
                  //we need a function the fetches the corrrect event based on which event card was clicked
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
