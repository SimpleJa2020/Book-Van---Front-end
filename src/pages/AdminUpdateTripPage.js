import useAuth from '../hooks/useAuth';
import TripContainer from '../features/admin/TripContainer';

export default function AdminUpdateTrip() {
    const { departure } = useAuth();

    return (
        <>
            <div className="mt-16">
                <div className="flex justify-end">
                    <button className="w-10 h-10 m-2 flex flex-col items-center justify-center rounded-xl bg-blue-500">
                        Edit
                    </button>
                    <button className="w-16 h-10 m-2 flex flex-col items-center justify-center rounded-xl bg-red-600">
                        Delete
                    </button>
                </div>
                <div className="border-2 flex justify-around px-5 py-10">
                    <div>
                        {departure?.map(el => (
                            <TripContainer
                                key={el.id}
                                startingTerminal={el.startingTerminal}
                                destination={el.destination}
                            />
                        ))}

                        <div>
                            <p>Destination: BTS Ladphao Rangsit Ayutthaya</p>
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </>
    );
}
