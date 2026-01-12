import React from "react";

function Sq(props) {
    return (
        <div onClick={props.onClick}>
            <p>{props.value}</p>
        </div>
    );
}

export default Sq;
