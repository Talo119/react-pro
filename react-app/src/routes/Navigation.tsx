import {
    BrowserRouter as Router,    
    Route,
    NavLink,
    Routes
  } from 'react-router-dom';
  
  import logo from '../logo.svg';
import { ShoppingPage } from '../02-components-patterns/pages/ShoppingPage';
  
  export const Navigation = () => {
    return (
      <Router>
        <div className="main-layout">
          <nav>
              <img src={ logo } alt="React Logo" />
            <ul>
              <li>
                <NavLink to="/" className="nav-active" >Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" className="nav-active" >About</NavLink>
              </li>
              <li>
                <NavLink to="/users" className="nav-active" >Users</NavLink>
              </li>
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/about"/>
            <Route path="/users" />
            <Route path="/" element={<ShoppingPage/>} />
          </Routes>
        </div>
      </Router>
    );
  }