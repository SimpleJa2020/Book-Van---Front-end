import BookingSeat from '../features/booking/BookingSeat';

export default function SummaryPage() {
    return (
        <>
            <div>
                <div className="mt-10">
                    <div className="border-2 w-72 h-20 p-2 rounded-xl bg-white border-orange-400"></div>
                </div>
                <div className="mt-10">
                    <div className="border-2 flex justify-around px-5 py-10">
                        <BookingSeat />
                    </div>
                </div>
            </div>
        </>
    );
}
