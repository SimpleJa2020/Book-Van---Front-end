import { useState } from 'react';
import useAuth from '../../hooks/useAuth';

export default function LoginForm() {
    const [emailOrMobile, setEmailOrMobile] = useState('');
    const [password, setPassword] = useState('');

    const { login } = useAuth();
    const handleSubmitForm = async e => {
        try {
            e.preventDefault();
            await login(emailOrMobile, password);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <form
            className="flex-col items-center justify-center"
            onSubmit={handleSubmitForm}
        >
            <div className="flex flex-col justify-center items-center">
                <div className="mt-10">
                    <input
                        type="text"
                        placeholder="Email or Phone Number"
                        className="w-72 border-2 p-2"
                        value={emailOrMobile}
                        onChange={e => setEmailOrMobile(e.target.value)}
                    />
                </div>
                <div className="mt-10">
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-72 border-2 p-2"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className="mt-24">
                    <button
                        type="submit"
                        className="border-2 w-72 p-2 rounded-xl bg-orange-500 text-white"
                    >
                        Login
                    </button>
                </div>
            </div>
        </form>
    );
}
