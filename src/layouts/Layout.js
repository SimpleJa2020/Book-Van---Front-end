import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <>
            <nav>Header</nav>
            <Outlet />
        </>
    );
}
