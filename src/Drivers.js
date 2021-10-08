import React, { useState, useEffect } from "react";

const Drivers = () => {
    // setting state essentially
    const [drivers, setDrivers] = useState([]) 

    const driversApi = "http://localhost:9292/drivers"

    useEffect(() => {
        fetch(driversApi)
        .then(res => res.json())
        .then(setDrivers)
    })

    return (
        <div>
            <h1>Drivers:</h1>
            <ul>
                {drivers.map(driver => <li>{driver.name}, Rating: {driver.rating}</li>)}
            </ul>
        </div>
    )
}
export default Drivers
