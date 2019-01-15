import React from "react";
import markerImg from "../../../images/map-marker.png";

const EmptyMarker = (props) => {
    return (
        <img src={markerImg} alt={"marker"}/>
    )
};

export default EmptyMarker;