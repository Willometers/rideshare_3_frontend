import React, { useState } from "react";
import { useHistory } from "react-router-dom"

const NewTripForm = () => {

    const [rider, setRider] = useState("");
    const history = useHistory()

    const handleInputChange = (e) => {
        setRider(e.target.value)
        };

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:9292/riders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify({
                rider
            })
        })
        .then(res => res.json())
        .then(name => {
            history.push(`/riders/${name.at(-1).id}`)
        })
        
    }
        // reroute to that Rider's page/show with useHistory push hook

        // POST request that sends just value.name as Rider.create(name: name, driver_id: Driver.all.sample.id, distance: rand(1..100), price: rand(15..100))
        // POST to /riders/ to create new rider in DB
    return (
        <div>
        <h1>Rideshare App</h1>
        <br/>
        <h3>Book a Trip</h3>
            <form onSubmit={handleSubmit}>
                <label>Name:
                    <br/>
                    <input 
                    name="rider" 
                    value={rider}
                    onChange={handleInputChange} 
                    />
                    </label>
                    <br/>
                    <br/>
                {/* dummy input */}
                <label>Destination:
                    <br/>
                    <input 
                        name="destination" 
                    />
                    </label>
                    <br/>
                    <br/>
                <button 
                    type="submit"> 
                    Submit 
                    </button>
            </form>
        </div>
    )

}

export default NewTripForm