import { useState } from 'react';
import Input from '../../components/Input';

const initialInput = {
    firstName: '',
    lastName: '',
    gender: '',
    emailOrMobile: '',
    password: '',
    confirmPassword: ''
};
export default function RegisterForm() {
    const [input, setInput] = useState(initialInput);

    const handleChangeInput = e => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };
    return (
        <form className="flex-col items-center justify-center">
            <div
                className="ml-[50px]"
                // className="flex flex-col justify-center items-center"
            >
                <div className="mt-10">
                    <Input
                        className="w-72 border-2 p-2"
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        value={input.firstName}
                        onChange={handleChangeInput}
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
                            />
                            <label htmlFor="female">Female</label>
                        </div>
                    </div>
                </div>
                {/* <div className=" bg-[red] mt-10 btn-group" role="group">
                    <div>
                        <p>Gender</p>
                    </div>
                    <div className="w-[20px]">
                        <Input
                            className=" btn-check default:'male'"
                            type="radio"
                            name="gender"
                            id="male"
                            value="male"
                            onChange={handleChangeInput}
                        />
                        <label htmlFor="male">Male</label>
                        <Input
                            className="btn-check"
                            type="radio"
                            name="gender"
                            id="female"
                            value="female"
                            onChange={handleChangeInput}
                        />
                        <label htmlFor="female">Female</label>
                    </div> */}
                {/* </div> */}
                <div className="mt-10">
                    <Input
                        className="w-72 border-2 p-2"
                        type="text"
                        placeholder="Email or Phone Number"
                        name="emailOrMobile"
                        value={input.emailOrMobile}
                        onChange={handleChangeInput}
                    />
                </div>
                <div className="mt-10">
                    <Input
                        className="w-72 border-2 p-2"
                        type="text"
                        placeholder="Password"
                        name="password"
                        value={input.password}
                        onChange={handleChangeInput}
                    />
                </div>
                <div className="mt-10">
                    <Input
                        className="w-72 border-2 p-2"
                        type="text"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        value={input.confirmPassword}
                        onChange={handleChangeInput}
                    />
                </div>
                <div className="mt-10">
                    <button
                        className="border-2 w-72 p-2 rounded-xl bg-orange-500 text-white"
                        type="button"
                    >
                        Sign up
                    </button>
                </div>
            </div>
        </form>
    );
}
