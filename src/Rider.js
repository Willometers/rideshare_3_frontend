import React, { useState, useEffect } from "react";

const Rider = (props) => {
    // debugger
    const [rider, setRider] = useState({})
    
    useEffect(() => {
        fetch(`http://localhost:9292/riders/${props.match.params.id}`)
        .then(res => res.json())
        .then(setRider)
        // .then(console.log(rider))
    })
    // params.id coming from router /riders/:id
    // console.log(rider.name)
    return(
        <div>
            <h1>Rider:</h1>
            Name: {rider.name}
            <br/>
            <br/>
            Rating: {rider.rating}
        </div>
    )
}

export default Rider