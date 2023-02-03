export default function LoginForm() {
    return (
        <form className="flex-col items-center justify-center">
            <div className="flex flex-col justify-center items-center">
                <div className="mt-10">
                    <input
                        placeholder="Email or Phone Number"
                        className="w-72 border-2 p-2"
                    />
                </div>
                <div className="mt-10">
                    <input
                        placeholder="Password"
                        className="w-72 border-2 p-2"
                    />
                </div>
                <div className="mt-24">
                    <button
                        type="button"
                        className="border-2 w-72 p-2 rounded-xl bg-orange-500 text-white"
                    >
                        Login
                    </button>
                </div>
            </div>
        </form>
    );
}
