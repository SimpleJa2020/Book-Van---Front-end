import * as getPaymentApi from '../apis/payment-api';
import { useEffect, useState } from 'react';

export default function HistoryPage() {
    const [report, setReport] = useState([]);

    const getPaymentList = async () => {
        const res = await getPaymentApi.getPayment();
        setReport(res.data.payments);
        // console.log(res.data);
    };
    // console.log('test', report);
    useEffect(() => {
        getPaymentList();
    }, []);
    return (
        <>
            <div className="mt-10  ">
                {report.map(item => (
                    <div
                        className="border-2 flex justify-around px-5 py-10 block"
                        key={item.id}
                    >
                        <div className="flexbox ">
                            <div>Date payment : {item.paymentDate}</div>

                            <div>
                                vanSeatNumber : {item.Reservation.vanSeatNumber}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
