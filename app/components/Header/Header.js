import React from 'react';
import './Header.css'

import { Route, Link } from 'react-router-dom';

function Header(props) {
    return (
      <div>
        <section className="Header">
          <nav className="Nav">
            <ul className="NavLink">
              <Link to="/">Home</Link><Link to="/Search/Brewery">Search</Link>
            </ul>
          </nav>
            <h1>Find the Brewery of your dreams!</h1>
            <hr></hr>
        </section>
    </div>
    );
}

export default Header;
