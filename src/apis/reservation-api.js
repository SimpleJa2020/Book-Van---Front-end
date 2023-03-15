import axios from '../config/axios';

export const createReservation = data => axios.post('/reservation', data);
export const getReservationById = params => axios.get('/reservation/' + params);
export const cancelReservation = params =>
    axios.delete('/reservation/' + params);
