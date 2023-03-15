import QRcode from '../assets/QRcode.svg';
import * as paymentApi from '../apis/payment-api';
import { useEffect, useState } from 'react';

export default function HistoryPage() {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const [paid, setPaid] = useState([]);
    const getPayments = async () => {
        const res = await paymentApi.getPayment();
        console.log(res.data);
        setPaid(res.data);
    };
    useEffect(() => {
        getPayments();
    }, []);
    return (
        <>
            <div className="mt-10  ">
                {paid.map(el => {
                    const paidDate = new Date(el.createdAt);
                    return (
                        <div
                            className="border-2 flex justify-around px-5 py-10 block"
                            key={el.id}
                        >
                            <img
                                src={QRcode}
                                className="w-[30px] w-[70px] "
                            ></img>
                            <div className="flex flex-col gap-3 ">
                                <div>
                                    Date payment :{' '}
                                    {paidDate.toLocaleString('en-US', options)}
                                </div>

                                {/* <div>vanSeatNumber :</div> */}
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
