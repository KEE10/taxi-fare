import React, {useState, useEffect} from 'react';
import TaxiApi from '../apis/taxiService'
import useQuery from "../apis/apiQuery"
import TaxiRide from './TaxiRide'
import './AllRides.css'

function AllRides() {
    const [allRides, setAllRides] = useState([]);
    //const {allRides} = useQuery({method: "get"});
    useEffect(()=>{
        setAllRides(TaxiApi.getAllRides());
    }, []);

    return (
        <>
            <h3 className="title">Taxi Rides</h3>
            <div>{allRides.map(ride => <TaxiRide ride={ride}/>)}</div>
        </>
    )
}

export default AllRides
