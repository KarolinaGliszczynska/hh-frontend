import React, {useState} from 'react'
import Calendar from "./Calendar";

const JoinEventCard = ({ event }) => {
    const slots = event.eventSlots;
    console.log(slots);

    return (
        <div className='join-event-card'>
            <h5 className="card-header">Join event</h5>

            <div className='calendar-display'>
                { event ? < Calendar
                    event = {event}
                /> : " "}
            </div>
            <div className={'slot-buttons-container'}>
                {slots.map ((slot) => {
                    <button>slot</button>
                }) }
            </div>
            <div className='button-row'>
                <button className='join-button'>Join</button>
            </div>
        </div>
    )
}

export default JoinEventCard
