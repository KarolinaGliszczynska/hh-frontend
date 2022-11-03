import React from 'react';

const EventCard = ({ event: { ID, City, Category, Title, Description, Date_of_event } }) => {
  return (
    <div className="event" key={ID}>
      <div>
        <p>{Category}</p>
      </div>

      <div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>

      <div>
        <span>{City}</span>
        <span>{Date_of_event}</span>
        <h3>{Title}</h3>
        <p>{Description}</p>
      </div>
    </div>
  );
}

export default EventCard;