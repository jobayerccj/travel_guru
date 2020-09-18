import React from 'react';
import {Link} from "react-router-dom";

const Booking = () => {
    return (
        <div className="container">
            <div className="col-md-6 float-left">
                <h1>Cox's bazar</h1>
                <p>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>

            </div>
            <div className="col-md-6 float-left">
                <div className="col-md-8" style={{background: "white",
                    borderRadius: "10px"}}>
                    <form>
                        <div className="form-group">
                            <label>Origin</label>
                            <input type="text" className="form-control"/>
                        </div>

                        <div className="form-group">
                            <label>Destination</label>
                            <input type="text" className="form-control"/>
                        </div>


                        <div className="form-group ">
                            <label>From</label>
                            <input type="date" className="form-control"/>
                        </div>

                        <div className="form-group ">
                            <label>To</label>
                            <input type="date" className="form-control"/>
                        </div>

                        <div className="text-center">
                            <Link className="btn btn-success" to={"/bookinglist"}>Start Booking</Link>
                            {/*<button type="button" className="btn btn-success">Start Booking</button>*/}
                        </div>
                        <br/>
                    </form>
                </div>

            </div>

        </div>
    );
};

export default Booking;
