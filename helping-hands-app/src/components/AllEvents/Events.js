import React, {useEffect, useState} from 'react'
import Event from './Event'
import { Link } from 'react-router-dom'
import Sidebar from "./Sidebar.js";
import Header from "./Header";


const Events = () => {

    const [events, setEvents] = useState([]);
    const [city, setCity] = useState("");
    const [category, setCategory] = useState("");
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

    const changeCity = (city)=>{
        setCity(city);
        console.log(city);
    }

    const changeCategory = (category)=>{
        setCategory(category);
        console.log(category);
    }


    return (
          <>
            < Sidebar/>
            <div className='events-main-container'>
                < Header  />

                    <div className='events-container'>
                        {events
                            ? (events.map((event) =>
                                <Link to={`/eventDetails/${event.eventId}`} key = {event.eventId}>
                                    <div className='event-card'>
                                        <Event key={event.eventId}
                                               event={event}
                                        />
                                    </div>
                                </Link>))
                            : (<p>loading events...</p>)}
                        ))}
                    </div>
            </div>
          </>
      )
    }

export default Events

