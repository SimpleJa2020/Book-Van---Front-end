import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthContextProvider from './contexts/AuthContext';
import TripContextProvider from './contexts/TripContext';
import ReservationContextProvider from './contexts/ReservationContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ReservationContextProvider>
            <TripContextProvider>
                <AuthContextProvider>
                    <App />
                </AuthContextProvider>
            </TripContextProvider>
        </ReservationContextProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
