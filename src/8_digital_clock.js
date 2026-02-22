import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

function DigitalClock(props) 
{

    // object destructuring
    let { day, month, year, hour, minute, seconds, weekDay } = props;

    // AM / PM logic
    let ampm = hour >= 12 ? "PM" : "AM";

    // convert to 12 hour format
    hour = hour % 12;
    hour = hour ? hour : 12; // if 0 → 12

    // Add leading zero
    minute = minute < 10 ? "0" + minute : minute;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return (
        <>
            <div className="matrix-bg"></div>

            <div className="container-fluid clock-container d-flex justify-content-center align-items-center">
                <div className="text-center glow-box">

                    <div className="clock">
                        {hour}:{minute}:{seconds} {ampm}
                    </div>

                    <div className="date mt-3">
                        {weekDay} {day}-{month}-{year}
                    </div>

                </div>
            </div>
        </>
    );
}

// Create Date Object
let d = new Date();

// Weekday Array
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Create datetime object
let datetime = {
    day: d.getDate(),
    month: d.getMonth() + 1,
    year: d.getFullYear(),
    hour: d.getHours(),
    minute: d.getMinutes(),
    seconds: d.getSeconds(),
    weekDay: days[d.getDay()]   
};

// Correct React render
root.render(<DigitalClock {...datetime} />);