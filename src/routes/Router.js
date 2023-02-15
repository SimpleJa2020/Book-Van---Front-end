import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import DestinationPage from '../pages/DestinationPage';
import TicketPage from '../pages/TicketPage';
import PendingPage from '../pages/PendingPage';
import HistoryPage from '../pages/HistoryPage';
import Layout from '../layouts/Layout';
import TerminalPage from '../pages/TerminalPage';
import BookingPage from '../pages/BookingPage';
import SummaryPage from '../pages/SummaryPage';
import RedirectIfAuthenticated from '../features/auth/RedirectIfAuthenticated';
import ProtectedRoute from '../features/auth/ProtectedRoute';
import BookingSeat from '../features/booking/BookingSeat';

const router = createBrowserRouter([
    {
        path: '/login',
        element: (
            <RedirectIfAuthenticated>
                <LoginPage />
            </RedirectIfAuthenticated>
        )
    },
    {
        path: '/register',
        element: <RegisterPage />
    },

    {
        path: '/',
        element: (
            <ProtectedRoute>
                <HomePage />
            </ProtectedRoute>
        )
    },
    {
        element: (
            <ProtectedRoute>
                <Layout />
            </ProtectedRoute>
        ),
        children: [
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
                path: '/seat',
                element: <BookingSeat />
            },
            {
                path: '/ticket/booked/:reserveId',
                element: <TicketPage />
            },
            {
                path: '/pending',
                element: <PendingPage />
            },
            {
                path: '/history',
                element: <HistoryPage />
            }
        ]
    }
]);

export default function Router() {
    return <RouterProvider router={router} />;
}
