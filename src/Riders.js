import React, { useState, useEffect } from "react";

const Riders = () => {
    const [riders, setRiders] = useState([]) 

    const ridersApi = "http://localhost:9292/riders"

    useEffect(() => {
        fetch(ridersApi)
        .then(res => res.json())
        .then(setRiders)
    })

    return (
        <div>
            Riders:
            <ul>
            {riders.map(rider => <li>{rider.name}</li>)}
            </ul>
        </div>
    )
}
export default Riders