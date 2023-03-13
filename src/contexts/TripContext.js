import { createContext, useState } from 'react';

export const TripContext = createContext();

const initialDropdown = {
    startingTerminal: '',
    destination: '',
    date: new Date(),
    time: ''
};
export default function TripContextProvider({ children }) {
    const [choose, setChoose] = useState(initialDropdown);
    const [trips, setTrips] = useState([]);
    return (
        <TripContext.Provider value={{ trips, setTrips, choose, setChoose }}>
            {children}
        </TripContext.Provider>
    );
}
