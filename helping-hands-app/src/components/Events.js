import React from 'react'
import Event from './Event'

const Events = ({ events }) => {
  return (
    <>
      {events.map((event) => (
        <div className='event-card'>
            <Event key={event.ID} event={event} />
        </div>
      ))}
    </>
  )
}

export default Events
