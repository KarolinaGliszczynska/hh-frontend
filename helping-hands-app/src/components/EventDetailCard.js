

const EventDetailCard = ({ clickedEvent }) => {
    return (
        <div className='event-detail-card'>
            <h5 className="card-header">Event details</h5>
            <h1> {clickedEvent.eventTitle} </h1>
        </div>
    )
}

export default EventDetailCard