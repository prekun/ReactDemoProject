import React from "react";

const Child1 = (props) => {
    return(
        <div>
            <i>from Child1 {props.FirstName}</i>
            <i> {props.score}</i>
        </div>
    )
}

export default Child1;