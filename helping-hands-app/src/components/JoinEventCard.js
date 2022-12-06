import React, {useState, useRef} from 'react'
import Calendar from "./Calendar";
import axios from "axios";

const JoinEventCard = ({ event }) => {

    const[chosenSlot, setChosenSlot] = useState(null);
    const previousChoice = useRef(null);
    const [signedUp, setSignedUp] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const getHourFromSlotStrtTime = (slot) => {
        const slotStartHour = slot.slotStartTime.split('T')[1].split(':')[0];
        const slotStartMinutes = slot.slotStartTime.split('T')[1].split(':')[1];
        return `${slotStartHour} : ${slotStartMinutes}`
    }

    const handleSlotClick = (event) => {
        undoPreviousSelection();
        const clickedSlotId = event.target.getAttribute('slot-id');
        changeSlotColorToGreen(event.target);
        setChosenSlot(clickedSlotId);
        previousChoice.current = event.target;
    }

    const handleJoinClick = () => {
        fetchPostRequestToSlot(chosenSlot);
    }

    const handleLeaveEventClick = () => {
        fetchDeleteRequestToSlot(chosenSlot);
    }

    const fetchPostRequestToSlot = (slotId) => {
        return axios.post(`http://localhost:8080/users/assign/${slotId}`, { withCredentials: true })
            .then((response) => {
                console.log(response);
                setSubmitted(true);
                setError(false);
                disableSlotButtons();
                setSignedUp(true);
            }).catch((error) => {
                if (error.response) {
                    console.log(error.response);
                    setSubmitted(false);
                    setError(true);
                }
            })
    }


    const fetchDeleteRequestToSlot = (slotId) => {
        return axios.delete(`http://localhost:8080/users/assign/${slotId}`, { withCredentials: true })
            .then((response) => {
                console.log(response);
                activateSlotButtons();
                undoPreviousSelection();
                setSignedUp(false);
            }).catch((error) => {
                if (error.response) {
                    console.log(error.response);
                }
            })
    }


    const changeSlotColorToGreen = (button) => {
        button.classList.remove('inactive');
        button.classList.add('active');
    }

    const changeSlotColorToWhite = (button) => {
        button.classList.remove('active');
        button.classList.add('inactive');
    }

    const undoPreviousSelection = () => {
        if(previousChoice.current){
            changeSlotColorToWhite(previousChoice.current);
            previousChoice.current = null;
        }
    }

    const disableSlotButtons = () => {
        const slotButtons = document.querySelectorAll(".slot-button");
        slotButtons.forEach(button => button.classList.add('disabled'));
    }

    const activateSlotButtons = () => {
        const slotButtons = document.querySelectorAll(".slot-button");
        slotButtons.forEach(button => button.classList.remove('disabled'));
    }

    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <h6> You are now signed up for this event! </h6>
            </div>
        );
    };

    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <h6> You must be logged in to join an event! </h6>
            </div>
        );
    };


    return (
        <div className='event-detail-col-2'>
            <div className='join-event-card'>
                <h5 className="event-card-category">Join event</h5>

                <div className='calendar-display'>
                    { event ? < Calendar
                        event = {event}
                    /> : " "}
                </div>

                <div className="messages">
                    {errorMessage()}
                    {successMessage()}
                </div>

                <div className='slot-title'>
                    <h4>Pick a time slot</h4>
                </div>

                <div className='slot-buttons-container'>
                  {event.eventSlots
                    ? (event.eventSlots.map(slot =>
                          <button key = {slot.slotId}
                              slot-id={slot.slotId}
                              className={ 'slot-button inactive' }
                              onClick={(event)=>handleSlotClick(event)}>
                          { getHourFromSlotStrtTime(slot) }
                          </button>))
                    : (<p>loading slots...</p>)}
                </div>

                <div className='button-row'>
                    { !signedUp
                    ? (<button className='join-button' onClick={(event)=>handleJoinClick(event)}>Join</button>)
                    : (<button className='join-button' onClick={(event)=>handleLeaveEventClick(event)}>Leave event</button>)
                    }
                </div>
            </div>
        </div>
    );
}

export default JoinEventCard
