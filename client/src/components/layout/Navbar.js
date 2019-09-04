import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../img/MLPB.jpg";
import "../../App.css";

class Navbar extends Component {
    render() {
        return (
            <div className="navbar-fixed">
                <nav className="z-depth-0">
                    <div className="nav-wrapper">
                        <Link
                            to="/"

                            className="col s5 brand-logo center black-text"
                        >
                            <img src={logo} alt="logo" />
                            <i className="material-icons"></i>

                        </Link>
                    </div>
                </nav>
            </div>
        );
    }
}
export default Navbar;