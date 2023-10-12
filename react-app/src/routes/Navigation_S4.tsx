import { BrowserRouter, Navigate } from "react-router-dom"
import { Routes, Route, NavLink } from "react-router-dom"

import logo  from '../logo.svg'

import { routes } from './routes'
import { Suspense } from "react"

export const Navigation_S4 = () => {
    console.log(routes);
  return (
    <Suspense fallback={ <span>Loading...</span> }>
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo" />

                    <ul>
                        {
                            routes.map( rt => (
                                <li key={rt.to}>                                
                                    <NavLink 
                                        to={ rt.to } 
                                        className={ ({ isActive }) => isActive ? 'nav-active' : '' }
                                    >
                                        { rt.name }
                                    </NavLink>    
                                </li>
                                
                            ) )
                        }                    
                    </ul>
                </nav>


                <Routes>
                    {
                        routes.map( (rt, index) => (
                            <Route 
                                path={ rt.path } 
                                element={ <rt.Component/> }
                                key={ rt.to }
                            />
                        ))
                    }
                    <Route path="/*" element={ <Navigate to="/lazyload" replace/> }/>
                </Routes>

            </div>
        </BrowserRouter>        
    </Suspense>
    
  )
}
