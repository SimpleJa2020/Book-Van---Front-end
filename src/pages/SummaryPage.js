import { useState } from 'react';
import { Link } from 'react-router-dom';
import useTrip from '../hooks/useTrip';
import GoTo from '../assets/ArrowRight.svg';
import useAuth from '../hooks/useAuth';

export default function SummaryPage() {
    const { trips, setTrips, choose, setChoose } = useTrip();
    const { getUser } = useAuth();
    console.log(getUser);
    let tripId;
    if (choose.time === '09:00:00') {
        tripId = 1;
    } else if (choose.time === '10:00:00') {
        tripId = 2;
    } else if (choose.time === '11:00:00') {
        tripId = 3;
    }
    return (
        <>
            <div>
                <div className="mt-10 flex justify-center">
                    <div className="border-2 w-72 h-20 p-2 rounded-xl bg-white border-orange-400"></div>
                </div>

                <div className="mt-10">
                    <div className="border-2 flexbox  px-5 py-10">
                        <div className="flex justify-between">
                            <div>{choose.startingTerminal}</div>
                            <img className="w-10 h-10" src={GoTo} />
                            <div>{choose.destination}</div>
                        </div>

                        <div className="flex justify-center mt-11">
                            <Link to={`/seat/` + tripId}>
                                <button className=" border-2 w-72 p-2 rounded-xl bg-orange-500 text-white">
                                    Search Seat
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
