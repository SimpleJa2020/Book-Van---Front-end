import TicketContainer from '../features/booking/TicketContainer';
import useAuth from '../hooks/useAuth';
import * as allReservationApi from '../apis/reservation-api';
import { useEffect, useState } from 'react';
export default function TicketPage() {
    const [result, setResult] = useState({});

    const { departure, selectSeat, setSelectSeat } = useAuth();

    console.log(selectSeat);
    const getBill = async () => {
        const res = await allReservationApi.getAllReservation();
        setResult(res.data);
    };

    useEffect(() => {
        getBill();
    }, []);
    // console.log(getBill);
    // console.log(result);
    return (
        <>
            <div>
                <div>
                    <div className="bg-gray-400 h-80 m-2 p-2">
                        {/* {selectSeat.map(el => (
                            <TicketContainer
                                key={el.id}
                                date={el.Timetable.date}
                                startingTerminal={el.Departure.startingTerminal}
                                destination={el.Departure.destination}
                                gender={el.gender}
                                name={el.name}
                                email={el.name}
                                vanId={el.vanId}
                                price={el.Departure.price}
                                seat={el.vanSeatNumber}
                            />
                        ))} */}
                    </div>
                    <div>
                        <p>Terms and Condition</p>
                        <button
                            type="button"
                            className="border-2 w-72 p-2 rounded-xl bg-orange-500 text-white"
                        >
                            Download E-Ticket
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
