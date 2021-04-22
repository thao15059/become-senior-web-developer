import React from 'react';

import './card-list.style.css';

import Card from '../card/card.component'

const CardList = ({robots}) => {
    return (
        <div className="card-wrapper">
            {
                robots.map(({ id, ...otherRobotProps }) => (
                    <Card key={id} {...otherRobotProps} />
                ))
            }
        </div>
    )
}

export default CardList;