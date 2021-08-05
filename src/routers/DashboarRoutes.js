import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Formulario  from '../components/Formulario'
import Encuesta from '../components/Encuesta'

import { Navbar } from '../components/Navbar'
import { EncuestaScreen } from '../components/EncuestaScreen'


export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/encuestas" component={ Encuesta } />
                <Route exact path="/encuestas/:encuestaId" component={ EncuestaScreen } />
                <Route exact path="/formulario" component={ Formulario } />
                <Redirect to="/formulario" />    
            </Switch>
        </>
    )
}
