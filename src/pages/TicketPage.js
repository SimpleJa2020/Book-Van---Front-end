import * as reservationApi from '../apis/reservation-api';
import * as paymentApi from '../apis/payment-api';
import { useNavigate, useParams } from 'react-router-dom';
import Van from '../assets/Van.svg';
import Avatar from '../assets/Avatar.svg';
import { useEffect, useState } from 'react';
import useReservation from '../hooks/useReservation';
export default function TicketPage() {
    const { seatNumber, setSeatNumber } = useReservation();
    console.log('seattttttttttttt', seatNumber);
    const [ticket, setTicket] = useState({});

    const params = useParams();
    console.log(params.reserveId);
    const NewTk = ticket[0];
    const getList = async () => {
        const res = await reservationApi.getReservationById(params.reserveId);
        console.log('ggggggggggg', res.data);
        setTicket(res.data);
    };
    useEffect(() => {
        getList();
    }, []);

    const paymentNavigate = useNavigate();

    const handleClickPay = async () => {
        try {
            const res = await paymentApi.createPayment({
                reservationId: params.reserveId
            });
            paymentNavigate(`/pay/${params.reserveId}`);
        } catch (err) {}
    };

    const handleClickCancel = async () => {
        try {
            const res = await reservationApi.cancelReservation({
                reservationId: params.reserveId
            });
            paymentNavigate('/');
        } catch (err) {}
    };
    return (
        <>
            <div>
                <div className="mt-16">
                    <div className="bg-zinc-400 h-96 m-2 p-3">
                        <div className="bg-white h-80 m-1">
                            <div className="flex justify-center ml-7">
                                <p> {NewTk?.Trip?.Timetable?.date}</p>
                            </div>
                            <div className="flex justify-between mt-6">
                                <p>
                                    {NewTk?.Trip?.Departure?.startingTerminal}
                                </p>
                                <img src={Van} />
                                <p>{NewTk?.Trip?.Departure?.destination}</p>
                            </div>
                            <img src={Avatar} />
                            <div className="flex justify-between mt-6">
                                <p>{NewTk?.Passenger?.firstName}</p>
                                <p>{NewTk?.Passenger?.lastName}</p>
                                <p>{NewTk?.Passenger?.email}</p>
                            </div>
                            <div className="flex justify-center gap-5 ml-8 mt-6">
                                <p> {NewTk?.Trip?.Timetable?.time}</p>
                                <p>{NewTk?.Trip?.Van}</p>
                            </div>
                            <div className="flex justify-center mt-6 ml-3">
                                <p>{NewTk?.Trip?.Departure?.price}</p>
                            </div>
                        </div>
                        <div className="mt-16 flex">
                            <button
                                type="submit"
                                className="border-2 w-44 p-2 rounded-xl bg-blue-600 text-white"
                                onClick={handleClickPay}
                            >
                                Pay
                            </button>

                            <button
                                type="button"
                                className="border-2 w-72 p-2 rounded-xl bg-red-600 text-white"
                                onClick={handleClickCancel}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
