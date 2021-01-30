import React from 'react'
import {Link} from "react-router-dom"
export default class NavBar extends React.Component {
    render() {
        return (
            <nav>
                <img alt="Logo"/>
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
            </ul>
            </nav>
            )
    }
}