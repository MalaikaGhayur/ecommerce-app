import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand mx-3 " to="/">
                    <span id='logo'>SHOPVILLA</span>
                </Link>
                <button
                    className="navbar-toggler navbar-toggler-small"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active mx-3" aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active mx-3" aria-current="page" to="/product">
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active mx-3" aria-current="page" to="/about">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active mx-3" aria-current="page" to="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Navigation;
