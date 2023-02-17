import { useEffect, useState } from 'react';
export default function SeatContainer({ isPaids }) {
    const [seatNumber, setSeatNumber] = useState([]);

    const handlechangeInput = e => {
        setSeatNumber(e.target.value);
    };
    return (
        <>
            {isPaids.map((el, idx) => (
                <>
                    <button
                        key={idx}
                        className="bg-orange-300  w-20 h-20 m-2 flex flex-col items-center justify-center rounded-xl hover:bg-orange-500  "
                        onChange={handlechangeInput}
                        name="1"
                        value={1}
                    >
                        {idx + 1}
                    </button>
                </>
            ))}
        </>
    );
}
