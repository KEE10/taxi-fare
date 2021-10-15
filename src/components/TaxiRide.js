import {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card} from "react-bootstrap"

import './TaxiRide.css';
import RidesLogic from '../domain/ride'

function TaxiRide(props){
    const [card, setCardStyle] = useState("");
    const [price, setPrice] = useState("");
    const [rideEndTime, setRideEndTime] = useState("");
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        let boxColor = RidesLogic.isCardRed(props.ride.distance)? "redBoxStyle": "whiteBoxStyle";
        let price = RidesLogic.computePrice(props.ride.startTime, props.ride.distance);
        let rideEndDateTime = RidesLogic.computeEndDateTime(props.ride.startTime, props.ride.duration)

        setPrice(price);
        setCardStyle(boxColor);
        setRideEndTime(rideEndDateTime)

    }, [props]);

    function showAlert() {
        let formattedDuration = new Date(props.ride.duration * 1000).toISOString().substr(11, 8);
        alert("Duration: " + formattedDuration + ". End date: " + rideEndTime);
    }

    return (
        <div className="box">
            <Card onClick={() => {showAlert(); setIsClicked(true)}} className={card}>
                <Card.Header>Ride ID: {props.ride.id} {isClicked ? <b>CLICKED</b>: null}</Card.Header>
                <Card.Body>
                    <Card.Text>Price: {price} Euro</Card.Text>
                </Card.Body>
            </Card>
        </div>

    )
}

export default TaxiRide