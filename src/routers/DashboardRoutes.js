import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Navbar } from '../ui/Navbar'
import { MarvelScreen } from '../marvel/MarvelScreen';
import { DCScreen } from '../dc/DCScreen';
import { HeroesScreen } from '../heroes/HeroesScreen';
import { SearchScreen } from '../search/SearchScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar/>

            <div className = 'container mt-2'>
                <Switch>
                    <Route exact path='/marvel' component={MarvelScreen}/>
                    <Route exact path="/heroe/:heroeId" component= {HeroesScreen} />
                    <Route exact path='/dc' component={DCScreen}/>
                    <Route exact path='/search' component={SearchScreen}/>
                    <Redirect to="/marvel"/>
                    
                </Switch>
            </div>
        </>
    )
}
