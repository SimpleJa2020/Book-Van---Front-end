// import { useState } from 'react';
import Time from '../../assets/OrangeTime.svg';

export default function TimeContainer({ choose, setChoose }) {
    // const [open, setOpen] = useState(false);
    return (
        <>
            <div className="flex mt-2">
                <img className="w-10 h-10 " src={Time} alt="icon" />
            </div>
        </>
    );
}
