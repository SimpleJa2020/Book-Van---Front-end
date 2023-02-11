import axios from '../config/axios';

export const getDestination = departure => axios.get(`/departure/${departure}`);
