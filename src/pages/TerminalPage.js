import BookingPage from '../pages/BookingPage';
import Primary from '../assets/primary.svg';
import { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import TerminalContainer from '../features/terminal/TerminalContainer';

export default function TerminalPage() {
    const { departure } = useAuth();
    console.log(departure);
    return (
        <>
            <div>
                <div>Mor Chit 2 terminal</div>
                <div className="border-2 flex justify-around px-5 py-10">
                    <div>
                        {departure?.map(el => (
                            <TerminalContainer
                                key={el.id}
                                startingTerminal={el.startingTerminal}
                                destination={el.destination}
                            />
                        ))}

                        <div>
                            <p>Destination: BTS Ladphao Rangsit Ayutthaya</p>
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </>
    );
}
