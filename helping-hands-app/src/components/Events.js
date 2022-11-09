import React, {useEffect, useState} from 'react'
import Event from './Event'
import { Link } from 'react-router-dom'
import Sidebar from "./Sidebar";
import './Sidebar.css'
import './Events.css'
import Header from "./Header";


const Events = () => {
    const [events, setEvents] = useState([]);

    const getEvents = async () => {
        const eventsFromServer = await fetchEvents();
        setEvents(eventsFromServer);
    }

    useEffect(() => {
            getEvents();
        },
        [])

    const fetchEvents = async () => {
        const res = await fetch('http://localhost:8080/events')
        return await res.json()
    }

    return (
          <>
            < Sidebar />
            <div className='main-container'>
                < Header  />

                <div className='events-container'>
                  {events.map((event) => (

                    <Link to="/eventDetails" key={event.eventId}>
                      <div className='event-card'>
                          <Event
                          />
                      </div>
                    </Link>
                  ))}
                </div>
            </div>
          </>
      )
    }

export default Events
