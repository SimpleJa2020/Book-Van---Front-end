import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import * as searchTripApi from '../../apis/trip-api';
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
    // console.log('test', departure);

    const handleChangeDropdown = async e => {
        let toSet;
        if (e.target.name === 'from') {
            toSet = 'startingTerminal';
        } else if (e.target.name === 'to') {
            toSet = 'destination';
        }
        setStart({ ...start, [toSet]: e.target.value });
        console.log({ ...start, [toSet]: e.target.value });
        // const res = await reservationApi.createReservation(e.target.value);
        // console.log(res.data);
    };

    const bookNavigate = useNavigate();

    const handleSubmitBook = async e => {
        try {
            e.preventDefault();
            const trueDate = new Date(start.date);
            const date = trueDate.getDate();
            trueDate.setDate(date + 1);

            const result = await searchTripApi.searchTrip(
                start.startingTerminal,
                start.destination,
                trueDate.toISOString().split('T')[0]
            );
            console.log(result.data.trips);
            setDeparture(result.data.trips);
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
                                        value={data.Departure.startingTerminal}
                                    >
                                        {data.Departure.startingTerminal}
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
                                        value={data.Departure.destination}
                                    >
                                        {data.Departure.destination}
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
