import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import JoinEventCard from "./JoinEventCard";
import EventDetailCard from "./EventDetailCard";

const EventDetail = ({match}) => {
    const {id} = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchEvent();
    }, []);

    const fetchEvent = () => {
        console.log(id)
        fetch(`http://localhost:8080/events/${id}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setData(data);
                console.log(data);
            })
            .catch((err) => console.log(err));
    };

      return (
        <>
            <div>
                < EventDetailCard clickedEvent = {data} />
                < JoinEventCard clickedEvent = {data} />
            </div>
        </>
      )
}

export default EventDetail
