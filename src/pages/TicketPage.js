import TicketContainer from '../features/booking/TicketContainer';
import useAuth from '../hooks/useAuth';
import * as allReservationApi from '../apis/reservation-api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
export default function TicketPage() {
    const [result, setResult] = useState();

    const { departure, selectSeat, setSelectSeat } = useAuth();
    const { reservationId } = useParams();

    // console.log('baka', result);
    // console.log(selectSeat);
    // const help = Number(selectSeat);
    // console.log('aaaaaahear', help);
    const getBill = async () => {
        const res = await allReservationApi.getAllReservation(selectSeat);
        // console.log('---------->', res.data.reservation.Passenger);
        setResult(res.data);
        // console.log(selectSeat);
    };
    useEffect(() => {
        getBill();
    }, [selectSeat]);
    // console.log(getBill);
    // console.log('----------------', result);
    return (
        <>
            <div>
                <div>
                    <div className="bg-gray-400 h-80 m-2 p-2">
                        <div className="bg-white h-72 m-1">
                            <div>
                                {result &&
                                    result.reservation.Passenger.firstName}
                            </div>
                            <div>
                                {result &&
                                    result.reservation.Passenger.lastName}
                            </div>
                            <div>
                                {result && result.reservation.Passenger.email}
                            </div>
                            <div>
                                {result &&
                                    result.reservation.Trip.Timetable.date}
                            </div>
                            <div>
                                {result && result.reservation.Trip.Van.id}
                            </div>
                            <div>
                                {result &&
                                    result.reservation.Trip.Departure
                                        .startingTerminal}
                            </div>
                            <div>
                                {result &&
                                    result.reservation.Trip.Departure
                                        .destination}
                            </div>
                            <div>
                                {result &&
                                    result.reservation.Trip.Departure.price}
                            </div>
                        </div>
                        <div>
                            <p>Terms and Condition</p>

                            <button
                                type="button"
                                className="border-2 w-72 p-2 rounded-xl bg-orange-500 text-white"
                            >
                                Download E-Ticket
                            </button>
                            {/* <div>{result.reservation}</div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
