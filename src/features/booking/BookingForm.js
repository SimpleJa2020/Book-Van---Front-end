import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import * as bookingApi from '../../apis/booking-api';
import CalendarContainer from './CalendarContainer';
import { useNavigate } from 'react-router-dom';

const initialDropdown = {
    startingTerminal: '',
    destination: '',
    date: new Date()
};

export default function BookingForm() {
    const [start, setStart] = useState(initialDropdown);

    const { departure, setDeparture } = useAuth();

    const handleChangeDropdown = async e => {
        let toSet;
        if (e.target.name === 'from') {
            toSet = 'startingTerminal';
        } else if (e.target.name === 'to') {
            toSet = 'destination';
        }
        setStart({ ...start, [toSet]: e.target.value });
        console.log({ ...start, [toSet]: e.target.value });
        const res = await bookingApi.getAllBooking(e.target.value);
        console.log(res.data);
    };

    const bookNavigate = useNavigate();

    const handleSubmitBook = async e => {
        try {
            e.preventDefault();
            const trueDate = new Date(start.date);
            const date = trueDate.getDate();
            trueDate.setDate(date + 1);
            const input = {
                origin: start.startingTerminal,
                finalPlace: start.destination,
                bookingDate: trueDate.toISOString().split('T')[0]
            };
            console.log(input);
            const result = await bookingApi.getAllBooking(input);
            console.log(result.data.timeList);
            setDeparture(result.data.timeList);
            bookNavigate('/summary');
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <>
            <form onSubmit={handleSubmitBook}>
                <div>Choose your trip</div>
                <div className="">
                    <div>From</div>
                    <div>
                        <select
                            defaultValue={''}
                            onChange={handleChangeDropdown}
                            name="from"
                        >
                            <option value={''} disabled hidden>
                                Choose
                            </option>
                            {departure.map(data => {
                                return (
                                    <option
                                        key={data.id}
                                        value={data.startingTerminal}
                                    >
                                        {data.startingTerminal}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                </div>
                <div className="">
                    <div>To</div>
                    <div>
                        <select
                            defaultValue={''}
                            onChange={handleChangeDropdown}
                            name="to"
                        >
                            <option value={''} disabled hidden>
                                Choose
                            </option>
                            {departure.map(data => {
                                return (
                                    <option
                                        key={data.id}
                                        value={data.destination}
                                    >
                                        {data.destination}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                </div>
                <div className="">
                    <div>Date and Time</div>
                    <CalendarContainer start={start} setStart={setStart} />
                </div>
                <div className="">
                    <button
                        type="submit"
                        className="border-2 w-72 p-2 rounded-xl bg-white text-orange-400 border-orange-400"
                    >
                        book
                    </button>
                </div>
            </form>
        </>
    );
}
