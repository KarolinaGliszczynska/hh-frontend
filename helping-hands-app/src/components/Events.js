import React, {useEffect, useState} from 'react'
import Event from './Event'
import { Link } from 'react-router-dom'
import Sidebar from "./Sidebar";
import Header from "./Header";


const Events = (events) => {

    return (
          <>
            < Sidebar/>
            <div className='events-main-container'>
                < Header  />

                    <div className='events-container'>
                        { events && events.events.map((event) => (
                            <Link to={`/eventDetails/${event.eventId}`}>
                                <div className='event-card'>
                                    <Event key={event.eventId}
                                           event={event}
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

