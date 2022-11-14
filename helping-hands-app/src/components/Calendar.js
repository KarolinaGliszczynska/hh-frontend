import {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'

const dateOfEvent = new Date('2022-12-01')

const CalendarComponent = (props) => (
    <div className="app">
        <div className="calendar-container">
            <Calendar value={dateOfEvent}/>
        </div>
    </div>
)


export default CalendarComponent

