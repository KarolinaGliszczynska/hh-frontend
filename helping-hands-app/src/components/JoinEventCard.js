import React, {useState} from 'react'
import Calendar from "./Calendar";

const JoinEventCard = ({ event }) => {
    console.log(event.eventSlots);

    return (
        <div className='join-event-card'>
            <h5 className="card-header">Join event</h5>

            <div className='calendar-display'>
                { event ? < Calendar
                    event = {event}
                /> : " "}
            </div>
            <div className={'slot-buttons-container'}>
              {event.eventSlots
                ? (event.eventSlots.map(slot => <button>{slot.slotStartTime}</button>))
                : (<p>loading slots...</p>)}
            </div>
            <div className='button-row'>
                <button className='join-button'>Join</button>
            </div>
        </div>
    )
}

export default JoinEventCard
