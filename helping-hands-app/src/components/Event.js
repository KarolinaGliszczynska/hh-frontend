import React from 'react'
import './Events.css'
import Calendar from "./Calendar";

const Event = ({ event }) => {

      return (
        <div onClick={() => changeEvent()}>
          <h5 className="event-card-category">{event.eventCategory}</h5>
          <h6><span>{event.dateOfEvent}</span>&nbsp;<span>{event.city}</span></h6>
          <h3>
            {event.eventTitle}{' '}
          </h3>
          <p>{event.eventDescription}</p>
        </div>
      )
}

export default Event
