import { Link } from 'react-router-dom';
import RegisterForm from '../features/auth/RegisterForm';

export default function RegisterPage() {
    return (
        <div>
            <div>
                <h1>Create an account</h1>
            </div>
            <div>
                <RegisterForm />
            </div>
            <div className="mt-10 flex flex-col justify-center items-center ">
                <small>Already have an account?</small>
            </div>
            <div className="mt-10 flex flex-col justify-center items-center pb-24">
                <Link to="/login">Login</Link>
            </div>
        </div>
    );
}
