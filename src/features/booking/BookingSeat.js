import useAuth from '../../hooks/useAuth';
import * as selectSeatApi from '../../apis/reservation-api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BookingSeat() {
    const [seatNumber, setSeatNumber] = useState([]);
    const { departure, selectSeat, setSelectSeat } = useAuth();
    console.log(selectSeat.id);
    const handlechangeInput = e => {
        setSeatNumber(e.target.value);
    };
    const ticketNavigate = useNavigate();

    const handleClickSubmit = async () => {
        try {
            const res = await selectSeatApi.createReservation({
                tripId: selectSeat.id,
                vanSeatNumber: seatNumber
            });
            const reserveId = res.data.reservation.id;
            setSelectSeat(reserveId);
            console.log('bbb', selectSeat);
            console.log('kram', JSON.stringify(reserveId));
            ticketNavigate(`/ticket/booked/${reserveId}`);
        } catch (err) {}
    };

    return (
        <>
            <div>
                <div className="bg-orange-300  w-20 h-20 m-2 flex flex-col items-center justify-center rounded-xl hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-400 ">
                    <button onClick={handlechangeInput} name="1" value={1}>
                        1
                    </button>
                </div>
                <div className="bg-orange-300  w-20 h-20 m-2 flex flex-col items-center justify-center rounded-xl  hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-400 ">
                    <button onClick={handlechangeInput} name="2" value={2}>
                        2
                    </button>
                </div>
                <div className="bg-orange-300  w-20 h-20 m-2 flex flex-col items-center justify-center rounded-xl  hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-400 ">
                    <button onClick={handlechangeInput} name="3" value={3}>
                        3
                    </button>
                </div>
                <div className="bg-orange-300  w-20 h-20 m-2 flex flex-col items-center justify-center rounded-xl  hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-400 ">
                    <button onClick={handlechangeInput} name="4" value={4}>
                        4
                    </button>
                </div>
                <div className="bg-orange-300  w-20 h-20 m-2 flex flex-col items-center justify-center rounded-xl  hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-400 ">
                    <button onClick={handlechangeInput} name="5" value={5}>
                        5
                    </button>
                </div>
                <div>
                    <button
                        className="border-2 w-72 p-2 rounded-xl bg-orange-500 text-white"
                        onClick={handleClickSubmit}
                        type="submit"
                    >
                        submit
                    </button>
                </div>
            </div>
        </>
    );
}
