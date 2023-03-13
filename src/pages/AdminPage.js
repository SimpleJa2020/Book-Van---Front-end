import { Link } from 'react-router-dom';

export default function AdminPage() {
    return (
        <>
            <div className="mt-10 flex justify-center items-center flex-col">
                <div className="flex flex-col">
                    <p className="font-bold text-[30px]">Hi Admin</p>
                    <h1 className="font-bold text-[30px]">Welcome</h1>
                </div>
                <div className="mt-10 ">
                    <p>Terminal:</p>
                    <input className="border-2 flex justify-around px-5 py-3 border-black bg-orange-200 rounded-xl" />
                </div>
                <div className="mt-10">
                    <p>Destination:</p>
                    <input className="border-2 flex justify-around px-5 py-3 border-black bg-orange-200 rounded-xl" />
                </div>
                <div className="mt-10">
                    <p>Date:</p>
                    <input className="border-2 flex justify-around px-5 py-3 border-black bg-orange-200 rounded-xl" />
                </div>
                <div className="mt-10">
                    <p>Time:</p>
                    <input className="border-2 flex justify-around px-5 py-3 border-black bg-orange-200 rounded-xl" />
                </div>
                <div className="flex justify-center mt-14">
                    <Link to={'/admin/editDelete'}>
                        <button
                            className="border-2 w-72 p-2  rounded-xl bg-orange-500 text-white"
                            type="submit"
                        >
                            Add
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}
