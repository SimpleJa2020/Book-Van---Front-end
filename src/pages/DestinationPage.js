import TerminalPage from '../pages/TerminalPage';

export default function DestinationPage() {
    return (
        <>
            <div className="mt-10">
                <div>
                    <p>Hi Robert</p>
                    <h1>SELECT A TRIP</h1>
                </div>
                <div className="mt-10">
                    <input className="border-2 flex justify-around px-5 py-3 bg-orange-400 rounded-3xl" />
                    <button className="mt-10 border-2 w-44 p-2 rounded-xl bg-orange-500 text-black">
                        SEARCH
                    </button>
                </div>
                <div className="mt-10">
                    <div className="border-2 w-72 h-20 p-2 rounded-xl bg-white border-orange-400"></div>
                </div>
            </div>
        </>
    );
}
