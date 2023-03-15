import useReservation from '../../hooks/useReservation';

export default function SeatContainer({ choose, setChoose }) {
    const { seatNumber, setSeatNumber } = useReservation();
    const seatName = [
        'E1',
        'E2',
        'E3',
        'D1',
        'D2',
        'D3',
        'C1',
        'C2',
        'C3',
        'B1',
        'B2',
        'B3',
        'A1',
        'A2'
    ];
    const seatNumberFromReservation = seatNumber.map(el => {
        return el.vanSeatNumber;
    });

    const allSeats = seatName.map(el => {
        return {
            vanSeatNumber: el,
            status: !seatNumberFromReservation.includes(el)
        };
    });

    const handleClickSeat = (e, status) => {
        if (status) {
            console.log(`seat ${e.target.value} was clicked`);
            setChoose(choose => ({ ...choose, vanSeatNumber: e.target.value }));
        } else {
            console.log('already booked');
        }
    };
    return (
        <div className="flex justify-right flex-wrap-reverse ml-20">
            {allSeats.map(el => (
                <button
                    className={`${
                        el.status === true
                            ? 'bg-orange-300 hover:bg-orange-500'
                            : 'bg-gray-400'
                    } w-16 h-16 m-2 flex flex-col items-center justify-center rounded-xl  `}
                    name="1"
                    type="button"
                    onClick={e => handleClickSeat(e, el.status)}
                    value={el.vanSeatNumber === '-' ? '' : el.vanSeatNumber}
                >
                    {el.vanSeatNumber === '-' ? '' : el.vanSeatNumber}
                </button>
            ))}
        </div>
    );
}
