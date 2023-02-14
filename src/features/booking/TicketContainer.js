export default function TicketContainer({
    date,
    startingTerminal,
    destination,
    gender,
    name,
    email,
    vanId,
    price,
    seat
}) {
    return (
        <>
            <div className="bg-white h-72 m-1">
                <div>{date}</div>
                <div>{startingTerminal}</div>
                <div>{destination}</div>
                <div>{gender}</div>
                <div>{name}</div>
                <div>{email}</div>
                <div>{vanId}</div>

                <div>{price}</div>
                <div>{seat}</div>
            </div>
        </>
    );
}
