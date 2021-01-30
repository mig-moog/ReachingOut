import React from 'react';
import insta from './insta3.jpg'
class Contacts extends React.Component{
    render(){
        return(
            <div>
                <a target="_blank" href='https://www.instagram.com/reachingoutlaptops/?hl=en'>Follow us on Instagram!</a>
                <img id='instalogo' alt='instagram profile' src={insta}></img>
                <br />
                <br />
                <br />
                <h3>If you have any questions please email: reachoutlaptops@gmail.com</h3>
            </div>
        );
    }
}
export default Contacts;