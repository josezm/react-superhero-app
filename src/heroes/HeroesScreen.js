import React, { useMemo } from 'react'
import {Redirect, useParams} from 'react-router-dom'
import { getHeroesByID } from '../selectors/getHeroesById';

export const HeroesScreen = ({history}) => {

    const {heroeId} = useParams();

    const hero = useMemo(() => getHeroesByID(heroeId), [heroeId]);


    if(!hero){
        return (
            <Redirect to="/" />
        )
    }

    const handleReturn = () =>{
        if(history.lenght <= 2)
            history.push('/');

        history.goBack();
    }

    return (
        <div className = "row mt-5">
            <div className = 'col-5'>
            <img className="card-img-top animate__animated animate__fadeIn" src= {`${window.location.origin + '/assets/heroes'}/${hero.id}.jpg`} alt="Card image cap"/>
            </div>
            <div className = 'col-7 animate__animated animate__fadeInDown'>
            <h2> {hero.superhero} </h2>
            <hr/>
            <p><b> Alter ego : </b> {hero.alter_ego}</p>
            <p><b> Publiser : </b> {hero.publisher}</p>
            <p><b> First appearance : </b> {hero.first_appearance}</p>
            <h5> Characters </h5>
            <p> {hero.characters} </p>
            <button className = "btn btn-success" onClick = {handleReturn}> Return </button>
            </div>
        </div>
    )
}
