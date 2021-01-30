import React from 'react';
import insta from './insta.png'
class Contacts extends React.Component{
    render(){
        return(
            <div>
                <h2>Follow us on Instagram!</h2>
                <img alt='instagram profile' src={insta}></img>
                <h3>If you have any questions please email: reachoutlaptops@gmail.com</h3>
            </div>
        );
    }
}
export default Contacts;