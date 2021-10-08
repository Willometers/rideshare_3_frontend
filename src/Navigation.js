import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <NavLink 
                to="/"
                exact 
                >Home</NavLink>
            <NavLink 
                to="/riders"
                exact 
                >Riders</NavLink>
            <NavLink 
                to="/drivers"
                exact 
                >Drivers</NavLink>
            <NavLink 
                to="/trips"
                exact 
                >Trips</NavLink>
        </div>
    )
}

export default Navigation