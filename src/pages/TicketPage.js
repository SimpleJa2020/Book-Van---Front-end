import useAuth from '../hooks/useAuth';
import * as paymentApi from '../apis/payment-api';
import { useNavigate } from 'react-router-dom';
export default function TicketPage() {
    const { getme, tkList, setTkList } = useAuth();
    console.log(getme);
    const homeNavigate = useNavigate();
    const getList = async () => {
        const res = await paymentApi.createPayment({
            isPaid: 1,
            passengerId: getme.passengerId,
            reservationId: getme.id
        });
        homeNavigate('/');
        console.log(res.data);
    };
    console.log(tkList);
    return (
        <>
            <div>
                <div>
                    <div className="bg-gray-400 h-80 m-2 p-2">
                        <div className="bg-white h-72 m-1">
                            <div>{getme?.Passenger?.firstName}</div>
                            <div>{getme?.Passenger?.lastName}</div>
                            <div>{getme?.Passenger?.email}</div>
                            <div>{getme?.Trip?.Timetable?.date}</div>
                            <div>{getme?.Trip?.Van?.id}</div>
                            <div>
                                {getme?.Trip?.Departure?.startingTerminal}
                            </div>
                            <div>{getme?.Trip?.Departure?.destination}</div>
                            <div>{getme?.Trip?.Departure?.price}</div>
                        </div>
                        <div>
                            <p>Terms and Condition</p>

                            <button
                                type="button"
                                className="border-2 w-72 p-2 rounded-xl bg-orange-500 text-white"
                                onClick={() => {
                                    getList();
                                }}
                            >
                                Pay
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
