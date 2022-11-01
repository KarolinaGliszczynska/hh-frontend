import React from 'react'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Events from './components/Events'
import Navbar from './components/Navbar'
import './App.css'

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

  // Fetch all events
  const fetchEvents = async () => {
    console.log("fetching events")
    const res = await fetch('https://20glq.mocklab.io/events')
    const data = await res.json()
    return data
  }

  const events_list_html = events.map((e) => <li key={e.ID}>{e.Title}</li>)

  return (
    <div>
      <nav className='navbar'>
        <div className='navbar__title navbar__item'>Helping Hands</div>
        <div className='navbar__item'>Register</div>
        <div className='navbar__item'>Sign in</div>
        <div className='navbar__item'>Contact Us</div>        
      </nav>
      <div className='container'>
          <Header />
          
            
          < Events events={events} />
          
      </div>
    </div>
  )
}

export default App
