import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function SummaryPage() {
    // const [selectSeat, setSelectSeat] = useState({});
    // console.log('kram', selectSeat);
    const { departure, selectSeat, setSelectSeat } = useAuth();

    return (
        <>
            <div>
                <div className="mt-10">
                    <div className="border-2 w-72 h-20 p-2 rounded-xl bg-white border-orange-400"></div>
                </div>

                {departure.map(data => {
                    console.log(data);
                    return (
                        <div className="mt-10" key={data.id}>
                            <div className="border-2 flexbox  px-5 py-10">
                                <div className="flex justify-between">
                                    <div>{data.Departure.startingTerminal}</div>
                                    <div>{data.Departure.destination}</div>
                                </div>

                                <div className="forBook">
                                    <Link to="/seat">
                                        <button
                                            className="border-2 w-72 p-2 rounded-xl bg-orange-500 text-white"
                                            onClick={() => {
                                                setSelectSeat(data);
                                            }}
                                        >
                                            Search Seat
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
