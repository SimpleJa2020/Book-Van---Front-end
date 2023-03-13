import { useContext } from 'react';
import { TripContext } from '../contexts/TripContext';

export default function useTrip() {
    return useContext(TripContext);
}
