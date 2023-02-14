import axios from '../config/axios';

// export const getAllBooking = input => axios.post(`/booking`, input) ;
// const reservationId = useParams();
// const ticketNavigate = useNavigate();
export const createReservation = data => axios.post('/reservation', data);
export const getAllReservation = reserveId =>
    axios.get('/reservation/booked/' + reserveId);
