

const EventDetailCard = ({ event }) => {

    return (
        <div className='event-detail-card'>
            <h5 > {event.city}</h5>
            <h1> {event.eventTitle} </h1>
            <p> {event.eventDescription}</p>
        </div>
    )
}

export default EventDetailCard