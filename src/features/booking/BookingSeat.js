import useAuth from '../../hooks/useAuth';
import * as selectSeatApi from '../../apis/reservation-api';
import * as paymentApi from '../../apis/payment-api';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SeatContainer from './SeatContainer';

export default function BookingSeat() {
    const [seatNumber, setSeatNumber] = useState([]);
    const [isPaids, setIsPaids] = useState([]);
    console.log(isPaids);

    const { departure, selectSeat, setSelectSeat, setGetMe } = useAuth();
    console.log(selectSeat.id);
    useEffect(() => {
        const fetchPayment = async () => {
            const res = await paymentApi.getPayment();
            setIsPaids(res.data);
        };
        fetchPayment();
    }, []);

    const handlechangeInput = e => {
        setSeatNumber(e.target.value);
    };
    const ticketNavigate = useNavigate();

    const handleClickSubmit = async () => {
        try {
            const res = await selectSeatApi.findReservation({
                tripId: selectSeat.id,
                vanSeatNumber: seatNumber
            });
            const reserveId = res.data.reservation;
            console.log('xxxxxxxxxxxxxxxxxxx ----- new', reserveId);
            setGetMe(reserveId);
            console.log('bbb', selectSeat);
            console.log('kram', JSON.stringify(reserveId));
            ticketNavigate(`/ticket/booked/${reserveId}`);
        } catch (err) {}
    };

    return (
        <>
            <div>
                <SeatContainer isPaids={isPaids} />
                <button
                    className="bg-orange-300  w-20 h-20 m-2 flex flex-col items-center justify-center rounded-xl  hover:bg-orange-500  "
                    onClick={handlechangeInput}
                    name="2"
                    type="button"
                    value={2}
                >
                    2
                </button>
                <button
                    className="bg-orange-300  w-20 h-20 m-2 flex flex-col items-center justify-center rounded-xl  hover:bg-orange-500 "
                    onClick={handlechangeInput}
                    name="3"
                    value={3}
                >
                    3
                </button>
                <button
                    className="bg-orange-300  w-20 h-20 m-2 flex flex-col items-center justify-center rounded-xl  hover:bg-orange-500 "
                    onClick={handlechangeInput}
                    name="4"
                    value={4}
                >
                    4
                </button>
                <button
                    className="bg-orange-300  w-20 h-20 m-2 flex flex-col items-center justify-center rounded-xl  hover:bg-orange-500 "
                    onClick={handlechangeInput}
                    name="5"
                    value={5}
                >
                    5
                </button>
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
