import React from 'react';
import pfp from './pfp.png';
import pfpAlex from "./alex.png";
import './About.css';

export default class About extends React.Component {
    render() {
        return (
            <div>
                <h1 id="who">Who are we?</h1>

                <div className="left-bio">
                    <img className="pfp" src={pfp} alt="jeremy-face" />
                    <p>Jeremy Gordon is a game and web developer who does work under the pseudonym <a href="//twitter.com/mig_moog">Mig Moog</a>. You can find his other work on his <a href="//github.com/mig-moog">GitHub</a></p>
                </div>
                
                <div className="right-bio">
                    <img className="right-pfp" src={pfpAlex} alt="alex-face" />
                    <p>Alexander Wiegand is a web and python developer who runs a <a href="//alexwiegand.com">coding blog</a>.</p>
                </div>
            </div>
        );
    }
}