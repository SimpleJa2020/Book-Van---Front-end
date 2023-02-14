import axios from '../config/axios';

// export const getAllBooking = input => axios.post(`/booking`, input) ;

export const createReservation = tripId => axios.post('/reservation', tripId);
