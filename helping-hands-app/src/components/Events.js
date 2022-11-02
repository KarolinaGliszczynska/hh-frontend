import React from 'react'
import Event from './Event'

const Events = ({ events }) => {
  return (
    <div className='events-container'>
      {events.map((event) => (
        <div className='event-card'>
            <Event key={event.ID} event={event} />
        </div>
      ))}
    </div>
  )
}

export default Events
