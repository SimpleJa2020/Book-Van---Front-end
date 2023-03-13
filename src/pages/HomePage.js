import { Dropdown } from 'flowbite-react';
import Vanlogo from '../assets/Logo.jpg';
import Ticket from '../assets/WhiteTicket.svg';
import Pin from '../assets/DoublePin.svg';
import Time from '../assets/Time.svg';
import PriceTag from '../assets/PriceTag.svg';
import HomeCarousel from '../layouts/HomeCarousel';

import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';

export default function HomePage() {
    const { logout, authenticatedUser } = useAuth();
    return (
        <>
            <div>
                <div>
                    <Dropdown label="">
                        <Dropdown.Header>
                            <span className="block text-sm">
                                {authenticatedUser.firstName}
                            </span>
                            <span className="block text-sm">
                                {authenticatedUser.lastName}
                            </span>
                            <span className="block text-sm font-medium truncate">
                                {authenticatedUser.email}
                            </span>
                        </Dropdown.Header>

                        {authenticatedUser.role == 'user' ? null : (
                            <Link to={'/admin'}>
                                <Dropdown.Item>Update</Dropdown.Item>
                            </Link>
                        )}
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
                    </Dropdown>
                </div>

                <div className="flex flex-col items-center">
                    <img className="w-44 h-44" src={Vanlogo} alt="logo" />
                    <div className="mt-4 w-full">
                        <HomeCarousel></HomeCarousel>
                        <div className=" flex justify-center my-10">
                            <Link to={'/booking'}>
                                <div className="bg-orange-600 w-24 h-24 m-2 flex flex-col items-center justify-center rounded-xl">
                                    <img
                                        className="w-10 h-10 "
                                        src={Ticket}
                                        alt="book van"
                                    />
                                    <p>Book Van</p>
                                </div>
                            </Link>

                            <div className="bg-orange-600 w-24 h-24 m-2 flex flex-col items-center justify-center rounded-xl">
                                <img
                                    className="w-10 h-10"
                                    src={Pin}
                                    alt="my ticket"
                                />
                                <p>My Ticket</p>
                            </div>

                            <Link to={'/history'}>
                                <div className="bg-orange-600 w-24 h-24 m-2 flex flex-col items-center justify-center rounded-xl">
                                    <img
                                        className="w-10 h-10"
                                        src={Time}
                                        alt="history"
                                    />
                                    <p>History</p>
                                </div>
                            </Link>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-6 ml-3">
                            <div className="border-2 flex justify-around px-5 py-10 border-orange-600 rounded-xl">
                                <div className="mr-3">
                                    <p>Mor Chit</p>
                                    <p>06:30</p>
                                </div>
                                <div className="text-orange-600 mt-3 mr-3">
                                    <p>01h 15m</p>
                                </div>
                                <div className="mr-3">
                                    <p>Ayutthaya</p>
                                    <p>7:45</p>
                                </div>
                                <div className="flex items-center">
                                    <img
                                        className="w-1/2 h-10 color-orange-600"
                                        src={PriceTag}
                                        alt="icon"
                                    />
                                    <p>100</p>
                                </div>
                            </div>

                            <div className="border-2 flex justify-around px-5 py-10 border-orange-600 rounded-xl">
                                <div className="mr-3">
                                    <p>Mor Chit</p>
                                    <p>06:30</p>
                                </div>
                                <div className="text-orange-600 mt-3 mr-3">
                                    <p>01h 15m</p>
                                </div>
                                <div className="mr-3">
                                    <p>Ayutthaya</p>
                                    <p>7:45</p>
                                </div>
                                <div className="flex items-center">
                                    <img
                                        className="w-1/2 h-10 color-orange-600"
                                        src={PriceTag}
                                        alt="icon"
                                    />
                                    <p>100</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
