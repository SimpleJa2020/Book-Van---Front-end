import { useState, useEffect } from 'react';
import useTrip from '../../hooks/useTrip';
import * as tripApi from '../../apis/trip-api';
import CalendarContainer from './CalendarContainer';
import { useNavigate } from 'react-router-dom';
import Time from '../../assets/OrangeTime.svg';

export default function BookingForm() {
    const { trips, setTrips, choose, setChoose } = useTrip();

    const fetchTrip = async () => {
        const res = await tripApi.getAllTrip();
        setTrips(res.data.trips);
    };

    useEffect(() => {
        fetchTrip();
    }, []);

    const handleChangeDropdown = async e => {
        let toSet;
        if (e.target.name === 'from') {
            toSet = 'startingTerminal';
        } else if (e.target.name === 'to') {
            toSet = 'destination';
        } else if (e.target.name === 'time') {
            toSet = 'time';
        }
        setChoose({ ...choose, [toSet]: e.target.value });
        const res = await tripApi.getAllTrip(e.target.value);
    };

    const bookNavigate = useNavigate();

    const handleSubmitBook = async e => {
        try {
            e.preventDefault();
            const trueDate = new Date(choose.date);
            const date = trueDate.getDate();
            trueDate.setDate(date + 1);

            const result = await tripApi.getAllTrip(
                choose.startingTerminal,
                choose.destination,
                trueDate.toISOString().split('T')[0]
            );
            console.log(result.data.trips);
            setTrips(result.data.trips);
            bookNavigate('/summary');
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <>
            <form onSubmit={handleSubmitBook}>
                <div className="flex justify-center mt-28">
                    <h1 className="text-[30px]">Choose your trip</h1>
                </div>
                <div className="mt-5 ml-7">
                    <div className="font-bold">From</div>
                    <div className="mt-2">
                        <select
                            value={choose.startingTerminal}
                            onChange={handleChangeDropdown}
                            name="from"
                        >
                            <option value={''} disabled hidden>
                                Choose
                            </option>
                            {trips.map(data => {
                                return (
                                    <option
                                        key={data.id}
                                        value={data.Departure?.startingTerminal}
                                    >
                                        {data.Departure?.startingTerminal}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                </div>
                <div className="mt-5 ml-7">
                    <div className="font-bold">To</div>
                    <div className="mt-2">
                        <select
                            value={choose.destination}
                            onChange={handleChangeDropdown}
                            name="to"
                        >
                            <option value={''} disabled hidden>
                                Choose
                            </option>
                            {trips.map(data => {
                                return (
                                    <option
                                        key={data.id}
                                        value={data.Departure?.destination}
                                    >
                                        {data.Departure?.destination}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                </div>
                <div className="mt-5 ml-7">
                    <div>
                        <label className="font-bold">Date</label>
                        <CalendarContainer
                            choose={choose}
                            setChoose={setChoose}
                        />
                    </div>
                    <div className="mt-5">
                        <label className="font-bold">Time</label>
                        <div className="flex mt-2 gap-2">
                            <img className="w-10 h-10 " src={Time} alt="icon" />
                            <select
                                onChange={handleChangeDropdown}
                                name="time"
                                value={choose.time}
                            >
                                <option value={''} disabled hidden>
                                    Choose
                                </option>
                                {trips.map(data => {
                                    return (
                                        <option
                                            key={data.id}
                                            value={data.Timetable?.time}
                                        >
                                            {data.Timetable?.time}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="mt-16 flex justify-center">
                    <button
                        type="submit"
                        className="border-2  w-72 p-2 rounded-xl bg-white text-orange-400 border-orange-400 hover:bg-orange-500 hover:text-white"
                    >
                        book
                    </button>
                </div>
            </form>
        </>
    );
}
