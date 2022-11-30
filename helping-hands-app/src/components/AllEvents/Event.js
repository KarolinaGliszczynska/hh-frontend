import React from 'react'
import pic from './eventpic.jpg'

const Event = ({ event }) => {
    const [year, month, day] = event.dateOfEvent.split('-')
    const monthNames = ["JUN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
    const monthName = monthNames[month-1]
    const picture = event.image ? "data:image/png;base64," + event.image : pic;

      return (
        <div>
          <h6 className="event-card-category">{event.eventCategory}</h6>
          <div>
              <img className='event-card-pic' src={picture} alt="event-pic" />
          </div>
            <div className='event-card-details row'>
                <div id='col1'  className='column'>
                 <p>{year}</p>
                <h2>{day}</h2>
                    <p>{monthName}</p>

                    </div>
              <div id='col2' className='column'><p>{event.city}</p>
                <h4>
                {event.eventTitle}{' '}
                </h4>
                 <p>{event.eventDescription}</p>
              </div>
          </div>
        </div>
      )
}

export default Event
