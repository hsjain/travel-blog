import React from "react";
import "./destination.scss"

export default function Destination(props){
    return (
        <div className="destination">
            <img className="coverImg" src={props.imageUrl}/>
            <div className="text">
                <div className="location">
                    <h5 className="country">{props.location}</h5>
                    <a href={props.googleMapsUrl} className="maps">View on Google Maps</a>
                </div>
                <h3 className="title">{props.title}</h3>
                <h5 className="dates">Travel Dates: {props.startDate} - {props.endDate}</h5>
                <p className="desc">{props.description}</p>
            </div>
        </div>
    )
}