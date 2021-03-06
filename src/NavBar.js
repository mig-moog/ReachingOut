import React from 'react';
import logo from "./ROlogo.png";
import { Link } from "react-router-dom";

export default class NavBar extends React.Component {
    render() {
        return (
            <nav>
                <img src={logo} alt="Logo" />
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/contacts'>Contacts</Link>
                    </li>
                    <li>
                        <Link to='/partners'>Partners</Link>
                    </li>
                    <li>
                        <Link to='/future'>Plans for the Future</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}