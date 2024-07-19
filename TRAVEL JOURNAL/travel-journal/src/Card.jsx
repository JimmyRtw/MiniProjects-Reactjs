import React from "react";

export default function Card(props){
    return (
        <>
            <div className="card-container">
                <div className="image-container">
                    <img src={props.imageUrl} alt="" />
                </div>
                <div className="content-container">
                    <span><img src="/location.png" alt="" /><span>{props.location}</span> <a href={props.googleMapsUrl}>View on Google Maps</a></span>
                    <h1>{props.title}</h1>
                    <h5>{props.startDate} - {props.endDate}</h5>
                    <h6>{props.description}</h6>
                </div>
            </div>
        </>
    )
}