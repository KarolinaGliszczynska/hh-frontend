import React from 'react'
import JoinEventCard from "./JoinEventCard";
import EventDetailCard from "./EventDetailCard";

const EventDetail = (event) => {
      return (
        <>
            <div>
                < EventDetailCard />
                < JoinEventCard />
            </div>
        </>
      )
}

export default EventDetail
