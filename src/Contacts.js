import React from 'react';
import insta from './insta3.jpg'
import gmail from './gmail.png'
class Contacts extends React.Component{
    render(){
        return(
            <div id='contacts'>
                <h1>How to reach us</h1>
                <a id='instatext' target="_blank" rel='noreferrer' href='https://www.instagram.com/reachingoutlaptops/?hl=en'>Click here to follow us on Instagram!</a>
                <br />
                <img id='instalogo' alt='instagram profile' src={insta}></img>
                <h3>Or use our username: reachingoutlaptops</h3>
                <br />
                <br />
                <br />
                <h3>If you have any questions please email: reachoutlaptops@gmail.com</h3>
                <img id='gmail_logo' alt='gmail' src={gmail}></img>
            </div>
        );
    }
}
export default Contacts;