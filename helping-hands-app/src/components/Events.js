import React, {useEffect, useState} from 'react'
import Event from './Event'
import { Link } from 'react-router-dom'
import Sidebar from "./Sidebar";
import './Sidebar.css'
import './Events.css'
import Header from "./Header";


const Events = (events) => {
    const data = Array.from(events);

    return (
          <>
            < Sidebar />
            <div className='main-container'>
                < Header  />

                {data?.length > 0 ? (
                    <div className='events-container'>
                        {data.map((event) => (
                            <Link to="/eventDetails">
                                <div className='event-card'>
                                    <Event key={event.ID} event={event} />
                                </div>
                            </Link>
                        ))}
                    </div>
                    ) : (
                    <div className="empty">
                        <h2>No events found</h2>
                    </div>
                    )}
            </div>
          </>
      )
    }

export default Events

