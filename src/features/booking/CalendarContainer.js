import dayjs from 'dayjs';
import { useState } from 'react';
import Calendar from '../../assets/OrangeCalendar.svg';
import CalendarBooking from './CalendarBooking';

export default function CalendarContainer({ choose, setChoose }) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="flex mt-2">
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
                        setChoose={setChoose}
                        choose={choose}
                    />
                )}
                <div className="w-64 border-2 p-2 ml-2">
                    {choose?.date
                        ? dayjs(choose.date).format('YYYY-MM-DD')
                        : ''}
                </div>
            </div>
        </>
    );
}
