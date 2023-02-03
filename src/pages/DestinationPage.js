import TerminalPage from '../pages/TerminalPage';
import Back from '../assets/AngleLeft.svg';

export default function DestinationPage() {
    return (
        <>
            <div>
                <div>
                    <img className="w-10 h-10" src={Back} />
                </div>
                <div>
                    <p>Hi Robert</p>
                    <h1>SELECT A TRIP</h1>
                </div>
                <div>
                    <input></input>
                    <button>SEARCH</button>
                </div>
                <div></div>
            </div>
        </>
    );
}
