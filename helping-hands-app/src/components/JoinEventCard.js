import React, {useState, useRef} from 'react'
import Calendar from "./Calendar";

const JoinEventCard = ({ event }) => {

    const[chosenSlot, setChosenSlot] = useState(null);
    const previousChoice = useRef(null);
    const [signedUp, setSignedUp] = useState(false);

    const handleSlotClick = (event) => {
        undoPreviousSelection();
        const clickedSlotId = event.target.getAttribute('slot-id');
        changeSlotColorToGreen(event.target);
        setChosenSlot(clickedSlotId);
        previousChoice.current = event.target;
    }

    const handleJoinClick = () => {
        fetchPostRequestToSlot(chosenSlot);
        disableSlotButtons();
        setSignedUp(true);
    }

    const handleLeaveEventClick = () => {
        fetchDeleteRequestToSlot(chosenSlot);
        activateSlotButtons();
        undoPreviousSelection();
        setSignedUp(false);
    }

    const fetchPostRequestToSlot = (slotId) => {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Length': 0},
        };
        fetch(`http://localhost:8080/users/assign/${slotId}`, requestOptions)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch((err) => console.log(err));
    };

    const fetchDeleteRequestToSlot = (slotId) => {
        const requestOptions = {
            method: 'DELETE',
            headers: {'Content-Length': 0},
        };
        fetch(`http://localhost:8080/users/assign/${slotId}`, requestOptions)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch((err) => console.log(err));
    };

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

    return (
        <div className='join-event-card'>
            <h5 className="card-header">Join event</h5>

            <div className='calendar-display'>
                { event ? < Calendar
                    event = {event}
                /> : " "}
            </div>
            <div>
                <h4>Pick a time slot</h4>
            </div>
            <div className='slot-buttons-container'>
              {event.eventSlots
                ? (event.eventSlots.map(slot =>
                      <button
                          slot-id={slot.slotId}
                          className={ 'slot-button inactive' }
                          onClick={(event)=>handleSlotClick(event)}>
                      {slot.slotStartTime}
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
    )
}

export default JoinEventCard
