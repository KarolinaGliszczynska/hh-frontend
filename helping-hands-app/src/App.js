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

  const fetchEvents = async () => {
    console.log("fetching events")
    const res = await fetch('https://20glq.mocklab.io/events')
    //const res = await fetch('http://localhost:8080/events')
    const data = await res.json()
    return data
  }

  return (
    <div>
      < Navbar />
      <div className='container'>
          < Header />
          < Events events={events} />
      </div>
    </div>
  )
}

export default App
