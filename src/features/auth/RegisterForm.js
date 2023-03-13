import { useState } from 'react';
import Input from '../../components/Input';
import validateRegister from '../../validators/validate-register';
import * as authApi from '../../apis/auth-api';

import { useNavigate } from 'react-router-dom';

const initialInput = {
    firstName: '',
    lastName: '',
    gender: '',
    emailOrMobile: '',
    password: '',
    confirmPassword: '',
    role: 'user'
};

export default function RegisterForm() {
    const [input, setInput] = useState(initialInput);
    const [error, setError] = useState({});

    const handleChangeInput = e => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const navigate = useNavigate();
    const handleSubmitForm = async e => {
        try {
            e.preventDefault();
            const result = validateRegister(input);
            if (result) {
                setError(result);
            } else {
                setError({});
                await authApi.register(input);
            }
            navigate('/login');
        } catch (err) {}
    };
    return (
        <form
            className="flex-col items-center justify-center"
            onSubmit={handleSubmitForm}
        >
            <div className="ml-[50px]">
                <div className="mt-10">
                    <Input
                        className="w-72 border-2 p-2"
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        value={input.firstName}
                        onChange={handleChangeInput}
                        error={error.firstName}
                    />
                </div>
                <div className="mt-10">
                    <Input
                        className="w-72 border-2 p-2"
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        value={input.lastName}
                        onChange={handleChangeInput}
                        error={error.lastName}
                    />
                </div>
                <div className="mt-10">
                    <div>Gender</div>
                    <div className="ml-[50px] flex ">
                        <div>
                            <Input
                                type="radio"
                                className="mr-[10px]"
                                name="gender"
                                id="male"
                                value="male"
                                onChange={handleChangeInput}
                                error={error.gender}
                            />
                            <label htmlFor="male">Male</label>
                        </div>
                        <div>
                            {' '}
                            <Input
                                type="radio"
                                className="mr-[10px] ml-2"
                                name="gender"
                                id="female"
                                value="female"
                                onChange={handleChangeInput}
                                error={error.gender}
                            />
                            <label htmlFor="female">Female</label>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <Input
                        className="w-72 border-2 p-2"
                        type="text"
                        placeholder="Email or Phone Number"
                        name="emailOrMobile"
                        value={input.emailOrMobile}
                        onChange={handleChangeInput}
                        error={error.emailOrMobile}
                    />
                </div>
                <div className="mt-10">
                    <Input
                        className="w-72 border-2 p-2"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={input.password}
                        onChange={handleChangeInput}
                        error={error.password}
                    />
                </div>
                <div className="mt-10">
                    <Input
                        className="w-72 border-2 p-2"
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        value={input.confirmPassword}
                        onChange={handleChangeInput}
                        error={error.confirmPassword}
                    />
                </div>
                <div className="mt-10">
                    <button
                        className="border-2 w-72 p-2 rounded-xl bg-orange-500 text-white"
                        type="submit"
                    >
                        Sign up
                    </button>
                </div>
            </div>
        </form>
    );
}
