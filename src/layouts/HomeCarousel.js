import Sea from '../assets/Sea.jpg';
import Wood from '../assets/Wood.jpg';
import Fog from '../assets/Fog.jpg';
import { Carousel } from 'flowbite-react';

export default function HomeCarousel() {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel>
                <img src={Sea} alt="..." />
                <img src={Wood} alt="..." />
                <img src={Fog} alt="..." />
            </Carousel>
        </div>
    );
}
