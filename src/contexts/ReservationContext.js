import { useState } from 'react';
import { createContext } from 'react';

export const ReservationContext = createContext();
export default function ReservationContextProvider({ children }) {
    const [seatNumber, setSeatNumber] = useState([]);

    return (
        <ReservationContext.Provider value={{ seatNumber, setSeatNumber }}>
            {children}
        </ReservationContext.Provider>
    );
}
