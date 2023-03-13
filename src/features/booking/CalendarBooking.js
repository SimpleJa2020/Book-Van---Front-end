import Calendar from 'react-calendar';
import { useState } from 'react';
import dayjs from 'dayjs';

export default function CalendarBooking({ setChoose }) {
    const [calendar, setCalendar] = useState(new Date());

    const handleCalendar = value => {
        setCalendar(value);
        setChoose(state => {
            const newDate = dayjs(value).format('YYYY-MM-DD');
            console.log(newDate);
            return { ...state, date: newDate };
        });
    };

    return (
        <>
            <Calendar onChange={handleCalendar} value={calendar} />
        </>
    );
}
