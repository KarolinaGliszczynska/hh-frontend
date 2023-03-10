import React, {useState, useRef} from 'react'
import Calendar from "./Calendar";
import axios from "axios";
import {useEffect} from "react";

const JoinEventCard = ({ event }) => {

    const[chosenSlot, setChosenSlot] = useState(null);
    const previousChoice = useRef(null);
    const [signedUp, setSignedUp] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            setCurrentUser(user);
            activateJoinButton();
        } else {
            disableJoinButton()
        }
    }, []);

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
        return axios.post(`http://localhost:3000/api/auth/users/assign/${slotId}`, { withCredentials: true })
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
        return axios.delete(`http://localhost:3000/api/auth/users/assign/${slotId}`, { withCredentials: true })
            .then((response) => {
                console.log(response);
                activateSlotButtons();
                undoPreviousSelection();
                setSignedUp(false);
                setSubmitted(false);
            }).catch((error) => {
                if (error.response) {
                    console.log(error.response);
                    activateSlotButtons();
                    undoPreviousSelection();
                    setSignedUp(false);
                    setSubmitted(false);
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

    const disableJoinButton = () => {
        const joinButton = document.querySelector(".join-button");
        joinButton.classList.add('disabled');
    }

    const activateJoinButton = () => {
        const joinButton = document.querySelector(".join-button");
        joinButton.classList.remove('disabled');
    }

    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <h5> You are now signed up for this event! </h5>
            </div>
        );
    };

    const userNotLoggedInMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: !currentUser ? '' : 'none',
                }}>
                <h5> You must be logged in to join an event! </h5>
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
                    { userNotLoggedInMessage() }
                    { successMessage() }
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
