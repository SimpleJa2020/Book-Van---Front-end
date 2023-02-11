import { Link } from 'react-router-dom';
import BookingSeat from '../features/booking/BookingSeat';
import useAuth from '../hooks/useAuth';

export default function SummaryPage() {
    const { departure } = useAuth();

    return (
        <>
            <div>
                <div className="mt-10">
                    <div className="border-2 w-72 h-20 p-2 rounded-xl bg-white border-orange-400"></div>
                </div>

                {departure.map(data => {
                    return (
                        <div className="mt-10" key={data.id}>
                            <div className="border-2 flexbox  px-5 py-10">
                                <div className="flex justify-between">
                                    <div>{data.startingTerminal}</div>
                                    <div>{data.destination}</div>
                                </div>

                                <div className="forBook">
                                    <Link to="/seat">
                                        <button className="border-2 w-72 p-2 rounded-xl bg-orange-500 text-white">
                                            book
                                        </button>
                                        <BookingSeat />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
