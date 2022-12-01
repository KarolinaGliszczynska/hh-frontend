import pic from "./AllEvents/eventpic.jpg";
import React, {useEffect, useRef, useState} from 'react';

const EventDetailCard = ({ event }) => {

    const picture = event.image ? "data:image/png;base64," + event.image : pic;

    return (
    <div className='event-detail-col-1'>

        <div className='event-detail-card '>
                    <div className='event-detail-card-image-col'>
                        <img className='event-pic-large' src={picture} alt="event-pic" />
                    </div>



                    <div className='event-detail-card-disc-col'>
                        <h5 > {event.city}</h5>
                        <h1> {event.eventTitle} </h1>

                        <p> {event.eventDescription}</p>


                    </div>
        </div>
        </div>

    )
}

export default EventDetailCard