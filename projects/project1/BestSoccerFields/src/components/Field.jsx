import React from "react";

const Field = (props) => {
    return (
        <td className={'Field ' + props.color}>
            <h5>{props.Field_Name}</h5>
            <h6>{props.Field_Location}</h6>
            <a href={props.link} target="_blank"><img src={props.img} alt="Astoria Soccer Field"/></a>
            <br></br>
            <h7>Rating: {props.rating}</h7>
        </td>
    )
}

export default Field;