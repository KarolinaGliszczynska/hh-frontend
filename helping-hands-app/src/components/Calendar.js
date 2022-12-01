import Calendar from 'react-calendar';


const CalendarComponent = ({event}) => {
    console.log(event.dateOfEvent)
    let date = event.dateOfEvent ? new Date(event.dateOfEvent.toString()) : null

    return (
        <div className="app">
            <div className="calendar-container">
              <Calendar value={date}/>
            </div>
        </div>)
}


export default CalendarComponent

