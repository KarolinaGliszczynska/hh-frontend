import pic from "./AllEvents/eventpic.jpg";
import React, {useEffect, useRef, useState} from 'react';

const EventDetailCard = ({ event }) => {

    const picture = event.image ? "data:image/png;base64," + event.image : pic;

    return (
    <div className='event-detail-col-1'>

        <div className='event-detail-card'>
                    <div className='event-detail-card-image-col'>
                        <img className='event-pic-large' src={picture} alt="event-pic" />

                    </div>




                    <div className='event-detail-card-disc-col'>
                        <h5 className='event-detail-city'> {event.city}</h5>
                        <h1 className='event-detail-title'> {event.eventTitle} </h1>
                        <p className="small-text">Organizer:</p>

                        <p> {event.eventDescription}</p>


                    </div>
        </div>
    </div>

    )
}

export default EventDetailCard