import axios from 'axios';

export const createPayment = data => axios.post('/payment', data);
export const getPayment = () => axios.get('/payment');
