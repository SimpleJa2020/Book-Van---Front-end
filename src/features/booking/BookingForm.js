import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import * as bookingApi from '../../apis/booking-api';
import CalendarContainer from './CalendarContainer';

const initialDropdown = {
    startingTerminal: '',
    destination: '',
    date: new Date()
};

export default function BookingForm() {
    const [start, setStart] = useState(initialDropdown);

    const { departure } = useAuth();

    const handleChangeDropdown = async e => {
        let toSet;
        if (e.target.name === 'from') {
            toSet = 'startingTerminal';
        } else if (e.target.name === 'to') {
            toSet = 'destination';
        }
        setStart({ ...start, [toSet]: e.target.value });
        console.log({ ...start, [toSet]: e.target.value });
        const res = await bookingApi.getDestination(e.target.value);
        console.log(res.data);
    };

    return (
        <>
            <form>
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
                        Search Seat
                    </button>
                </div>
            </form>
        </>
    );
}
