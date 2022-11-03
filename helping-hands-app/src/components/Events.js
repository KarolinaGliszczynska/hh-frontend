import React from 'react'
import Event from './Event'
import { Link } from 'react-router-dom'

const Events = ({ events }) => {
  return (
    <div className='events-container'>
      {events.map((event) => (
        <Link to="/eventDetails">
          <div className='event-card'>
              <Event key={event.ID} event={event} />
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Events
