import Calendar from 'react-calendar';
import { useState } from 'react';

export default function CalendarBooking({ setStart }) {
    const [time, setTime] = useState(new Date());

    const handleCalendar = value => {
        setTime(value);
        setStart(state => {
            return { ...state, date: value };
        });
    };

    return (
        <>
            <Calendar onChange={handleCalendar} value={time} />
        </>
    );
}
