import React from 'react';
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
    return (
        <div className="container">
            <div className="col-md-3 float-left">
                <h1>Cox's bazar</h1>
                <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh.
                    It is famous mostly for its long natural sandy beach, and it ...</p>
                <Link className="btn btn-lg btn-block btn-primary booking-btn1" to="/booking">Booking</Link>
            </div>
            <div className="col-md-9 float-left">
                <div className="card-deck mb-3 text-center">


                    <div className="card mb-4 shadow-sm" id="card1">
                        <Link  to="/booking">
                            <div className="card-body">
                                <img src={"./Image/Sajek.png"} alt="card1" />
                            </div>
                        </Link>

                    </div>

                    <div className="card mb-4 shadow-sm">
                        <Link  to="/booking">
                            <div className="card-body">
                                <img src={"./Image/Sreemongol.png"} alt="card1" />
                            </div>
                        </Link>

                    </div>
                    <div className="card mb-4 shadow-sm">
                        <Link  to="/booking">
                            <div className="card-body">
                                <img src={"./Image/sundorbon.png"} alt="card1" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;
