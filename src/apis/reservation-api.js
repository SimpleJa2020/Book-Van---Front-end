import axios from '../config/axios';

// export const getAllBooking = input => axios.post(`/booking`, input) ;

export const createReservation = data => axios.post('/reservation', data);
export const getAllReservation = () =>
    axios.get('/reservation/booked/reservationId');
