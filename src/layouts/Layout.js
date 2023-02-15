import { Outlet, useNavigate } from 'react-router-dom';
import Back from '../assets/AngleLeft.svg';
export default function Layout() {
    const navigate = useNavigate();
    return (
        <>
            <div
                role="button"
                onClick={async () => {
                    await navigate(-1);
                }}
            >
                <img className="w-10 h-10" src={Back} alt="back" />
            </div>
            <Outlet />
        </>
    );
}
