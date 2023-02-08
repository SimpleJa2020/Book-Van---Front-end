import axios from '../config/axios';

export const getAllDeparture = () => axios.get('/departure');
