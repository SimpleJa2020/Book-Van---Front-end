import BookingForm from '../features/booking/BookingForm';
import TicketPage from '../pages/TicketPage';
import useAuth from '../hooks/useAuth';

export default function BookingPage() {
    return (
        <>
            <div>
                <BookingForm />
            </div>
        </>
    );
}
