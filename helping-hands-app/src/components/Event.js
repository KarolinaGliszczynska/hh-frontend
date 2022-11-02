import React from 'react'

const Event = ({ event }) => {
  return (
    <div className="event-card">
      <h3>
        {event.Title}{' '}
      </h3>
      <p>{event.Description}</p>
    </div>
  )
}

export default Event

