import { Link } from 'react-router-dom';
import Vanlogo from '../assets/Logo.jpg';
import LoginForm from '../features/auth/LoginForm';

export default function LoginPage() {
    return (
        <div className="flex-col items-center justify-center ">
            <div className="flex h-20 justify-center mt-14 mb-32">
                <img className="w-44 h-44 " src={Vanlogo} alt="logo" />
            </div>
            <div className=" mt-20">
                <LoginForm />
                <div className="mt-20 flex flex-col justify-center items-center pb-24">
                    <small>
                        I don't have an account{' '}
                        <Link to="/register">Register</Link>
                    </small>
                </div>
            </div>
        </div>
    );
}
