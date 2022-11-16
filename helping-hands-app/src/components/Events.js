import React, {useEffect, useState} from 'react'
import Event from './Event'
import { Link } from 'react-router-dom'
import Sidebar from "./sidebar/Sidebar";
import Header from "./Header";


const Events = (events) => {

    return (
          <div className='container'>
                < Sidebar />
                <div className='events-main-container'>

                        <div className='events-container'>
                            {events.events.map((event) => (
                                <Link to="/eventDetails">
                                    <div className='event-card'>
                                        <Event key={event.ID} event={event} />
                                    </div>
                                </Link>
                            ))}
                        </div>


                </div>
          </div>
      )
    }

export default Events

