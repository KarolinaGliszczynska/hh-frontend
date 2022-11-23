import pic from "./AllEvents/eventpic.jpg";
import React, {useEffect, useRef, useState} from 'react';


const EventDetailCard = ({ event }) => {

    /*
    useEffect(
        console.log("uploading picture"), []
    )

    const uploadPicture = () => {
        if(event.image)
        picture.current = "data:image/png;base64," + event.image
    }

     */
    const picture = event.image ? "data:image/png;base64," + event.image : pic;

    return (
        <div className='event-detail-card'>
            <h5 > {event.city}</h5>
            <h1> {event.eventTitle} </h1>
            <div>
                <img className='event-pic-large' src={picture} alt="event-pic" />
            </div>
            <p> {event.eventDescription}</p>
        </div>
    )
}

export default EventDetailCard