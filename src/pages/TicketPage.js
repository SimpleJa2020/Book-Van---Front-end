import useAuth from '../hooks/useAuth';
import * as paymentApi from '../apis/payment-api';
import { useNavigate } from 'react-router-dom';
import Van from '../assets/Van.svg';
import Avatar from '../assets/Avatar.svg';
export default function TicketPage() {
    const { getme, tkList, setTkList } = useAuth();
    // console.log(getme);
    const homeNavigate = useNavigate();
    const getList = async item => {
        const res = await paymentApi.createPayment({
            isPaid: item,
            passengerId: getme.passengerId,
            reservationId: getme.id
        });

        // console.log(res.data);
    };
    // const pendingList = async () => {
    //     const res = await paymentApi.createPayment({
    //         isPaid: 0,
    //         passengerId: getme.passengerId,
    //         reservationId: getme.id
    //     });
    //     homeNavigate('/pending');
    //     console.log(res.data);

    console.log(tkList);
    return (
        <>
            <div>
                <div className="mt-16">
                    <div className="bg-zinc-400 h-80 m-2 p-3">
                        <div className="bg-white h-72 m-1">
                            <div className="flex justify-center ml-7">
                                <p>date</p>
                            </div>
                            <div className="flex justify-between mt-6">
                                <p>startingTerminal</p>
                                <img src={Van} />
                                <p>destination</p>
                            </div>
                            <img src={Avatar} />
                            <div className="flex justify-between mt-6">
                                <p>firstName</p>
                                <p>lastName</p>
                                <p>email</p>
                            </div>
                            <div className="flex justify-center gap-5 ml-8 mt-6">
                                <p>time</p>
                                <p>VanId</p>
                            </div>
                            <div className="flex justify-center mt-6 ml-7">
                                <p>price</p>
                            </div>
                        </div>
                        <div className="mt-11 flex">
                            <button
                                type="button"
                                className="border-2 w-72 p-2 rounded-xl bg-orange-500 text-white"
                                onClick={() => {
                                    getList(1);
                                    homeNavigate('/history');
                                }}
                            >
                                Pay
                            </button>
                            <button
                                type="button"
                                className="border-2 w-72 p-2 rounded-xl bg-orange-500 text-white"
                                onClick={() => {
                                    getList(0);
                                    homeNavigate('/');
                                }}
                            >
                                book
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
