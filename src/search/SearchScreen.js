import React, { useMemo } from 'react'
import queryString from 'query-string';
import { useLocation } from 'react-router-dom'
import { heroes } from '../data/heroes'
import { HeroCard } from '../heroes/HeroCard'
import { useForm } from '../hooks/useForm'
import { getHeroesByName } from '../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {


    const location = useLocation();

    
    const {q = ''} = queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({
        searchForm: q ,
    })
    
    const {searchForm} = formValues; 

    const handleSearch = (e) =>{
        e.preventDefault();
        history.push(`?q=${searchForm}`)
    }

    const heroesFiltered = useMemo(()=>getHeroesByName(q), [q]);

    return (
        <div className = 'row mt-5'>
            <div className = 'col-5'>
                <h4> Search Hero </h4>
                <form onSubmit = {handleSearch}>
                    <input
                        className = 'form-control'
                        placeholder = "Hero..."
                        type = 'text'
                        name = 'searchForm'
                        value = {searchForm}
                        onChange = {handleInputChange}
                    />
                    <button 
                        className = "btn btn-block btn-primary mt-2"
                        type = 'submit'
                    >
                        
                        Search
                    </button>
                </form>
            </div>
            <div className='col-7'>
                <h4> Results </h4>
                <div>
                    {heroesFiltered.map(hero=>{
                        return(
                            <HeroCard {...hero} />
                        )
                    })}
                </div>



            </div>
            
        </div>
    )
}
