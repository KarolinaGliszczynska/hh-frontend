import React from 'react'
import pic from './eventpic.jpg'

const Event = ({ event }) => {
    const [year, month, day] = event.dateOfEvent.split('-')
    const monthNames = ["JUN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
    const monthName = monthNames[month-1]

      return (
        <div>
          <h6 className="event-card-category">{event.eventCategory}</h6>
             <   img className='event-card-pic' src={pic} alt="event-pic" />
          <div className='event-card-details row'>
                <div id='col1'  className='column'>
                <h2>{day}</h2>
                    <p>{monthName}</p>
                    </div>
              <div id='col2' className='column'>
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
