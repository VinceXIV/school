import React from "react";
import "./HouseCard.css"

function HouseCard(){
    return (
        <div id="house-card">
            <div className="house-img">
                <img src="https://via.placeholder.com/100x200"/>
            </div>
            <div className="house-details">
                <div className="detail">
                    <p className="name">price</p>
                    <p className="value">100</p>
                </div>
                <div className="detail">
                    <p className="name">Location</p>
                    <p className="value">Nairobi</p>
                </div>
                <button id="book-appointment-btn" className="btn">Book Appointment</button>
            </div>
        </div>
    )
}

export default HouseCard;