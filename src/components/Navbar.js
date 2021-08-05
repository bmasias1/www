import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

export const Navbar = () => {

    return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark"> 
                <Container>
                <Link 
                    className="navbar-brand" 
                    to="/"
                >
                    APP
                </Link>

                <div className="navbar-collapse">
                    <div className="navbar-nav">

                        <NavLink 
                            activeClassName="active"
                            className="nav-item nav-link" 
                            exact
                            to="/formulario"
                        >
                            Formulario
                        </NavLink>

                        <NavLink 
                            activeClassName="active"
                            className="nav-item nav-link" 
                            exact
                            to="/encuestas"
                        >
                            Encuestas
                        </NavLink>

                    </div>
                </div>
                </Container>
            </nav>
    )
}
