import React from 'react';

import './card.style.css';

const Card = ({ name, email, username, phone}) => {
    return (
            <div className="card">
                <img src={`https://robohash.org/${username}`} alt=""/>
                <div className='desc'>
                <h2>{name}</h2>
                <p>{email}</p>
                <p>{phone}</p>
                </div>
            </div>
    )
}

export default Card;