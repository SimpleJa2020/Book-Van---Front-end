import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import TicketPage from '../pages/TicketPage';
import PendingPage from '../pages/PayPage';
import HistoryPage from '../pages/HistoryPage';
import Layout from '../layouts/Layout';
import BookingPage from '../pages/BookingPage';
import SummaryPage from '../pages/SummaryPage';
import RedirectIfAuthenticated from '../features/auth/RedirectIfAuthenticated';
import ProtectedRoute from '../features/auth/ProtectedRoute';
import BookingSeat from '../features/booking/BookingSeat';
import AdminPage from '../pages/AdminPage';
import AdminUpdateTrip from '../pages/AdminUpdateTripPage';
import PayPage from '../pages/PayPage';

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
                path: '/admin',
                element: <AdminPage />
            },
            {
                path: '/admin/updateTrip',
                element: <AdminUpdateTrip />
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
                path: '/seat/:tripId',
                element: <BookingSeat />
            },
            {
                path: '/ticket/booked/:reserveId',
                element: <TicketPage />
            },
            {
                path: '/pay/:reserveId',
                element: <PayPage />
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
