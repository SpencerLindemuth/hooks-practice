import React from 'react'

const Card = (props) => {
    return(
        <div id="business-card">
            <h2>{props.businessName}</h2>
            <span id="fullName">{props.fullName}</span>
            <div id="contact">
                <span id="email">{props.email}</span>
                <span id="phone">{props.phone}</span>
            </div>
        </div>
    )
}

export default Card;