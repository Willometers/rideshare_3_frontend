import React, { useState, useEffect } from "react";

const Trips = () => {
    const [trips, setTrips] = useState([]) 

    const tripsApi = "http://localhost:9292/trips"

    useEffect(() => {
        fetch(tripsApi)
        .then(res => res.json())
        .then(setTrips)
    })

    return (
        <div>
            Trips:
            <ul>
            {trips.map(trip => <li>{trip.id}</li>)}
            </ul>
        </div>
    )
}
export default Trips 