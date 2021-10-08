import React, { useState, useEffect } from "react";

const Trips = () => {
    const [trips, setTrips] = useState([])
    //setting state to trips like inside of a constructor
    // const [name_of_variable, setName_of_variable] = useState(empty array, where variable will be populate)

    const tripsApi = "http://localhost:9292/trips"

    useEffect(() => {
        fetch(tripsApi)
        .then(res => res.json())
        .then(setTrips)
    })
    // useEffect in lieu of lifecycle methods ie. when component did mount...

    return (
        <div>
            <h1>Trips:</h1>
            <ul>
            {trips.map(trip => <li>ID: {trip.id}, 
            Distance: {trip.distance} miles, 
            Price: ${trip.price}, 
            Rider: {trip.rider},
            Driver: {trip.driver}
            </li>)}
            </ul>
        </div>
    )
}
export default Trips 