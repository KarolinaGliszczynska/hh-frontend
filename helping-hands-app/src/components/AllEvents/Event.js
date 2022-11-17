import React from 'react'
import pic from './eventpic.jpg'
const Event = ({ event }) => {

      return (
        <div>
          <h6 className="event-card-category">{event.eventCategory}</h6>
             <   img className='event-card-pic' src={pic} alt="event-pic" />
          <div className='event-card-details'>
          <h6><span>{event.dateOfEvent}</span>&nbsp;<span>{event.city}</span></h6>
          <h3>
            {event.eventTitle}{' '}
          </h3>
          <p>{event.eventDescription}</p>
          </div>
        </div>
      )
}

export default Event
