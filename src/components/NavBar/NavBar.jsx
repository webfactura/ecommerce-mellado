import React from 'react'
import './NavBar.css';
import logo from './logo_ecommerce.png';
import CartWidget from '../CartWidget';

function NavBar(props) {
    return (
        /*<div>
            <img className="logo" src={logo} alt=""/>
            <ul className="nav">
                <a href="#">Poleras</a>
                <a href="#">Camisas</a>
                <a href="#">Polerones</a>
            </ul>
        </div>*/
        
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <div className="container-fluid">
                
                {/* Left links  */}
                <a className="navbar-brand" href="#">
                    

                <img
          src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
          height="25"
          alt="MDB Logo"
          loading="lazy"
        />

                </a>
                <button
                className="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <i className="fas fa-bars"></i>
                </button>

                {/* Center links  */}
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                       
                        <li className="nav-item">
                            <a className="nav-link" href="#">Poleras</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Polerones</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" >Camisas</a>
                        </li>
                    </ul>
                </div>

                {/* Right links  */}               
                <div class="d-flex align-items-center">
                    <CartWidget />
                </div>

            </div>
        </nav>
        
    )
}

export default NavBar;