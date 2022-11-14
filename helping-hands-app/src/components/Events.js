import React, {useEffect, useState} from 'react'
import Event from './Event'
import { Link } from 'react-router-dom'
import Sidebar from "./Sidebar";
import Header from "./Header";


const Events = (events) => {
    console.log(events)
    console.log(events.events)
    //const data = Array.from(events);

    return (
          <>
            < Sidebar />
            <div className='main-container'>
                < Header  />

                    <div className='events-container'>
                        {events.events.map((event) => (
                            <Link to="/eventDetails">
                                <div className='event-card'>
                                    <Event key={event.ID} event={event} />
                                </div>
                            </Link>
                        ))}
                    </div>

                }
            </div>
          </>
      )
    }

export default Events

