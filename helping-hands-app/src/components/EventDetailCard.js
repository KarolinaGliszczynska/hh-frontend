import pic from "./AllEvents/eventpic.jpg";
import React, {useEffect, useRef, useState} from 'react';


const EventDetailCard = ({ event }) => {

    const picture = useRef(pic);

    useEffect(
        console.log("uploading picture"), []
    )

    const uploadPicture = () => {
        if(event.image)
        picture.current = "data:image/png;base64," + event.image
    }

    return (
        <div className='event-detail-card'>
            <h5 > {event.city}</h5>
            <h1> {event.eventTitle} </h1>
            <   img className='event-card-pic'
                    src={picture} alt="event-pic" />
            <p> {event.eventDescription}</p>
        </div>
    )
}

export default EventDetailCard