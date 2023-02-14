import axios from '../config/axios';

export const getAllTrip = () => axios.get('/trip');
export const searchTrip = (origin, finalPlace, bookingDate) =>
    axios.get(
        `/trip?origin=${origin}&finalPlace=${finalPlace}&bookingDate=${bookingDate}`
    );
