import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({ 
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
 }) => {
    return (
        <div className="card ms-3" style={{maxWidth: 540}}>
            <img className="card-img-top" src= {`./assets/heroes/${id}.jpg`} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title"> { superhero}</h5>
                <p className="card-text">{alter_ego}</p>
                <Link to={`./heroe/${id}`} className="btn btn-primary"> Show more </Link>
            </div>
        </div>
    )
}
