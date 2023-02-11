import { useState } from 'react';
import Calendar from '../../assets/calendar.svg';
import CalendarBooking from './CalendarBooking';

export default function CalendarContainer({ start, setStart }) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div>
                <img
                    className="w-10 h-10 "
                    src={Calendar}
                    alt="icon"
                    onClick={() => setOpen(true)}
                />
                {open && (
                    <CalendarBooking
                        open={open}
                        onClose={() => setOpen(false)}
                        setStart={setStart}
                        start={start}
                    />
                )}
                <div className="w-72 border-2 p-2">
                    {start.date.toDateString()}
                </div>
            </div>
        </>
    );
}
