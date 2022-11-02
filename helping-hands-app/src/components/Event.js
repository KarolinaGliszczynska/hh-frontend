import React from 'react'

const Event = ({ event }) => {
  return (
    <div>
      <h5 className="event-card-category">{event.Category}</h5>
      <h6><span>{event.Date_of_event}</span>&nbsp;<span>{event.City}</span></h6>
      <h3>
        {event.Title}{' '}
      </h3>
      <p>{event.Description}</p>
    </div>
  )
}

export default Event

