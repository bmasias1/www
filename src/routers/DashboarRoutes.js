import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Formularios  from '../components/Formularios'
import Encuesta from '../Encuesta'

import { Navbar } from '../components/Navbar'


export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-2">
                <Switch>
                    <Route exact path="/encuestas" component={ Encuesta } />
                    <Route exact path="/formulario" component={ Formularios } />
                    <Redirect to="/formulario" />    
                </Switch>

            </div>
        </>
    )
}
