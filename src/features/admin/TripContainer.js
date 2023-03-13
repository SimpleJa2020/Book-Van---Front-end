import Primary from '../../assets/primary.svg';

export default function TripContainer({ startingTerminal, destination }) {
    return (
        <>
            <div className="flex items-start">
                <img className="w-1/2 h-7 " src={Primary} alt="pin" />
                <p>{startingTerminal}</p>
                <p>{destination}</p>
                <p>Terminal: Mor Chit Building B Box B4</p>
            </div>
        </>
    );
}
