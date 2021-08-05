import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Formulario  from '../components/Formulario'
import Encuesta from '../components/Encuesta'

import { Navbar } from '../components/Navbar'


export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/encuestas" component={ Encuesta } />
                <Route exact path="/formulario" component={ Formulario } />
                <Redirect to="/formulario" />    
            </Switch>
        </>
    )
}
