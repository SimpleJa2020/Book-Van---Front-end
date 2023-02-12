import axios from '../config/axios';

export const getAllBooking = input => axios.post(`/booking`, input);

export const createReservation = vanId =>
    axios.post('/reservation/vans', vanId);
