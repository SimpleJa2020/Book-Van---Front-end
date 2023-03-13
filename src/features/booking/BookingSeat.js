import * as reservationApi from '../../apis/reservation-api';
import useTrip from '../../hooks/useTrip';
import { useNavigate, useParams } from 'react-router-dom';
import SeatContainer from './SeatContainer';
import { useEffect } from 'react';
import useReservation from '../../hooks/useReservation';
import useAuth from '../../hooks/useAuth';

export default function BookingSeat() {
    const { trips, setTrips, choose, setChoose } = useTrip();
    const { seatNumber, setSeatNumber } = useReservation();
    const { getUser } = useAuth();
    console.log('getUser', getUser);
    const passengerId = getUser;
    const params = useParams();

    const fetchSeat = async () => {
        const res = await reservationApi.getReservationById(params.tripId);
        setChoose(choose => ({ ...choose, tripId: params.tripId }));
        setSeatNumber(res.data);
    };
    console.log(choose);

    useEffect(() => {
        fetchSeat();
    }, []);

    const ticketNavigate = useNavigate();

    const handleClickSubmit = async () => {
        try {
            const res = await reservationApi.createReservation(choose);
            const reserveId = res.data.reservation;

            ticketNavigate(`/ticket/booked/${reserveId}`);
        } catch (err) {}
    };

    return (
        <>
            <div className="flex flex-col justify-center mt-28">
                <div className="flex justify-center mb-12">
                    <h1 className="text-[30px]">Choose your seat</h1>
                </div>

                <SeatContainer choose={choose} setChoose={setChoose} />

                <div className="flex justify-center mt-14">
                    <button
                        className="border-2 w-72 p-2  rounded-xl bg-orange-500 text-white"
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
