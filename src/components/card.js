import React from 'react'

const Card = (props) => {
    return(
        <div id="business-card">
            <h2>{props.businessName}</h2>
            <span id="firstName">{props.firstName}</span>
            &nbsp;
            <span id="lastName">{props.lastName}</span>
            <p>{props.email}</p>
            <p>{props.phone}</p>
        </div>
    )
}

export default Card;