import React from 'react'

const Event = ({ event }) => {
  return (
    <div className="event-card">
      <h5>{event.Category}</h5>
      <span><h6>{event.Date_of_event}</h6></span>
      <span><h6>{event.City}</h6></span>
      <h3>
        {event.Title}{' '}
      </h3>
      <p>{event.Description}</p>
    </div>
  )
}

export default Event

