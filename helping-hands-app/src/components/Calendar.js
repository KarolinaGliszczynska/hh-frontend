import {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'


const CalendarComponent = ({event}) => {
    console.log(event.dateOfEvent)
    const date = new Date('2022-11-14')
    //const date = new Date(event.dateOfEvent.toString())
    //const [date, setDate] = useState(new Date('2000-01-01'))

    //setDate(new Date(event.dateOfEvent.toString()));


    return (
        <div className="app">
            <div className="calendar-container">
                <Calendar value={date}/>
            </div>
        </div>)
}


export default CalendarComponent

