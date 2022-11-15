import React, {useState} from 'react'
import Calendar from "./Calendar";

const JoinEventCard = ({ event }) => {
    console.log(event.eventSlots);

    const handleClick = (event) => {
        console.log(event.target.getAttribute('slot-id'));
    }

    return (
        <div className='join-event-card'>
            <h5 className="card-header">Join event</h5>

            <div className='calendar-display'>
                { event ? < Calendar
                    event = {event}
                /> : " "}
            </div>
            <div>
                <h4>Pick a time slot</h4>
            </div>
            <div className='slot-buttons-container'>
              {event.eventSlots
                ? (event.eventSlots.map(slot =>
                      <button className='slot-button' slot-id={slot.slotId} onClick={(event)=>handleClick(event)}>
                      {slot.slotStartTime}
                      </button>))
                : (<p>loading slots...</p>)}
            </div>
            <div className='button-row'>
                <button className='join-button'>Join</button>
            </div>
        </div>
    )
}

export default JoinEventCard
