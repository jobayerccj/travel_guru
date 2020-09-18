import React from 'react';
import './BookingList.css';

const BookingList = () => {
    return (
        <div className="container" style={{backgroundColor: "#FFF"}}>
            <div className="row">
                <div className="col-md-8">
                    <div className="col-md-6 float-left">
                        <img src={"/Image/Rectangle 26.png"} style={{width: "80%", margin:"10px"}}/>
                    </div>
                    <div className="col-md-6 float-left">
                        <h6 style={{fontSize: ".7rem"}}>Light bright airy stylish apt & safe peaceful stay</h6>
                        <p>4 guests 2 bedrooms 2 beds 2 baths</p>
                        <p>Wifi Air conditioning Kitchen</p>
                        <p>Cancellation fexibility availiable</p>

                    </div>
                    <div className="clearfix">

                    </div>
                    <div className="col-md-6 float-left">
                        <img src={"/Image/Rectangle 27.png"} style={{width: "80%", margin:"10px"}}/>
                    </div>
                    <div className="col-md-6 float-left">
                        <h6 style={{fontSize: ".7rem"}}>Apartment in Lost Panorama</h6>
                        <p>4 guests 2 bedrooms 2 beds 2 baths</p>
                        <p>Wifi Air conditioning Kitchen</p>
                        <p>Cancellation fexibility availiable</p>

                    </div>

                    <div className="clearfix">

                    </div>
                    <div className="col-md-6 float-left">
                        <img src={"/Image/Rectangle 28.png"} style={{width: "80%", margin:"10px"}}/>
                    </div>
                    <div className="col-md-6 float-left">
                        <h6 style={{fontSize: ".7rem"}}>AR Lounge & Pool (r&r + b&b)</h6>
                        <p className="bookingP">4 guests 2 bedrooms 2 beds 2 baths</p>
                        <p className="bookingP">Wifi Air conditioning Kitchen</p>
                        <p className="bookingP">Cancellation fexibility availiable</p>

                    </div>

                </div>

                <div className="col-md-4">

                </div>
            </div>

        </div>
    );
};

export default BookingList;
