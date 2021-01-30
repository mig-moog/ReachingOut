import React from 'react';
import pfp from './pfp.png';
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
                    <img className="right-pfp" src={pfp} alt="alex-face" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Amet aliquam id diam maecenas ultricies. Mattis nunc sed blandit libero volutpat.</p>
                </div>
                
                <div className="left-bio">
                    <img className="pfp" src={pfp} alt="matthew-face" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Amet aliquam id diam maecenas ultricies. Mattis nunc sed blandit libero volutpat.</p>
                </div>
            </div>
        );
    }
}