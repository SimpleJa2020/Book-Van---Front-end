import { useContext } from 'react';
import { ReservationContext } from '../contexts/ReservationContext';

export default function useTrip() {
    return useContext(ReservationContext);
}
