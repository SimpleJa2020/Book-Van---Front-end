import QRcode from '../assets/QRcode.svg';
import * as paymentApi from '../apis/payment-api';
import useReservation from '../hooks/useReservation';
import { useNavigate, useParams } from 'react-router-dom';
export default function PayPage() {
    const { seatNumber, setSeatNumber } = useReservation();
    console.log('aaaaaaaaaaaaa', seatNumber);
    const params = useParams();
    console.log(params);
    const completeNavigate = useNavigate();
    const handleClickComplete = async () => {
        try {
            const res = await paymentApi.updatePayment({
                reservationId: params.reserveId,
                isPaid: true
            });
            completeNavigate('/');
        } catch (err) {}
    };
    return (
        <>
            <div className="mt-10  ">
                <div className="border-2 flex justify-around px-5 py-10 block">
                    <img src={QRcode} className="w-60"></img>
                </div>
                <div className="mt-11 flex justify-center">
                    <button
                        className="border-2 w-44 p-2 rounded-xl bg-orange-500 text-white"
                        type="submit"
                        onClick={handleClickComplete}
                    >
                        Complete
                    </button>
                </div>
            </div>
        </>
    );
}
