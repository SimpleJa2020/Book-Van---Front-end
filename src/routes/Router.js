import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import DestinationPage from '../pages/DestinationPage';
import TicketPage from '../pages/TicketPage';
import HistoryPage from '../pages/HistoryPage';
import Layout from '../layouts/Layout';
import TerminalPage from '../pages/TerminalPage';
import BookingPage from '../pages/BookingPage';
import SummaryPage from '../pages/SummaryPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginPage />
    },
    {
        path: '/register',
        element: <RegisterPage />
    },

    {
        path: '/home',
        element: <HomePage />
    },
    {
        path: '/destination',
        element: <DestinationPage />
    },
    {
        path: '/terminal',
        element: <TerminalPage />
    },
    {
        path: '/booking',
        element: <BookingPage />
    },
    {
        path: '/summary',
        element: <SummaryPage />
    },
    {
        path: '/ticket',
        element: <TicketPage />
    },
    {
        path: '/history',
        element: <HistoryPage />
    }
]);

export default function Router() {
    return <RouterProvider router={router} />;
}
