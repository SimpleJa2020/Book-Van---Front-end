export default function BookingForm() {
    return (
        <form>
            <div>Choose your trip</div>
            <div className="mt-10">
                <div>From</div>
                <input className="w-72 border-2 p-2" />
            </div>
            <div className="mt-10">
                <div>To</div>
                <input className="w-72 border-2 p-2" />
            </div>
            <div className="mt-10">
                <div>Date and Time</div>
                <input className="w-72 border-2 p-2" />
            </div>
            <div className="mt-10">
                <button
                    type="button"
                    className="border-2 w-72 p-2 rounded-xl bg-white text-orange-400 border-orange-400"
                >
                    Search Seat
                </button>
            </div>
        </form>
    );
}
